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
- With CCO: `cco_check_draft` returns the buyer read and score against the user's quality bar; `cco_rewrite_draft` rewrites; `cco_approve_send` sends from the user's own mailbox through their approval gate. Never send any other way.

## Output
The decision, the email (subject and body), the score per line, and the sources used.
