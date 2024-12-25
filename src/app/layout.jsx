
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
 title: "CODEVORA - HOME",
 description: "Order Makananmu Tanpa Ribet Lagi!",
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className="bg-white">
    <Navbar />
    {children}
   </body>
  </html>
 );
}
