"use client";

import Image from "next/image";

export default function Home() {
 return (
  <div className="">
   {/* Home Page */}
   <section className="text-center py-44 h-screen">
    <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
     CODEVORA
    </h1>
    <p className="mt-4 text-gray-600">
     Used by some of the world's largest companies, Next.js enables you to
     create{" "}
     <span className="font-bold">
      high- <br />
      quality web applications
     </span>{" "}
     with the power of React components.
    </p>
    <img
     src="/Codevora Logo Blue.png"
     alt="gambar-kiri"
     className="w-16 ml-3 -rotate-12"
    />
   </section>

   {/*About Page */}
   <section className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-transparent text-center py-36 h-screen">
    <h1 className="text-8xl font-bold text-white">CODEVORA</h1>
    <p className="mt-4 text-gray-600">
     Used by some of the world's largest companies, Next.js enables you to
     create{" "}
     <span className="font-bold">
      high- <br />
      quality web applications
     </span>{" "}
     with the power of React components.
    </p>
    <div className="mt-8 flex justify-center gap-4">
     <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
      Get Started
     </button>
     <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
      Learn Next.js
     </button>
    </div>
   </section>
  </div>
 );
}
