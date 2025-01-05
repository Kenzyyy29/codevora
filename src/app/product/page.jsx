export default function Project() {
 return (
  <div
   id="project"
   className="bg-secondary text-center py-10 h-screen">
   <div className="text-tulang 2xl:text-4xl text-2xl font-semibold">
    Our Product
   </div>
   <div
    data-aos="fade-in"
    className="w-full flex h-96 justify-center py-5 mt-10 ">
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
       <p className="text-primary leading-none hover:underline cursor-pointer">
        Kunjungi Website
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
