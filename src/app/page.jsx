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
<<<<<<< HEAD
   <section
    className="bg-cover text-start py-[70%] lg:py-[8%] 2xl:py-[9%] h-screen"
    style={{backgroundImage: "url('/bg1.jpg')"}}>
    <h1
     data-aos="fade-right"
     data-aos-duration="2000"
     className="mt-10 ml-10 text-primary font-bold 2xl:text-5xl lg:text-7xl text-sm px-5">
     CODEVORA{""}
    </h1>
    <p
     data-aos="fade-right"
     data-aos-duration="3000"
     className="mt-4 ml-16 lg:text-2xl font-semibold text-primary">
     SOLUSI DIGITAL TERBAIK UNTUK SEGALA
     <br />
     KEBUTUHAN BISNIS ANDA
    </p>
   </section>
   {/* Alur Kemitraan */}
   <section className="overflow-hidden bg-primary py-[70%] lg:py-[2%] 2xl:py-[9%] h-72">
    <h1 className="text-center text-tulang lg:font-bold lg:text-xl ">
     ALUR SINGKAT KEMITRAAN
    </h1>
    <div className="flex justify-center lg:py-14 lg:text-xl">
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center lg:py-3 lg:px-7">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center lg:py-3 lg:px-12">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center lg:py-3 lg:px-12">
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
     <p className="mx-10 font-medium border rounded-lg bg-tulang text-primary text-center py-3 px-8">
      Project Done!
     </p>
    </div>
    <h1 className="text-center text-tulang lg:text-lg transition ease-in-out hover:scale-110 duration-400 cursor-pointer mx-auto justify-center py-2 w-72 hover:text-blue-300">
     <Link href="/kemitraan">Lihat Selengkapnya</Link>
    </h1>
   </section>

   {/* Project yang sedang berjalan */}
   <section className="bg-tulang py-[70%] lg:py-[2%] 2xl:py-[9%] h-screen mx-10">
    <h1 className="text-primary text-center font-bold lg:text-2xl">
     {" "}
     PROJECT YANG SEDANG BERJALAN
    </h1>
    <div
     data-aos="fade-up"
     className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto ">
     <div className="h-64 bg-primary rounded-t-3xl justify-center">
      <img
       className="w-72 py-16 mx-auto"
       src="/Logo Project Cekatan Putih.png"
       alt="Sunset in the mountains"
      />
     </div>
     <div className="px-10 py-5 bg-secondary">
      <div className="font-bold text-xl mb-2 text-tulang    ">Cekatan</div>
      <p className="text-tulang text-base">
       Cafetaria adalah project yang fokus di bidang Point of Sale atau POS.
       Project ini merupakan Project pertama dari perusahaan Codevora
      </p>
     </div>
    </div>
=======
   <section className="bg-tulang text-end py-[70%] lg:py-[8%] 2xl:py-[9%] xl:py-[9%] h-screen mx-10">
    <h1
     data-aos="fade-left"
     className="mt-4 text-primary font-semibold 2xl:text-5xl lg:text-7xl text-sm py-10 px-5">
     Solusi pembangunan dan <br />
     pengelolaan bisnis anda <br />
     dalam dunia digital{""}
     <br />
    </h1>
    <img
     src="/Codevora left.png"
     alt="gambar-kiri"
     className="lg:w-[24%] 2xl:w-[20%] w-[60%] opacity-10 absolute top-24 left-0"
    />
    <img
     src="/Codevora right.png"
     alt="gambar-kiri"
     className="2xl:w-[60%] xl:w-[60%] lg:w-[65%] w-[100%] opacity-10 absolute 2xl:top-7 xl:top-12 lg:top-0 right-0"
    />
>>>>>>> 6e85ef2f8aa4e4152fe31615b8433a58936e3486
   </section>
  </div>
 );
}

{/*2xl:w-[61%] xl:w-[60%] lg:w-[65%] w-[100%] opacity-10 absolute 2xl:top-5 xl:top-12 lg:top-0 right-0*/}
