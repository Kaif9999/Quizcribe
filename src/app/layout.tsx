import type { Metadata } from "next";
import localFont from "next/font/local";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Stars } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QuizScribe",
  description: "Transcribe-Summarise take quizes for your lectures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}
        >
        <main>
          <UserProvider>
        <Navbar />
          {children}
      </UserProvider>
          </main>
      </body>
    </html>
  );
}
