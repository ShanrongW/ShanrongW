import type { Metadata } from "next";
import { Alegreya, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const alegreya = Alegreya({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shanrong Wu",
  description: "Portfolio made by and for Shanrong Wu",
  icons: {
    icon: [
      { url: "/icon.svg?v=20260319", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: [{ url: "/icon.svg?v=20260319", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg?v=20260319", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${alegreya.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
