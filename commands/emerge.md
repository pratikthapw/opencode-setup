---
description:
	Surface ideas implied by vault evidence that were never explicitly articulated
agent: explore
---

Emerge — Surface Ideas the Vault Implies but Never States

Find ideas implied by vault contents but never explicitly articulated. These are
conclusions the vault's evidence points toward, connections its structure
suggests, and behavior patterns it reveals, where the conclusion itself was not
written down.

Usage: `/emerge` (general) or `/emerge [domain]` (focused)

Vault: dimag_kharab

What Counts as an Emergence

An emergence is NOT:

- A connection between two existing ideas (`/connect`)
- A contradiction between beliefs (`/contradict`)
- An evolution of existing thinking (`/trace`)
- A restatement of something already in the vault

An emergence IS:

- A conclusion that follows from scattered premises where the conclusion itself
  was never drawn
- A recurring cross-domain pattern that was never named
- A belief behavior reveals but the author never articulated
- A destination multiple threads imply but never identify directly

Litmus test:

- If the reaction is "I think that's right but I've never said it," it is
  emergent
- If the reaction is "I already know that," it is not

Step 1: Structural Detection

Look for ideas implied by topology and missing links.

Obsidian vault="dimag_kharab" orphans Obsidian vault="dimag_kharab" deadends
Obsidian vault="dimag_kharab" unresolved Obsidian vault="dimag_kharab" tags
sort=count counts

What to look for:

- Two orphaned notes with related problems but no direct link
- Unresolved links that were referenced but never developed
- Deadend clusters in one theme where thought starts but never synthesizes

Obsidian vault="dimag_kharab" backlinks file="<orphan note A>" Obsidian
vault="dimag_kharab" backlinks file="<orphan note B>" Obsidian
vault="dimag_kharab" links file="<deadend cluster note>"

Confidence calibration:

- Structural detection is highest reliability because it is grounded in graph
  topology

Step 2: Thematic Detection

Find unnamed patterns recurring across 3+ domains.

Read across domains:

Obsidian vault="dimag_kharab" read file="<Context File A>" Obsidian
vault="dimag_kharab" read file="<Context File B>" Obsidian vault="dimag_kharab"
read file="<Context File C>"

Search recurring motifs:

Obsidian vault="dimag_kharab" search:context query="<pattern from domain A>"
Obsidian vault="dimag_kharab" search query="<pattern from domain A>" path="Daily
Notes"

What to look for:

- Same structural pattern with different names across domains
- Same tension in work, personal, and creative areas never explicitly named
- Same value repeatedly driving decisions without being declared as a core value

Qualification rule:

- Pattern must appear in 3+ distinct domains to qualify

Step 3: Logical Detection

Find conclusions implied by premises across separate notes.

Read recent daily notes:

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # past 14-21
days

Search belief clusters:

Obsidian vault="dimag_kharab" search:context query="I think" Obsidian
vault="dimag_kharab" search:context query="I believe" Obsidian
vault="dimag_kharab" search:context query="the problem is" Obsidian
vault="dimag_kharab" search:context query="what works"

What to look for:

- Premise A in note 1 + Premise B in note 2 implies conclusion C, where C is
  never stated
- A principle in one domain that implies a missing conclusion in another
- Observation clusters that indicate an unnamed theory

Reliability note:

- Logical detection is moderate reliability and depends on careful premise
  interpretation

Step 4: Behavioral Detection

Find decision patterns implying unstated beliefs.

Analyze recurring decisions in daily notes:

Obsidian vault="dimag_kharab" search query="decided" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="chose" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="going to" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="not going to" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="cancelled" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="skipped" path="Daily Notes"

What to look for:

- Repeated preference for one option type over another
- Consistent avoidances signaling unstated risk/value beliefs
- Stable pattern of energy allocation vs procrastination
- Recurring implicit rules followed but never codified

Pattern threshold:

- Require 3+ instances before treating as emergent belief

Confidence calibration:

- Behavioral detection is high reliability (actions are harder to fake)

Step 5: Convergence Detection

Find independent threads that project toward the same unnamed destination.

Read forward-looking material:

Obsidian vault="dimag_kharab" search:context query="want to" Obsidian
vault="dimag_kharab" search:context query="building toward" Obsidian
vault="dimag_kharab" search:context query="future" Obsidian vault="dimag_kharab"
search:context query="goal" Obsidian vault="dimag_kharab" search:context
query="vision" Obsidian vault="dimag_kharab" search query="next" path="Daily
Notes"

What to look for:

- Multiple projects that converge on one unnamed outcome
- Separate aspirations indicating a common destination
- Incremental decisions that imply a life/work structure never articulated

Confidence calibration:

- Convergence is most speculative
- Report only when 3+ independent threads clearly align

Step 6: Verification and Output

Fabrication Check (mandatory)

For each candidate emergence:

- Ask: "Does the vault evidence point here, or am I projecting?"
- Run exact query:

Obsidian vault="dimag_kharab" search query="<emergence stated plainly>"

- If direct match exists, discard (not emergent)

Verification frame:

- True emergences feel like recognition, not novelty theater
- If it feels clever but weakly grounded, reject it

Confidence Levels

- High: 5+ data points across 2+ detection methods
- Medium: 3-4 data points across 1-2 methods
- Low: 1-2 data points from 1 method (speculative)

Method reliability order:

Structural > Behavioral > Thematic > Logical > Convergence

For Each Emergence

Emergence [#]: [Title]

The idea: [One-sentence emergent idea] Detection method: [Method(s) used]
Evidence:

- [Specific note/date/quote] supports this because [reason]
- [Specific note/date/quote] supports this because [reason]
- [Behavioral/structural signal] supports this because [reason] Why it's
  emergent: [Why evidence exists but articulation does not] Confidence: High /
  Medium / Low Data points: [number] What to do with it:
- Articulate as new belief in context file
- Investigate as open question
- Name something already being lived
- Leave unformalized for now

Synthesis

- Emergences found: [number]
- By method: Structural X, Thematic Y, Logical Z, Behavioral W, Convergence V
- By confidence: High X, Medium Y, Low Z
- Strongest emergence: highest evidence, highest method reliability
- Meta-emergence: any larger unnamed pattern across emergences

Anti-Patterns

Avoid:

1. Connection Disguise: framing simple links as emergences
2. Forced Emergence: inventing findings without evidence
3. Obvious Emergence: restating what vault already says
4. Fortune Cookie: generic statements that fit anyone
5. Over-Interpreter: extrapolating from single data points
6. Projection Machine: imposing external frameworks onto vault
7. Creativity Trap: novelty-first claims unsupported by evidence

Output Format

EMERGE REPORT Scope: [General / Domain-focused] Detection methods run: [list]
Potential emergences found: [number] Survived fabrication check: [number]

[Emergences ordered by confidence]

[Synthesis]

[Strongest emergence]

[Meta-emergence, if any]

Output Guidelines

- Every emergence must be evidence-backed
- Prefer fewer, stronger emergences over many weak ones
- Fabrication check is mandatory
- If already stated in vault, it is not emergent
- Output should feel like the vault thinking on the author's behalf

Final line:

"Emerge report complete. Which emergence should we develop first?"
