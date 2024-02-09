import type { Metadata } from "next";
import { Garamond, Neue } from "@/utils/customFonts";
import SmoothScroll from "../components/layout/SmoothScroll";
import Gradient from "@/components/layout/gradient";
import Background from "@/components/layout/background";
import Nav from "@/components/layout/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephanie Li",
  description:
    "Personal portfolio created by Stephanie Li. Powered by Next.js, Typescript, and Tailwind CSS.",
  creator: "Stephane Li",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Garamond.variable} ${Neue.variable} bg-off-white text-off-white font-neue font-normal text-[0.9rem] sm:text-[1.1rem] antialiased select-none overscroll-none overflow-hidden relative`}
      >
        <Gradient />
        <Background />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
