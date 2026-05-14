import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const THIS_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(THIS_DIR, "..", "..");
const REAL_SCRIPT = join(REPO_ROOT, "scripts", "sync-skills.mjs");
const FIXTURE_SKILL = join(THIS_DIR, "fixtures", "SKILL.md");

let workDir: string;

beforeEach(() => {
  workDir = mkdtempSync(join(tmpdir(), "sync-skills-"));
  mkdirSync(join(workDir, "scripts"), { recursive: true });
  mkdirSync(join(workDir, ".claude", "skills", "clone-website"), {
    recursive: true,
  });
  cpSync(REAL_SCRIPT, join(workDir, "scripts", "sync-skills.mjs"));
  cpSync(
    FIXTURE_SKILL,
    join(workDir, ".claude", "skills", "clone-website", "SKILL.md")
  );
});

afterEach(() => {
  rmSync(workDir, { recursive: true, force: true });
});

function runScript(): string {
  return execFileSync(
    process.execPath,
    [join(workDir, "scripts", "sync-skills.mjs")],
    { cwd: workDir, encoding: "utf8" }
  );
}

describe("sync-skills.mjs", () => {
  it("writes all nine platform skill files", () => {
    runScript();

    const expected = [
      ".codex/skills/clone-website/SKILL.md",
      ".github/skills/clone-website/SKILL.md",
      ".cursor/commands/clone-website.md",
      ".windsurf/workflows/clone-website.md",
      ".gemini/commands/clone-website.toml",
      ".opencode/commands/clone-website.md",
      ".augment/commands/clone-website.md",
      ".continue/commands/clone-website.md",
      ".amazonq/cli-agents/clone-website.json",
    ];

    for (const rel of expected) {
      expect(existsSync(join(workDir, rel)), `missing ${rel}`).toBe(true);
    }
  });

  it("preserves $ARGUMENTS in platforms that support it natively", () => {
    runScript();

    const codex = readFileSync(
      join(workDir, ".codex/skills/clone-website/SKILL.md"),
      "utf8"
    );
    const opencode = readFileSync(
      join(workDir, ".opencode/commands/clone-website.md"),
      "utf8"
    );

    expect(codex).toContain("$ARGUMENTS");
    expect(opencode).toContain("$ARGUMENTS");
  });

  it("rewrites $ARGUMENTS to {{args}} for Gemini", () => {
    runScript();

    const gemini = readFileSync(
      join(workDir, ".gemini/commands/clone-website.toml"),
      "utf8"
    );

    expect(gemini).toContain("{{args}}");
    expect(gemini).not.toContain("$ARGUMENTS");
  });

  it("strips $ARGUMENTS for platforms without argument substitution", () => {
    runScript();

    for (const rel of [
      ".cursor/commands/clone-website.md",
      ".windsurf/workflows/clone-website.md",
      ".amazonq/cli-agents/clone-website.json",
    ]) {
      const content = readFileSync(join(workDir, rel), "utf8");
      expect(content, `${rel} should not contain $ARGUMENTS`).not.toContain(
        "$ARGUMENTS"
      );
    }
  });

  it("emits valid JSON for the Amazon Q agent file", () => {
    runScript();

    const raw = readFileSync(
      join(workDir, ".amazonq/cli-agents/clone-website.json"),
      "utf8"
    );
    const parsed = JSON.parse(raw);

    expect(parsed.name).toBe("clone-website");
    expect(typeof parsed.description).toBe("string");
    expect(typeof parsed.prompt).toBe("string");
    expect(parsed.fileContext).toEqual(["AGENTS.md", "docs/research/**"]);
  });

  it("emits an auto-generated header where applicable", () => {
    runScript();

    const cursor = readFileSync(
      join(workDir, ".cursor/commands/clone-website.md"),
      "utf8"
    );
    expect(cursor.startsWith("<!-- AUTO-GENERATED")).toBe(true);
  });

  it("exits non-zero when SKILL.md is missing", () => {
    rmSync(join(workDir, ".claude/skills/clone-website/SKILL.md"));

    expect(() => runScript()).toThrow();
  });
});
