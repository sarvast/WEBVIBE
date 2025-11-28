import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsReg = localFont({
  src: "./fonts/PoppinsReg.ttf",
  variable: "--font-poppins-reg",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Webvibe | AI-Powered Websites for Everyone",
  description: "Get your professional website built with AI in 24-48 hours. Affordable, fast, and easy to manage. Perfect for students, schools, and local businesses in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsReg.variable} antialiased`}>{children}</body>
    </html>
  );
}
