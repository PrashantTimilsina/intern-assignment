import type { Metadata } from "next";

import "./globals.css";
import { Google_Sans_Flex, Google_Sans } from "next/font/google";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Landing Page",
  description: "YHH IT Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${googleSansFlex.className}  ${googleSans.variable} antialiased overflow-x-hidden  `}
      >
        {children}
      </body>
    </html>
  );
}
