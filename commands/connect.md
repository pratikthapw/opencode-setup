---
description:
	Find unexpected bridges between two domains using vault graph analysis
agent: explore
---

Connect — Find Unexpected Bridges Between Domains

Take two separate projects, topics, or domains and use the vault graph to find
non-obvious connections between them.

Usage: `/connect [domain A] [domain B]`

Examples:

- `/connect design engineering`
- `/connect software fashion architecture`

Vault: dimag_kharab

Step 1: Map Each Domain

For each provided domain, build a full neighborhood map:

Obsidian vault="dimag_kharab" search query="<domain A>" Obsidian
vault="dimag_kharab" search:context query="<domain A>" Obsidian
vault="dimag_kharab" backlinks file="<main note for domain A>" Obsidian
vault="dimag_kharab" links file="<main note for domain A>" Obsidian
vault="dimag_kharab" tags file="<main note for domain A>"

Repeat for domain B.

Follow backlinks 2-3 hops from each domain hub and gather:

- Notes
- People
- Concepts
- Themes

Depth Asymmetry Handling

If one domain is much denser than the other (for example, 50 notes vs. 10):

- Prioritize bridge discovery from the smaller domain
- Follow 3-4 hops for the thinner domain instead of 2-3
- Treat sparse-domain links as high-value signals

Step 2: Find the Overlaps

Compare both domain neighborhoods and identify:

Shared References

- Notes appearing in both backlink chains

Shared People

- People present in both domains, and their role in each

Shared Themes

- Concepts/values/questions present in both domains without explicit linkage

Obsidian vault="dimag_kharab" search:context query="<theme from domain A>"

Shared Patterns

- Structural similarities (same problem class, same growth direction, same stuck
  question)

Shared Tags

Obsidian vault="dimag_kharab" tags file="<notes in domain A>" Obsidian
vault="dimag_kharab" tags file="<notes in domain B>"

Step 3: Trace the Bridges

For each candidate connection:

Obsidian vault="dimag_kharab" backlinks file="<bridging note>" Obsidian
vault="dimag_kharab" links file="<bridging note>"

Determine depth:

- Surface: lexical overlap only
- Structural: same underlying pattern
- Foundational: shared core assumptions or worldview

Path-Finding

For strongest bridges, trace shortest graph paths between domain hubs and
inspect intermediary notes:

Obsidian vault="dimag_kharab" backlinks file="<intermediary note>" Obsidian
vault="dimag_kharab" links file="<intermediary note>"

Intermediary notes often carry the deepest insight because they sit between two
worlds.

Temporal Analysis

Sort bridges by creation or last-modified time to infer direction:

- Converging: recent links increasing
- Diverging: mostly old links, few recent updates
- Stable: persistent link density over time

Interpretation:

- Converging -> integration is already happening; amplify it
- Diverging -> investigate whether separation is intentional or drift
- Stable -> likely deep structural connection

Step 4: Synthesize

Connection Map

For each bridge:

Bridge [#]: [Title]

In Domain A: [How it appears] In Domain B: [How it appears differently] The
connection: [What links them and why it matters] Depth: Surface / Structural /
Foundational Implication: [What this suggests for either domain]

The Strongest Bridge

Identify the single most valuable connection that reframes both domains.

Missing Links

Identify connections that should exist but do not. Suggest specific notes to
link or create.

The Question This Raises

Surface one new question that becomes visible only after connecting the domains.

Output Format

CONNECT: [Domain A] <-> [Domain B] Notes in A's neighborhood: [number] Notes in
B's neighborhood: [number] Bridges found: [number] Trend: [Converging /
Diverging / Stable]

[Connection map]

[Strongest bridge]

[Missing links]

[The question]

Output Guidelines

- Optimize for non-obvious bridges, not obvious overlap
- Cite specific notes and dates for each major claim
- Prioritize insights that change how both domains are understood
- Do not force a connection when evidence is weak
- If no meaningful bridge exists, state that clearly

Final line:

"Connection map complete. Which bridge should we explore further?"
