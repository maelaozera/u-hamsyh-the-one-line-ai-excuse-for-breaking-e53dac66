// The One-Line AI Excuse for Breaking Production — entry program.
// Writes exactly one line to /output/entry.txt, byte-exact, with no
// trailing newline. Deterministic, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the agent rolled production back to the last version that
// worked — which never existed. A real ops move (rollback) whose twist
// reframes the whole sentence, delivered in the machine's deadpan voice.
// Chosen over nine other drafted candidates for landing its punchline on
// the strongest word, "never", with no explanation needed.
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
