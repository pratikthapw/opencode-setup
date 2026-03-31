---
description:
	Graduate high-potential ideas from recent daily notes into standalone notes that compound through backlinks
agent: explore
---

Graduate: Daily Note Idea Extractor

Purpose

Ideas, insights, and original thinking accumulate in daily notes but rarely
graduate into standalone notes where they can compound through backlinks. This
command scans recent daily notes, surfaces the best candidates, and helps you
decide what to promote.

Usage: `/graduate`

Vault: dimag_kharab

Safety Rule

- Always ask for explicit confirmation before creating or modifying any files

Step 1: Scan Recent Daily Notes

Read the past 14 days of daily notes:

Obsidian daily:read

Then read each day individually for the past 14 days:

Obsidian read file="YYYY-MM-DD"

For each daily note, extract candidates for graduation.

Explicit signals:

- `#idea` tags
- `#expand` tags
- Language like: "I should write about", "worth investigating", "need to
  explore", "this is important"
- Named concepts (capitalized or in quotes, for example "Context Architecture",
  "software will become fashion")
- Unresolved `[[links]]` to notes that do not exist yet but represent real ideas

Implicit signals:

- Paragraphs where energy is clearly high (longer passages, exclamation points,
  strong language)
- Original claims or frameworks (position-taking, not just event logging)
- Recurring themes that appear 3+ times across different days
- Questions that keep getting asked but never get their own note

What NOT to extract:

- Tasks and to-dos
- Meeting logistics or scheduling notes
- Complaints or venting without an underlying insight
- Things that already have their own substantial standalone note

Step 2: Cross-reference With Existing Vault

For each candidate, check if it already exists:

Obsidian search query="<candidate concept>" Obsidian backlinks
file="<candidate if it exists>"

Categorize each candidate:

- New concept: no note exists and no substantial coverage elsewhere
- Underdeveloped: note exists but is thin (title or a few lines)
- Already covered: substantial note exists
- Recurring unresolved: unresolved `[[link]]` appears multiple times

Step 3: Present Candidates

Present candidates in a priority-ordered table (recurring and high-energy ideas
first):

| #   | Idea / Concept | Source         | Days Mentioned | Status               | Recommendation         |
| --- | -------------- | -------------- | -------------- | -------------------- | ---------------------- |
| 1   | ...            | Feb 17, Feb 18 | 2              | Recurring unresolved | Create standalone note |
| 2   | ...            | Feb 14         | 1              | New concept          | Create standalone note |
| 3   | ...            | Feb 6, Feb 12  | 2              | Underdeveloped       | Enrich existing note   |

For each candidate, include:

- 1-2 sentence summary of the idea as expressed in daily notes
- Exact quote(s) from the daily notes
- Existing vault connections (backlinks and related notes)

After presenting the table, ask which candidate numbers to graduate. Do not edit
files yet.

Step 4: Graduate Selected Ideas (Only After User Approval)

If creating a new standalone note:

- Create the note in vault root (unless user specifies a folder)
- Write a concise mini-essay/working note (3-8 paragraphs) that captures:
  - Core claim or question
  - Context from originating daily note(s)
  - Connections to other vault notes via `[[backlinks]]`
  - Open questions or next steps
- Preserve first-person voice and original energy from daily entries
- Add backlinks from new note to related notes
- Update source daily note(s): replace bare references with `[[links]]` to the
  new note

If enriching an existing note:

- Read the existing note first
- Add new material from daily notes under a date header
- Add newly discovered backlinks
- Update source daily note(s) with proper `[[links]]`

If connecting to an MOC:

- Read the relevant MOC
- Add the idea to the appropriate section
- Ensure backlinks exist in both directions

Step 5: Summary

After graduating selected ideas, output:

Graduated Today

- Notes created or enriched, with links

Still in the Queue

- Surfaced ideas not graduated this run
- Flag these for extra attention if they appear again next run

Vault Health

- Total ideas found in scan period
- Number graduated vs skipped
- Number of `#idea` tags found vs untagged ideas found
- Recurring themes that keep appearing but remain ungraduated

Guidelines

- Keep graduated notes concise (3-8 paragraphs)
- Preserve original voice and energy; do not sanitize thinking
- When in doubt, surface candidates and let the user decide
- Target runtime: 5-10 minutes per run
- First run may surface backlog; subsequent runs should be faster

Final line:

"Graduate scan complete. Share candidate numbers to graduate, and I will ask for
final confirmation before editing files."
