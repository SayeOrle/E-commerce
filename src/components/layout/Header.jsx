import React from "react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsSearch, BsBag } from "react-icons/bs";
import logo from "../../images/mega-menu.jpg";
import { mainContext, useContext } from "../../context";
function Header() {
  const { setModal } = useContext(mainContext);

  return (
    <div className="fixed bg-white top-0 left-0 w-full z-40">
      <div className="w-full h-11 bg-[#1367fe]  flex items-center justify-center">
        <p className="text-[8px] sm:text-xs text-white text-center w-full  ">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL
          DELIVERY- OFF 50%!
          <span className="font-extrabold hover:underline">
            <a href="/shop"> SHOP NOW</a>
          </span>
        </p>
      </div>
      <div className="h-20 sm:h-24 flex items-center border-b-2">
        <div className="flex items-center justify-between  container">
          <div className="font-semibold text-3xl">LOGO</div>
          <nav className="hidden sm:block font-semibold">
            <ul className="flex gap-x-7 text-sm ">
              <li className="h-20 flex items-center relative">
                <a
                  className="tracking-wider flex items-center h-full	peer before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-1/2    before:translate-y-3 before:transition-all "
                  href="/"
                >
                  HOME
                </a>
                <AiOutlineDown size={"16px"} className="mt-1 opacity-40" />
                <div className="absolute w-40 top-full -translate-x-10 translate-y-[2px] justify-center opacity-0 hover:opacity-100 peer-hover:opacity-100 transition-all duration-300 invisible hover:!visible peer-hover:visible  bg-white p-3 border border-gray-300">
                  <ul className="w-full flex flex-col  gap-y-1 text-sm px-4">
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                    <li>Home clean</li>
                  </ul>
                </div>
              </li>
              <li className="h-20   flex items-center relative ">
                <a
                  className="tracking-wider flex items-center h-full	peer before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-1/2    before:translate-y-3 before:transition-all "
                  href="/shop"
                >
                  SHOP
                </a>
                <AiOutlineDown size={"16px"} className="mt-1 opacity-40" />
                <div className="absolute invisible opacity-0	flex hover:opacity-100 hover:!visible p-5 h-[27rem] w-[50rem] justify-between top-full -translate-x-1/2 translate-y-[2px]   peer-hover:visible peer-hover:opacity-100 duration-300 transition-all bg-white  border border-gray-300">
                  <div className="flex justify-between gap-x-14   ">
                    <div className=" ">
                      <h3>Shop Style</h3>
                      <ul>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                        <li>Home clean</li>
                      </ul>
                    </div>
                    <div className=" ">
                      <h3>Filter Layout</h3>
                      <ul>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                      </ul>
                    </div>
                    <div className=" ">
                      <h3>Shop Loader</h3>
                      <ul>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                        <li>shop</li>
                      </ul>
                    </div>
                  </div>
                  <div className=" flex-2 flex flex-col">
                    <img src={logo} alt="" /> <h3>JOIN THE LAYERING GANG</h3>
                    <h4>Suspendisse faucibus nunc et pellentesque</h4>
                    <a href="1">Shop Now</a>
                  </div>
                </div>
              </li>
              <li className="h-20 flex items-center">
                <a
                  className="tracking-wider	 before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-0 before:transition-all"
                  href="#blog"
                >
                  BLOG
                </a>
              </li>
              <li className="h-20 flex items-center">
                <a
                  className="tracking-wider	 before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-0 before:transition-all"
                  href="/contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-2">
            <button className="sm:hidden block">
              <AiOutlineMenu />
            </button>
            <a href="/register">
            <AiOutlineUser size={"20px"} />

            </a>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              <BsSearch />
            </button>
            <AiOutlineHeart size={"20px"} />
            <div className="relative">
              <div className="bg-[#1367fe] -z-10  rounded-full flex items-center justify-center text-[10px] text-white h-4 w-4 absolute -top-3 -right-3">1</div>
              <button className="flex items-center"><a href="/cart"><BsBag /></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
