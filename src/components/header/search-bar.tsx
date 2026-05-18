"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon, SearchIcon } from "@/components/icons";

const DEPARTMENTS = [
  "All Departments",
  "Lorem Electronics",
  "Ipsum Computers",
  "Dolor Home & Kitchen",
  "Sit Books",
  "Amet Fashion",
  "Consectetur Toys",
  "Adipiscing Sports",
  "Elit Beauty",
] as const;

const STATIC_SUGGESTIONS = [
  "lorem ipsum",
  "lorem ipsum dolor sit",
  "lorem deals today",
  "ipsum gift card",
  "dolor headphones",
  "sit amet phone case",
  "consectetur laptop",
] as const;

export function SearchBar() {
  const [dept, setDept] = useState<string>(DEPARTMENTS[0]);
  const [deptOpen, setDeptOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputId = useId();
  const listboxId = useId();

  const suggestions = query
    ? STATIC_SUGGESTIONS.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase()),
      )
    : STATIC_SUGGESTIONS.slice(0, 5);

  const autocompleteOpen = focused && suggestions.length > 0;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setDeptOpen(false);
        setFocused(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDeptOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!autocompleteOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      setQuery(suggestions[activeIndex]);
      setFocused(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-10 flex-1 overflow-visible rounded-md"
    >
      <div className="flex h-10 w-full overflow-hidden rounded-md ring-0 focus-within:ring-[3px] focus-within:ring-[var(--cta)]">
        {/* Department selector */}
        <div className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={deptOpen}
            onClick={() => setDeptOpen((v) => !v)}
            className="flex h-10 shrink-0 items-center gap-1 bg-[oklch(0.92_0_0)] px-2 text-[12px] text-[oklch(0.28_0_0)] hover:bg-[oklch(0.88_0_0)]"
          >
            <span className="max-w-[120px] truncate">{dept}</span>
            <ChevronDownIcon className="size-3" />
          </button>
          {deptOpen && (
            <ul
              role="listbox"
              className="absolute left-0 top-full z-50 mt-px max-h-[360px] w-[220px] overflow-y-auto rounded-sm border border-[oklch(0.85_0_0)] bg-white py-1 text-[oklch(0.18_0_0)] shadow-[0_4px_16px_oklch(0_0_0_/_15%)]"
            >
              {DEPARTMENTS.map((d) => {
                const active = d === dept;
                return (
                  <li key={d}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => {
                        setDept(d);
                        setDeptOpen(false);
                      }}
                      className={`flex w-full items-center px-3 py-1.5 text-left text-[13px] hover:bg-[oklch(0.97_0_0)] ${
                        active ? "font-bold" : ""
                      }`}
                    >
                      {d}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Input */}
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={autocompleteOpen}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined
          }
          placeholder="Search Shop"
          aria-label="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onFocus={() => setFocused(true)}
          onKeyDown={onInputKeyDown}
          className="min-w-0 flex-1 bg-white px-2 text-[14px] text-[oklch(0.18_0_0)] outline-none"
        />

        {/* Submit */}
        <button
          type="submit"
          aria-label="Submit search"
          className="flex h-10 w-12 shrink-0 items-center justify-center bg-[var(--cta)] hover:bg-[var(--cta-hover)]"
        >
          <SearchIcon className="size-5 text-[var(--cta-foreground)]" />
        </button>
      </div>

      {/* Autocomplete */}
      {autocompleteOpen && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-px max-h-[380px] overflow-y-auto rounded-sm border border-[oklch(0.85_0_0)] bg-white py-1 text-[oklch(0.18_0_0)] shadow-[0_4px_16px_oklch(0_0_0_/_15%)]"
        >
          {suggestions.map((s, i) => {
            const active = i === activeIndex;
            return (
              <li
                key={s}
                id={`${listboxId}-${i}`}
                role="option"
                aria-selected={active}
              >
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setQuery(s);
                    setFocused(false);
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-[14px] ${
                    active ? "bg-[oklch(0.95_0_0)]" : ""
                  }`}
                >
                  <SearchIcon className="size-3.5 text-[oklch(0.55_0_0)]" />
                  <span>{s}</span>
                  {dept !== DEPARTMENTS[0] && (
                    <span className="text-[12px] text-[oklch(0.45_0_0)]">
                      in {dept}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
