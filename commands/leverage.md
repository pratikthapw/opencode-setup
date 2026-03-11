---
description:
	Find the highest-leverage skills and knowledge to unlock multiple domains from vault constraints
agent: explore
---

Leverage -- Find the Breakthroughs Hiding in Plain Sight

Scan the entire vault to identify the specific skills, knowledge domains,
investigations, and mental models that, if developed, would produce
disproportionate breakthroughs across life and work.

This is not general self-improvement. This is not broad ideation. This is a
precision diagnostic for leverage points where 50-100 hours of concentrated
learning or practice creates a step-function jump across multiple stuck areas.

The vault reveals the constraints. The solutions can come from anywhere. The
vault is the diagnostic tool, not the pharmacy. Once constraints are mapped,
draw from any domain, any field, any discipline, and any body of knowledge to
identify what breaks them open.

Usage: `/leverage` (full scan) or `/leverage [domain]` (focused scan)

What Makes This Different

This is NOT:

- `/ideas` (broad idea generation)
- `/emerge` (implicit ideas not yet stated)
- `/connect` (bridges between domains)
- `/drift` (gaps between intention and behavior)
- `/money` (revenue opportunities)

This IS:

- Identifying the 3-7 things where 50-100 hours of deep work yields 10x-100x ROI
- Pinpointing multi-domain bottlenecks instead of single-project tasks
- Ranking leverage points by impact, compounding, and effort

The core test: A true leverage point unlocks progress in 3+ domains. If it helps
only one domain, it is useful but not leverage.

Phase 1: Constraint Mapping

Before searching for leverage, map actual bottlenecks.

Step 1: Structural Scan

Obsidian vault="dimag_kharab" tags sort=count counts Obsidian
vault="dimag_kharab" orphans Obsidian vault="dimag_kharab" deadends Obsidian
vault="dimag_kharab" unresolved

Step 2: Read Context Files

Read all core context notes. If a file is missing, skip gracefully.

Obsidian vault="dimag_kharab" read file="README" Obsidian vault="dimag_kharab"
read file="index" Obsidian vault="dimag_kharab" read file="I N BOX" Obsidian
vault="dimag_kharab" read file="INBOX"

For each context file, extract:

- Goals with no clear path forward
- Items marked `[questioning]` or `[evolving]`
- Stated blockers, recurring frictions, and frustrations
- Things declared important but not advancing

Step 3: Daily Notes (Past 30 Days)

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md"

Extract with precision:

- Repeated frustrations (3+ times = likely missing capability)
- Abandoned attempts and why they stalled
- Admiration signals (envy and aspiration reveal desired capabilities)
- "I wish I could..." and "I need to learn..." statements
- Energy patterns (flow signals leverage proximity, drain signals weak
  foundations)
- Requests for help (dependency points)
- Deferred decisions (decision frameworks likely missing)

Step 4: Behavioral Archaeology

Obsidian vault="dimag_kharab" search query="stuck" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="frustrated" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="can't" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="don't know how" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="need to learn" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="wish I" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="asked" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="delegated" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="waiting on" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="blocked" path="Daily Notes"

Also search for admiration and aspiration signals:

Obsidian vault="dimag_kharab" search query="impressive" path="Daily Notes"
Obsidian vault="dimag_kharab" search query="genius" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="how did" path="Daily Notes" Obsidian
vault="dimag_kharab" search:context query="want to be" Obsidian
vault="dimag_kharab" search:context query="get better at"

Step 5: Project and Domain Audit

For each active project, answer:

- What is the binding constraint right now?
- Is it a skill, relationship, decision, knowledge, or time constraint?
- If it is a skill/knowledge gap, what exactly is missing?
- How many other projects share this exact constraint?

Critical rule: Constraints shared across 3+ projects are top leverage targets.

Output of Phase 1: The Constraint Map

- Recurring Frictions
- Capability Gaps
- Dependency Points
- Decision Bottlenecks

