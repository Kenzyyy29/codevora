"use client"

import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const currentYear = new Date().getFullYear();
 
export default function FooterWithSocialLinks() {
  return (
  <footer className="flex flex-wrap justify-center py-10 px-10 bg-gradient-to-r from-primary to-secondary border-lg shadow-md text-tulang">
    {/* Section 1 */}
    <div className="flex flex-col justify-start py-5 px-2 lg:basis-[20%] md:basis-[35%] basis-[100%] ">
      {/* Gambar */}
      <div className="flex flex-wrap justify-center">
        <img src="/Codevora Logo.png" className="w-[70%]" alt="Logo Footer"/>
      </div>
      {/* Deskripsi */}
      <div className="flex flex-row text-center">
        <p className="lg:text-sm text-xs font-thin pt-5 2xl:ml-2 lg:ml-2 ml-3">
          SOLUSI DIGITAL TERBAIK UNTUK SEGALA KEBUTUHAN BISNIS ANDA
        </p>
      </div>
    </div>
    
    {/* Section 2 */}
    <div className="flex flex-col justify-start lg:gap-7 gap-5 py-5 px-5 lg:basis-[35%] md:basis-[65%] basis-[100%] ">
      {/* #1 Alamat Kami */}
      <div className=" flex flex-col gap-1">
        <div className="flex flex-row justify-start"><h1 className="text-lg font-bold text-start">ALAMAT KAMI</h1></div>
        <div className="flex flex-row justify-start">
          <p className="text-sm font-light text-start"> Jl. Arthamulya 01 No. 29 Kecamatan Cibereum Kelurahan Kotabaru Kota Tasikmalaya Jawa Barat 46196.</p>
        </div>
      </div>
      {/* #2 Follow Us */}
      <div className=" flex flex-col gap-3">
        <div className="flex flex-row justify-start"><h1 className="text-lg font-bold text-start">FOLLOW US</h1></div>
        <div className="flex flex-row justify-start">
          {/* Linkedin */}
          <a href="#" className="mb-2 inline-block rounded-full bg-tulang p-3 scale-90 hover:scale-100 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              {/*}--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
          {/* Discord */}
          <a href="https://discord.gg/wAqeHbCb" className="mb-2 inline-block rounded-full bg-tulang p-3 scale-90 hover:scale-100 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
            </span>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/codevoraid/" className="mb-2 inline-block rounded-full bg-tulang p-3 scale-90 hover:scale-100 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>
          {/* Twitter */}
          <a href="https://x.com/codevoraid" className="mb-2 inline-block rounded-full bg-tulang p-3 scale-90 hover:scale-100 leading-norma shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="flex flex-col justify-start py-5 px-5 lg:basis-[20%] md:basis-[50%] basis-[100%] ">
      {/*Layanan*/}
      <ul>
        {/* Title */}
        <li><h1 className="text-lg font-bold text-start mb-1">LAYANAN KAMI</h1></li>
        {/* Content */}
        <Link href="#"><li className="mb-3 text-sm font-thin text-start hover:text-blue-300">Pembuatan Website</li></Link>
        <Link href="#"><li className="mb-3 text-sm font-thin text-start hover:text-blue-300">Pembuatan Mobile App</li></Link>
        <Link href="#"><li className="mb-3 text-sm font-thin text-start hover:text-blue-300">Desain UI/UX</li></Link>
        <Link href="#"><li className="mb-3 text-sm font-thin text-start hover:text-blue-300">Konsultasi</li></Link>
        <Link href="#"><li className="mb-3 text-sm font-thin text-start hover:text-blue-300">Program Kemitraan</li></Link>
      </ul> 
    </div>

    {/* Section 4 */}
    <div className="flex flex-col justify-start py-5 px-5 lg:basis-[25%] md:basis-[50%] basis-[100%] ">
      {/*Layanan*/}
      <ul>
        {/* Title */}
        <li><h1 className="text-lg font-bold text-start mb-1">PROFIL PERUSAHAAN</h1></li>
        {/* Content */}
        <Link href="/about"><li className="mb-3 font-thin text-start hover:text-blue-300">Tentang Kami</li></Link>
        <Link href="/product"><li className="mb-3 font-thin text-start hover:text-blue-300">Produk</li></Link>
        <Link href="/career"><li className="mb-3 font-thin text-start hover:text-blue-300">Karir</li></Link>
        {/* Direct Link External */}
        <Link href="https://wa.me/6282295533992"><li className="mb-3 font-thin text-start hover:text-blue-300">Hubungi Kami</li></Link>
      </ul> 
    </div>
  </footer>

  );
}