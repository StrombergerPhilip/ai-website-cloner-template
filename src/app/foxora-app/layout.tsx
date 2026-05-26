import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOXORA — Sammle Bitcoin Rewards bei jedem Einkauf",
  description:
    "Foxora verwandelt jeden Einkauf in Sats. Verbinde deine Karte, kaufe wie immer — und sieh zu, wie deine Bitcoin-Rewards wachsen.",
};

export default function FoxoraAppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-foxora-app min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
