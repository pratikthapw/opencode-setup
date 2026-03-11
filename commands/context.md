---
description:
  Build comprehensive context about the user from their Obsidian vault
agent: explore
---

Context Loading Your job is to build comprehensive context about the user before
beginning any work. Read thoroughly and follow backlinks.

Vault: dimag_kharab

Step 1: Core Context Files Use the Obsidian CLI to read all context files. Try
these files (if they don't exist, skip gracefully):

Obsidian vault="dimag_kharab" read file="README" # Vault overview (may not
exist) Obsidian vault="dimag_kharab" read file="index" # Alternative vault index
Obsidian vault="dimag_kharab" read file="I N BOX" # Inbox/quick captures

Step 2: Explore Project Directory Use the Obsidian CLI to list and understand
the contents of key folders:

Obsidian vault="dimag_kharab" files folder="project-2026" # Active projects
Obsidian vault="dimag_kharab" files folder="engineering-recipe" # Technical
learnings Obsidian vault="dimag_kharab" files folder="daily-notes" # Daily notes

Step 3: Follow Backlinks As you read each file, use the Obsidian CLI to follow
backlinks and discover connections:

Obsidian vault="dimag_kharab" backlinks file="<note name>" # Find what links TO
a note Obsidian vault="dimag_kharab" links file="<note name>" # Find outgoing
links FROM a note Obsidian vault="dimag_kharab" read file="<linked note>" # Read
linked notes

Continue following backlinks recursively until you have read all connected
documents.

Step 4: Recent Daily Notes Use the Obsidian CLI to read the most recent daily
notes (last 5-7 days):

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # for each
past day

Understand:

- What the user has been working on
- What they've been thinking about
- Current priorities and blockers
- Recent decisions and shifts

Step 4b: Recent Learnings Use the Obsidian CLI to find and read recent learning
notes:

Obsidian vault="dimag_kharab" search query="Weekly Learnings" limit=5 Obsidian
vault="dimag_kharab" search query="learnings" limit=5

Step 4c: Vault Structure & Hidden Connections Use the Obsidian CLI to explore
the vault's structure and surface things that aren't visible from reading
individual files:

Obsidian vault="dimag_kharab" orphans # Notes nothing links to Obsidian
vault="dimag_kharab" deadends # Notes with no outgoing links Obsidian
vault="dimag_kharab" unresolved # Unresolved wikilinks Obsidian
vault="dimag_kharab" tags sort=count counts # Theme distribution

Use this to understand:

- Which areas of thinking are well-connected vs. isolated
- What ideas have been started but not developed (orphans)
- What the user keeps referencing but hasn't formalized (unresolved links)
- Where attention is concentrated vs. sparse (tag distribution)

Include notable findings in the synthesis.

Step 5: Synthesis Once you have read everything, provide a brief synthesis:

Current priorities - What matters most right now Active projects - What's in
motion Open questions - What's unresolved Recent shifts - What's changed in
thinking or approach

Then say: "Context loaded. What would you like to work on?"

Notes If a specific domain is passed as an argument (e.g., /context rust),
prioritize that domain's files but still read the core context Pay attention to
confidence markers: [solid], [evolving], [hypothesis], [questioning] The goal is
maximum context so the agent can work effectively without asking basic questions
