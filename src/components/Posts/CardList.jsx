const CardList = ({children} ) => {
 return (
  <div
   className="h-auto lg:h-auto xl:h-auto 2xl:h-screen bg-cover bg-center 2xl:py-[2%] xl:pb-[3.5%] 2xl:px-40 xl:px-32 px-4 pb-14"
   style={{backgroundImage: "url('/bg3.jpg')"}}>
   <div className="text-center text-tulang font-bold text-2xl py-10 2xl:pb-24 xl:py-10">
    LAYANAN PENGADUAN
   </div>
   {children}
  </div>
 );
};

export default CardList;