import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { useState } from "react";

function Description() {
  return (
    <div className="flex flex-col text-sm w-full">
      <p>
        Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
        vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra
        vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at
        sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque
        lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam
        aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel
        ornare vel, dignissim a tortor.
      </p>
      <br />
      <p>
        Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
        vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra
        vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at
        sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque
        lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam
        aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel
        ornare vel, dignissim a tortor.
      </p>
    </div>
  );
}
function Additionalinformation() {
  return (
    <div className="flex flex-col gap-y-2 items-start">
      <strong>Additional information</strong>
      <table>
        <tr>
          <td className="border border-r-0 font-semibold  py-2 px-5 flex  border-gray-300">
            Color
          </td>
          <td className="border border-gray-300 px-3">
            Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black, White
          </td>
        </tr>
        <tr>
          <td className="border border-r-0 font-semibold  py-2 px-5 flex  border-gray-300">
            Size
          </td>
          <td className="border border-gray-300 px-3">
            XXS, XS, S, M, L, XL, XXL
          </td>
        </tr>
      </table>
    </div>
  );
}
function Reviews() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-semibold">2 reviews for Basic Colored Sweatpants With Elastic Hems</p>
      <ul>
        <li className="flex gap-x-3">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://e-commerce-udemy.netlify.app/img/avatars/avatar1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex text-yellow-400 text-xs"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
            <small>admin <small>22.33.3</small></small>
            <div>
              Sed perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-col gap-y-3">
        <strong>Add a review</strong>
        <hr />
        <p className="text-sm">
          Your email address will not be published. Required fields are marked *
        </p>
        <div>
          <span className="text-sm">Your rating *</span>
          <div className="flex gap-x-3 text-xs text-yellow-400">
            <span className="flex after:content-['|'] items-center after:opacity-70 after:mx-1 after:text-gray-500 cursor-pointer"><BsStar/></span>
            <span className="flex after:content-['|'] items-center after:opacity-70 after:mx-1 after:text-gray-500 cursor-pointer"><BsStar/><BsStar/></span>
            <span className="flex after:content-['|'] items-center after:opacity-70 after:mx-1 after:text-gray-500 cursor-pointer"><BsStar/><BsStar/><BsStar/></span>
            <span className="flex after:content-['|'] items-center after:opacity-70 after:mx-1 after:text-gray-500 cursor-pointer"><BsStar/><BsStar/><BsStar/><BsStar/></span>
            <span className="flex after:content-['|'] items-center after:opacity-70 after:mx-1 after:text-gray-500 cursor-pointer"><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></span>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProductDetail() {
  const [tab, setTab] = useState(1);
  const [colorTab, setColorTab] = useState(1);
  const [tabs, setTabs] = useState(1);

  return (
    <div className="pt-[9rem] sm:pt-[10rem] container flex flex-col gap-y-5">
      <div className="flex gap-x-2">
        <small className="after:content-['/']">Home</small>
        <small className="after:content-['/']">Man</small>
        <small className="after:content-['/']">Pants</small>
        <small className="">Basic Colored Sweatpants With Elastic Hems</small>
      </div>
      <div className="flex gap-x-10 ">
        <div className="flex gap-x-2 flex-col">
          <img
            className="max-h-[45.3125rem] max-w-[36.25rem] w-full h-full"
            src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
            alt=""
          />
          <div className="flex gap-x-2 border border-gray-300 my-2">
            <img
              className="max-w-[7.5rem] max-h-[12.5rem]"
              src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
              alt=""
            />
            <img
              className="max-w-[7.5rem] max-h-[12.5rem]"
              src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
              alt=""
            />
            <img
              className="max-w-[7.5rem] max-h-[12.5rem]"
              src="https://e-commerce-udemy.netlify.app/img/products/product2/1.png"
              alt=""
            />
          </div>
          <div className="flex gap-x-6 my-4 border-b border-gray-300 pb-3">
            <button
              onClick={() => setTabs(1)}
              className={`${tabs === 1 ? " underline " : ""} `}
            >
              Description
            </button>
            <button
              onClick={() => setTabs(2)}
              className={`${tabs === 2 ? " underline " : ""} `}
            >
              Additional information
            </button>
            <button
              onClick={() => setTabs(3)}
              className={`${tabs === 3 ? " underline " : ""} `}
            >
              Reviews
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold">Ridley High Waist</h1>
          <div className="stars flex items-center gap-x-2">
            <span className="text-yellow-400 flex items-center text-sm">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </span>
            <span>2 reviews</span>
          </div>
          <div className="price flex gap-x-2">
            <span className="opacity-20 text-sm line-through font-bold">
              $200.00
            </span>
            <strong className="text-xl">$100.00</strong>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="color flex flex-col gap-y-1">
            <span>Color</span>
            <div className="flex gap-x-1">
              <div
                onClick={() => setColorTab(1)}
                className={`cursor-pointer transition-all p-[2px] border border-transparent rounded-full hover:border-red-600 ${
                  colorTab === 1 ? " border-red-600 " : ""
                }`}
              >
                <div className="h-8 w-8  rounded-full bg-blue-600"></div>
              </div>
              <div
                onClick={() => setColorTab(2)}
                className={`cursor-pointer transition-all p-[2px] border border-transparent rounded-full hover:border-red-600 ${
                  colorTab === 2 ? " border-red-600 " : ""
                }`}
              >
                <div className="h-8 w-8  rounded-full bg-green-600"></div>
              </div>
              <div
                onClick={() => setColorTab(3)}
                className={`cursor-pointer transition-all p-[2px] border border-transparent rounded-full hover:border-red-600 ${
                  colorTab === 3 ? " border-red-600 " : ""
                }`}
              >
                <div className="h-8 w-8  rounded-full bg-gray-600"></div>
              </div>
              <div
                onClick={() => setColorTab(4)}
                className={`cursor-pointer transition-all p-[2px] border border-transparent rounded-full hover:border-red-600 ${
                  colorTab === 4 ? " border-red-600 " : ""
                }`}
              >
                <div className="h-8 w-8  rounded-full bg-red-600"></div>
              </div>
            </div>
          </div>
          <div className="size flex flex-col gap-y-4">
            <span>Size</span>
            <div className="flex gap-x-1">
              <span
                onClick={() => {
                  setTab(1);
                }}
                className={`px-10 py-2  border border-gray-300 hover:bg-red-500 hover:text-white transition-all ${
                  tab === 1 ? " bg-red-500 text-white " : ""
                }`}
              >
                XS
              </span>
              <span
                onClick={() => {
                  setTab(2);
                }}
                className={`px-10 py-2  border border-gray-300 hover:bg-red-500 hover:text-white transition-all ${
                  tab === 2 ? " bg-red-500 text-white " : ""
                }`}
              >
                XS
              </span>
              <span
                onClick={() => {
                  setTab(3);
                }}
                className={`px-10 py-2  border border-gray-300 hover:bg-red-500 hover:text-white transition-all ${
                  tab === 3 ? " bg-red-500 text-white " : ""
                }`}
              >
                XS
              </span>
              <span
                onClick={() => {
                  setTab(4);
                }}
                className={`px-10 py-2  border border-gray-300 hover:bg-red-500 hover:text-white transition-all ${
                  tab === 4 ? " bg-red-500 text-white " : ""
                }`}
              >
                XS
              </span>
              <span
                onClick={() => {
                  setTab(5);
                }}
                className={`px-10 py-2  border border-gray-300 hover:bg-red-500 hover:text-white transition-all ${
                  tab === 5 ? " bg-red-500 text-white " : ""
                }`}
              >
                XS
              </span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <input
              type="number"
              name=""
              id=""
              min={1}
              className="py-2 px-3 max-w-[5rem] outline-none border border-gray-400"
            />
            <button className="bg-[#1367fe] flex-1 py-2 text-white">
              Add to cart
            </button>
          </div>
          <div className="border-b border-gray-300 flex justify-start gap-x-5">
            <small> Size Guide</small>
            <small> Add to Wislist</small>
            <small> Share this Product</small>
          </div>
          <div className="flex flex-col gap-y-2 text-sm">
            <span>SKU: BE45VGRT</span>
            <span>Categories: Pants , Women</span>
            <span>Tags: black , white</span>
          </div>
        </div>
      </div>
      <div>
        {tabs === 1 && <Description />}
        {tabs === 2 && <Additionalinformation />}
        {tabs === 3 && <Reviews />}
      </div>
    </div>
  );
}

export default ProductDetail;
