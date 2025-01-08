"use client"

import {Pagination} from "swiper/modules";
import {EffectCreative} from "swiper/modules";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";


export default function LayananMobile() {
 const LayananMobile = () => {};
  return (
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
  );
 };
