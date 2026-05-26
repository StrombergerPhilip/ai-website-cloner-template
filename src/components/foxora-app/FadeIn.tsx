"use client";

import { useEffect, useRef, useState } from "react";

export function FadeIn({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`fxa-fade-in ${visible ? "fxa-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
