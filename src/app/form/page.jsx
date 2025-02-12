import CardList  from "../../components/Posts/CardList";
import Posts from "../../components/Posts/Posts";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";


const Form = async() => {
  const response = await fetch(baseUrl);
 return (
  <>
   <CardList>
    <div>
     <div className="px-3 py-3 2xl:max-w-[35%] xl:max-w-[47%] 2xl:py-4 xl:py-3 2xl:space-y-5 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 overflow-hidden">
      <form className="max-w-lg mx-auto">
       <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-tulang">
        Nama
       </label>
       <input
        type="name"
        id="name"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-tulang dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Nama"
       />{" "}
       <br />
       <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-tulang">
        Email
       </label>
       <input
        type="email"
        id="email"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-tulang dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Email"
       />
       <br />
       <label
        htmlFor="tel"
        className="block mb-2 text-sm font-medium text-tulang">
        No. Handphone
       </label>
       <input
        type="tel"
        id="tel"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-tulang dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="No. Handphone"
       />
       <br />
       <label
        htmlFor="subject"
        className="block mb-2 text-sm font-medium text-tulang">
        Subjek
       </label>
       <input
        type="subject"
        id="subject"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-tulang dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Subjek"
       />
       <br />
       <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-tulang">
        Pesan Anda
       </label>
       <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Pesan Anda"></textarea>
       <legend className="sr-only">Checkbox variants</legend>
       <div className="flex items-center mt-2">
        <input
         id="checkbox"
         type="checkbox"
         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
         htmlFor="checkbox"
         className="ms-2 text-sm 2xl:font-normal xl:font-extralight text-tulang text-justify">
         Saya menyetujui untuk mengungkapkan informasi pribadi saya kepada
         Codevora Tech untuk mengidentifikasi pesan yang saya sampaikan agar
         pesan saya bisa ditindaklanjuti.
        </label>
       </div>
       <Posts />
      </form>
     </div>
    </div>
   </CardList>
  </>
 );
};

export default Form;