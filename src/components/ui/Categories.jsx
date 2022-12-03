import React from "react";
import categories1 from "../../images/categories1.png";
import categories2 from "../../images/categories2.png";
import categories3 from "../../images/categories3.png";
import categories4 from "../../images/categories4.png";
import categories5 from "../../images/categories5.png";
import categories6 from "../../images/categories6.png";

const Categories = () => {
  return (
    <div className="w-full pt-5">
      <div className="container">
        <div className="w-full text-center p-5">
          <h2 className="text-3xl font-semibold">All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div>
          <ul
            className="grid place-items-center place-content-center"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr ))",
            }}
          >
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories1}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories2}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories3}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories4}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories5}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
            <li className="">
              <a
                href="#s"
                className="m-4 flex flex-col items-center gap-y-1 bg-[#f6f7f6] "
              >
                <img
                  src={categories6}
                  alt=""
                  className="object-cover hover:scale-110 transition-all hover:border hover:border-gray-300 w-full h-full max-w-[150px] max-h-[200px]"
                />
                <span>Smartphone</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
