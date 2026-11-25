import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Office Joke, Judged Head to Head.
// Setup: replying-all to beg everyone to stop replying-all.
// Turn: the thread only grows — and earns its own calendar invite.
const ENTRY =
  "I replied-all asking everyone to stop replying-all, and now the thread has 47 replies and its own calendar invite.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
