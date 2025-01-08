import Link from "next/link";

export default function Project() {
 return (
  <div
   id="project"
   className="bg-secondary text-center py-10 h-screen">
   <div className="text-tulang 2xl:text-4xl text-2xl font-semibold">
    Our Product
   </div>

   {/*Desktop View*/}
   <div
    data-aos="fade-in"
    className="w-full hidden md:flex lg:flex xl:flex 2xl:flex h-96 justify-center py-5 mt-10 ">
    <div className="bg-primary h-auto w-80 overflow-hidden border rounded-l-2xl">
     <img
      src="/Logo Project Cekatan Putih.png"
      alt="card-image"
      className="h-24 py-auto mt-[39%] mx-auto"
     />
    </div>
    <div className=" bg-tulang p-4 flex flex-col justify-between w-[75%] leading-normal border rounded-r-2xl">
     <div className="mb-8 text-start">
      <div className="text-primary font-bold text-3xl mb-2">CEKATAN</div>
      <p className="text-primary text-base">
       Cekatan merupakan sebuah Aplikasi berbasis Website yang fokus dalam
       bidang Point of Sale, Aplikasi ini sangat membantu Owner Bisnis
       <br /> dalam menjalankan Bisnisnya, aplikasi ini juga bisa dipakai oleh
       berbagai macam jenis usaha, mulai dari FnB, Retail, Jasa, dan lain
       sebagainya.
      </p>
     </div>
     <div className="flex text-start">
      <div className="text-lg">
       <Link href="/">
        <p className="text-primary leading-none hover:underline cursor-pointer">
         Kunjungi Website
        </p>
       </Link>
      </div>
     </div>
    </div>
   </div>
   
   {/*Mobile View*/}
   <section className=" py-[8%] lg:py-[4%] 2xl:py-[3%] h-auto mx-10 block md:hidden lg:hidden xl:hidden 2xl:hidden">
    <div
     data-aos="fade-in"
     className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-5 mx-auto">
     <div className="h-auto bg-primary rounded-t-3xl">
      <img
       className="w-72 py-16 mx-auto"
       src="/Logo Project Cekatan Putih.png"
       alt="Sunset in the mountains"
      />
     </div>
     <div className="px-10 py-5 bg-tulang ">
      <div className="font-bold text-xl mb-2 text-primary text-start">
       CEKATAN
      </div>
      <p className="text-primary text-base text-start">
       Cekatan merupakan sebuah Aplikasi berbasis Website yang fokus dalam
       bidang Point of Sale, Aplikasi ini sangat membantu Owner Bisnis dalam
       menjalankan Bisnisnya, aplikasi ini juga bisa dipakai oleh berbagai macam
       jenis usaha, mulai dari FnB, Retail, Jasa, dan lain sebagainya.
      </p>
      <Link href="/">
       <h1 className="text-start mt-10 text-primary hover:underline"> Kunjungi Website</h1>
      </Link>
     </div>
    </div>
   </section>
  </div>
 );
}
