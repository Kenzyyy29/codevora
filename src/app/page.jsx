"use client";

import Image from "next/image";
import "./globals.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Home() {
 return (   
  <div className="">
   {/* Home Page */}
   <section className="bg-tulang text-center lg:py-[40%] 2xl:py-[80%] py-[70%] h-screen">
    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
     CODEVORA{""}
    </h1>
    <p className="mt-4 text-gray-600 lg:text-xl text-sm">
     Solusi pembangunan dan pengelolaan bisnis dalam dunia digital. Ingin bisnis
     anda berkembang?
     <span className="font-bold">#CodevorainAja</span>{" "}
    </p>
    <button className="bg-gradient-to-r from-primary to-secondary border-lg shadow-md text-white py-2 px-5 mt-7 rounded">
     Apa itu Codevora?
    </button>
    <img
     src="/Codevora left.png"
     alt="gambar-kiri"
     className="xl:w-[30%] 2xl:w-[20%] w-[60%] opacity-10 absolute top-24 left-0"
    />
    <img
     src="/Codevora right.png"
     alt="gambar-kiri"
     className="xl:w-[32%] w-[100%] lg:pt-0 pt-10  opacity-10 absolute right-0"
    />
   </section>

   {/*About Page */}
   <section className="bg-primary text-center py-10 h-screen">
    <div className="text-tulang lg:text-4xl text-2xl font-semibold">
     COMPANY PROFILES
     <img
      src="/Codevora Logo.png"
      className="lg:w-40 w-24 mx-auto lg:mt-16 mt-8"
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
     <div className="mx-auto mt-6">APA ITU CODEVORA?</div>
    </div>
   </section>

   {/*Looking Page */}
   <section className="bg-tulang text-center py-10 h-screen">
    <div className="text-primary lg:text-4xl text-2xl font-semibold">
     WHAT ARE WE LOOKING FOR?
    </div>
   </section>
  </div>
 );
}
