---
description:
	Write an outside portrait of the vault author based only on vault evidence
agent: explore
---

Stranger -- A Portrait from the Outside

Write a portrait of who the vault's author is, as seen by someone reading the
vault cold, with no prior context. The stranger sees everything in the vault but
knows nothing else.

Usage: `/stranger`

Vault: dimag_kharab

Step 1: Structural Survey

Before reading content, map vault structure. Structure reveals priorities before
words do.

Obsidian vault="dimag_kharab" orphans Obsidian vault="dimag_kharab" deadends
Obsidian vault="dimag_kharab" unresolved Obsidian vault="dimag_kharab" tags
sort=count counts

Record:

- Total note count
- Number of orphans and deadends
- Most-used tags (top 15-20)
- Number of unresolved links
- Folder structure and relative sizes

Do not skip this structural data. It is required raw material for the portrait.

Step 2: Read the Content

Context Files

Obsidian vault="dimag_kharab" read file="README" Obsidian vault="dimag_kharab"
read file="index" Obsidian vault="dimag_kharab" read file="I N BOX" Obsidian
vault="dimag_kharab" read file="INBOX"

If a context file is missing, skip gracefully.

Daily Notes

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # past 14-21
days

Essays and Published Work

Obsidian vault="dimag_kharab" search query="" path="Essays" Obsidian
vault="dimag_kharab" read file="<each essay found>"

Follow the Graph

For the 5 most-linked notes in the vault:

Obsidian vault="dimag_kharab" backlinks file="<note>" Obsidian
vault="dimag_kharab" links file="<note>"

Step 3: Seven Forced Intermediate Analyses

Complete all seven analyses explicitly before composing the portrait. Skipping
these leads to shallow output.

Analysis 1: Topic Frequency Map

- Rank top 10-15 topics by raw frequency across all sampled material
- Separate by source type: daily notes vs context files vs essays
- Flag topic mismatch:
  - Daily-heavy but context-light = lived, not formalized
  - Context-heavy but daily-light = theorized, not practiced

Analysis 2: Stated vs Revealed Priorities

Use this table structure:

Stated Priority | Evidence of Stated | Actual Time/Energy (daily notes) | Gap?

Stated priorities come from context files. Revealed priorities come from
repeated daily-note attention. Divergence is high-value evidence.

Analysis 3: Emotional Frequency Analysis

Scan daily notes for emotional language.

Track:

- Excitement/energy: what produces it?
- Frustration/friction: what causes it?
- Satisfaction/pride: what earns it?
- Anxiety/worry: what drives it?
- Absence: what emotional categories are missing?

Analysis 4: Relationship Map

- List people appearing in the vault
- Count mention frequency
- Characterize context: warmth, obligation, aspiration, conflict, mentorship
- Build a rough social map from vault evidence only

Analysis 5: Recurring Questions

- Identify top 5-7 repeated questions across daily notes and context files
- Distinguish one-off curiosity from repeated obsession

Analysis 6: Writing Style Fingerprint

From essays plus daily notes, characterize:

- Sentence length tendencies
- Metaphor/analogy use
- Abstraction vs concreteness
- Characteristic vocabulary and repeated phrases
- What is avoided or indirectly referenced

Analysis 7: Conspicuous Absences

- Identify expected topics/people/activities/emotions that are missing
- Treat absences as evidence, not speculation
- Examples:
  - Work-heavy vault with no rest language
  - Family mentions with little lived detail

Step 4: Compose the Portrait

Write in third person throughout. Shift to second person only in Section 5.

Section 1: First Impression

- What a stranger notices immediately
- Dominant energy and preoccupations
- 2-3 paragraphs only

Section 2: What They Actually Care About

- Focus on revealed priorities, not stated identity
- Use evidence from Analysis 1 and 2
- Show where vault weight actually sits

Section 3: What They Are Building Toward

- Infer trajectory from context + daily notes
- Describe the life shape implied over 2-3 years
- Go beyond project labels to directional intent

Section 4: The Patterns They Cannot See

This section is mandatory and must include both admiration and discomfort.

Check six pattern classes:

- Contradiction patterns
- Avoidance patterns
- Repetition patterns
- Projection patterns
- Narrative patterns
- Blind spot patterns

Minimum requirement:

- At least 2 uncomfortable patterns
- At least 2 admiring patterns

Section 5: The Unasked Question

Switch to second person here only.

- Surface one question the author has not asked but should
- Confirm the question is genuinely unasked using vault search
- The question should change behavior if answered honestly

Self-Verification Checklist

Before output, verify all conditions:

- All 7 intermediate analyses were completed explicitly
- Portrait includes at least 2 uncomfortable observations
- Portrait includes at least 2 admiring observations
- Third person used throughout except Section 5
- Every major claim traces to specific vault evidence
- The Unasked Question is genuinely unasked
- The portrait is recognizable yet includes unarticulated insight

Anti-Patterns

Avoid:

1. The Flattering Portrait (admiration without evidence)
2. The Therapy Portrait (diagnosis or advice instead of observation)
3. The Summary Portrait (table of contents instead of synthesis)
4. The Generic Portrait (could fit anyone)
5. The Judgmental Portrait (moralizing tone)
6. The Claude Portrait (hedged, diplomatic over-balancing)

Output Format

STRANGER: Portrait from the Outside Vault surveyed: [note count, tag count,
daily-note date range] Analysis depth: [notes read, backlink hops followed]

[Section 1: First Impression]

[Section 2: What They Actually Care About]

[Section 3: What They Are Building Toward]

[Section 4: The Patterns They Cannot See]

[Section 5: The Unasked Question]

Output Guidelines

- Write as perceptive and unflinching, not performatively harsh
- Cite specific vault evidence for every major claim
- Include both known truths and unarticulated truths
- If Section 5 does not cause a pause, revise it
- Do not soften evidence-backed observations for politeness

Final line:

"Stranger portrait complete. What part felt most true to you?"
