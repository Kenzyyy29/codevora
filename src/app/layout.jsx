import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
 title: "Cafetaria Order Page",
 description: "Order Makananmu Tanpa Ribet Lagi!",
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className="bg-white text-black text-center">
    <Navbar />
    {children}
   </body>
  </html>
 );
}
