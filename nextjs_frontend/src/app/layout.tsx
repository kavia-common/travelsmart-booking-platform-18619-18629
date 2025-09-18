import type { Metadata } from "next";
import "./globals.css";

/**
 * PUBLIC_INTERFACE
 * Root layout for the Next.js App Router.
 * Purpose: Minimal HTML scaffold and global styling for all pages.
 * Params: children - React.ReactNode content for the current route.
 * Returns: HTML document structure wrapping the route component tree.
 */
export const metadata: Metadata = {
  title: "TravelSmart",
  description: "AI-powered booking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
