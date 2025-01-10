const CardList = ({children} ) => {
 return (
  <div className="h-screen bg-cover bg-center 2xl:py-[7.5%] 2xl:px-40 xl:px-32 px-4"
  style={{backgroundImage: "url('/bg3.jpg')" }}>
    <div className="text-center text-tulang font-bold text-2xl py-10 xl:py-7">LAYANAN PENGADUAN</div>
   {children}
  </div>
 );
};

export default CardList;