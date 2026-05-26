import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foxora · Strategy Brief v2.0",
  description:
    "Foxora — Bitcoin Rewards. Wie Payback, nur mit Bitcoin. Strategy Brief Final Concept.",
};

export default function FoxoraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-foxora foxora-bg relative min-h-screen text-[var(--foxora-text)]">
      <div className="foxora-grain" aria-hidden />
      {children}
    </div>
  );
}
