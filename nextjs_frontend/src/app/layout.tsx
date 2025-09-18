import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationBanner from "../components/NotificationBanner";
import ChatbotWidget from "../components/ChatbotWidget";

export const metadata: Metadata = {
  title: "TravelSmart — Book hotels & flights with AI",
  description: "AI-powered travel booking platform with dynamic pricing and modern UX.",
  applicationName: "TravelSmart",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ background: 'var(--bg-canvas)', color: 'var(--text-primary)' }}>
        <Navbar />
        <NotificationBanner />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
