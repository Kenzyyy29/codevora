export default function About() {
 return (
  <div
   id="about"
   className="bg-primary text-center py-10 h-screen">
   <div className="text-tulang 2xl:text-4xl lg:text-xl text-lg font-semibold">
    COMPANY PROFILES
    <img
     src="/Codevora Logo.png"
     className="2xl:w-40 lg:w-24 w-24 mx-auto 2xl:mt-10 lg:mt-6 mt-4"
    />
    <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth={1.5}
     stroke="currentColor"
     className="size-10 mx-auto mt-6">
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
     />
    </svg>
    <div className="mx-auto mt-5">APA ITU CODEVORA?</div>
   </div>
  </div>
 );
}
