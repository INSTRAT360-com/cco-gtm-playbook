---
name: write-first-email
description: Write, check and send a short, evidence-based first B2B email (cold outreach) to one person, through CCO when connected. Use when the user asks to write or send a cold email, outreach message, first touch, prospecting email, or to review or improve a sales email.
---

# Step 4: the first email

**Goal:** an email the buyer would read to the end, because it is about *them*.

## Hand it to CCO
Outreach is CCO's work. With CCO connected:
- **Inside a search,** CCO writes every message itself, reads it as the buyer against the bar and sends it from the user's own mailbox as the user's choice allows (*Ask me every time*, *Ask for new people*, *Go by yourself*; see `get-started`). Show what waits with `cco_personalisation` (or `cco_ready_to_send`).
- **What waits for the user:** approve exactly the version shown with `cco_approve_send` once the user says yes to it; change it with `cco_rewrite_draft` (write the new subject and body as the user asked); drop it with `cco_reject_send` and the user's reason, which teaches the next draft.
- **One email outside a search:** `cco_queue_email` (lead, subject, body) checks it and saves it as that lead's waiting email; approve it with `cco_approve_send` on the user's yes.
- **The user's own draft:** `cco_check_draft` reads it as that buyer: score against the bar, how they would react, integrity problems and what to change. Nothing is saved or sent.
- Every message passes CCO's send gate (lawful basis, opt-outs, daily limits, quality bar), whatever the mode. A message CCO holds is not sent; say why, in CCO's words.

## First, decide whether to write at all
Choose one of the following and say which:
- **SEND:** there is a real signal, the right person and an email address.
- **ASK FIRST:** a genuine exception: a new market, a sensitive topic, a large account, or the user chose *Ask me every time*.
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
- Our internal reasons ("you're on our target list", "we want 20 customers", search or campaign names).
- Invented facts, numbers or customers; flattery; "I hope this email finds you well".
- Fake "Re:" subjects, false urgency, or more than one link.

## Check before it goes out (score out of 25; send at 21 or more)
Score each of these 0–5: **Relevance** (about their signal) · **Evidence** (every claim sourced) · **Clarity** (one idea, plain words) · **Ask** (one small next step) · **Tone** (sounds like a person, fits the language). Any compliance problem (no basis, an opt-out, an invented claim) fails the email whatever the score.
- With CCO: `cco_check_draft` returns the buyer read and score against the user's bar. Under the bar, fix what the read says, at most 3 rounds. Still under? Go back for a fact (`cco_research_account`) rather than polishing the wording again. Send through CCO (`cco_queue_email` or a search), so the send gate and the record stay in one place.
- If a CCO check fails or times out, say so plainly and try it once more. Never present an unchecked draft as checked.

## Output
The decision, the email (subject and body), the score per line, the sources used, and what happens next (sent, waiting for the user's yes, or held, and why).
