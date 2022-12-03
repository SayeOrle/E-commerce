import React from "react";

function FashionCard() {
  return (
    <div className="h-[20rem] md:h-[24rem] w-full  relative flex justify-start">
      <img
        src="https://e-commerce-udemy.netlify.app/img/campaigns/banner1.png"
        alt=""
        className="object-cover w-full h-full absolute -z-20"
      />
      <div className="absolute w-full h-full px-9 py-20">
        <div className="flex flex-col items-start gap-y-6">
          <h3 className="text-2xl font-semibold text-white  max-w-[200px]">
            Fashion Month Ready in Capital Shop
          </h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <a
            href=""
            className="px-7 py-2 bg-[#1367fe] hover:bg-white hover:outline-[#1367fe] hover:outline outline-1  hover:text-black text-white transition-all font-semibold "
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

export default FashionCard;
