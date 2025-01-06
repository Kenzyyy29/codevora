"use client";

import {usePathname, useRouter} from "next/navigation";

import {useState} from "react";
import {
 Dialog,
 DialogPanel,
 Disclosure,
 DisclosureButton,
 DisclosurePanel,
 Popover,
 PopoverButton,
 PopoverGroup,
 PopoverPanel,
} from "@headlessui/react";
import {
 ArrowPathIcon,
 Bars3Icon,
 ChartPieIcon,
 CursorArrowRaysIcon,
 FingerPrintIcon,
 SquaresPlusIcon,
 XMarkIcon,
} from "@heroicons/react/24/outline";
import {
 ChevronDownIcon,
 PhoneIcon,
 PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
 {
  name: "Pembuatan Website",
  description: "Get a better understanding of your traffic",
  href: "/layanan",
  icon: ChartPieIcon,
 },
 {
  name: "Pembuatan Mobile App",
  description: "Speak directly to your customers",
  href: "/layanan",
  icon: CursorArrowRaysIcon,
 },
 {
  name: "Desain UI/UX",
  description: "Your customers’ data will be safe and secure",
  href: "layanan#layanan-lain",
  icon: FingerPrintIcon,
 },
 {
  name: "Konsultasi",
  description: "Connect with third-party tools",
  href: "layanan#layanan-lain",
  icon: SquaresPlusIcon,
 },
];
const callsToAction = [
 {name: "Layanan Pengaduan", href: "/form", icon: PlayCircleIcon},
 {name: "Hubungi Kami", href: "#", icon: PhoneIcon},
];

export default function Example() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const pathname = usePathname();

 return (
  <header className="sticky z-10 top-0 bg-gradient-to-r from-secondary to-primary">
   <nav
    aria-label="Global"
    className="mx-auto flex items-center justify-between p-6 2xl:px-8">
    <div className="flex lg:flex-1">
     <a
      href="/"
      className="-m-1.5 p-1.5">
      <span className="sr-only">Codevora Tech</span>
      <img
       alt=""
       src="/Codevora Logo.png"
       className="h-8 w-auto transition ease-in-out duration-700 hover:scale-110"
      />
     </a>
    </div>
    <div className="flex lg:hidden">
     <button
      type="button"
      onClick={() => setMobileMenuOpen(true)}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-tulang">
      <span className="sr-only">Open main menu</span>
      <Bars3Icon
       aria-hidden="true"
       className="size-8"
      />
     </button>
    </div>
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
     <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-tulang hover:text-blue-300">
       Layanan
       <ChevronDownIcon
        aria-hidden="true"
        className="size-5 flex-none text-gray-400"
       />
      </PopoverButton>

      <PopoverPanel
       transition
       className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
       <div className="p-4">
        {products.map((item) => (
         <div
          key={item.name}
          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
           <item.icon
            aria-hidden="true"
            className="size-6 text-gray-600 group-hover:text-indigo-600"
           />
          </div>
          <div className="flex-auto">
           <a
            href={item.href}
            className="block font-semibold text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
           </a>
           <p className="mt-1 text-gray-600">{item.description}</p>
          </div>
         </div>
        ))}
       </div>
       <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        {callsToAction.map((item) => (
         <a
          key={item.name}
          href={item.href}
          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
          <item.icon
           aria-hidden="true"
           className="size-5 flex-none text-gray-400"
          />
          {item.name}
         </a>
        ))}
       </div>
      </PopoverPanel>
     </Popover>

     <a
      href="/about"
      className={`${
       pathname === "/about"
        ? " rounded-full text-primary bg-tulang hover:text-primary"
        : " rounded-full text-tulang"
      } hover:text-blue-300  px-4  text-md font-semibold`}>
      Tentang Kami
     </a>
     <a
      href="/product"
      className={`${
       pathname === "/product"
        ? " rounded-full text-primary bg-tulang hover:text-primary"
        : " rounded-full text-tulang"
      } hover:text-blue-300  px-4  text-md font-semibold`}>
      Produk
     </a>
     <a
      href="/career"
      className={`${
       pathname === "/career"
        ? " rounded-full text-primary bg-tulang hover:text-primary"
        : " rounded-full text-tulang"
      } hover:text-blue-300  px-4  text-md font-semibold`}>
      Karir
     </a>
    </PopoverGroup>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
     <a
      href="/kemitraan"
      className="text-md font-semibold text-primary border rounded-full bg-tulang py-2 px-3 transition-all hover:bg-primary hover:text-tulang hover:scale-110">
      Menjadi Mitra Kami
     </a>
    </div>
   </nav>

   {/* Mobile menu, show/hide based on menu open state. */}
   <Dialog
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
    className="lg:hidden">
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
     <div className="flex items-center justify-between">
      <a
       href="/"
       className="-m-1.5 p-1.5">
       <span className="sr-only">Codevora Tech</span>
       <img
        alt=""
        src="Codevora Logo Blue.png"
        className="h-8 w-auto"
       />
      </a>
      <button
       type="button"
       onClick={() => setMobileMenuOpen(false)}
       className="-m-2.5 rounded-md p-2.5 text-primary">
       <span className="sr-only">Close menu</span>
       <XMarkIcon
        aria-hidden="true"
        className="size-8"
       />
      </button>
     </div>
     <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
       <div className="space-y-2 py-6">
        <Disclosure
         as="div"
         className="-mx-3">
         <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-primary hover:bg-gray-50">
          Layanan
          <ChevronDownIcon
           aria-hidden="true"
           className="size-5 flex-none group-data-[open]:rotate-180"
          />
         </DisclosureButton>
         <DisclosurePanel className="mt-2 space-y-2">
          {[...products, ...callsToAction].map((item) => (
           <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-secondary hover:bg-gray-50">
            {item.name}
           </DisclosureButton>
          ))}
         </DisclosurePanel>
        </Disclosure>
        <a
         href="/about"
         className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">
         Tentang Kami
        </a>
        <a
         href="/product"
         className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">
         Produk
        </a>
        <a
         href="/career"
         className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">
         Karir
        </a>
       </div>
       <div className="py-6">
        <a
         href="/kemitraan"
         className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary hover:bg-gray-50">
         Menjadi Mitra Kami
        </a>
       </div>
      </div>
     </div>
    </DialogPanel>
   </Dialog>
  </header>
 );
}
