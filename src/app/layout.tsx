import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getServerDict } from "@/lib/i18n/get-server-dict";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foxora.io";

export const metadata: Metadata = {
  title: "TGI – Nicht überlegen. TUN.",
  description: "TGI – Das Nummer 1 Sales Team. Worldwide. Wir bauen dein Team und du verdienst von der Produktivität.",
  metadataBase: new URL(SITE_URL),
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
      lang="de"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('foxora-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-foreground focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <I18nProvider initialLocale={locale}>
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
