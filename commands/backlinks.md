---
description:
	Improve vault graph traversability by identifying and wiring high-value backlinks with scored recommendations
agent: explore
---

Backlinks — Wire the Graph

Treat the vault as context infrastructure for augmented cognition. Missing links
are capability gaps. High-quality connections compound across future commands.

Boundary:

- Connect notes
- Do not rewrite human thinking
- Flag empty hubs
- Do not fill empty hubs

Usage: `/backlinks` or `/backlinks [cluster]`

If a cluster is provided (example: `/backlinks defense-tech`), skip full broad
scan and focus Phases 3-4 on that cluster and nearest neighbors.

Vault: dimag_kharab

Phase 1: Structural Inventory

Graph-only and fast. No deep content reads.

Obsidian vault="dimag_kharab" orphans Obsidian vault="dimag_kharab" deadends
Obsidian vault="dimag_kharab" unresolved Obsidian vault="dimag_kharab" tags
sort=count counts

Get links/backlinks for top 15-20 hub notes:

Obsidian vault="dimag_kharab" backlinks file="<Hub Note A>" Obsidian
vault="dimag_kharab" backlinks file="<Hub Note B>" Obsidian vault="dimag_kharab"
links file="<Hub Note A>" Obsidian vault="dimag_kharab" links
file="<Hub Note B>"

Also inspect notes that appear as frequent backlink targets and sketch a rough
cluster map.

Count vault size:

Obsidian vault="dimag_kharab" files

Phase 2: Priority Context

Read 5-6 context files for a priority filter:

Obsidian vault="dimag_kharab" read file="<Context File A>" Obsidian
vault="dimag_kharab" read file="<Context File B>" Obsidian vault="dimag_kharab"
read file="<Context File C>"

Read recent daily notes (past 7 days):

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # past 7 days

Extract:

- Current priorities and active projects
- Open questions and active thinking threads
- People and concepts receiving current attention

Use this extraction as the Phase 6 priority-alignment filter.

Phase 3: Orphan Rescue Scan

Filter orphans from Phase 1. Skip non-note files:

- Images: `.heic`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- Media: `.mov`, `.mp4`, `.wav`, `.mp3`
- Fonts, canvases, templates
- Any file that is not `.md`

Decision tree for remaining orphans:

- Title matches current priorities or hub backlink chain:
  - Read title + first 20 lines
- Title contains question mark:
  - Read title + first 20 lines
- Otherwise:
  - Read title only and flag semantic relation to active clusters

For each meaningful orphan, find nearest cluster neighbor:

Obsidian vault="dimag_kharab" search:context query="<key concept from orphan>"

Explicit cap:

- Do not read more than 100 notes total across all phases
- Prioritize titles most likely relevant to active priorities

Phase 4: Cluster Bridge Analysis

For each pair among top 5-6 clusters with no existing links, search for shared
themes:

Obsidian vault="dimag_kharab" search:context query="<theme from Cluster A>"

Read potential intermediary bridge notes.

Apply vocabulary-variant discovery:

- Try 2-3 synonyms/phrasing variants per concept to account for naming drift

Phase 5: Unresolved Link Triage

From unresolved links in Phase 1:

- 3+ references:
  - Recommend creating a stub note
- 2 references:
  - Check near-duplicates/name variants of existing notes
- 1 reference:
  - Skip unless critical to active priorities

Before recommending new stubs, verify name variants do not already resolve to
existing notes.

Phase 6: Score and Recommend

Score each candidate using multiplicative model:

- Conceptual Strength (1/3/5)
  - 1: same word, different context
  - 3: related problems/questions
  - 5: same thesis from different angles
- Structural Impact (1/3/5)
  - 1: additional link to already saturated note
  - 3: rescues valuable orphan
  - 5: bridges isolated clusters
- Priority Alignment (1/3/5)
  - 1: neither note active
  - 3: one note ties to active priority
  - 5: both notes tie to active work

Composite score:

`Conceptual x Structural x Priority` (max 125)

Tiers:

- Critical: 75+
- High: 40-74
- Medium: 15-39
- Low: <15

Quality controls:

- Minimum Conceptual Strength = 2 (if semantic mismatch, skip)
- Cap at 30 recommendations total
- Every connection must be explainable in one sentence
- Include borderline cases with lower scores rather than silently dropping

Connection taxonomy labels:

- Orphan to Hub
- Cluster Bridge
- Internal Gap
- Empty Hub (flag only)
- Semantic Twin
- Person to Concept
- Temporal Bridge
- Unresolved Worth Creating

Connection card format:

### [#]. [Type]: [Short description]

**Score:** [X] (Conceptual [N] x Structural [N] x Priority [N]) **What:**
[One-sentence description] **Edit:** Add `[[Target Note]]` to [Source Note] in
[section/location] **Why:** [One sentence on what this unlocks]

Empty Hub format:

### [#]. Empty Hub: [Note name]

**Referenced by:** [list of notes linking to it] **What this needs:** Your
thinking. [N] notes point here and find nothing.

Phase 7: Execute

Present findings by tier (Critical first), then ask user choice:

- All Critical + High (default)
- Critical only
- Pick specific ones (by number)
- None (save report only)

Execution rules after approval:

- Add `[[links]]` in semantically relevant sections, not dumped at bottom
- For stubs (`Unresolved Worth Creating`):
  - Title
  - `Related` section listing backlinks only
  - No synthesized content, no summary text
- Empty Hubs:
  - Report as flags only
  - Do not author content

Post-execution verification:

Obsidian vault="dimag_kharab" links file="<modified note>"

Post-change report format:

"Made X connections across Y notes. Z new stub notes created."

Output Format

BACKLINKS REPORT -- [Date] Vault size: [N] notes Orphans assessed: [N]
meaningful (of [N] total) Connections recommended: [N] across [N] tiers

---

## Critical ([N])

[Connection cards]

## High ([N])

[Connection cards]

## Medium ([N])

[Connection cards]

## Summary

[Biggest structural gaps and what execution unlocks]

---

Execute: All Critical+High / Critical only / Pick specific / None

Limitations

Be explicit about:

- False positives (include as lower-score options)
- Vocabulary drift (use 2-3 concept variants)
- Recency bias (old but rich orphans may still be high value)
- Graph/content tension (link density != thought quality)

Output Guidelines

- Be specific: name notes, cite evidence, specify edit locations
- Quality over quantity: 10 excellent links beats 30 weak links
- Best links should feel obviously missing in hindsight
- Do not force homonyms or shallow lexical matches
- After execution, report structural impact clearly

Final line:

"Backlinks report ready. Execute all Critical+High, Critical only, pick specific
ones, or none?"
