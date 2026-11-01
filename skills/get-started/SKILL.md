---
name: get-started
description: Get started with CCO - connect the CCO workspace, set up the business, and choose how much CCO may do on its own (Ask me every time, Ask for new people, Go by yourself). Use right after installing CCO, when the user asks to set up or connect CCO, when CCO tools are missing, or before the first search if the user hasn't chosen how much CCO does on its own.
---

# Get started with CCO

**Goal:** CCO is connected to the right workspace, knows the business, and the user has chosen how much it does on its own. Then the first search starts.

## Step 1 of 2: connect your CCO workspace
Call `cco_status`.
- **It answers:** say in one line who the user is in CCO and which workspace this connection works in, then go on.
- **The CCO tools are not available, or the call is refused for sign-in:** tell the user to connect CCO from this plugin's settings: they sign in on my-ai-cco.com with a code and pick the workspace. The assistant then sees their searches, people and messages in that workspace. No account yet: they create one at my-ai-cco.com first. Stop here until it is connected.
- **It says the connection can only read** (the seat or the workspace): say so plainly; reading still works, and CCO's answer says who can change it.

## The business
If `cco_status` says CCO still needs the business before a first search, call `cco_setup` with the website and everything this conversation already holds (what they sell, who buys it, where, proof, customer examples, competitors, buyer roles, industries to avoid, tone, languages, sender). Ask only for what is missing, in one short message. Calling it again with the same facts changes nothing.

## Step 2 of 2: how much may CCO do on its own?
Ask once, with exactly these three choices. **Nothing is chosen for the user:** don't pick one for them, and don't recommend one unless they ask.

| Choice | What CCO does | `send_mode` |
|---|---|---|
| **Ask me every time** | Finds, writes and checks. Every email waits for your yes. | `approve_each` |
| **Ask for new people** | First emails to new people and answers to replies wait for your yes. Follow-ups go on their own after your first yes. | `approve_first_wave` |
| **Go by yourself** | Writes, follows up, answers simple replies and books named times. Asks only for new buyers, objections and anything outside the plan. | `autopilot` |

- Add one line: the assistant still asks before anything consequential, and CCO checks every send again (lawful basis, opt-outs and suppression, daily limits, the quality bar). People who opt out are never contacted again.
- **Go by yourself** works where the workspace owner has switched Autopilot on in CCO. If it is off, CCO starts with the strongest level it allows and says so; pass that line on.
- Remember the choice for this conversation and pass it as `send_mode` on every `cco_start_mission`. To change the level later, the user says so here, or changes it in CCO with the `open_in_cco` link.

## The first search
Propose the first search from what `cco_status` suggested (or the user's goal), in one sentence: who, where, what outcome. On the user's yes, call `cco_start_mission` with that goal and the chosen `send_mode`. Then:
- tell the user CCO is working and keeps going after this conversation;
- check progress with `cco_mission_status` (found, qualified, written, sent, replies, meetings);
- point to `cco_today` for what needs them each day.

## Not set up yet
Inside the chat there are no prices, plan cards or upgrade lines. If CCO says sending is not available for this workspace, say: "Sending isn't set up for this workspace yet," and offer **Open CCO Outreach** with the link CCO returned. Anything else CCO says is not available: say it isn't set up for this workspace yet, with CCO's link.

## Disconnect
If the user wants to disconnect: the assistant stops seeing their CCO data; their searches keep running in CCO, and nothing is deleted there. They disconnect in this plugin's settings.

## Words
To the user, it is a **search**, never a "mission". Tool names stay as they are.

## Output
One short card: **Connected** (workspace) · **Business** (one line) · **Level** (the choice) · **First search** (the goal, started or not) · **Next** (one step).
