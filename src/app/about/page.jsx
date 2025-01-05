"use client"

import {useRouter} from "next/navigation";
import Link from "next/link";

export default function About() {
 const Router = useRouter();
 return (
  <div>
   {/* Tentang Kami */}
   <section
    id="about"
    className="bg-primary text-start h-screen">
    <h1
     data-aos="fade-down"
     data-aos-duration="1500"
     className=" text-tulang font-semibold 2xl:text-5xl xl:text=2xl lg:text-4xl text-sm xl:py-40 xl:px-5 ml-20">
     {""}Sekilas Tentang Kami
     <p className="text-2xl font-normal text-balance py-6 text-justify">
      Codevora merupakan start up company yang bergerak di bidang <br />
      teknologi digital. Kami memiliki tujuan untuk membuat serta mengembangkan
      <br />
      inovasi baru dalam dunia digital demi mempermudah jalannya
      <br />
      bisnis baik itu di level mikro maupun makro.
     </p>
     <Link href="#tujuan">
      <button className="border-tulang bg-tulang border-2 rounded-full text-primary py-3 items-center px-10 text-2xl font-semibold transition-all ease-in duration-500 hover:scale-110 hover:bg-primary hover:text-tulang">
       SELENGKAPNYA
      </button>
     </Link>
    </h1>
   </section>

   {/* Jajaran Pengembang */}
   <section 
   id="team"
   data-aos="fade-in"
   className="bg-tulang py-[70%] lg:py-[2%] 2xl:py-[3%] h-auto mx-10">
    <h1 className="text-primary text-center font-bold 2xl:text-4xl xl:text-2xl">
     {" "}
     JAJARAN PENGEMBANG
    </h1>
    <div className="flex justify-center">
     <div className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto transition-all ease-in hover:scale-110">
      <div className="h-auto w-96 bg-primary rounded-t-3xl justify-center ">
       <img
        className="overflow-hidden w-72  mx-auto"
        src="/Profil.png"
        alt="Sunset in the mountains"
       />
      </div>
      <div className="px-5 py-5 bg-secondary">
       <div className="font-bold text-xl mb-2 text-tulang">
        Ilham Ali Wardiana
       </div>
       <p className="text-tulang text-base w-44 pt-20">
        Chief Executive Officer
       </p>
      </div>
     </div>
     <div className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto transition-all ease-in hover:scale-110">
      <div className="h-auto w-96 bg-primary rounded-t-3xl justify-center">
       <img
        className="overflow-hidden w-72  mx-auto"
        src="/Profil.png"
        alt="Sunset in the mountains"
       />
      </div>
      <div className="px-5 py-5 bg-secondary">
       <div className="font-bold text-xl mb-2 text-tulang">
        Trisma Maulana, A.Md.Kes.
       </div>
       <p className="text-tulang text-base w-44 pt-20">
        Chief Marketing Officer
       </p>
      </div>
     </div>
     <div className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto transition-all ease-in hover:scale-110">
      <div className="h-auto w-96 bg-primary rounded-t-3xl justify-center">
       <img
        className="overflow-hidden w-72 mx-auto"
        src="/Profil.png"
        alt="Sunset in the mountains"
       />
      </div>
      <div className="px-5 py-5 bg-secondary">
       <div className="font-bold text-xl mb-2 text-tulang">Nurjaman</div>
       <p className="text-tulang text-base w-44 pt-20">
        Chief Technology Officer
       </p>
      </div>
     </div>
     <div className="max-w-sm rounded-3xl overflow-hidden shadow-md mt-16 mx-auto transition-all ease-in hover:scale-110">
      <div className="h-auto w-96 bg-primary rounded-t-3xl justify-center">
       <img
        className="overflow-hidden w-72  mx-auto"
        src="/Profil.png"
        alt="Sunset in the mountains"
       />
      </div>
      <div className="px-5 py-5 bg-secondary">
       <div className="font-bold text-xl mb-2 text-tulang">
        Muhammad Iqbal Fathur <br />
        Rohman, ITS-Db.
       </div>
       <p className="text-tulang text-base w-44 pt-[15.2%]">
        Chief Technology Officer
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* Tujuan */}
   <section
    id="tujuan"
    className="bg-cover h-screen"
    style={{backgroundImage: "url('/bg2.jpg')"}}>
    <h1 className=" text-tulang text-center font-semibold 2xl:text-4xl xl:text=2xl lg:text-4xl text-sm 2xl:py-20 xl:px-5 ">
     {""}TUJUAN KAMI
    </h1>
    <p className="text-2xl font-normal text-balance py-6 text-justify ml-40 text-tulang">
     Tujuan utama kami adalah membuat dan mengembangkan inovasi-inovasi <br />
     baru dalam dunia digital. Seiring dengan berkembangnya teknologi, jelas{" "}
     <br />
     kami sebagai Generasi modern harus bisa mengikuti perkembangan zaman.{" "}
     <br />
     <br />
     Selain itu, kami juga ingin memaksimalkan potensi yang dimiliki oleh anak{" "}
     <br />
     muda Bangsa Indonesia dengan membuka berbagai lowongan pekerjaan guna{" "}
     <br />
     mewadahi bakat mereka yang mungkin akan membawa perubahan ke arah <br />
     Indonesia yang lebih baik.
    </p>
    <button
     className="border-tulang border-2 rounded-full text-tulang py-3 items-start px-10 text-2xl font-semibold transition ease-in-out duration-700 hover:scale-110 ml-40 my-10"
     onClick={() => Router.push("/career")}>
     BERGABUNG BERSAMA KAMI
    </button>
   </section>
  </div>
 );
}

{
 /* Codevora merupakan start up company yang bergerak di bidang teknologi
     digital. Tujuan dari perusahaan ini adalah untuk membuat serta
     mengembangkan inovasi baru dalam dunia digital demi mempermudah jalannya
     bisnis baik itu di level mikro maupun makro. */
}
