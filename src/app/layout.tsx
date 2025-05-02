import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Provider from "./providers";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StreamVibe",
  description: "Movie Streaming Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
