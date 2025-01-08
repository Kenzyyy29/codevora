const CardList = ({children} ) => {
 return (
  <div className="h-screen bg-gradient-to-b from-secondary to-primary py-[7.5%] px-40">
   {children}
  </div>
 );
};

export default CardList;