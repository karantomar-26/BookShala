import type { Metadata } from "next";
import { Inter, Space_Grotesk, Raleway } from "next/font/google";
import React from "react";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import localFont from "next/font/local";
import Hero from "@/components/landingpage/Hero";
import { Link } from "lucide-react";

const myFont = localFont({
  src: "../../bookshala/public/fonts/Satoshi-Variable.woff2",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // ExtraLight
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // SemiBold
    "700", // Bold
    "800", // ExtraBold
    "900", // Black
  ],
  style: [
    "normal", // Regular
    "italic", // Italic
  ],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "BookShala",
  description:
    "BookShala is a social media platform tailored for readers and writers, where creativity meets community. Whether you’re a budding author, a seasoned poet, or an avid reader, Writely provides a vibrant space to publish your work, explore others’ creations, and connect with like-minded individuals.",
  icons: {
    icon: "assets/favicon.ico",
  },
};

export const HeroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <SignedIn>
            <ThemeProvider>{children}</ThemeProvider>
          </SignedIn>
          <SignedOut>
            <Hero />
          </SignedOut>
        </ClerkProvider>
      </body>
    </html>
  );
}
