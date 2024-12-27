"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
 return (
  <nav className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary text-white bg-transparent-lg rounded-b-2xl">
   <ul className="flex p-4 mx-5 space-x-4 items-center justify-between">
    <ul className="flex justify-start items-center">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-0 lg:ml-3 mr-5"
      />
     </a>
     <Link href="/about">
      <li
       className={`${
        pathname === "/about" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300 mx-4`}>
       About Us
      </li>
     </Link>
    </ul>
    <ul className="flex space-x-5 ">
     <Link href="/careers">
      <li
       className={`${
        pathname === "/careers" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300 mx-5`}>
       Career
      </li>
     </Link>
     <Link href="/project">
      <li
       className={`${
        pathname === "/project" ? "text-blue-300" : "text-tulang"
       } hover:text-blue-300 mr-3`}>
       Project
      </li>
     </Link>
    </ul>
   </ul>
  </nav>
 );
}
