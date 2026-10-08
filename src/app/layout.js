import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.xyvot.com";
const SITE_NAME = "Xyvot";
const SITE_DESCRIPTION =
  "Xyvot is the instant commerce platform connecting local shops with customers. Groceries and essentials delivered in 15 minutes. Sell online, deliver fast, grow your business.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xyvot — Instant Commerce for Local Businesses | 15-Min Delivery",
    template: "%s | Xyvot",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Xyvot",
    "instant commerce",
    "quick commerce",
    "15 minute delivery",
    "grocery delivery",
    "local shops online",
    "sell online India",
    "delivery partner",
  ],
  authors: [{ name: "Xyvot" }],
  creator: "Xyvot",
  publisher: "Xyvot",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Xyvot — Instant Commerce for Local Businesses",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xyvot — Instant commerce platform for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xyvot — Instant Commerce for Local Businesses",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Bishal: paste your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Xyvot",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
