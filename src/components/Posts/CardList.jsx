const CardList = ({children} ) => {
 return (
  <div
   className="h-auto lg:h-auto xl:h-auto 2xl:h-auto bg-cover bg-center 2xl:py-[7.5%] xl:pb-[3.5%] 2xl:px-40 xl:px-32 px-4 pb-14"
   style={{backgroundImage: "url('/bg3.jpg')"}}>
   <div className="text-center text-tulang font-bold text-2xl py-10 2xl:py-0 xl:py-0">
    LAYANAN PENGADUAN
   </div>
   {children}
  </div>
 );
};

export default CardList;