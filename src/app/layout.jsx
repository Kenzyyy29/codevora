import "./globals.css";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";

const DejaVu = localfont({
 src: [
  {
   path: "../../public/fonts/DejaVuSans-Bold.ttf",
   weight: "500",
  },
 ],
 variable: "--font-dejavu",
});

export const metadata = {
 images: "../public/Codevora Logo.png",
 title: "Codevora",
 description: "Order Makananmu Tanpa Ribet Lagi!",
};

export default function RootLayout({children}) {
 return (
  <html
   lang="en"
   className={"${DejaVu.variable}"}>
   <body className="bg-white">
    <Navbar />
    {children}
   </body>
  </html>
 );
}