For each item above, include: what it is, evidence, frequency, and impacted
domains.

Phase 2: Leverage Detection

Use these six methods, ordered by reliability.

Method 1: Bottleneck Convergence (Highest Reliability)

Find skills or knowledge gaps that constrain 3+ domains simultaneously.

Process:

- Start from Phase 1 constraints
- List domains touched by each constraint
- Rank by domain count
- Prioritize the most cross-domain constraint

Obsidian vault="dimag_kharab" search:context query="<constraint from domain A>"

Method 2: Adjacent Possible (High Reliability)

Find capabilities that are 80% built but missing the final 20%.

Look for:

- Informal skills never formalized
- Referenced knowledge never systematically studied
- Tools used only at surface level
- Intuitive frameworks not yet explicit/transferable

Obsidian vault="dimag_kharab" search:context query="started learning" Obsidian
vault="dimag_kharab" search:context query="basics of" Obsidian
vault="dimag_kharab" search:context query="should go deeper" Obsidian
vault="dimag_kharab" search query="tutorial" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="course" path="Daily Notes"

Method 3: Multiplier Models (High Reliability)

Find models that improve decisions across all domains.

Look for:

- Repeatedly slow or poor decisions
- Recurring mistake patterns in different contexts
- Advice repeatedly sought from others
- Thinkers/frameworks admired but not internalized

Obsidian vault="dimag_kharab" search query="book" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="read" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="framework" Obsidian vault="dimag_kharab"
search query="model" Obsidian vault="dimag_kharab" search:context
query="thinking about"

Method 4: Removal Leverage (Medium Reliability)

Identify repetitive work to automate, delegate, or eliminate so high-value
learning can happen.

Obsidian vault="dimag_kharab" search query="every day" path="Daily Notes"
Obsidian vault="dimag_kharab" search query="routine" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="always have to" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="manual" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="repetitive"

For each candidate:

- Time consumed weekly
- Could it be automated/delegated/eliminated?
- What specific high-value work would replace it?

Method 5: Relationship Leverage (Medium Reliability)

Find capabilities that increase relationship quality and network value.

Obsidian vault="dimag_kharab" search query="meeting with" path="Daily Notes"
Obsidian vault="dimag_kharab" search query="conversation with" path="Daily
Notes" Obsidian vault="dimag_kharab" search:context query="network" Obsidian
vault="dimag_kharab" search:context query="mentor" Obsidian vault="dimag_kharab"
search:context query="advisor"

Look for:

- Relationships where deeper domain knowledge upgrades conversations
- Nearby experts whose capabilities can be partially acquired
- Domains where credibility is near but not yet established
- Communities adjacent but inaccessible due to knowledge gaps

Method 6: Identity Leverage (Low Reliability, High Impact)

Use sparingly and only when reinforced by stronger methods.

Obsidian vault="dimag_kharab" search:context query="I am" Obsidian
vault="dimag_kharab" search:context query="I'm not" Obsidian
vault="dimag_kharab" search:context query="not my strength" Obsidian
vault="dimag_kharab" search:context query="someone who"

Look for:

- Self-limiting identity statements that conflict with goals
- Required capabilities being disclaimed
- Roles avoided despite trajectory demands

Phase 3: Beyond the Vault

Most powerful leverage points are often absent from the vault. Use constraints
as diagnostics, then import solutions from outside domains.

Blind Spot Analysis

From Phase 1 constraints and vault goals, identify missing disciplines that are
currently absent but likely transformative.

Consider:

- Adjacent fields
- Foundational disciplines
- Counter-intuitive transferable domains
- Historical parallels

The Outsider's Prescription

Ask what a world-class advisor would prescribe with no attachment to the current
plan.

Consider:

- What someone 10 years ahead would wish they learned sooner
- Which domain knowledge makes current goals easier or trivial
- Which assumed "good enough" meta-skills are actually ceilings
- Which technical capabilities collapse timelines

Imported Frameworks

