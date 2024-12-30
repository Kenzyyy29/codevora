"use client";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Home() {
 const Router = useRouter();
 return (
  <div>
   <section className="bg-tulang text-end py-[70%] lg:py-[8%] 2xl:py-[9%] h-screen mx-10">
    <h1
     data-aos="fade-left"
     className="mt-4 text-primary font-semibold 2xl:text-5xl lg:text-7xl text-sm py-10 px-5">
     Solusi pembangunan dan <br />
     pengelolaan bisnis anda <br />
     dalam dunia digital{""}<br/>
    </h1>
    <img
     src="/Codevora left.png"
     alt="gambar-kiri"
     className="lg:w-[24%] 2xl:w-[20%] w-[60%] opacity-10 absolute top-24 left-0"
    />
    <img
     src="/Codevora right.png"
     alt="gambar-kiri"
     className="2xl:w-[61%] xl:w-[60%] lg:w-[65%] w-[100%] opacity-10 absolute 2xl:top-5 xl:top-12 lg:top-0 right-0"
    />
   </section>
  </div>
  
 );
}
