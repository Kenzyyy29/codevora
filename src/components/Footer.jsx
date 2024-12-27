"use client";

import Link from "next/link";

export default function Footer() {
 return (
  <footer className="flex items-center justify-center h-96 bg-gradient-to-r from-primary to-secondary border-lg shadow-md text-white">
   <p className="text-sm">
    &copy; {new Date().getFullYear()} Codevora. All rights reserved.
   </p>
  </footer>
 );
}