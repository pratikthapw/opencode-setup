import { readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const CLIENT_ID = "1071006060591-tmhssin2h21lcre235vtolojh4g403ep.apps.googleusercontent.com";
const CLOUD_CODE_BASE = "https://cloudcode-pa.googleapis.com";
const USER_AGENT = "antigravity/windows/amd64";
const FALLBACK_PROJECT_ID = "bamboo-precept-lgxtn";

function loadEnv() {
    // Look for .env.local next to this script, then in the repo root (one level up)
    const scriptDir = dirname(fileURLToPath(import.meta.url));
    const candidates = [
        join(scriptDir, ".env.local"),
        join(scriptDir, "..", ".env.local"),
    ];
    for (const envPath of candidates) {
        if (!existsSync(envPath)) continue;
        const lines = readFileSync(envPath, "utf8").split("\n");
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) continue;
            const eqIdx = trimmed.indexOf("=");
            if (eqIdx === -1) continue;
            const key = trimmed.slice(0, eqIdx).trim();
            let value = trimmed.slice(eqIdx + 1).trim();
            // Strip surrounding quotes
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            process.env[key] = value;
        }
        break;
    }
}

loadEnv();

const CLIENT_SECRET = process.env.PUBLIC_CLIENT_SECRET;
if (!CLIENT_SECRET) {
    console.error("Error: PUBLIC_CLIENT_SECRET not found. Create a .env.local file with PUBLIC_CLIENT_SECRET=<value>");
    process.exit(1);
}

function getDefaultAccountsPath() {
    if (process.platform === "win32") {
        const appData = process.env.APPDATA || join(homedir(), "AppData", "Roaming");
        return join(appData, "opencode", "antigravity-accounts.json");
    }
    const xdgConfig = process.env.XDG_CONFIG_HOME || join(homedir(), ".config");
    return join(xdgConfig, "opencode", "antigravity-accounts.json");
}

function parseArgs() {
    const args = process.argv.slice(2);
    let path = getDefaultAccountsPath();
    let accountIndex = null;
    for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (arg === "--path" && args[i + 1]) {
            path = args[i + 1];
            i += 1;
            continue;
        }
        if (arg === "--account" && args[i + 1]) {
            const parsed = Number.parseInt(args[i + 1], 10);
            if (!Number.isNaN(parsed)) {
                accountIndex = parsed - 1;
            }
            i += 1;
        }
    }
    return { path, accountIndex };
}

async function postJson(url, token, body, extraHeaders = {}) {
    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "User-Agent": USER_AGENT,
            ...extraHeaders,
        },
        body: JSON.stringify(body),
    });
}

