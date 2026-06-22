"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delayMs?: number;
  className?: string;
  /** Re-trigger when scrolled back into view. Default: false (one-shot). */
  repeat?: boolean;
  /** IntersectionObserver rootMargin. Default: "0px 0px -10% 0px". */
  rootMargin?: string;
}

export function Reveal({
  children,
  as: Tag = "div",
  delayMs = 0,
  className,
  repeat = false,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "in";
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            (entry.target as HTMLElement).dataset.reveal = "out";
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat, rootMargin]);

  const style: CSSProperties | undefined =
    delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={cn("reveal", className)}
      style={style}
    >
      {children}
    </Component>
  );
}
