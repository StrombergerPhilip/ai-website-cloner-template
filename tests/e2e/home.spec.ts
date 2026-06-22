import AxeBuilder from "@axe-core/playwright";
import { expect, test, type ConsoleMessage } from "@playwright/test";

test.describe("home page", () => {
  test("loads without console errors or hydration warnings", async ({
    page,
  }) => {
    const problems: string[] = [];

    page.on("console", (msg: ConsoleMessage) => {
      if (msg.type() === "error" || msg.type() === "warning") {
        const text = msg.text();
        // React surfaces hydration mismatches as warnings; surface them too.
        if (msg.type() === "error" || /hydrat|did not match/i.test(text)) {
          problems.push(`[${msg.type()}] ${text}`);
        }
      }
    });

    page.on("pageerror", (err) => {
      problems.push(`[pageerror] ${err.message}`);
    });

    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();

    expect(
      problems,
      `Console / page errors during load:\n${problems.join("\n")}`
    ).toEqual([]);
  });

  test("has no detectable WCAG 2.1 AA accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations,
      `axe violations:\n${results.violations
        .map((v) => `  - ${v.id}: ${v.help}`)
        .join("\n")}`
    ).toEqual([]);
  });

  test("matches visual baseline", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Wait for web fonts so screenshots are stable.
    await page.evaluate(() => document.fonts.ready);

    await expect(page).toHaveScreenshot("home.png", { fullPage: true });
  });
});
