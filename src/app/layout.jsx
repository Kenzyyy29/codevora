"use client";

import "./globals.css";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {MetaData} from "next";
import Link from "next/link";
import {usePathname} from "next/navigation";

const disableNavbar = ["/kemitraan"]
const disableFooter = ["/kemitraan"]

const DejaVu = localfont({
 src: [
  {
   path: "../../public/fonts/DejaVuSans-Bold.ttf",
   weight: "500",
  },
 ],
 variable: "--font-dejavu",
});

export const Metadata = {
 images: "../public/Codevora Logo.png",
 title: "Codevora",
 description: "Order Makananmu Tanpa Ribet Lagi!",
};

export default function RootLayout({children}) {
 const pathname = usePathname();
 return (
  <html
   lang="en"
   className={"${DejaVu.variable} !scroll-smooth !scroll-p-14"}>
   <body className="bg-white">
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
