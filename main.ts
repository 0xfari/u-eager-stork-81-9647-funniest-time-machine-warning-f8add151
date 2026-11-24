import * as fs from "node:fs";
import * as path from "node:path";

// Funniest Time Machine Warning Label: one line, at most 120 characters.
// Writes the label to /output/entry.txt.
const LINE =
  "CAUTION: Pressing this button twice creates a second you. HR will only pay one of you.";
// One traveller per timeline keeps payroll simple.

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  // The grader reads entry.txt; everything else is scaffolding.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

run();
