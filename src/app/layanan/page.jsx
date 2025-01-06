"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Layanan() {
 const Router = useRouter();
 return (
  <div>
   <section className="h-screen bg-tulang py-32 xl:py-40 ml-3 xl:ml-10">
    <div>
     <h1 className="text-secondary font-bold text-3xl ">
      INGIN MEMBUAT WEBSITE / APLIKASI MU SENDIRI?
      <p className="font-normal text-2xl pb-8 pt-3 text-balance text-left text-secondary">
       Tenang, bareng{" "}
       <span className="font-bold text-secondary"> Codevora </span> kamu bisa
       merubah website <br />
       atau aplikasi impianmu menjadi kenyataan.
      </p>
     </h1>
     <Link href="#layanan">
      <button className="border-2 border-secondary bg-secondary rounded-full text-tulang py-3 px-6 font-semibold text-xl hover:border-2 hover:border-secondary hover:bg-tulang hover:text-secondary">
       Gunakan Jasa Kami
      </button>
     </Link>
    </div>
   </section>

   {/*Jenis Layanan*/}
   <section
    id="layanan"
    data-aos="fade-in"
    className="xl:flex overflow-hidden cursor-pointer">
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] h-96 text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/website.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN WEBSITE
     </h1>
    </a>
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] h-96 text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/app.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN MOBILE APP
     </h1>
    </a>
   </section>

   {/* Layanan Lain */}
   <section className="h-screen bg-primary">
    <h1 className="text-center text-tulang font-bold text-2xl py-10 ml-3 xl:ml-10">
     LAYANAN LAIN
     <p className="font-normal text-2xl mt-5 text-balance text-left text-tulang">
      Tenang, bareng <span className="font-bold text-tulang"> Codevora </span>{" "}
      kamu bisa merubah website <br />
      atau aplikasi impianmu menjadi kenyataan.
     </p>
    </h1>
   </section>
  </div>
 );
}

{
 /*<section className="h-auto bg-black">
    <div className="text-tulang font-bold text-xl text-center xl:flex cursor-pointer">
     <div className="xl:flex w-screen opacity-[30%]">
      <div className="max-w-[50%] overflow-hidden shadow-md">
       <img
        onClick={() => Router.push("/")}
        className="w-full hover:scale-110 transition-all"
        src="/website.jpg"
        alt="website"
       />
      </div>
      <div className="max-w-[50%] overflow-hidden shadow-md">
       <img
        onClick={() => Router.push("/")}
        className="w-full hover:scale-110 transition-all"
        src="/app.jpg"
        alt="app"
       />
      </div>
     </div>
    </div>
   </section>*/
}

{
 /*<section>
    <div className="w-full xl:flex h-96 overflow-hidden">
     <a href="/"
      className="text-tulang justify-center bg-cover w-full transition-all ease-in-out duration-700 hover:scale-110 brightness-50 hover:brightness-100"
      style={{backgroundImage: "url('/website.jpg')"}}>
      <h1 className="text-center py-[25%] font-bold text-2xl">
       PEMBUATAN WEBSITE
      </h1>
     </a>
     <a href="/"
      className="text-tulang justify-center bg-cover w-full transition-all ease-in-out duration-700 hover:scale-110 brightness-50 hover:brightness-100"
      style={{backgroundImage: "url('/app.jpg')"}}>
      <h1 className="text-center py-[25%] font-bold text-2xl">
       PEMBUATAN MOBILE APP
      </h1>
     </a>
    </div>
   </section>*/
}
