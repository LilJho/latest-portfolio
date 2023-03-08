function Card({ frontContent, backContent }) {
  return (
    <div className="relative h-[500px] w-[550px]  card m-1 rounded-lg shadow-lg">
      <div className="absolute flex items-center justify-center w-full h-full bg-white rounded-lg card-front bg-opacity-20 backdrop-filter backdrop-blur-lg">
        {frontContent}
      </div>
      <div className="absolute flex items-center justify-center w-full h-full bg-white rounded-lg card-back bg-opacity-20 backdrop-filter backdrop-blur-lg">
        {backContent}
      </div>
    </div>
  );
}

export default Card;