async function refreshAccessToken(refreshToken) {
    const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        }),
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Token refresh failed (${response.status}): ${text.slice(0, 200)}`);
    }

    const payload = await response.json();
    return payload.access_token;
}

async function loadProjectId(accessToken) {
    const body = { metadata: { ideType: "ANTIGRAVITY" } };
    const response = await postJson(`${CLOUD_CODE_BASE}/v1internal:loadCodeAssist`, accessToken, body);
    if (!response.ok) {
        return "";
    }
    const payload = await response.json();
    if (typeof payload.cloudaicompanionProject === "string") {
        return payload.cloudaicompanionProject;
    }
    if (payload.cloudaicompanionProject && typeof payload.cloudaicompanionProject.id === "string") {
        return payload.cloudaicompanionProject.id;
    }
    return "";
}

function isRelevantModel(modelName) {
    const lower = modelName.toLowerCase();
    // Skip internal/preview models
    if (lower.startsWith("tab_")) return false;
    if (lower.startsWith("chat_")) return false;
    // Skip old Gemini 2.5 models
    if (lower.includes("gemini-2.5")) return false;
    if (lower.includes("gemini-2")) return false;
    return true;
}

function formatModelName(modelName) {
    const lower = modelName.toLowerCase();
    // Claude models
    if (lower.includes("claude") && lower.includes("opus")) return "Claude Opus (Thinking)";
    if (lower.includes("claude") && lower.includes("sonnet")) return "Claude Sonnet (Thinking)";
    if (lower.includes("claude")) return `Claude (${modelName})`;
    // Gemini 3 Flash variants
    if (lower.includes("gemini-3") && (lower.includes("flash-lite") || lower.includes("flash_lite"))) return "Gemini 3 Flash Lite";
    if (lower.includes("gemini-3") && lower.includes("flash")) return "Gemini 3 Flash";
    // Gemini 3 Pro
    if (lower.includes("gemini-3") && lower.includes("pro")) return "Gemini 3.1 Pro";
    if (lower.includes("gemini")) return `Gemini (${modelName})`;
    // GPT-OSS
    if (lower.includes("gpt-oss") || lower.includes("gpt_oss")) return "GPT-OSS 120B";
    if (lower.includes("gpt")) return `GPT (${modelName})`;
    // Fallback
    return modelName;
}

function formatDuration(targetTime) {
    const delta = targetTime - Date.now();
    if (delta <= 0) return "now";
    const totalSeconds = Math.round(delta / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}

function printModel(label, remainingFraction, resetTime) {
    const remaining = typeof remainingFraction === "number" ? Math.round(remainingFraction * 100) : null;
    const status = remaining === null ? "UNKNOWN" : remaining <= 0 ? "LIMITED" : "OK";
    const details = [];
    if (remaining !== null) details.push(`remaining ${remaining}%`);
    if (resetTime) {
        const ts = Date.parse(resetTime);
        if (Number.isFinite(ts)) {
            details.push(`resets in ${formatDuration(ts)}`);
        }
    }
    const suffix = details.length ? ` (${details.join(", ")})` : "";
    console.log(`   ${label}: ${status}${suffix}`);
}

async function run() {
    const { path, accountIndex } = parseArgs();
    const payload = JSON.parse(readFileSync(path, "utf8"));
    const accounts = payload.accounts || [];

    if (accounts.length === 0) {
        console.log("No accounts found.");
        return;
    }

    const selected = accountIndex === null
        ? accounts.map((account, index) => ({ account, index }))
        : accounts
            .map((account, index) => ({ account, index }))
            .filter((item) => item.index === accountIndex);

    for (const { account, index } of selected) {
        const label = account.email || `Account ${index + 1}`;
        const disabled = account.enabled === false ? " (disabled)" : "";
        console.log(`\n${index + 1}. ${label}${disabled}`);

        try {
            const accessToken = await refreshAccessToken(account.refreshToken);
            let projectId = await loadProjectId(accessToken);
            if (!projectId) {
                projectId = account.managedProjectId || account.projectId || FALLBACK_PROJECT_ID;
            }
            console.log(`   project: ${projectId}`);

            const body = projectId ? { project: projectId } : {};
            const response = await postJson(
                `${CLOUD_CODE_BASE}/v1internal:fetchAvailableModels`,
                accessToken,
                body,
            );
            console.log(`   fetchAvailableModels: ${response.status}`);

            if (!response.ok) {
                const text = await response.text().catch(() => "");
                console.log(`   error: ${text.trim().slice(0, 200)}`);
                continue;
            }

            const data = await response.json();
            const models = data.models || {};

            // Collect per-model quota, dedup by display name (keep worst remaining)
            const seen = new Map();
            for (const [modelName, info] of Object.entries(models)) {
                if (!isRelevantModel(modelName)) continue;
                if (!info || !info.quotaInfo) continue;
                const displayName = formatModelName(modelName);
                const remaining = info.quotaInfo.remainingFraction ?? 0;
                const resetTime = info.quotaInfo.resetTime || null;

                if (!seen.has(displayName)) {
                    seen.set(displayName, { remaining, resetTime, raw: modelName });
                } else {
                    const prev = seen.get(displayName);
                    // If same display name appears twice with different reset times,
                    // they are separate quota tiers — show them individually
                    const prevReset = prev.resetTime ? Date.parse(prev.resetTime) : 0;
                    const curReset = resetTime ? Date.parse(resetTime) : 0;
                    const resetDiff = Math.abs(prevReset - curReset);
                    if (resetDiff > 3600_000) {
                        // >1h difference = separate tier, use raw name to disambiguate
                        const tierLabel = modelName.includes("High") || modelName.includes("high")
                            ? `${displayName} (High)`
                            : modelName.includes("Low") || modelName.includes("low")
                                ? `${displayName} (Low)`
                                : `${displayName} (${modelName})`;
                        seen.set(tierLabel, { remaining, resetTime, raw: modelName });
                        // Rename the previous entry too if it wasn't already renamed
                        if (seen.has(displayName)) {
                            const prevEntry = seen.get(displayName);
                            const prevTier = prevEntry.raw.includes("High") || prevEntry.raw.includes("high")
                                ? `${displayName} (High)`
                                : prevEntry.raw.includes("Low") || prevEntry.raw.includes("low")
                                    ? `${displayName} (Low)`
                                    : `${displayName} (${prevEntry.raw})`;
                            seen.delete(displayName);
                            seen.set(prevTier, prevEntry);
                        }
                    } else {
                        // Same tier, keep worse remaining
                        if (remaining < prev.remaining) {
                            prev.remaining = remaining;
                        }
                    }
                }
            }

            for (const [displayName, entry] of seen) {
                printModel(displayName, entry.remaining, entry.resetTime);
            }
        } catch (error) {
            console.log(`   error: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
}

run().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});