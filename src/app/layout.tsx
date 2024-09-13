import type { Metadata } from "next";
import "./globals.css";
import {Outfit} from 'next/font/google'

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});


export const metadata: Metadata = {
  title: "Nft preview card",
  description: "Challenge from frontendmentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
