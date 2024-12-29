"use client";

import Link from "next/link";
import {usePathname, useRouter,} from "next/navigation";

export default function Navbar() {
 const pathname = usePathname();
 const Router = useRouter();
 return (
  <nav className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary text-white bg-transparent-lg">
   <ul className="flex items-center 2xl:py-5 lg:py-5 py-6">
    <ul className="flex justify-start items-center space-x-4 2xl:mr-[39.4%] mr-[22.5%] ml-4">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-0 lg:ml-3 mr-5"
      />
     </a>
    </ul>
    <ul className="hidden lg:flex space-x-14 items-center justify-center 2xl:mr-[30.5%] lg:mr-[12.5%] border rounded-full pt-2 pb-2 px-14 bg-tulang">
     <Link href="/about">
      <li
       className={`${
        pathname === "/about"
         ? "rounded-full text-tulang bg-primary"
         : "rounded-full text-primary"
       } hover:text-tulang rounded-full hover:bg-primary px-4 pb-1`}>
       About Us
      </li>
     </Link>
     <Link href="/project">
      <li
       className={`${
        pathname === "/project"
         ? "rounded-full text-tulang bg-primary"
         : "rounded-full text-primary"
       } hover:text-tulang rounded-full hover:bg-primary px-4 pb-1`}>
       Project
      </li>
     </Link>
     <Link href="/careers">
      <li
       className={`${
        pathname === "/careers"
         ? "rounded-full text-tulang bg-primary"
         : "rounded-full text-primary"
       } hover:text-tulang rounded-full hover:bg-primary px-4 pb-1`}>
       Careers
      </li>
     </Link>
    </ul>
    <ul
     className={`${
      pathname === "/kemitraan" ? "text-blue-300" : "text-tulang"
     } flex justify-end px-5 hover:text-blue-300`}>
     <button
      className="2xl:flex lg:flex items-center"
      onClick={() => Router.push("/kemitraan")}>
      Ingin menjadi mitra kami?
     </button>
    </ul>
   </ul>
  </nav>
 );
}
