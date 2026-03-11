---
description:
	Reshape the next 7 days around active vault threads through deep context mapping and calendar triage
agent: explore
---

7plan — Reshape the Next 7 Days Around What's Alive in the Vault

Build a deep understanding of active intellectual threads, rabbit holes, and
latent patterns, then reshape the next 7 days so the calendar protects that
thinking.

Usage: `/7plan`

Vault: dimag_kharab

Phase 1: Understand the Thinking (Vault-First)

Before touching the calendar, map what is actually alive in thought. Calendar
serves thinking, not the reverse.

Step 1: Structural Inventory

Obsidian vault="dimag_kharab" tags sort=count counts Obsidian
vault="dimag_kharab" orphans Obsidian vault="dimag_kharab" deadends Obsidian
vault="dimag_kharab" unresolved

Identify:

- Most active themes
- Notes created but not connected
- Concepts referenced but never developed

Step 2: Read Daily Notes (Past 14 Days)

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # each day in
past 14 days

Read each day and extract:

- Energy patterns: flow vs drain
- Recurring questions and investigations
- Stated intentions ("I want to explore...", "I need to think about...")
- Threads started but not continued
- Decisions made and what they reveal

Sparse data handling:

- If recent notes are sparse, expand to 21 days

Step 3: Context Files

Obsidian vault="dimag_kharab" read file="<Company-Context>" Obsidian
vault="dimag_kharab" read file="<Project-Context>" Obsidian vault="dimag_kharab"
read file="Personal Workflow Context" Obsidian vault="dimag_kharab" read
file="<Health-Context>" Obsidian vault="dimag_kharab" read
file="<Family-Context>"

Extract:

- Stated priorities and open questions
- Confidence markers (`[solid]`, `[evolving]`, `[hypothesis]`, `[questioning]`)
- Items marked `[evolving]` or `[hypothesis]` as candidates for protected
  thinking time

Step 4: Deep Vault Exploration (Core)

For each active thread from steps 1-3:

Obsidian vault="dimag_kharab" search:context query="<thread>" Obsidian
vault="dimag_kharab" backlinks file="<related note>" Obsidian
vault="dimag_kharab" links file="<related note>"

Follow backlinks 2-3 hops and build:

- Active investigations: current state and next move
- Near-breakthrough ideas: threads ready to crystallize into output
- Stalled threads: what blocked them (missing conversation, research, or time)
- Convergence points: separate threads pointing to same conclusion
- Latent patterns: recurring cross-domain themes not yet named

Step 5: Behavioral Patterns

Obsidian vault="dimag_kharab" search query="decided" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="want to" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="need to write" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="cancelled" path="Daily Notes" Obsidian
vault="dimag_kharab" search query="skipped" path="Daily Notes"

Use behavior to distinguish:

- What actually matters in practice
- What sounds important but is not being acted on

Output of Phase 1: The Intellectual Map

Present before touching calendar:

- Top 3-5 Active Threads
  - Current state
  - What would move each forward
  - Time required
  - Work mode (writing, research, conversation, building)
- Near-Breakthrough Candidates
  - Threads that need protected blocks this week
- Stalled Threads Worth Reviving
  - Why they stalled
- Meta-Pattern
  - What all active thinking is converging toward

Phase 2: Calendar Reality

Step 6: Google Calendar + Tasks + Email

Calendar (next 7 days):

- Pull all events with attendees, descriptions, recurring status

Tasks:

- Overdue (critical)
- Due in next 7 days
- Floating (no due date)

Email (last 3 days):

- Time-sensitive requests
- Action items and deadlines

Phase 3: Triage — Calendar Serves the Thinking

Evaluate every event against the Intellectual Map from Phase 1.

For each event, assess:

- Does this directly advance an active thread?
- Are you the right person, or should it be delegated?
- Can it be async with equivalent outcome?
- Does it protect or consume creative time?
- Does it violate family time or 2-3 hour focus constraints?

Triage categories:

- KEEP: directly serves active thread or hard commitment
- COMPRESS: shorten duration
- MOVE: reschedule to protect deep work or improve batching
- DELEGATE: assign to someone better suited
- ASYNC: replace with doc/email/message
- CANCEL: low alignment, low consequence

Delegation map:

- Build a map of people by domain/responsibility for routing delegated items

Phase 4: The 7-Day Plan

For each day, provide:

- Day Theme
  - Which active thread the day serves
- Protected Block
  - Minimum 2-3 hours
  - Named thread and explicit work objective
- Events Table

Time | Event | Status | Action | Reasoning

- Delegation Briefs
  - For every `DELEGATE` item: what it is, what must happen, who to contact,
    what success looks like
- Async Artifacts
  - For every `ASYNC` item: draft replacement doc/email/message

Week Summary

- Before/After:
  - Meeting hours: [before] -> [after]
  - Deep work blocks: [before] -> [after]
  - Time reclaimed: [hours]
- Thread allocation:
  - Which active threads receive dedicated time and when
- Deferred threads:
  - Which threads do not get time this week
- Most important creative session:
  - Which block, which thread, what concrete output it should produce

Phase 5: Execution (After Approval)

Do not make changes before explicit approval.

Once approved, offer to:

- Cancel/compress/move events via Google Calendar
- Create deep work blocks tied to named threads
- Draft delegation emails to specific people
- Draft async replacement artifacts

Output Guidelines

- All output is text in-session
- No dashboard and no HTML file
- Phase 1 Intellectual Map is foundational and must be robust
- Every calendar decision in Phase 3 must reference the Intellectual Map
- Deep work blocks must name thread and intended output
- Delegation briefs must be complete and actionable
- Be direct and operational, not verbose

Suggested Output Structure

- Intellectual Map
- Calendar Reality Snapshot
- Event Triage
- 7-Day Plan (Day-by-day)
- Week Summary
- Approval Request

Final line:

"7-day plan ready. Want me to execute these calendar changes after your
approval?"
