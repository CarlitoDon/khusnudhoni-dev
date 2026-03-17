import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";
import { SITE_PROFILE } from "@/data/site";
import { BackdropCapabilityProbe } from "@/components/BackdropCapabilityProbe";
import { ScrollBehaviorFix } from "@/components/ScrollBehaviorFix";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactModalProvider } from "@/components/ContactModalProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_PROFILE.rootDomain),
  title: {
    default: `${SITE_PROFILE.name} | Portfolio`,
    template: `%s | ${SITE_PROFILE.name}`,
  },
  description:
    "Portfolio Khusnudhoni untuk growth marketing, backend engineering, dan fullstack web development.",
  keywords: [
    "growth marketing",
    "technical marketing",
    "backend developer",
    "fullstack developer",
    "meta ads",
    "google ads",
    "portfolio",
    SITE_PROFILE.name.toLowerCase(),
  ],
  openGraph: {
    title: `${SITE_PROFILE.name} | Portfolio`,
    description:
      "Showcase growth marketing systems dan engineering projects dengan pendekatan measurable impact.",
    url: SITE_PROFILE.rootDomain,
    siteName: `${SITE_PROFILE.name} Portfolio`,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_PROFILE.name} | Portfolio`,
    description:
      "Growth + engineering portfolio with practical case studies and shipped systems.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${sora.variable} ${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContactModalProvider>
            <BackdropCapabilityProbe />
            <ScrollBehaviorFix />
            {children}
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
