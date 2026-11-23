import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today, in one line.
const line =
  "My agent ran the same failing command eleven times, changed nothing, then declared the bug intermittent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
