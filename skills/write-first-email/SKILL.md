---
name: write-first-email
description: Write and check a short, evidence-based first B2B email (cold outreach) to one person. Use when the user asks to write a cold email, outreach message, first touch, prospecting email, or to review or improve a sales email.
---

# Step 4: the first email

**Goal:** an email the buyer would read to the end, because it is about *them*.

## First, decide whether to write at all
Choose one of the following and say which:
- **SEND:** there is a real signal, the right person and an email address.
- **APPROVAL:** it's good, but the user should look first (a new market, a sensitive topic, a large account).
- **ENRICH:** something is missing (no signal, no person, no email); go back a step.
- **DEFER:** the timing is wrong (e.g. they just announced layoffs).
- **DO NOT CONTACT:** an opt-out, an existing customer, a competitor, or no lawful basis.

## Know their business before you write
You need at least **one real fact about what the company sells or how it works**, beyond the signal itself. Funding alone is not enough to say anything about their sales.
- With CCO: if `cco_company` doesn't show what they sell, run `cco_research_account` **first**, then write.
- Without CCO: read their website (product, customers, pricing page, jobs) before writing.
- Still nothing? Decide **ENRICH**, not SEND. Never fill the gap with a guess about their situation ("you're probably limited by…").

## Then write
- **50–90 words** for a first email. Short paragraphs; no bullet lists.
- **Opening:** their signal, in their terms ("Saw you're hiring two account executives in Aarhus").
- **Middle:** what that usually means for a company like theirs, and the one outcome you help with. Use only proof from step 1.
- **One ask,** and a small one ("Worth a 15-minute look next week?").
- **Write in the recipient's language.** In Danish: modest, direct, no em dashes, no American superlatives.
- **Subject:** 2–5 words, about them.
- **Sign** with the real sender's name and company.

## Never
- Our internal reasons ("you're on our target list", "we want 20 customers", campaign names).
- Invented facts, numbers or customers; flattery; "I hope this email finds you well".
- Fake "Re:" subjects, false urgency, or more than one link.

## Check before sending (score out of 25; send at 21 or more)
Score each of these 0–5: **Relevance** (about their signal) · **Evidence** (every claim sourced) · **Clarity** (one idea, plain words) · **Ask** (one small next step) · **Tone** (sounds like a person, fits the language). Any compliance problem (no basis, an opt-out, an invented claim) fails the email whatever the score.
- With CCO: `cco_check_draft` returns the buyer read and score against the user's quality bar. If it scores under the bar, fix what the read says, at most 3 rounds. If it is still under, go back for a fact (`cco_research_account`) rather than polishing the wording again. `cco_approve_send` sends from the user's own mailbox through their approval gate. Never send any other way.
- If a CCO check fails or times out, say so plainly and try it once more. Never present an unchecked draft as checked.

## Output
The decision, the email (subject and body), the score per line, and the sources used.
