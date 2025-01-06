import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const currentYear = new Date().getFullYear();
 
export default function FooterWithSocialLinks() {
  return (
   <footer className="2xl:flex lg:flex h-full bg-gradient-to-r from-primary to-secondary border-lg shadow-md text-tulang">
    <ul className="2xl:ml-14 lg:ml-10 ml-[25%] lg:py-20 py-10">
     <img
      src="/Codevora Logo.png"
      className="h-20 text-center 2xl:ml-5 lg:ml-[9%] ml-[10%]"
      alt="Logo Footer"
     />
     <li className="opacity-40">
      <p className="text-xs font-thin pt-5 2xl:ml-2 lg:ml-2 ml-3">
       SOLUSI DIGITAL TERBAIK UNTUK
      </p>
      <span className="text-xs font-thin pt-5 2xl:ml-0 lg:ml-0 ml-2">
       SEGALA KEBUTUHAN BISNIS ANDA
      </span>
     </li>
    </ul>

    {/*Alamat*/}
    <ul className="lg:py-9 space-y-10">
     <li className="2xl:ml-14 lg:ml-14 ml-5">
      <h1 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg font-bold">
       ALAMAT
      </h1>
      <p>
       Jl. Arthamulya 1, No. 29, Kec. Cibereum,
       <br /> Kel. Kotabaru, Kota Tasikmalaya
      </p>
     </li>

     {/*Social Media*/}
     <div className="ml-14 2xl:space-y-4 space-y-2 hidden 2xl:block lg:block">
      <h1 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg font-bold lg:mb-3 2xl:mb-0">
       FOLLOW US
      </h1>
      <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
       <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 448 512">
         {/*}--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
         <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
       </span>
      </button>
      <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
       <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 640 512">
         {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
         <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
        </svg>
       </span>
      </button>
      <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
       <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 448 512">
         {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
         <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
       </span>
      </button>
      <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-norma shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
       <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         viewBox="0 0 512 512">
         {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
         <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
       </span>
      </button>
     </div>
    </ul>

    {/*Layanan*/}
    <ul className="flex py-9 2xl:ml-96 lg:ml-32">
     <li className="2xl:ml-96 ml-5">
      <h1 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg font-bold">
       LAYANAN
      </h1>
      <ul className="my-2 2xl:text-xl font-thin">
       <Link href="/layanan">
        <li className="mb-3 hover:text-blue-300">Pembuatan Website</li>
       </Link>
       <Link href="/layanan">
        <li className="mb-3 hover:text-blue-300">Pembuatan Mobile App</li>
       </Link>
       <Link href="/layanan">
        <li className="mb-3 hover:text-blue-300">Desain UI/UX</li>
       </Link>
       <Link href="/layanan">
        <li className="mb-3 hover:text-blue-300">Konsultasi</li>
       </Link>
       <Link href="/kemitraan">
        <li className="mb-3 hover:text-blue-300">Program Kemitraan</li>
       </Link>
      </ul>
     </li>
     <li className="lg:ml-24 ml-10">
      <h1 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg font-bold">
       PROFIL PERUSAHAAN
      </h1>
      <ul className="my-2 2xl:text-xl font-thin">
       <Link href="/about">
        <li className="mb-3 hover:text-blue-300">Tentang Kami</li>
       </Link>
       <Link href="/product">
        <li className="mb-3 hover:text-blue-300">Produk</li>
       </Link>
       <Link href="/career">
        <li className="mb-3 hover:text-blue-300">Karir</li>
       </Link>
       <Link href="/">
        <li className="mb-3 hover:text-blue-300">Hubungi Kami</li>
       </Link>
      </ul>
     </li>
    </ul>

    {/*Social Media Mobile*/}
    <div className="ml-14 lg:space-y-4 space-y-2 block lg:hidden pb-10">
     <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        {/*}--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
       </svg>
      </span>
     </button>
     <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
      <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512">
        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
       </svg>
      </span>
     </button>
     <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
      <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
       </svg>
      </span>
     </button>
     <button className="mb-2 inline-block rounded-full bg-tulang p-3 scale-125 leading-norma shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-8">
      <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-primary">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512">
        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
       </svg>
      </span>
     </button>
    </div>
   </footer>
  );
}

{/*
   <footer className="relative w-full bg-gradient-to-r from-primary to-secondary text-tulang py-4">
    <ul className="mx-auto w-full px-8 justify-start">
     <li className="pt-10">
      <img
       src="/Codevora Logo.png"
       alt=""
       className="w-36"
      />
      <li className="text-xs font-thin py-5">
       <li>
        SOLUSI DIGITAL TERBAIK
        <br />
        UNTUK KEBUTUHAN BISNIS ANDA
       </li>
      </li>
      <li className="font-extrabold">
       ALAMAT
       <li className="font-thin">
        Jl. Arthamulya 1, No. 29, Kotabaru, Cipedes, Kota Tasikmalaya, 46196
       </li>
      </li>
     </li>

     <ul className="pt-10 lg:flex">
      <h1 className="font-extrabold">LAYANAN</h1>
      <ul className="text-lg font-light py-1">
       <Link href="/">
        <li>Pembuatan Website</li>
       </Link>
       <Link href="/">
        <li>Pembuatan Mobile App</li>
       </Link>
       <Link href="/">
        <li>Desain UI/UX</li>
       </Link>
       <Link href="/">
        <li>Konsultasi</li>
       </Link>
      </ul>
      <h1 className="font-extrabold">PROFIL PERUSAHAAN</h1>
      <ul className="text-lg font-light py-1">
       <Link href="/">
        <li>Tentang Kami</li>
       </Link>
       <Link href="/">
        <li>Produk</li>
       </Link>
       <Link href="/">
        <li>Karir</li>
       </Link>
       <Link href="/">
        <li>Hubungi Kami</li>
       </Link>
      </ul>
     </ul>
     <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
      <Typography
       variant="small"
       className="mb-4 text-center font-medium text-blue-gray-900 md:mb-0">
       &copy; {currentYear}{" "}
       <a href="https://material-tailwind.com/">Codevora Tech</a>. All Rights
       Reserved.
      </Typography>
      <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
       <Typography
        as="a"
        href="/"
        className="opacity-80 transition-opacity hover:opacity-100">
        <svg
         className="h-5 w-5"
         fill="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true">
         <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
         />
        </svg>
       </Typography>
       <Typography
        as="a"
        href="/"
        className="opacity-80 transition-opacity hover:opacity-100">
        <svg
         className="h-5 w-5"
         fill="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true">
         <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
         />
        </svg>
       </Typography>
       <Typography
        as="a"
        href="/"
        className="opacity-80 transition-opacity hover:opacity-100">
        <svg
         className="h-5 w-5"
         fill="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true">
         <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
       </Typography>
       <Typography
        as="a"
        href="/"
        className="opacity-80 transition-opacity hover:opacity-100">
        <svg
         className="h-5 w-5"
         fill="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true">
         <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
         />
        </svg>
       </Typography>
       <Typography
        as="a"
        href="/"
        className="opacity-80 transition-opacity hover:opacity-100">
        <svg
         className="h-5 w-5"
         fill="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true">
         <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
          clipRule="evenodd"
         />
        </svg>
       </Typography>
      </div>
     </div>
    </ul>
   </footer>
   */}