import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { aeonik } from "./fonts";
import "./globals.css";
import TopBar from "@/layouts/TopBar";
import Link from "next/link";
import Image from "next/image";
import Facebook from "@/icons/Facebook";
import styles from "./Page.module.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://909ec.com"),
  title: {
    default: "909 Equity Capital | Build Generational Wealth",
    template: "%s | 909 Equity Capital",
  },
  description:
    "909 Equity Capital is a real estate investment firm focused on multifamily acquisitions, investor education, and long-term wealth preservation.",
  applicationName: "909 Equity Capital",
  referrer: "origin-when-cross-origin",
  keywords: [
    "909 Equity Capital",
    "real estate investment firm",
    "multifamily acquisitions",
    "generational wealth",
    "wealth preservation",
    "passive income",
    "investor education",
    "private equity real estate",
    "family office values",
    "institutional underwriting",
  ],
  authors: [{ name: "909 Equity Capital", url: "https://909ec.com" }],
  creator: "909 Equity Capital",
  publisher: "909 Equity Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "909 Equity Capital | Build Generational Wealth",
    description:
      "Transgenerational wealth rooted in family values through disciplined real estate investment and investor education.",
    url: "https://909ec.com",
    siteName: "909 Equity Capital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "909 Equity Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "909 Equity Capital | Build Generational Wealth",
    description:
      "Build, protect, and position capital to serve future generations.",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Real Estate Investment",
  classification: "Business",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/logo.png"],
  },
  appleWebApp: {
    capable: true,
    title: "909 Equity Capital",
    statusBarStyle: "default",
  },
  appLinks: {
    web: {
      url: "https://909ec.com",
      should_fallback: true,
    },
  },
  other: {
    "msapplication-TileColor": "#153635",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#153635" },
    { media: "(prefers-color-scheme: dark)", color: "#153635" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${roboto.variable} ${aeonik.variable}`}>
        <TopBar />
        {children}
        <footer className={styles.footer}>
          <div className={styles.footer_top}>
            <div className={styles.footer_top_left}>
              <Image
                src="/logo_white.png"
                width={100}
                height={100}
                alt="909 Equity Capital"
              />
              <div>
                <h4>Contact us</h4>
                <small>
                  <Link href="mailto:info@909equitycapital.com">
                    info@909equitycapital.com
                  </Link>
                </small>
                <small>
                  <Link href="tel:+2349092686858">+234 9092686858</Link>
                </small>
              </div>
              <div>
                <h4>Location</h4>
                <address>
                  21 Aso Rock street, Block 29 Atlanta, Abuja, Republic of Congo
                </address>
              </div>
            </div>
            <div className={styles.footer_top_right}>
              <div className={styles.quick_links}>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
                <Link href="/">Quick Link</Link>
              </div>
              <div className={styles.contact}>
                <h4>Stay Connected</h4>
                <div>
                  <Link href="/">
                    <Facebook />
                  </Link>
                  <Link href="/">
                    <Facebook />
                  </Link>
                  <Link href="/">
                    <Facebook />
                  </Link>
                  <Link href="/">
                    <Facebook />
                  </Link>
                  <Link href="/">
                    <Facebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <small>
              &copy; {new Date().getFullYear()} 909EquityCapital. All Rights
              Reserved
            </small>
            <div>
              <Link href="/">Policy and Terms</Link>
              <Link href="/">Website by Egwinity</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
