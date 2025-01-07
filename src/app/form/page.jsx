import {PhotoIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Form() {
 return (
  <div className=" bg-primary text-center justify-center lg:py-[20%] 2xl:py-[20%] py-[80%] h-screen">
   <div className="text-hitam border rounded-lg bg-tulang w-auto max-w-[31.6%] text-start font-semibold text-base px-5 ml-10">
    <label
     className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
     htmlFor="grid-first-name">
     First Name
    </label>
    <input
     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
     id="grid-first-name"
     type="text"
     placeholder="Masukkan nama anda"
    />
    <label
     className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
     htmlFor="grid-first-name">
     E-mail
    </label>
    <input
     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
     id="grid-first-name"
     type="email"
     placeholder="Mohon masukkan alamat email anda"
    />
    <label
     className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
     htmlFor="grid-first-name">
     Pengaduan
    </label>
    <input
     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
     id="grid-first-name"
     type="email"
     placeholder="Mohon masukkan alamat email anda"
    />
   </div>
   <Link href="/">
    <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-semibold mt-10 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
     Kembali
    </button>
   </Link>
  </div>
 );
}

{/*<section className="h-screen bg-primary lg:py-[20%] xl:py-[10%] 2xl:py-[10%] py-[80%]">
   <form className="w-screen max-w-lg border border-secondary rounded-3xl ml-40 py-5 px-5 bg-tulang">
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
       htmlFor="grid-first-name">
       First Name
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="grid-first-name"
       type="text"
       placeholder="Jane"
      />
     </div>
    </div>
    <div className="w-full md:w-1/2 px-3">
     <label
      className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
      htmlFor="grid-last-name">
      Alamat E-mail
     </label>
     <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
      type="text"
      placeholder="Doe"
     />
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
      <label
       className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
       htmlFor="grid-password">
       Password
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="grid-password"
       type="password"
       placeholder="******************"
      />
      <p className="text-gray-600 text-xs italic">
       Make it as long and as crazy as you'd like
      </p>
     </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
       htmlFor="grid-city">
       City
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="grid-city"
       type="text"
       placeholder="Albuquerque"
      />
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
       htmlFor="grid-state">
       State
      </label>
      <div className="relative">
       <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state">
        <option>New Mexico</option>
        <option>Missouri</option>
        <option>Texas</option>
       </select>
       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
         className="fill-current h-4 w-4"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20">
         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
       </div>
      </div>
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
       htmlFor="grid-zip">
       Zip
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="grid-zip"
       type="text"
       placeholder="90210"
      />
      <button className="border rounded-full bg-primary text-tulang py-2 px-6 font-semibold mt-10 transition-all ease-in-out duration-500 hover:bg-tulang hover:text-primary hover:border-primary">
       SUBMIT
      </button>
     </div>
    </div>
   </form>
  </section>
 );*/}