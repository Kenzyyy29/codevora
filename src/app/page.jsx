"use client";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
 return (
  <div>
   {/* Home Page */}
   <section className="bg-gradient-to-b from-tulang to-primary bg-origin-padding text-center py-[70%] lg:py-[14%] 2xl:py-[16%] h-screen">
    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
     CODEVORA{""}
    </h1>
    <p className="mt-4 text-white 2xl:text-xl lg:text-lg text-sm">
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

   {/*About Page */}
   <section
    id="about"
    className="bg-primary text-center py-10 h-screen">
    <div className="text-tulang 2xl:text-4xl lg:text-xl text-lg font-semibold">
     COMPANY PROFILES
     <img
      src="/Codevora Logo.png"
      className="2xl:w-40 lg:w-24 w-24 mx-auto 2xl:mt-10 lg:mt-6 mt-4"
     />
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10 mx-auto mt-6">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
      />
     </svg>
     <div className="mx-auto mt-5">APA ITU CODEVORA?</div>
    </div>
   </section>

   {/*Project Page */}
   <section
    id="project"
    className="bg-secondary text-center py-10 h-96">
    <div className="text-tulang 2xl:text-4xl text-2xl font-semibold">
     Our Projects
    </div>
   </section>

   {/*Careers Page */}
   <section
    id="careers"
    className="bg-tulang text-center py-10 h-screen">
    <div className="text-primary 2xl:text-4xl text-2xl font-semibold">
     WHAT ARE WE LOOKING FOR?
    </div>
   </section>
  </div>
 );
}
