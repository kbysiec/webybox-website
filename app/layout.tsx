import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webybox - Indie Dev Studio",
  description:
    "Creating beautiful mobile and web applications with attention to detail, clean UX, and modern technology.",
  keywords: [
    "mobile apps",
    "web apps",
    "indie dev",
    "software development",
    "app development",
  ],
  authors: [{ name: "Webybox", url: "https://webybox.com" }],
  metadataBase: new URL("https://webybox.com"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Webybox",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webybox.com",
    title: "Webybox - Indie Dev Studio",
    description:
      "Creating beautiful mobile and web applications with attention to detail, clean UX, and modern technology.",
    siteName: "Webybox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webybox - Indie Dev Studio",
    description:
      "Creating beautiful mobile and web applications with attention to detail, clean UX, and modern technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
