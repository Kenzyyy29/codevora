import Link from "next/link";

export default function Careers() {
 return (
  <div className="bg-tulang text-center justify-center lg:py-[20%] 2xl:py-[20%] py-[70%] h-screen">
   <h1 className="xl:text-5xl lg:text-7xl md:text-6xl text-5xl font-extrabold text-primary">
    HALAMAN INI SEDANG DALAM TAHAP PENGEMBANGAN
   </h1>
   <Link href="/">
   <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-semibold mt-10 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
    Kembali
    </button></Link>
  </div>
 );
}
