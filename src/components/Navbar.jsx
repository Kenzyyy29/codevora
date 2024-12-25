"use client";

import Link from "next/link";

export default function Navbar() {
 return (
  <nav className="sticky top-0 bg-gradient-to-r from-cyan-700 to-blue-700 text-white bg-transparent-lg">
   <div className="max-w-7xl flex items-start justify-between p-4">
    <div className="flex items-center space-x-4">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-3 mr-5"
      />
     </a>
    </div>
   </div>
  </nav>
 );
}
