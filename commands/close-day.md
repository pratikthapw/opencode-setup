---
description:
  End-of-day processing that extracts items, discovers connections, and surfaces
  contradictions from today's daily note
agent: explore
---

End-of-Day Processing

Process today's daily note to extract action items, insights, and connections,
then file them appropriately and carry forward what matters for tomorrow.

Usage: `/close-day`

Vault: dimag_kharab

Step 1: Read Today's Daily Note

Use the Obsidian CLI to read today's daily note:

Obsidian daily:read

Parse everything captured:

- Free-form writing
- Meeting notes
- Ideas and observations
- Commitments and promises
- Tasks mentioned
- People referenced

Step 1.5: Structured Vault Connection Discovery

After reading today's note, run these required queries every time:

Required Queries

Obsidian vault="dimag_kharab" tags sort=count counts Obsidian
vault="dimag_kharab" search:context query="<theme 1 from today>" Obsidian
vault="dimag_kharab" search:context query="<theme 2 from today>" Obsidian
vault="dimag_kharab" search:context query="<theme 3 from today>" Obsidian
vault="dimag_kharab" backlinks file="<notes referenced today>" Obsidian
vault="dimag_kharab" orphans

Purpose: What themes are most active right now? What else connects to things
touched today? Are there forgotten notes related to today's themes?

Confidence Marker Detection

- Read relevant context files for topics discussed today
- Compare today's language with confidence markers in those files
- Flag shifts: "Yesterday you were [hypothesis] on X, today you sound [solid]"
- Suggest specific marker updates if confidence level changed

Contradiction Surfacing

Check if today's writing contradicts previous entries:

Obsidian vault="dimag_kharab" search:context query="<strong claim from today>"

- Does today's position conflict with something written last week?
- Did today resolve a previously open question or create a new contradiction?
- Flag: "On [date] you wrote [X]. Today you wrote [Y]. Worth reconciling?"

Connection Insights

Surface findings such as:

- "Today you wrote about X. This connects to note from [date] where you were
  thinking about Y. Worth revisiting?"
- "This is the third time [topic] has come up in the past two weeks."

Step 2: Extract & Categorize

Action Items

Pull out tasks and commitments:

- Things promised to others
- Things to follow up on
- Deadlines mentioned

Ideas & Insights

Capture original thinking worth preserving:

- Observations about work patterns
- Ideas for projects, content, or experiments
- Realizations or shifts in perspective

People & Commitments

Note commitments involving others:

- Follow-ups owed
- Meetings to schedule
- Messages to send

Questions Raised

Capture open questions:

- Things to investigate
- Decisions pending
- Uncertainties to resolve

Step 3: Suggest Filing Locations

For each extracted item, recommend where it should live:

Item | Type | Suggested Location | Action

Present as a table showing:

- What the item is
- What type it is (insight, task, idea, question)
- Where it should be filed (context file, Google Tasks, related note)
- What action to take

Step 4: Suggest Backlinks

Use the Obsidian CLI to discover existing connections and verify note existence:

Obsidian vault="dimag_kharab" links file="[TODAY's DATE]" Obsidian
vault="dimag_kharab" backlinks file="[TODAY's DATE]" Obsidian
vault="dimag_kharab" search query="<person or project name>"

Identify terms in today's note that should link to existing notes:

- People mentioned → link to their note if exists
- Projects mentioned → link to project notes
- Concepts mentioned → link to relevant context files

Present as: "Consider adding these backlinks: [[Person]], [[Project]],
[[Concept]]"

Step 5: Context File Updates

Flag if anything from today should update a context file:

- New belief or shift in thinking → context file "What's shifted recently"
- New constraint discovered → Constraints section
- Question resolved or new question raised → Open Questions section
- Confidence level change → Update the marker

Ask: "Should I update [context file] with [specific change]?" for each
suggestion.

Step 6: Carry Forward

What to carry into tomorrow

Based on today's note, identify:

- Unfinished priorities
- Commitments due soon
- Momentum to maintain

Quick Wrap Answers

If the Quick Wrap section wasn't filled in, draft answers based on today's
content:

- Did I explore anything new today?
- What did I actually move forward?
- What bottleneck became obvious?
- One thing to carry into tomorrow?

Output Format

Today's Extraction

[Categorized list of items pulled from the note]

Vault Connections

[Confidence marker changes, contradictions found, recurring themes]

Filing Suggestions

[Table of where things should go]

Backlinks to Add

[List of suggested links]

Context File Updates

[Specific changes to propose, with confirmation requests]

Carry Forward

[What matters for tomorrow]

Quick Wrap (if not completed)

[Draft answers to reflection questions]

Output Guidelines

- Keep output concise for a 5-minute ritual
- Focus on filing and surfacing what matters, not summarizing the day
- Be specific with vault citations
- Always run the required queries in Step 1.5
- Confirm before making context file updates

Final line:

"Day closed. Ready for tomorrow?"
