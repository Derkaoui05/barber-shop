// src/app/(main)/layout.tsx

import type { Metadata } from "next";
import { Oswald} from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import { Providers } from "@/providers/Providers";
import { Header } from "@/components/shared/layouts/Header";
import { Footer } from "@/components/shared/layouts/Footer";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import '@/app/globals.css'

// Font definitions
const oswald = Oswald({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});


// Metadata generation
export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "barber shop",
    "haircut",
    "beard trim",
    "grooming",
    "men's haircut",
    "barber services",
  ],
  authors: [{ name: "SharpLook", url: SITE_CONFIG.url }],
  creator: "SharpLook",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: SITE_CONFIG.links.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-Oswald antialiased selection:bg-primary-foreground/30", oswald.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-center"
            richColors
            closeButton
            expand
            visibleToasts={3}
          />
        </Providers>
      </body>
    </html>
  );
}