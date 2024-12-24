export default function Navbar() {
 return (
  <nav className="bg-gradient-to-r from-blue-700 to-blue-300 text-white bg-transparent">
   <div className="max-w-7xl justify-items-start p-4">
    <div className="flex items-center space-x-4">
     <a href="/">
      <img
       src="../Codevora Logo.png"
       alt="logo"
       className="w-12 ml-3 mr-5"
      />
     </a>
     <div class className="hidden md:flex space-x-5">
      <a href="/">
       <h1>Home</h1>
      </a>
      <a href="/">
       <h1>About</h1>
      </a>
      <a href="/">
       <h1>Profile</h1>
      </a>
      <a href="/">
       <h1>Contact Us</h1>
      </a>
     </div>
    </div>
   </div>
  </nav>
 );
}
