"use client";

import "./globals.css";
import Head from "next/head";
import {MetaData} from "next";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {React, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {icons} from "@react-icons/all-files";

const disableNavbar = ["/kemitraan", "/form"];
const disableFooter = ["/kemitraan", "/form"];

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
 icons: "favicon.ico",
 title: "Codevora Tech",
 description: "Home Page",
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
   className={"${DejaVu.variable} !scroll-smooth "}>
   <head>
    <title>Codevora</title>
    <meta
     name="description"
     content="Selamat datang di halaman utama Codevora."
    />
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1"
    />
   </head>
   <body className="bg-tulang">
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
