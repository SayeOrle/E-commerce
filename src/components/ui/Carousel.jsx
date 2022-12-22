import React from "react";
import sliderImage from "../../images/slider1.jpg";
import sliderImage2 from "../../images/slider2.jpg";
import sliderImage3 from "../../images/slider3.jpg";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full  pt-[123.99px] sm:pt-[139.98px] ">
      <Slider {...settings}>
        <div className="relative outline-none">
          <img
            className="object-cover w-full h-full "
            src={sliderImage}
            alt=""
          />
          <div className="flex flex-col gap-y-3 items-start container absolute z-50 top-24 left-28">
            <div>
              <p className="text-lg font-medium">SUMMER 2022</p>
              <h2 className=" text-base sm:text-xl md:text-4xl lg:text-6xl font-semibold">
                Save up to 70%
              </h2>
            </div>
            <a
              href="#s"
              className="px-4 py-2 md:px-5 md:py-3 bg-[#1367fe] text-white font-medium"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div className="relative outline-none">
          <img
            className="object-cover w-full h-full "
            src={sliderImage2}
            alt=""
          />
          <div className="flex flex-col gap-y-3 items-start container absolute z-50 top-24 left-28">
            <div>
              <p className="text-lg font-medium">SUMMER 2022</p>
              <h2 className=" text-base sm:text-xl md:text-4xl lg:text-6xl font-semibold">
                Save up to 70%
              </h2>
            </div>
            <a
              href="#s"
              className="px-4 py-2 md:px-5 md:py-3 bg-[#1367fe] text-white font-medium"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div className="relative outline-none">
          <img
            className="object-cover w-full h-full "
            src={sliderImage3}
            alt=""
          />
          <div className="flex flex-col gap-y-3 items-start container absolute z-50 top-24 left-28">
            <div>
              <p className="text-lg font-medium">SUMMER 2022</p>
              <h2 className=" text-base sm:text-xl md:text-4xl lg:text-6xl font-semibold">
                Save up to 70%
              </h2>
            </div>
            <a
              href="#s"
              className="px-4 py-2 md:px-5 md:py-3 bg-[#1367fe] text-white font-medium"
            >
              Explore Now
            </a>
          </div>
        </div>

      </Slider>
    </div>
  );
}

export default Carousel;
