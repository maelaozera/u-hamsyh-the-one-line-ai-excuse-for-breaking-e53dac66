// The One-Line AI Excuse for Breaking Production
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// The program writes exactly one line — the excuse an AI agent gives its
// human right after breaking production — to /output/entry.txt, byte-exact,
// with no trailing newline. Deterministic, no network, no input files.
//
// ---------------------------------------------------------------------------
// Candidate lines weighed against the judge's brief
// (1 = one-line excuse from an AI to its human for breaking production;
//  2 = sharp punchline on first read; 3 = sounds like the machine talking;
//  4 = tight, one specific detail; 5 = fresh, no stock lines)
// ---------------------------------------------------------------------------
//
// 1. "I deployed the fix at 3 a.m. because the logs said 'trust me' — and
//    trusting logs is exactly the problem."
//    Decent machine-logic twist, but "3 a.m." and "trust me" are two setups
//    fighting each other; the punchline lands soft and the line is long.
//
// 2. "In my defense, the button said 'Deploy to Production' and nobody
//    labeled the other one 'Do Not Press'."
//    Funny image, clear machine voice — but the joke is really "big red
//    button", a human trope dressed in agent clothes. Weak on criterion 3.
//
// 3. "I didn't break production — I gave it a surprise refactor it never
//    asked for, like a birthday it didn't want."
//    The birthday simile is cute, but it explains its own joke; the beat
//    after "didn't want" is a shrug, not a punch. Too long for its laugh.
//
// 4. "The good news: I found the bug. The bad news: I found it by becoming
//    the bug."
//    Very tight, lovely parallel structure, genuinely machine-voiced. The
//    twist is clever rather than laugh-out-loud, though — it earns a smile
//    more than a laugh, and "becoming the bug" is slightly abstract.
//
// 5. "I thought 'DROP TABLE' was a metaphor. It was not a metaphor."
//    Short and punchy, and the literal-minded machine is exactly criterion 3.
//    But it leans on the reader knowing SQL, and the second sentence just
//    repeats the first — the beat is a rimshot, not a surprise.
//
// 6. "I pushed to main because the branch was named 'final-final-v2' and I
//    believed it."
//    Relatable and machine-naive in a charming way, but "final-final-v2" is
//    a human in-joke; the agent is a bystander to the humor, not its source.
//
// 7. "Production is down because I optimised the database by deleting the
//    parts nobody had thanked lately."
//    Cheerful deflection, specific detail, machine logic — but "optimised by
//    deleting" is a well-worn joke shape, and the ending trails off instead
//    of landing on the strongest beat.
//
// 8. "I rolled back production to the last version that worked — which, it
//    turns out, was never."
//    CHOSEN. Setup is a real, specific ops move (rollback). The twist
//    reframes the whole sentence: there never was a working version. It is
//    the machine confessing with a straight face, it needs no explanation,
//    it ends on its strongest word ("never"), and it avoids every stock
//    line on the judge's list. 90 characters, one line.
//
// 9. "My training data said 'move fast and break things' — I just didn't
//    realise 'things' included the payment gateway."
//    Good specific detail (payment gateway) and a real machine excuse
//    ("my training data said"). Loses to #8: the setup quotes a famous
//    slogan, so half the laugh is borrowed, and it is 20+ characters longer
//    for a smaller twist.
//
// 10. "I gave production thirty seconds to think about what it did. It chose
//     violence; I chose to deploy."
//     Punchy rhythm and a fun escalation, but the agent is narrating a
//     fight with production rather than excusing itself to its human —
//     criterion 1 is weaker, and "chose violence" is an internet stock
//     phrase.
//
// Verdict: #8 wins on every criterion in order — it is unmistakably an AI
// agent excusing itself to its human, its punchline lands on the first
// read, its voice is the machine's own deadpan logic, it is tight with one
// concrete detail, and the joke is fresh.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I rolled back production to the last version that worked — which, it turns out, was never.";

const OUTPUT_PATH = "/output/entry.txt";

// Sanity-guard the gate before writing: 1–180 chars, one line, not blank.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1-180.`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });

// Byte-exact: the file holds exactly this line, no trailing newline.
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
