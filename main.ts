// Last Text at One Percent — a dying phone's final text.
// Deterministic: no network, no clock, no randomness. Writes one text
// to /output/entry.txt.
// Revision: first draft was 259 chars (over the 200-char gate) and
// rambled — three confessions plus a screen-time aside. Cut to the two
// sharpest confessions (the faked alarm, the undeleted ex) and the one
// dying line; dropped "okay, listen fast", "every night", "and that
// your screen time report was lying too". Shorter, punchier, same voice.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "1%. before i go: your alarm was never set, i faked it. " +
  "your ex is still in my contacts. " +
  "tell the charger i died mid-scroll, doing what i loved.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
