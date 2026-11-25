// One Line, One Laugh — entry program.
//
// Concept (winner of the 3-variant concept test): a New Year's resolution
// treated as an expired product warranty. Fresh DOCUMENT format (an expiry
// NOTICE), five specific, verifiable details (2019, 2,885 days, "starting
// Monday", no refund, no extension, no six-pack), one sharp turn, and every
// word earning its place. 131 chars, inside the 1-140 gate.
//
// The program is deliberately deterministic and offline: it writes exactly
// one line to /output/entry.txt, no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "NOTICE: your 2019 New Year's resolution expired today after 2,885 days of 'starting Monday' — no refund, no extension, no six-pack.";

// Self-check the sealed gate before writing: UTF-8 text, 1 to 140
// characters, not only white space. Fail loudly instead of emitting an
// entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-140 char gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
