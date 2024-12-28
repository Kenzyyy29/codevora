"use client";

import Link from "next/link";
import {usePathname, useRouter,} from "next/navigation";

export default function Navbar() {
 const pathname = usePathname();
 const Router = useRouter();
 return (
  <nav className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary text-white bg-transparent-lg rounded-b-3xl">
   <ul className="flex items-center 2xl:py-5 lg:py-5 py-6">
    <ul className="flex justify-start items-center space-x-4 2xl:mr-[39.4%] mr-[34%] ml-4">
     <a href="#">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-0 lg:ml-3 mr-5"
      />
     </a>
    </ul>
    <ul className="hidden lg:flex space-x-5 justify-center 2xl:mr-[30.5%] lg:mr-[20.5%]">
     <Link href="#about">
      <li
       className={`${
        pathname === "#about" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       About Us
      </li>
     </Link>
     <Link href="#project">
      <li
       className={`${
        pathname === "#project" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       Project
      </li>
     </Link>
     <Link href="#careers">
      <li
       className={`${
        pathname === "#careers" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       Careers
      </li>
     </Link>
    </ul>
    <ul className="flex justify-end px-5">
      <button className="2xl:flex lg:flex hidden border rounded-full px-5 py-2 bg-tulang text-primary hover:bg-primary hover:text-tulang"
       onClick={() => Router.push("/kemitraan")}>
       Ingin menjadi mitra kami?
      </button>
    </ul>
   </ul>
  </nav>
 );
}
