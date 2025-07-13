import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";

const geistSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube",
  description: "Watch videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
      <body
        className={geistSans.className}
      >
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
