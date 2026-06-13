import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: "./fonts/Outfit-VariableFont.ttf",
  variable: "--font-outfit",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Usman Siddiqui | Creative Developer Portfolio",
    template: "%s | Usman Siddiqui"
  },
  description: "A premium scroll-linked immersive portfolio showcasing creative development, design, and engineering.",
  metadataBase: new URL("https://usman-portfolio.vercel.app"),
  openGraph: {
    title: "Usman Siddiqui | Creative Developer Portfolio",
    description: "A premium scroll-linked immersive portfolio showcasing creative development, design, and engineering.",
    url: "https://usman-portfolio.vercel.app",
    siteName: "Usman Siddiqui Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Usman Siddiqui Portfolio Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Siddiqui | Creative Developer Portfolio",
    description: "A premium scroll-linked immersive portfolio showcasing creative development, design, and engineering.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased bg-[#08080a] text-[#f4f4f5] selection:bg-orange-500/30 selection:text-orange-300">
        {children}
      </body>
    </html>
  );
}
