import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const CLIENT_ID = "app_EMoamEEZ73f0CkXaXp7hrann";
const AUTH_URL = "https://auth.openai.com/oauth/token";
const CHATGPT_BASE = "https://chatgpt.com/backend-api";
const USER_AGENT = "codex_cli_rs/0.117.0";

function getDefaultAccountsPath() {
    if (process.platform === "win32") {
        const appData = process.env.APPDATA || join(homedir(), "AppData", "Roaming");
        return join(appData, "opencode", "codex-accounts.json");
    }
    const xdgConfig = process.env.XDG_CONFIG_HOME || join(homedir(), ".config");
    return join(xdgConfig, "opencode", "codex-accounts.json");
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

async function refreshAccessToken(refreshToken) {
    const response = await fetch(AUTH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        }),
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Token refresh failed (${response.status}): ${text.slice(0, 200)}`);
    }

    const payload = await response.json();
    return payload.access_token;
}

async function fetchUsage(accessToken, accountId) {
    const response = await fetch(`${CHATGPT_BASE}/codex/usage`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "ChatGPT-Account-ID": accountId,
            "Content-Type": "application/json",
            originator: "codex_cli_rs",
            "User-Agent": USER_AGENT,
        },
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Usage fetch failed (${response.status}): ${text.slice(0, 200)}`);
    }

    return response.json();
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

function formatWindowDuration(seconds) {
    if (!seconds) return "";
    const hours = Math.round(seconds / 3600);
    if (hours >= 24) {
        const days = Math.round(hours / 24);
        return days === 7 ? "Weekly" : `${days}d`;
    }
    return `${hours}h`;
}

function printWindow(label, window) {
    if (!window) return;
    const usedPct = typeof window.used_percent === "number" ? Math.round(window.used_percent) : null;
    const remainPct = usedPct !== null ? 100 - usedPct : null;
    const status = remainPct === null ? "UNKNOWN" : remainPct <= 0 ? "LIMITED" : "OK";

    const details = [];
    if (remainPct !== null) details.push(`remaining ${remainPct}%`);
    if (window.reset_at) {
        const resetMs = window.reset_at * 1000;
        details.push(`resets in ${formatDuration(resetMs)}`);
    } else if (window.reset_after_seconds) {
        const resetMs = Date.now() + window.reset_after_seconds * 1000;
        details.push(`resets in ${formatDuration(resetMs)}`);
    }
    const suffix = details.length ? ` (${details.join(", ")})` : "";
    console.log(`   ${label}: ${status}${suffix}`);
}

function printRateLimit(rateLimit) {
    if (!rateLimit) {
        console.log("   No rate limit data");
        return;
    }

    if (rateLimit.limit_reached) {
        console.log("   Status: LIMIT REACHED");
    } else if (rateLimit.allowed === false) {
        console.log("   Status: NOT ALLOWED");
    }

    const primaryLabel = formatWindowDuration(rateLimit.primary_window?.limit_window_seconds) || "Primary";
    const secondaryLabel = formatWindowDuration(rateLimit.secondary_window?.limit_window_seconds) || "Secondary";

    printWindow(primaryLabel, rateLimit.primary_window);
    printWindow(secondaryLabel, rateLimit.secondary_window);
}

async function run() {
    const { path, accountIndex } = parseArgs();
    const payload = JSON.parse(readFileSync(path, "utf8"));
    const accounts = payload.openai?.accounts || [];

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
        const plan = account.plan ? ` [${account.plan}]` : "";
        console.log(`\n${index + 1}. ${label}${plan}${disabled}`);

        if (account.enabled === false) continue;

        try {
            const accessToken = await refreshAccessToken(account.refresh);

            const data = await fetchUsage(accessToken, account.accountId);
            console.log(`   plan: ${data.plan_type || "unknown"}`);

            printRateLimit(data.rate_limit);

            // Code review rate limit
            if (data.code_review_rate_limit?.primary_window || data.code_review_rate_limit?.secondary_window) {
                console.log(`   --- code review ---`);
                printRateLimit(data.code_review_rate_limit);
            }

            // Additional rate limits (e.g. codex_other)
            if (data.additional_rate_limits?.length) {
                for (const additional of data.additional_rate_limits) {
                    const name = additional.limit_name || additional.metered_feature || "other";
                    console.log(`   --- ${name} ---`);
                    printRateLimit(additional.rate_limit);
                }
            }

            // Credits
            if (data.credits) {
                const c = data.credits;
                if (c.unlimited) {
                    console.log(`   Credits: unlimited`);
                } else if (c.has_credits && c.balance) {
                    console.log(`   Credits: ${c.balance}`);
                } else if (c.has_credits) {
                    console.log(`   Credits: available`);
                } else {
                    console.log(`   Credits: none`);
                }
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
