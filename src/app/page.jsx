"use client";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Home() {
 const pathname = usePathname();
 const Router = useRouter();
 return (
  <div>
   <section
    className=" 2xl:bg-cover text-start py-[70%] xl:py-[8%] 2xl:py-[9%] h-screen"
    style={{backgroundImage: "url('/bg1.jpg')"}}>
    <h1
     data-aos="fade-right"
     data-aos-duration="2000"
     className="mt-10 ml-10 text-primary font-bold 2xl:text-8xl xl:text-7xl text-sm px-5">
     CODEVORA{""}
    </h1>
    <p
     data-aos="fade-right"
     data-aos-duration="3000"
     className="mt-4 ml-16 xl:text-2xl 2xl:text-4xl font-semibold text-primary">
     SOLUSI DIGITAL TERBAIK UNTUK SEGALA
     <br />
     KEBUTUHAN BISNIS ANDA
    </p>
   </section>

   {/* Alur Kemitraan */}
   <section className="overflow-hidden bg-primary py-[70%] xl:py-[2%] 2xl:py-[2%] h-80">
    <h1 className="text-center text-tulang lg:font-bold xl:text-xl ">
     ALUR SINGKAT KEMITRAAN
    </h1>
    <div className="flex justify-center xl:py-14 xl:text-xl">
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center xl:py-3 xl:px-7 hover:bg-primary hover:text-tulang cursor-pointer">
      Diskusi Konsep
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 mt-4 text-tulang">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
     </svg>
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center xl:py-3 xl:px-12 hover:bg-primary hover:text-tulang cursor-pointer">
      Presentasi
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 mt-4 text-tulang">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
     </svg>
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center xl:py-3 xl:px-12 hover:bg-primary hover:text-tulang cursor-pointer">
      Pengerjaan
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 mt-4 text-tulang">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
     </svg>
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center py-3 px-8 hover:bg-primary hover:text-tulang cursor-pointer">
      Project Done!
     </p>
    </div>
    <h1
     className="text-center text-tulang lg:text-lg transition ease-in-out hover:scale-110 duration-400 cursor-pointer mx-auto justify-center py-2 w-72 hover:text-blue-300"
     onClick={() => Router.push("/kemitraan")}>
     Lihat Selengkapnya
    </h1>
   </section>

   {/* Project yang sedang berjalan */}
   <section className="bg-tulang py-[70%] lg:py-[2%] 2xl:py-[3%] h-auto mx-10">
    <h1 className="text-primary text-center font-bold lg:text-2xl">
     {" "}
     PROJECT YANG SEDANG BERJALAN
    </h1>
    <div
     data-aos="fade-up"
     className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto">
     <div className="h-64 bg-primary rounded-t-3xl justify-center">
      <img
       className="w-72 py-16 mx-auto"
       src="/Logo Project Cekatan Putih.png"
       alt="Sunset in the mountains"
      />
     </div>
     <div className="px-10 py-5 bg-secondary ">
      <div className="font-bold text-xl mb-2 text-tulang">CEKATAN</div>
      <p className="text-tulang text-base">
       CEKATAN adalah project yang fokus di bidang Point of Sale atau POS.
       Project ini merupakan Project pertama dari perusahaan Codevora.
      </p>
     </div>
    </div>
   </section>

  </div>
 );
}

{/*2xl:w-[61%] xl:w-[60%] lg:w-[65%] w-[100%] opacity-10 absolute 2xl:top-5 xl:top-12 lg:top-0 right-0*/}
