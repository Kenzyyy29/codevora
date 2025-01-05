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
    className=" bg-tulang text-start py-[5%] lg:py-[5%] xl:py-[8%] 2xl:py-[9%] h-screen"
    style={{backgroundImage: "url('/bg1.jpg')"}}>
    <h1
     data-aos="fade-right"
     data-aos-duration="2000"
     className="2xl:mt-10 lg:mt-12 2xl:ml-10 xl:ml-10 lg:ml-10 text-primary font-bold 2xl:text-8xl xl:text-7xl lg:text-7xl text-5xl px-5 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 pt-40">
     CODEVORA{""}
    </h1>
    <p
     data-aos="fade-right"
     data-aos-duration="3000"
     className="mt-4 ml-5 lg:ml-16 2xl:ml-16 text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-primary">
     SOLUSI DIGITAL TERBAIK UNTUK SEGALA
     <br />
     KEBUTUHAN BISNIS ANDA
    </p>
   </section>

   {/* Alur Kemitraan Mobile View */}
   <section className="overflow-hidden bg-primary py-[10%] h-auto block md:hidden lg:hidden xl:hidden 2xl:hidden">
    <h1 className="text-center text-tulang lg:font-bold xl:text-xl ">
     ALUR SINGKAT KEMITRAAN
    </h1>
    <div className="justify-center 2xl:py-14 lg:py-10 py-5 xl:text-xl space-y-4">
     <p className="mx-16 font-medium border text-xl py-4 rounded-lg bg-tulang text-primary text-center hover:bg-primary hover:text-tulang cursor-pointer">
      Diskusi Konsep
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 ml-[46.5%] text-white">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
     </svg>

     <p className="mx-16 font-medium border text-xl py-4 rounded-lg bg-tulang text-primary text-center hover:bg-primary hover:text-tulang cursor-pointer">
      Presentasi
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 ml-[46.5%] text-white">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
     </svg>
     <p className="mx-16 font-medium border text-xl py-4 rounded-lg bg-tulang text-primary text-center hover:bg-primary hover:text-tulang cursor-pointer">
      Pengerjaan
     </p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 ml-[46.5%] text-white">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
     </svg>
     <p className="mx-16 font-medium border text-xl py-4 rounded-lg bg-tulang text-primary text-center hover:bg-primary hover:text-tulang cursor-pointer">
      Project Done!
     </p>
    </div>
    <h1
     className="text-center text-tulang lg:text-lg transition ease-in-out hover:scale-110 duration-400 cursor-pointer mx-auto justify-center py-2 w-72 hover:text-blue-300"
     onClick={() => Router.push("/kemitraan")}>
     Lihat Selengkapnya
    </h1>
   </section>

   {/* Alur Kemitraan */}
   <section className="overflow-hidden bg-primary py-[20%] lg:py-[3%] 2xl:py-[2%] h-auto hidden md:block lg:block xl:block 2xl:block">
    <h1 className="text-center text-tulang lg:font-bold xl:text-xl ">
     ALUR SINGKAT KEMITRAAN
    </h1>
    <div className="flex justify-center 2xl:py-14 lg:py-10 py-5 xl:text-xl">
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center 2xl:py-3 2xl:px-7 lg:py-3 lg:px-7 hover:bg-primary hover:text-tulang cursor-pointer">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center 2xl:py-3 2xl:px-12 lg:py-3 lg:px-12 hover:bg-primary hover:text-tulang cursor-pointer">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center 2xl:py-3 2xl:px-12 lg:py-3 lg:px-12 hover:bg-primary hover:text-tulang cursor-pointer">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center 2xl:py-3 2xl:px-8 lg:py-3 lg:px-8 hover:bg-primary hover:text-tulang cursor-pointer">
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
   <section className="bg-tulang py-[8%] lg:py-[4%] 2xl:py-[3%] h-auto mx-10">
    <h1 className="text-primary text-center font-bold lg:text-2xl">
     {" "}
     PROJECT YANG SEDANG BERJALAN
    </h1>
    <div
     data-aos="fade-in"
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
