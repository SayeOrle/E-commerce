import React from "react";
import {
  BsStar,
  BsStarHalf,
  BsStarFill,
  BsFillBasket3Fill,
  BsFillEyeFill,
  BsFillHeartFill,
  BsShareFill,
} from "react-icons/bs";

function Arrivals() {
  const productCard = [
    {
      id: 1,
      star: 1,
      header: "Analogue Resin Strap",
      price: 100,
      sale: true,
      salePercent: 10,
      img: "https://e-commerce-udemy.netlify.app/img/products/product1/1.png",
      backimg:
        "https://e-commerce-udemy.netlify.app/img/products/product1/2.png",
    },

  ];

  return (
    <div className="my-8 h-full ">
      <div className="container">
        <div className="text-center p-7">
          <h2 className="text-3xl font-semibold">New Arrivals</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul
          className="grid gap-x-14"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr ))",
          }}
        >
          {productCard.map((p) => (
            <li
              className="h-[400px] w-[235px] relative overflow-hidden group bg-[#eeefee]"
              key={p.id}
            >
              <div className="relative">
                <img
                  className={`absolute duration-500  group-hover:invisible group-hover:opacity-0 `}
                  src={p.img}
                  alt=""
                />
                <img
                  className={`absolute duration-500 invisible opacity-0  group-hover:!visible group-hover:!opacity-100`}
                  src={p.backimg}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center pt-[295px]">
                <a href="#w" className="text-sm font-semibold">
                  {p.header}
                </a>
                <div className="flex gap-x-1 text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <div>
                  <strong className="text-red-600">${p.price}</strong>
                </div>
              </div>
              <div className="bg-red-600 rounded-full h-10 w-10 absolute top-2 right-2 grid place-items-center text-white">
                -{p.salePercent}%
              </div>
              <ul
                className={`absolute z-10 top-5 -left-10 w-5 flex flex-col items-center duration-200 gap-y-1 group-hover:left-1`}
              >
                <li className="grid place-items-center bg-black text-white rounded-md h-6 w-6">
                  <BsFillBasket3Fill />
                </li>
                <li className="grid place-items-center bg-black text-white rounded-md h-6 w-6">
                  <BsFillEyeFill />
                </li>
                <li className="grid place-items-center bg-black text-white rounded-md h-6 w-6">
                  <BsFillHeartFill />
                </li>
                <li className="grid place-items-center bg-black text-white rounded-md h-6 w-6">
                  <BsShareFill />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Arrivals;
