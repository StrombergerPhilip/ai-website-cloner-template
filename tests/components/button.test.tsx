// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";

afterEach(cleanup);

const VARIANT_MARKERS = {
  default: "bg-primary",
  outline: "border-border",
  secondary: "bg-secondary",
  ghost: "hover:bg-muted",
  destructive: "bg-destructive/10",
  link: "underline-offset-4",
} as const;

const SIZE_MARKERS = {
  default: "h-8",
  xs: "h-6",
  sm: "h-7",
  lg: "h-9",
  icon: "size-8",
  "icon-xs": "size-6",
  "icon-sm": "size-7",
  "icon-lg": "size-9",
} as const;

type Variant = keyof typeof VARIANT_MARKERS;
type Size = keyof typeof SIZE_MARKERS;

function getButton() {
  return screen.getByRole("button");
}

describe("<Button />", () => {
  it("renders a button with the shadcn data-slot marker", () => {
    render(<Button>Click me</Button>);
    const btn = getButton();
    expect(btn.getAttribute("data-slot")).toBe("button");
    expect(btn.textContent).toBe("Click me");
  });

  it("applies the default variant and size when none are provided", () => {
    render(<Button>x</Button>);
    const cls = getButton().className;
    expect(cls).toContain(VARIANT_MARKERS.default);
    expect(cls).toContain(SIZE_MARKERS.default);
  });

  it.each(Object.entries(VARIANT_MARKERS) as Array<[Variant, string]>)(
    "applies the %s variant",
    (variant, marker) => {
      render(<Button variant={variant}>x</Button>);
      expect(getButton().className).toContain(marker);
    }
  );

  it.each(Object.entries(SIZE_MARKERS) as Array<[Size, string]>)(
    "applies the %s size",
    (size, marker) => {
      render(<Button size={size}>x</Button>);
      expect(getButton().className).toContain(marker);
    }
  );

  it("merges user className with variant classes via tailwind-merge", () => {
    render(<Button className="custom-class">x</Button>);
    const cls = getButton().className;
    expect(cls).toContain("custom-class");
    expect(cls).toContain(VARIANT_MARKERS.default);
  });

  it("lets user className override conflicting variant utilities (last wins)", () => {
    render(<Button className="bg-red-500">x</Button>);
    const tokens = new Set(getButton().className.split(/\s+/));
    expect(tokens.has("bg-red-500")).toBe(true);
    expect(tokens.has("bg-primary")).toBe(false);
  });

  it("forwards arbitrary DOM props to the underlying button", () => {
    render(
      <Button type="submit" aria-label="Save" data-testid="save">
        Save
      </Button>
    );
    const btn = getButton();
    expect(btn.getAttribute("type")).toBe("submit");
    expect(btn.getAttribute("aria-label")).toBe("Save");
    expect(btn.getAttribute("data-testid")).toBe("save");
  });

  it("respects the disabled prop", () => {
    render(<Button disabled>x</Button>);
    expect((getButton() as HTMLButtonElement).disabled).toBe(true);
  });

  it("fires the click handler when clicked", () => {
    let clicked = 0;
    render(<Button onClick={() => clicked++}>x</Button>);
    getButton().click();
    expect(clicked).toBe(1);
  });

  it("does not fire the click handler when disabled", () => {
    let clicked = 0;
    render(
      <Button disabled onClick={() => clicked++}>
        x
      </Button>
    );
    getButton().click();
    expect(clicked).toBe(0);
  });
});