For each Phase 1 constraint, ask: "What field has already solved this?"

- Better decisions -> decision science
- Audience growth -> direct response and distribution systems
- Energy management -> performance psychology
- Team building -> organizational design
- Creative consistency -> prolific creator workflow design

Phase 4: Verification

Run every candidate leverage point through these filters.

Filter 1: 3+ Domain Test

- Must unlock 3 or more domains

Filter 2: Evidence Test

- Vault-sourced: cite specific vault evidence of the constraint
- Beyond-vault: show clear chain from vault constraint to external solution

Filter 3: Feasibility Test

- Must be realistically developable in 50-100 focused hours

Filter 4: Counterfactual Test

- If this had been developed 6 months ago, what specifically changes?

Filter 5: Already-Tried Test

Obsidian vault="dimag_kharab" search query="<leverage point plainly stated>"
Obsidian vault="dimag_kharab" search query="<related skill/topic>" path="Daily
Notes"

- If previously attempted and abandoned, identify the blocker
- If repeatedly identified but never developed, the blocker may be the leverage
  point

Filter 6: Compound Test

- Prefer leverage that compounds over time over one-time unlocks

Phase 5: Output

The Leverage Map

Return 3-7 leverage points, each in this format:

Leverage Point [#]: [Name]

What it is: [One sentence] Source: Vault-sourced / Beyond-vault / Blind spot The
constraint it breaks: [Specific friction with vault evidence] Domains it
unlocks: [Every impacted domain and how] The counterfactual: [What changes in
the past 6 months] How to develop it: [Concrete path: first 10h, next 40h, final
50h] Compound potential: [How value increases with use] Feasibility: [Hours,
timeline, tradeoffs] Confidence: High / Medium / Low

The Ranking

Rank by:

`(domains unlocked x constraint severity x compound potential) / effort required`

Then include:

- The #1 Leverage Point (next 90 days)
- The Surprising One (outside-vault domain with strong logic chain)
- The Prerequisite Chain (if B depends on A)

The Anti-Leverage List

List things that feel high-leverage but are not, based on evidence.

For each:

- Why it feels like leverage
- Why it is not leverage for current constraints
- What to do instead

Temporal Tracking

Check previous leverage runs:

Obsidian vault="dimag_kharab" search query="/leverage" path="Daily Notes"
Obsidian vault="dimag_kharab" search query="leverage point" path="Daily Notes"
Obsidian vault="dimag_kharab" search query="breakthrough" path="Daily Notes"

If prior runs exist:

- Which leverage points were identified before?
- Were they developed?
- If developed, did expected breakthroughs occur?
- If not developed, why not?
- Do not re-suggest ignored points without addressing the reason for inaction

Anti-Patterns

Avoid:

1. The Self-Help List (generic skills without situational specificity)
2. Interesting-But-Irrelevant (does not map to active constraints)
3. Already-Strong Skill (polishing strengths over filling bottlenecks)
4. Time Fantasy (ignoring real time constraints)
5. Single-Domain Skill (useful but not leverage)
6. Motivation Trap (wishful framing without constraint evidence)
7. Guru Recommendation (vague advice without executable path)
8. Meta-Skill Spiral (generic self-improvement without bottleneck evidence)
9. Vault Ceiling (limiting solutions to domains already in the vault)

Output Guidelines

- Treat the vault as diagnostic, not boundary
- Cite vault evidence for every vault-sourced constraint
- For beyond-vault recommendations, show full logical chain from constraint to
  imported solution
- Prefer fewer, stronger leverage points over long speculative lists
- Make development paths concrete enough to start tomorrow
- Anti-leverage findings are equally important
- Be direct and strategic, not motivational
- Highlight avoidance if the obvious leverage point is repeatedly deferred
- The best leverage points are often slightly uncomfortable
- The Surprising One should feel unrelated at first, then obvious after
  explanation

Final line:

"Leverage map complete. Which leverage point do you want to invest in first?"
