import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://niyamak-tender-solution.in"
  ),
  title: {
    default:
      "Niyamak Tender Solution - GeM Portal Support & Tender Consultancy",
    template: "%s | Niyamak Tender Solution",
  },
  description:
    "India’s leading tender service consultancy and GeM portal support provider. We help contractors with tender search, document preparation, bid management, DSC setup, authorization codes, and EMD/invoice follow-up.",
  keywords: [
    "tender consultancy",
    "GeM portal support",
    "tender search",
    "bid management",
    "DSC setup",
    "authorization codes",
    "tender documentation",
    "e-tender technical support",
    "GeM service provider",
    "government tenders",
  ],
  openGraph: {
    title:
      "Niyamak Tender Solution - GeM Portal Support & Tender Consultancy",
    description:
      "Tender consultancy and GeM portal support to help you win more tenders.",
    url: "/",
    siteName: "Niyamak Tender Solution",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Niyamak Tender Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Niyamak Tender Solution - GeM Portal Support & Tender Consultancy",
    description:
      "Tender consultancy and GeM portal support to help you win more tenders.",
    images: ["/images/hero-bg.jpg"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Niyamak Tender Solution",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://niyamak-tender-solution.in",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://niyamak-tender-solution.in"}/images/logo.jpeg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8160781810",
        contactType: "customer support",
        email: "niyamaktender@gmail.com",
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/niyamak-tender-solution/",
      "https://www.facebook.com/profile.php?id=61572305348596",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />
      </body>
    </html>
  );
}
