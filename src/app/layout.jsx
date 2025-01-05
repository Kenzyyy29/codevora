"use client";

import "./globals.css";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {MetaData} from "next";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {React, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const disableNavbar = ["/kemitraan"];
const disableFooter = ["/kemitraan"];

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
 {
  useEffect(() => {
   AOS.init({
    duration: 800,
    once: false,
   });
  }, []);
 }
 const pathname = usePathname();
 const Router = useRouter();
 return (
  <html
   lang="en"
   className={"${DejaVu.variable} !scroll-smooth scroll-mb-0"}>
   <body className="bg-tulang">
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
