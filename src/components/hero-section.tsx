"use client";

import { useEffect, useState, type CSSProperties } from "react";

function stagger(mounted: boolean, delayMs: number): CSSProperties {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 700ms var(--ease-apple) ${delayMs}ms, transform 700ms var(--ease-apple) ${delayMs}ms`,
    willChange: "opacity, transform",
  };
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      aria-label="Featured"
      className="relative w-full overflow-hidden"
      style={{
        background: "#f5f5f7",
        color: "#1d1d1f",
        paddingTop: "calc(44px + 96px)",
        paddingBottom: 56,
      }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 700, paddingInline: 22 }}
      >
        <p
          className="hero-entrance"
          style={{
            ...stagger(mounted, 0),
            fontSize: 17,
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#6e6e73",
          }}
        >
          New
        </p>

        <h1
          className="hero-entrance"
          style={{
            ...stagger(mounted, 0),
            marginTop: 16,
            fontSize: "clamp(48px, 7vw, 80px)",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            fontWeight: 600,
          }}
        >
          Lorem ipsum.
          <br />
          Built different.
        </h1>

        <p
          className="hero-entrance"
          style={{
            ...stagger(mounted, 80),
            marginTop: 12,
            fontSize: "clamp(21px, 3vw, 28px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "#1d1d1f",
          }}
        >
          Ultra-thin. Ultra-light. Pure precision.
        </p>

        <div
          className="hero-entrance flex flex-wrap items-center justify-center"
          style={{ ...stagger(mounted, 140), marginTop: 24, gap: 18 }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 44,
              paddingInline: 22,
              borderRadius: 999,
              fontSize: 17,
              fontWeight: 400,
              background: "#0071e3",
              color: "#fff",
              transition: "background-color 200ms var(--ease-apple)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0077ed";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0071e3";
            }}
          >
            Learn more
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 44,
              fontSize: 17,
              fontWeight: 400,
              color: "#0071e3",
              transition: "opacity 200ms var(--ease-apple)",
            }}
            className="hover:opacity-80"
          >
            Buy
            <span aria-hidden="true" style={{ marginLeft: 4 }}>
              ›
            </span>
          </a>
        </div>

        <div
          className="hero-entrance"
          style={{ ...stagger(mounted, 220), marginTop: 32, width: "100%" }}
        >
          <div
            className="hero-float"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              borderRadius: 24,
              overflow: "hidden",
              background:
                "radial-gradient(circle at 50% 35%, #ffffff 0%, #ececf1 50%, #d8d8de 100%)",
              boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 28% 32%, rgba(120, 160, 255, 0.28) 0%, transparent 55%), radial-gradient(circle at 72% 68%, rgba(255, 180, 200, 0.22) 0%, transparent 55%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
