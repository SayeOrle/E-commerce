import React from "react";
import FashionCard from "./FashionCard";

function FashionSection() {
  return (
    <div className="w-full">
      <div className="container h-full ">
        <div className="gap-7 grid grid-cols-1 md:grid-cols-2">
            <FashionCard />
            <FashionCard />
            <FashionCard />
            <FashionCard />
        </div>
      </div>
    </div>
  );
}

export default FashionSection;
