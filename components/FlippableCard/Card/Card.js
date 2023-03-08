function Card({ frontContent, backContent }) {
  return (
    <div className="relative h-[500px] w-[550px] rounded shadow card m-1 bg-[#F9F9F9]">
      <div className="absolute flex items-center justify-center w-full h-full card-front ">
        {frontContent}
      </div>
      <div className="absolute flex items-center justify-center w-full h-full card-back ">
        {backContent}
      </div>
    </div>
  );
}

export default Card;
