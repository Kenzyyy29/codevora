"use client";

import Image from "next/image";
import "./globals.css";

export default function Home() {
 return (
  <div className="">
   {/* Home Page */}
   <section className="bg-tulang text-center lg:py-80 xl:py-80 py-[70%] h-screen">
    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
     CODEVORA{""}
    </h1>
    <p className="mt-4 text-gray-600 lg:text-xl text-sm">
     Solusi pembangunan dan pengelolaan bisnis dalam dunia digital. Ingin bisnis
     anda berkembang?
     <span className="font-bold">#CodevorainAja</span>{" "}
    </p>
    <button className="bg-gradient-to-r from-primary to-secondary border-lg shadow-md text-white py-2 px-5 mt-7 rounded hover:bg-gray-800">
     Apa itu Codevora?
    </button>
    <img
     src="/Codevora left.png"
     alt="gambar-kiri"
     className="xl:w-[20%] w-[60%] opacity-10 absolute top-24 left-0"
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
    </div>
    <img
     src="/Codevora Logo.png"
     className="lg:w-40 w-24 mx-auto lg:mt-16 mt-8"
    />
   </section>

   {/*About Page */}
   <section className="bg-tulang text-center py-10 h-screen">
    <div className="text-primary lg:text-4xl text-2xl font-semibold">
     WHAT ARE WE LOOKING FOR?
    </div>
   </section>

   {/*Footer */}
   <section className="text-center py-56 bg-gradient-to-r from-primary to-secondary text-white bg-transparent-lg rounded-t-2xl">
    <div className="text-tulang lg:text-4xl text-2xl font-semibold">
     Contact Us
    </div>
   </section>
  </div>
 );
}
