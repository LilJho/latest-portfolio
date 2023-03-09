import Image from "next/image";
import React from "react";

function Border({ children }) {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 left-0 ">
        <Image
          src={"/background/TLBorder.svg"}
          width={500}
          height={500}
          alt={"Top-Left border"}
        />
      </div>
      {children}
      <div className="absolute bottom-0 right-0 ">
        <Image
          src={"/background/BRBorder.svg"}
          width={500}
          height={500}
          alt={"Top-Left border"}
        />
      </div>
    </div>
  );
}

export default Border;
