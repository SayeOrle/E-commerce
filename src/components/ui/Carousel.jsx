import React from "react";
import sliderImage from "../../images/slider1.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Carousel() {
  return (
    <div className="h-screen w-full  pt-[123.99] sm:pt-[139.98px] ">
      <div className=" absolute w-full h-[calc(100vh_-_139.98px)] -z-50">
        <img
          className="object-cover w-full h-full"
          src={sliderImage}
          alt=""
        />
      </div>
      <div className=" h-[calc(100vh_-_123.99px)] sm:h-[calc(100vh_-_139.98px)] w-full flex items-center relative ">
        <div className="flex justify-between w-full px-5">
          <button className="rounded-full h-16 w-16 grid place-items-center bg-white opacity-60 hover:opacity-100 hover:text-white hover:bg-[#1367fe] border-gray-300 border-2 outline-none transition-all">
            <SlArrowLeft size={"25px"} />
          </button>
          <div className="flex-1 flex flex-col gap-y-3 items-start container">
            <div>
              <p className="text-lg font-medium">SUMMER 2022</p>
              <h2 className="text-6xl font-semibold">Save up to 70%</h2>
            </div>
            <a
              href="#s"
              className="px-5 py-3 bg-[#1367fe] text-white font-medium"
            >
              Explore Now
            </a>
          </div>
          <button className="rounded-full h-16 w-16 grid place-items-center bg-white opacity-60 hover:opacity-100 hover:text-white hover:bg-[#1367fe] border-gray-300 border-2 outline-none transition-all">
            <SlArrowRight size={"25px"} />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-x-2 pb-5">
          <button className="opacity-60 bg-[#1367fe] hover:opacity-100 rounded-full h-4 w-4" ></button>
          <button className="opacity-60 bg-[#1367fe] hover:opacity-100 rounded-full h-4 w-4" ></button>
          <button className="opacity-60 bg-[#1367fe] hover:opacity-100 rounded-full h-4 w-4" ></button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
