import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";
import Pages5 from "./components/Page5/Pages5";
import Page6 from "./components/Page6/Page6";
import Page2 from "./components/Page2/Page2";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <Hero/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Pages5/>
        <Page6/>
        {children}
      </body>
    </html>
  );
}
