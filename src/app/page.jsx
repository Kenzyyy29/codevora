"use client";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
 return (
  <div>
   <section className="bg-tulang text-start py-[70%] lg:py-[8%] 2xl:py-[16%] h-screen mx-10">
    <h1 data-aos="fade-right" className="mt-4 text-primary font-bold 2xl:text-xl lg:text-4xl text-sm">
     Solusi pembangunan dan <br/>pengelolaan bisnis anda <br/>dalam dunia digital.{""}
     
    </h1>
    <Link
     href="#about">
     <button data-aos="fade-up" className="transition ease-in-out bg-gradient-to-r from-primary to-secondary border rounded-full shadow-md text-white py-3 px-5 mt-7 hover:scale-110 duration-300">
      Apa itu Codevora?
     </button>
    </Link>
    <img
     src="/Codevora left.png"
     alt="gambar-kiri"
     className="lg:w-[24%] 2xl:w-[20%] w-[60%] opacity-10 absolute top-24 left-0"
    />
    <img
     src="/Codevora right.png"
     alt="gambar-kiri"
     className="2xl:w-[32%] lg:w-[65%] w-[100%] 2xl:pt-0 opacity-10 absolute top-0 right-0"
    />
   </section>
  </div>
 );
}
