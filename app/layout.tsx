import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ConnectivityProvider } from "@/components/providers/connectivity-provider";
import { PwaRegister } from "@/components/providers/pwa-register";

export const metadata: Metadata = {
  title: "GGC Stockfile | Operations Control Center",
  description:
    "Operational stockpile, procurement, inbound, outbound, fleet, and evidence control for GGC.",
  generator: "v0.app",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icons/icon-192.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B4A2B" },
    { media: "(prefers-color-scheme: dark)", color: "#0B4A2B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ConnectivityProvider>
          <AuthProvider>{children}</AuthProvider>
        </ConnectivityProvider>
        <PwaRegister />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
