import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shanrong Wu | Computer Science & Software",
  description: "Shanrong Wu, computer science student at UIUC. Projects and experience in software development, systems, and robotics.",
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
