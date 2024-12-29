"use client";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
 return (
  <div>
   {/* Home Page */}
   <section className="bg-tulang text-center py-[70%] lg:py-[14%] 2xl:py-[16%] h-screen">
    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
     CODEVORA{""}
    </h1>
    <p className="mt-4 text-gray-400 2xl:text-xl lg:text-lg text-sm">
     Solusi pembangunan dan pengelolaan bisnis dalam dunia digital. Ingin bisnis
     anda berkembang?
     <span className="font-bold text-primary">#CodevorainAja</span>{" "}
    </p>
    <Link
     href="#about">
     <button className="transition ease-in-out bg-gradient-to-r from-primary to-secondary border rounded-full shadow-md text-white py-3 px-5 mt-7 hover:scale-110 duration-300">
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
     className="2xl:w-[32%] lg:w-[27%] w-[100%] 2xl:pt-0 lg:pt-0 pt-10 opacity-10 absolute right-0"
    />
   </section>

   {/*Project Page */}
  

   {/*Careers Page */}
   
  </div>
 );
}
