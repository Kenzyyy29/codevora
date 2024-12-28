"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
 const pathname = usePathname();
 return (
  <nav className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary text-white bg-transparent-lg rounded-b-2xl">
   <ul className="flex items-center py-5">
    <ul className="flex justify-start items-center space-x-4 mr-[34%] ml-4">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-0 lg:ml-3 mr-5"
      />
     </a>
    </ul>
    <ul className="hidden lg:flex space-x-5 justify-center mr-[21%]">
     <Link href="/about">
      <li
       className={`${
        pathname === "/about" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       About Us
      </li>
     </Link>
     <Link href="/careers">
      <li
       className={`${
        pathname === "/careers" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       Career
      </li>
     </Link>
     <Link href="/project">
      <li
       className={`${
        pathname === "/project" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300`}>
       Project
      </li>
     </Link>
    </ul>
    <ul className="flex justify-end px-5">
     <Link href="/kemitraan">
      <button className="lg:flex hidden border rounded-full px-5 py-2 bg-tulang text-primary hover:bg-primary hover:text-tulang">
       Ingin menjadi mitra kami?
      </button>
     </Link>
    </ul>
   </ul>
  </nav>
 );
}
