"use client";

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Navbar() {
 const pathname = usePathname();
 const Router = useRouter();
 return (
  <nav
   data-aos="fade-down"
   className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary text-white bg-transparent-lg">
   <ul className="flex items-center 2xl:py-5 lg:py-5 py-6 justify-between">
    <ul className="flex justify-start items-center space-x-4 ml-4 transition ease-in-out duration-700 hover:scale-110">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-0 lg:ml-3 mr-5"
      />
     </a>
    </ul>
    <ul className="hidden lg:flex space-x-9 items-center justify-center">
     <Link href="/about">
      <li
       className={`${
        pathname === "/about"
         ? " rounded-full text-primary bg-tulang"
         : " rounded-full text-tulang"
       } hover:text-blue-300 transition ease-in-out duration-400 hover:scale-110 px-4 pb-1`}>
       About Us
      </li>
     </Link>
     <Link href="/project">
      <li
       className={`${
        pathname === "/project"
         ? " rounded-full text-primary bg-tulang"
         : " rounded-full text-tulang"
       } hover:text-blue-300 transition ease-in-out duration-400 hover:scale-110 px-4 pb-1`}>
       Project
      </li>
     </Link>
     <Link href="/careers">
      <li
       className={`${
        pathname === "/careers"
         ? " rounded-full text-primary bg-tulang"
         : "rounded-full text-tulang"
       } hover:text-blue-300 transition ease-in-out duration-400 hover:scale-110 px-4 pb-1`}>
       Careers
      </li>
     </Link>
    </ul>
    <ul>
     <button
      className="items-center border rounded-lg px-2 py-1 bg-tulang text-primary transition ease-in-out duration-700 hover:scale-110 mx-3"
      onClick={() => Router.push("/kemitraan")}>
      Mitra Kami
     </button>
    </ul>
   </ul>
  </nav>
 );
}
