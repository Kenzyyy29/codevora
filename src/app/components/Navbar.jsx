"use client";

export default function Navbar() {
 return (
  <nav className="bg-gradient-to-r from-indigo-900 to-blue-700 text-white bg-transparent">
   <div className="max-w-7xl flex items-start justify-between p-4">
    <div className="flex items-center space-x-4">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-3 mr-5"
      />
     </a>
     <div className="md:flex space-x-5 ">
      <a
       href="/"
       className="hover:text-teal-300">
       <h1>Home</h1>
      </a>
      <a
       href="/"
       className="hover:text-teal-300">
       <h1>About</h1>
      </a>
      <a
       href="/"
       className="hover:text-teal-300">
       <h1>Profile</h1>
      </a>
      <a
       href="/"
       className=" hover:text-teal-300">
       <h1>Contact Us</h1>
      </a>
     </div>
    </div>
    <div className="flex justify-end">
     <a href="/">
      <h1>Sign In</h1>
     </a>
    </div>
   </div>
  </nav>
 );
}
