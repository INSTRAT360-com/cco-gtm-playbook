---
name: buyer-deck
description: Build a short sales deck or proposal for one buyer (6-8 slides) that starts with their problem in their words, shows sourced proof and ends with one ask, made with CCO's deck engine when connected. Use when the user asks for a sales deck, pitch deck, proposal, presentation or slides for a meeting with a prospect or customer.
---

# A deck for one buyer

**Goal:** 6–8 slides the buyer would forward to a colleague, because the first slide is about *them*.

## Hand it to CCO
Decks are CCO's work. With CCO connected, and only when the user asks for a deck or proposal:
- `cco_build` makes it with CCO's deck engine, grounded in CCO's records for one company, meeting or search (`for: {kind, id}`): pass the `purpose`, the `audience` and, as `notes`, what this conversation knows. It builds live and returns a ref.
- `cco_open` with that ref opens the deck with its sources, as a card.
- `cco_save` (`kind: presentation_change`) saves the changes the user asks for as a new version; `kind: document` saves a written proposal on the company, meeting or search.
- Before it goes out, put the cover email through `cco_check_draft` for that person.
- Without those tools, write the deck here and save it on the company with `cco_log_activity` (a note or a document link).
- If CCO says this is not available for the workspace, say it isn't set up for this workspace yet and offer **Open CCO Outreach** with the link CCO returned; meanwhile write the deck here. No prices, plan cards or upgrade lines in the chat.

## Before you write
You need: who the deck is for (person, role, company), what happened so far (their reply, the last meeting), and the one decision you want next. Missing? Ask, or get it first.
- With CCO: `cco_company`, `cco_person` and `cco_account_plan` give the facts, the buyer's profile and the buying group; `cco_meetings` gives the meeting and its brief.

## The slides
1. **Their situation,** in their words: what they said or wrote, quoted or close to it, with where it came from.
2. **What it costs them** to leave it as it is. Use their numbers only; if there are none, ask a question, don't invent one.
3. **What changes:** the outcome for them, not our features.
4. **How it works:** 3 steps at most, for their case.
5. **Proof:** a named customer, case or result like theirs, each with its source. Mark anything unconfirmed "Please confirm".
6. **What it takes:** time, people, the first 30 days, and price only if the user gives it.
7. **The one ask:** a small, dated next step ("a 30-minute session with your head of sales on 12 May").
8. Optional: answers to the 2–3 objections this buyer is most likely to raise.

One idea per slide. A headline that says the point as a sentence. No slide about us before slide 5.

## Read it as the buyer
Before showing the user, answer as this buyer: Is slide 1 about me? Would I believe slide 5? Is the ask easy to say yes to? Fix what fails, at most 3 rounds.

## Quality bar
- Every number and customer name has a source, or it is not in the deck.
- Written in the buyer's language and at their level (a CFO gets cost and risk; a user gets their day).
- One ask, on the last slide.

## Output
The deck (with CCO: the `cco_open` card and its link; by hand: slide titles and the text of each slide), the sources per slide, the cover email (50–90 words), and the buyer read. Next: `replies-and-meetings` for the meeting.
