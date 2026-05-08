import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple (Österreich)",
  description:
    "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac and Apple TV.",
};

export default function AppleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="theme-apple min-h-screen bg-background">{children}</div>;
}
