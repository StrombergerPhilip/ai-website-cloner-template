import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn()", () => {
  it("joins string class names with a single space", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, null, undefined, "", 0, "b")).toBe("a b");
  });

  it("flattens nested arrays", () => {
    expect(cn(["a", ["b", ["c"]]])).toBe("a b c");
  });

  it("respects clsx object syntax", () => {
    expect(cn({ a: true, b: false, c: 1 })).toBe("a c");
  });

  it("merges conflicting tailwind utilities, last wins", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    expect(cn("px-2 py-1", "p-4")).toBe("p-4");
  });

  it("preserves non-conflicting utilities alongside merged ones", () => {
    expect(cn("p-2 text-sm", "p-4")).toBe("text-sm p-4");
  });

  it("handles arbitrary values", () => {
    expect(cn("p-[10px]", "p-[20px]")).toBe("p-[20px]");
  });

  it("returns empty string for no input", () => {
    expect(cn()).toBe("");
  });
});
