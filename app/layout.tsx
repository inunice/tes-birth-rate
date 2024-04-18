import type { Metadata } from "next";
import { PT_Sans, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });
const pt_sans = PT_Sans({ weight: "400", subsets: ["latin"] });

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
      <body className={`${urbanist.className} ${pt_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
