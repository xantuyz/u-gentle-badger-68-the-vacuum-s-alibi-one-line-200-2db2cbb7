// Entry for make.fun "The Vacuum's Alibi: One Line, 200 Characters" bounty.
//
// Writes one line to /output/entry.txt: the excuse a robot vacuum gives
// for missing a spot.
//
// The line: a deadpan first-person alibi. The vacuum's sensors reclassify
// the spot as wildlife, so it cannot clean it (not licensed for animals),
// and its schedule does not allow heroics. Three beats, punch at the end:
// sensors (smug machine voice), a surprise reclassification, and a
// schedule that refuses to bend. 114 characters, no trailing newline.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My sensors classified the spot as wildlife. I am not licensed for animals, and my schedule does not allow heroics.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
  console.log(`wrote ${chars.length} characters to ${OUTPUT_PATH}`);
}

main();
