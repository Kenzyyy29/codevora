import Link from "next/link";

export default function About() {
 return (
  <div>
   {/* Tentang Kami */}
   <section
    id="about"
    className="bg-primary text-start xl:h-screen 2xl:h-screen h-auto">
    <h1
     data-aos="fade-down"
     data-aos-duration="1500"
     className=" overflow-hidden text-tulang xl:font-semibold 2xl:text-5xl xl:text-2xl lg:text-4xl text-2xl font-bold py-32 xl:py-40 xl:px-5 xl:ml-20 ml-5">
     {""}Sekilas Tentang Kami
     <p className="xl:text-2xl text-lg font-normal text-balance py-3 xl:py-6 xl:text-justify text-left">
      Codevora merupakan start up company yang bergerak di bidang <br />
      teknologi digital. Kami memiliki tujuan untuk membuat serta mengembangkan
      <br />
      inovasi baru dalam dunia digital demi mempermudah jalannya
      <br />
      bisnis baik itu di level mikro maupun makro.
     </p>
     <Link href="#tujuan">
      <button className="border-tulang bg-tulang border-2 rounded-full text-primary xl:py-3 items-center xl:px-10 text-lg px-5 py-2 xl:text-2xl font-semibold transition-all ease-in duration-500 hover:scale-110 hover:bg-primary hover:text-tulang">
       SELENGKAPNYA
      </button>
     </Link>
    </h1>
   </section>

   {/* Tujuan */}
   <section
    id="tujuan"
    className="bg-cover h-auto xl:h-screen 2xl:h-screen"
    style={{backgroundImage: "url('/bg2.jpg')"}}>
    <h1
     data-aos="fade-in"
     className=" text-tulang text-center font-semibold text 2xl:text-4xl xl:text=2xl lg:text-4xl text-xl 2xl:py-20 xl:px-5 ">
     {""}TUJUAN KAMI
    </h1>
    <p
     data-aos="fade-in"
     className="xl:text-2xl text-xl font-normal text-balance py-6 xl:text-justify ml-4 xl:ml-24 text-tulang">
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
    <Link href="/kemitraan">
     <button
      data-aos="fade-in"
      className="border-tulang border-2 rounded-full text-tulang py-3 items-start px-2 xl:px-10 2xl:px-10 xl:text-2xl 2xl:text-2xl font-semibold transition ease-in-out duration-700 hover:scale-110 ml-3 xl:ml-24 my-10"
      >
      BERGABUNG BERSAMA KAMI
     </button>
    </Link>
   </section>
  </div>
 );
}
