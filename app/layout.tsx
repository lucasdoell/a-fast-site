import type React from "react";
import "./globals.css";

import { GeistMono } from "geist/font/mono";
// import { Roboto_Mono } from "next/font/google";
// const font = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistMono.className} dark`}>
      {/* // <html lang="en" className={`${font.className} dark`}> */}
      {/* <html lang="en"> */}

      <body className=" bg-black text-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
      <SpeedInsights />
    </html>
  );
}
