import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parívie — Paris Hilton Skincare",
  description:
    "Luxury skincare by Paris Hilton, powered by inPHinite Youth Technology.",
};

export default function ParivieLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="theme-parivie min-h-screen bg-background">{children}</div>;
}
