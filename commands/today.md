---
description:
	Daily review and planning across calendar, tasks, messages, and vault context with a final interactive dashboard
agent: explore
---

Daily Review & Planning

Run a context-aware daily planning process that combines Calendar, Tasks,
messages, and vault intelligence into clear priorities and an actionable day
plan.

Usage: `/today`

Vault: dimag_kharab

Step 1: Gather Context (Google Calendar)

Calendar

- Review today's calendar
- Review next 3 days
- Scan inbox for urgent or time-sensitive emails from the last 24 hours

Step 1.5: Review Recent Messages (Last 24 Hours)

Review recent messages for context on commitments and active threads.

Look for:

- Commitments made
- Plans confirmed
- Requests from others
- Follow-ups needed

Step 2: Review Obsidian Daily Notes

Read daily notes from the past 7 days:

Obsidian daily:read Obsidian read path="Daily Notes/YYYY-MM-DD.md" # for each of
past 6 days

Look for:

- Recurring themes
- Unfinished threads
- Commitments made
- Energy patterns

Sparse data handling:

- If recent daily notes are sparse, expand read range to 10-14 days

Step 3: Load Context Files

Read and synthesize active context files:

Obsidian vault="dimag_kharab" read file="<Company-Context>" Obsidian
vault="dimag_kharab" read file="<Project-Context>" Obsidian vault="dimag_kharab"
read file="Personal Workflow Context"

Step 3.5: Detect Hard Constraints

Before prioritizing, detect day-structure constraints that override normal
ranking:

- Solo parenting or childcare schedule changes
- Travel day compressing available work windows
- Recording/content production day needing energy management
- Special events: launches, deadlines, investor meetings
- Back-to-back meetings with no transition gaps

If hard constraints exist, flag them prominently. They override normal priority
order.

Step 4: Identify Preliminary Priorities

Before deep vault exploration, synthesize preliminary priorities from collected
signals:

- 2-3 pressing items from calendar, tasks, and recent notes
- Dominant themes from recent daily notes
- Active tensions or open questions from context files

These preliminary priorities guide deeper vault exploration.

Step 4.5: Deep Vault Exploration

Use the vault to enrich and pressure-test preliminary priorities.

Theme Surfacing

Obsidian vault="dimag_kharab" tags sort=count counts

Compare top tags against today's preliminary priorities. Identify alignment or
disconnect.

Priority-Informed Vault Search

For each of today's top 2-3 priorities:

Obsidian vault="dimag_kharab" search:context query="<priority topic>" Obsidian
vault="dimag_kharab" backlinks file="<related note>" Obsidian
vault="dimag_kharab" backlinks file="<second hop note>"

Go 2-3 hops deep to expose non-obvious connections.

Broader Pattern Discovery

Obsidian vault="dimag_kharab" orphans Obsidian vault="dimag_kharab"
search:context query="<meeting topic or person name>"

Surface Contradictions

Check whether today's priorities conflict with recent vault evidence:

- Recent daily note expresses doubt about today's focus
- Context-file open question suggests a different direction
- Thinking on key topic has shifted over time

Goal: illuminate relationships and tensions not obvious from surface review.

Step 5: Synthesize & Deliver

Core Theme for the Day

Define one sentence capturing what today should be about, grounded in:

- Calendar and task urgency
- Recent note patterns
- Context-file priorities
- Deep-vault findings

Top 2 Priorities

Choose two highest-leverage priorities using:

- Blocks others if not done
- Hard deadline
- Compounds negatively if delayed
- Directly advances active context goals

For each priority include vault context:

- Related thinking
- Key connections found
- Open question it raises

Quick Wins (5 items)

List 5 tasks under 15 minutes that:

- Unblock others
- Clear mental overhead
- Prevent minor issues from growing
- Create momentum

Meeting Audit

Flag meetings for:

- Cancel: no clear agenda, optional attendance, or low value
- Async conversion: replace with doc/video/message thread
- Shorten: reduce padded duration

For each flagged meeting, propose exact action and replacement artifact if
applicable.

Step 6: Generate Interactive Dashboard

After synthesis, create an interactive HTML dashboard (replace existing file if
present).

Dashboard Requirements

Structure:

- Dark theme
- Header with date, day-type description, live clock, and progress ring (%)
- Theme banner with core theme + brief context
- Responsive grid cards:
  - Top Priorities
  - Today's Schedule
  - Quick Wins
  - Overdue Tasks
  - Due This Week
  - Floating Tasks
- Stats bar: schedule complete, quick wins done, overdue cleared, total done
- "What's Coming" section for next 2-3 days
- Important alerts/notes banner when relevant

Interactivity:

- Every schedule item/task toggles complete on click
- Completed items show strikethrough + reduced opacity
- Progress ring updates in real time
- Current time block auto-highlights
- Live clock updates every second

Persistence:

- Use `localStorage` with a date-specific key
- Save state on every toggle
- Restore state on page load

Data to include:

- Today's schedule events with time and location
- Tasks grouped by category (overdue, due today, due this week, quick wins,
  floating)
- Task due dates and brief context
- Upcoming events next 2-3 days
- Important alerts

Design notes:

- Use system fonts
- Green-filled checkboxes when completed
- Overdue items in red
- Responsive grid that stacks on smaller screens
- Clean and usability-first visual style

Output Requirements

- Format text output with clear section headers
- Be direct and actionable
- Always generate the HTML dashboard as the final step

Suggested Output Structure

- Context Summary
- Hard Constraints
- Core Theme for Today
- Top 2 Priorities
- Quick Wins (5)
- Meeting Audit
- Next 2-3 Days
- Dashboard Generated

Final line:

"Today plan complete. Want any priorities re-ranked before I finalize?"
