"use client";

import {Pagination} from "swiper/modules";
import {EffectCreative} from "swiper/modules";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useRef, useState} from "react";
import "swiper/css/effect-creative";


export default function Layanan() {
 const Router = useRouter();
 return (
  <div>
   <section className="h-screen bg-tulang py-32 xl:py-40 2xl:py-56 ml-3 xl:ml-10">
    <div>
     <h1 className="text-secondary font-bold text-3xl 2xl:text-4xl">
      INGIN MEMBUAT WEBSITE / APLIKASI MU SENDIRI?
      <p className="font-normal text-2xl 2xl:text-3xl pb-8 pt-3 text-balance text-left text-secondary">
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
    className="hidden md:flex lg:flex xl:flex 2xl:flex overflow-hidden cursor-pointer 2xl:h-auto">
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] xl:h-96 2xl:h-full text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/website.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN WEBSITE
     </h1>
    </a>
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] xl:h-96 2xl:h-full text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/app.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN MOBILE APP
     </h1>
    </a>
   </section>

   {/*Jenis Layanan Mobile*/}
   <Link href="/">
    <div
     id="website"
     className="relative grid h-60 max-w-lg flex-col items-center justify-center overflow-hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
     <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/website.jpg')] bg-cover bg-center grayscale">
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
     </div>
     <div className="relative text-center p-6 px-6 py-14 md:px-12">
      <h2 className="mb-6 text-3xl font-medium text-white">
       PEMBUATAN WEBSITE
      </h2>
     </div>
    </div>
   </Link>
   <Link href="/">
    <div
     id="mobile-app"
     className="relative grid h-60 max-w-lg flex-col items-center justify-center overflow-hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
     <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/app.jpg')] bg-cover bg-center grayscale">
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
     </div>
     <div className="relative text-center p-6 px-6 py-14 md:px-12">
      <h2 className="mb-6 text-3xl font-medium text-white">
       PEMBUATAN MOBILE APP
      </h2>
     </div>
    </div>
   </Link>

   {/*Layanan Lain */}
   <section className="bg-primary py-[8%] lg:py-[4%] 2xl:py-[3%] h-auto hidden md:block lg:block xl:block 2xl:block">
    <div className="text-tulang text-center font-bold lg:text-2xl">
     {" "}
     LAYANAN LAIN
    </div>
    <div className="flex text-center justify-center gap-48 py-10">
     <div
      id="layanan-lain"
      className="bg-tulang text-primary h-96 w-96 rounded-3xl text-2xl font-bold py-5">
      DESAIN UI/UX
      <p className="font-normal text-lg py-5 text-justify text-balance px-5">
       Pengen bikin website buat usaha, tapi bingung harus mulai dari mana?
       Tenang, di <span className="font-bold">CODEVORA</span> kalian bisa
       menggunakan jasa kami untuk mendesain UI/UX impian kalian loh, kalian
       juga bisa request desain yang kalian inginkan yang tentunya dengan harga
       yang sangat terjangkau.
      </p>
      <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-normal text-lg mt-3 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
       Pesan UI/UX Sekarang
      </button>
     </div>
     <div
      id="layanan-lain"
      className="bg-tulang text-primary h-96 w-96 rounded-3xl text-2xl font-bold py-5">
      KONSULTASI
      <p className="font-normal text-lg py-5 text-justify text-balance px-5">
       Kalian masih bingung waktu udah punya usaha tapi gatau apa yang harus
       dilakuin biar iklan digital kalian naik? Tenang, di{" "}
       <span className="font-bold">CODEVORA</span> Kalian bisa konsultasi
       terkait iklan digital kalian loh! Kita bakal bantu iklan digital usaha
       kalian supaya orang orang bisa ngejangkau akun kalian.
      </p>
      <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-normal text-lg mt-3 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
       Konsultasi Sekarang
      </button>
     </div>
    </div>
   </section>

   {/*Mobile Layanan Lain */}
   <section className="h-auto bg-primary block md:hidden lg:hidden xl:hidden 2xl:hidden text-center pb-10">
    <h1 className="text-center text-tulang font-bold text-2xl py-10 ml-3 xl:ml-10">
     LAYANAN LAIN
    </h1>
    <Swiper
     pagination={true}
     grabCursor={true}
     effect={"creative"}
     creativeEffect={{
      prev: {
       shadow: true,
       translate: [0, 0, -400],
      },
      next: {
       translate: ["100%", 0, 0],
      },
     }}
     modules={[Pagination]}
     className="mySwiper">
     <SwiperSlide>
      <div
       id="layanan-lain"
       className="bg-tulang text-primary h-96 mx-5 rounded-3xl text-2xl font-bold py-5">
       DESAIN UI/UX
       <p className="font-normal text-lg py-5 text-justify text-balance px-5">
        Pengen bikin website buat usaha, tapi bingung harus mulai dari mana?
        Tenang, di <span className="font-bold">CODEVORA</span> kalian bisa
        menggunakan jasa kami untuk mendesain UI/UX impian kalian loh, kalian
        juga bisa request desain yang kalian inginkan yang tentunya dengan harga
        yang sangat terjangkau.
       </p>
       <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-normal text-lg mt-3 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
        Pesan UI/UX Sekarang
       </button>
      </div>
     </SwiperSlide>
     <SwiperSlide>
      <div className="bg-tulang text-primary h-96 mx-5 rounded-3xl text-2xl font-bold py-5">
       KONSULTASI
       <p className="font-normal text-lg py-5 text-justify text-balance px-5">
        Kalian masih bingung waktu udah punya usaha tapi gatau apa yang harus
        dilakuin biar iklan digital kalian naik? Tenang, di{" "}
        <span className="font-bold">CODEVORA</span> Kalian bisa konsultasi
        terkait iklan digital kalian loh! Kita bakal bantu iklan digital usaha
        kalian supaya orang orang bisa ngejangkau akun kalian.
       </p>
       <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-normal text-lg mt-3 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
        Konsultasi Sekarang
       </button>
      </div>
     </SwiperSlide>
    </Swiper>
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

{/*<section
    id="layanan"
    data-aos="fade-in"
    className="hidden xl:flex 2xl:flex overflow-hidden cursor-pointer 2xl:h-auto">
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] xl:h-96 2xl:h-full text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/website.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN WEBSITE
     </h1>
    </a>
    <a
     href="/"
     className="bg-scroll w-full max-w-[50%] xl:h-96 2xl:h-full text-tulang hover:scale-110 duration-700 grayscale hover:grayscale-0"
     style={{backgroundImage: "url('/app.jpg')"}}>
     <h1 className="text-center my-[25%] font-bold text-3xl">
      PEMBUATAN MOBILE APP
     </h1>
    </a>
   </section>*/}
