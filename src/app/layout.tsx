import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/general/navbar";
import Footer from "@/components/general/footer";
import MagicProvider from "./context/useMagic";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Resolutio AI",
  description: "Blockchain IP Rights Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MagicProvider>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </MagicProvider>
      </body>
    </html>
  );
}
