export default function Careers() {
 return (
  <div
   id="careers"
   className="bg-tulang text-center py-10 h-screen">
   <div className="text-primary 2xl:text-4xl text-2xl font-bold">
    CODEVORA KARIR
   </div>
   <div className="w-full max-w-sm min-w-[200px] mx-auto mt-5 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10 px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
    <div className="relative flex items-center">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="absolute w-5 h-5 top-2.5 left-2.5 text-secondary">
      <path
       fillRule="evenodd"
       d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
       clipRule="evenodd"
      />
     </svg>

     <input
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-secondary rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-secondary hover:border-secondary shadow-sm focus:shadow"
      placeholder="Cari jenis pekerjaanmu disini"
     />
    </div>
   </div>
   <div className="text-xl py-40 font-semibold text-secondary">
    Mohon maaf belum ada lowongan yang tersedia untuk saat ini
   </div>
  </div>
 );
}