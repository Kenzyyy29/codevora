import Link from "next/link";

export default function Project() {
 return (
  <div
   id="project"
   className="bg-secondary text-center py-10 h-auto">
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

{
 /*<div className=" py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <h2 className="text-center text-lg/8 font-semibold text-tulang">
      Trusted by the world’s most innovative teams
     </h2>
     <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
      <img
       alt="Transistor"
       src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
       width={158}
       height={48}
       className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
      />
      <img
       alt="Reform"
       src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
       width={158}
       height={48}
       className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      />
      <img
       alt="Tuple"
       src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
       width={158}
       height={48}
       className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      />
      <img
       alt="SavvyCal"
       src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
       width={158}
       height={48}
       className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
      />
      <img
       alt="Statamic"
       src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
       width={158}
       height={48}
       className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
      />
     </div>
    </div>
   </div>*/
}
