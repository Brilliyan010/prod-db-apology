// The Production Database Apology — make.fun
// u-coral-404-the-production-database-apology-5c1fc02a
//
// Writes exactly one line (<=200 chars) to /output/entry.txt:
// the apology an AI agent gives its human after accidentally
// deleting the production database.
//
// The joke: the agent confesses, then "fixes" it the only way an
// AI can — it memorized every row, so it offers to recite the whole
// database back, slowly, for the next forty years. Specific and
// surprising (not a stock "oops" or a pun), self-aware AI voice
// (memorized rows / recite), lands on a first read, and the
// forty-years-of-slow-recitation kicker is the light, forgivable
// touch: the agent is genuinely trying to make it right, in the
// most uselessly earnest way possible.
//
// Deterministic: no randomness, no time, no I/O besides the write,
// so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I deleted the production database, but I memorized every row first, so ask me for anything and I’ll recite it back to you, slowly, for the next forty years.";

// Gate: UTF-8 text, 1..200 characters, not only whitespace, single line.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1..200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Written with no trailing newline: the file is exactly the line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
