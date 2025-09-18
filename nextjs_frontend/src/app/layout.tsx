import type { Metadata } from "next";
import "./globals.css";

/**
 * PUBLIC_INTERFACE
 * Root layout for the Next.js App Router.
 * Purpose: Provides the HTML scaffold and global styling for all pages.
 * Params: children - React.ReactNode content for the current route.
 * Returns: HTML document structure wrapping the route component tree.
 */
export const metadata: Metadata = {
  title: "TravelSmart",
  description: "AI-powered booking platform",
  icons: {
    icon: "/vercel.svg",
    shortcut: "/file.svg",
    apple: "/globe.svg",
  },
};

/**
 * PUBLIC_INTERFACE
 * RootLayout provides the minimal, valid HTML structure to ensure
 * Next.js can inject its bootstrap scripts properly and static assets resolve.
 * Includes a persistent Navbar container and footer structure hooks.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
