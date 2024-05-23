import type { Metadata } from "next";
import { PT_Sans, Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pt_sans",
});
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "Mother!",
  description: "CS 132 Data Science Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
