import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const THIS_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(THIS_DIR, "..", "..");
const REAL_SCRIPT = join(REPO_ROOT, "scripts", "sync-agent-rules.sh");
const FIXTURE_AGENTS = join(THIS_DIR, "fixtures", "AGENTS.md");
const FIXTURE_INSPECTION = join(THIS_DIR, "fixtures", "INSPECTION_GUIDE.md");

let workDir: string;

beforeEach(() => {
  workDir = mkdtempSync(join(tmpdir(), "sync-agent-rules-"));
  mkdirSync(join(workDir, "scripts"), { recursive: true });
  mkdirSync(join(workDir, "docs", "research"), { recursive: true });
  cpSync(REAL_SCRIPT, join(workDir, "scripts", "sync-agent-rules.sh"));
  cpSync(FIXTURE_AGENTS, join(workDir, "AGENTS.md"));
  cpSync(
    FIXTURE_INSPECTION,
    join(workDir, "docs", "research", "INSPECTION_GUIDE.md")
  );
});

afterEach(() => {
  rmSync(workDir, { recursive: true, force: true });
});

function runScript(): string {
  return execFileSync(
    "bash",
    [join(workDir, "scripts", "sync-agent-rules.sh")],
    { cwd: workDir, encoding: "utf8" }
  );
}

describe("sync-agent-rules.sh", () => {
  it("writes all four generated agent rule files", () => {
    runScript();

    for (const rel of [
      ".github/copilot-instructions.md",
      ".clinerules",
      ".continue/rules/project.md",
      ".amazonq/rules/project.md",
    ]) {
      expect(existsSync(join(workDir, rel)), `missing ${rel}`).toBe(true);
    }
  });

  it("inlines @-imported file contents", () => {
    runScript();

    const cline = readFileSync(join(workDir, ".clinerules"), "utf8");

    expect(cline).toContain("Top-level instructions for the test fixture.");
    expect(cline).toContain("Imported content goes here.");
    expect(cline).not.toMatch(/^@docs\/research\/INSPECTION_GUIDE\.md/m);
  });

  it("emits a fallback comment when an @import is missing", () => {
    runScript();

    const cline = readFileSync(join(workDir, ".clinerules"), "utf8");

    expect(cline).toContain(
      "<!-- Import not found: docs/research/MISSING_FILE.md -->"
    );
  });

  it("prepends the AUTO-GENERATED header to every output", () => {
    runScript();

    for (const rel of [
      ".github/copilot-instructions.md",
      ".clinerules",
      ".continue/rules/project.md",
      ".amazonq/rules/project.md",
    ]) {
      const content = readFileSync(join(workDir, rel), "utf8");
      expect(content.startsWith("<!-- AUTO-GENERATED")).toBe(true);
    }
  });

  it("includes Continue-specific frontmatter for the Continue rule file", () => {
    runScript();

    const cont = readFileSync(
      join(workDir, ".continue/rules/project.md"),
      "utf8"
    );

    expect(cont).toContain("description: Project conventions");
    expect(cont).toContain("alwaysApply: true");
  });

  it("strips carriage returns from CRLF source files", () => {
    const crlf = readFileSync(FIXTURE_AGENTS, "utf8").replace(/\n/g, "\r\n");
    writeFileSync(join(workDir, "AGENTS.md"), crlf);

    runScript();

    const cline = readFileSync(join(workDir, ".clinerules"), "utf8");
    expect(cline).not.toMatch(/\r/);
    expect(cline).toContain("Imported content goes here.");
  });

  it("exits non-zero when AGENTS.md is missing", () => {
    rmSync(join(workDir, "AGENTS.md"));

    expect(() => runScript()).toThrow();
  });

  it("produces byte-identical output on a second run (idempotent)", () => {
    runScript();
    const first = readFileSync(join(workDir, ".clinerules"), "utf8");
    runScript();
    const second = readFileSync(join(workDir, ".clinerules"), "utf8");

    expect(second).toBe(first);
  });
});
