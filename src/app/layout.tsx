import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getServerDict } from "@/lib/i18n/get-server-dict";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Foxora — Start Kit · v2.0",
    template: "%s · Foxora",
  },
  description:
    "Foxora: Premium-Loyalty mit hartem 100 %-Cap. AT GmbH × Dubai FZ-LLC. Die nächsten 180 Tage.",
  applicationName: "Foxora",
  authors: [{ name: "Foxora GmbH" }],
  openGraph: {
    title: "Foxora — Start Kit · v2.0",
    description:
      "Premium-Loyalty mit hartem 100 %-Cap. AT GmbH × Dubai FZ-LLC.",
    type: "website",
    siteName: "Foxora",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1916" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = await getServerDict();
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <I18nProvider initialLocale={locale}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
