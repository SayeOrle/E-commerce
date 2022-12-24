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
import { useState, useRef, useEffect } from "react";

function Header() {
  const { setModal } = useContext(mainContext);
  const [sideShow, setSideShow] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        e.preventDefault();
        setSideShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="fixed bg-white top-0 left-0 w-full z-40">
      <div className="w-full h-11 bg-[#1367fe]  flex items-center justify-center">
        <p className="text-[8px] sm:text-xs text-white text-center w-full  ">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL
          DELIVERY- OFF 50%!
          <span className="font-extrabold hover:underline">
            <a href="/shop" className="uppercase"> shop now</a>
          </span>
        </p>
      </div>
      <div className="h-20 sm:h-24 flex items-center border-b-2 ">
        <div className="flex items-center justify-between  container ">
          <button
            className="sm:hidden block"
            onClick={() => setSideShow(!sideShow)}
          >
            <AiOutlineMenu size={"30px"} />
          </button>

          <div className="font-semibold text-3xl">LOGO</div>
          <nav
            ref={sidebarRef}
            className={`${
              sideShow ? " left-0  " : " -left-full "
            }transition-all absolute top-0 w-1/3 h-screen z-10 sm:h-auto  flex flex-col items-center pt-20 sm:p-0  sm:static sm:bg-transparent bg-white  font-semibold`}
          >
            <div
              className="absolute top-4 right-4 cursor-pointer block sm:hidden"
              onClick={() => setSideShow(false)}
            >
              &#x2715;
            </div>
            <ul className="flex gap-x-7 sm:gap-y-0 gap-11 text-sm flex-col sm:flex-row ">
              <li className="sm:h-20 flex items-center relative  ">
                <a
                  className="tracking-wider flex items-center h-full	peer before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-1/2    before:translate-y-3 before:transition-all "
                  href="/"
                >
                  HOME
                </a>
                <AiOutlineDown
                  size={"16px"}
                  className="mt-1 opacity-40 hidden sm:block"
                />
                <div className="hidden sm:block absolute w-40 top-full -translate-x-10 translate-y-[2px] justify-center opacity-0 hover:opacity-100 peer-hover:opacity-100 transition-all duration-300 invisible hover:!visible peer-hover:visible  bg-white p-3 border border-gray-300">
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
              <li className="sm:h-20   flex items-center relative ">
                <a
                  className="tracking-wider flex items-center h-full	peer before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-1/2    before:translate-y-3 before:transition-all "
                  href="/shop"
                >
                  SHOP
                </a>
                <AiOutlineDown
                  size={"16px"}
                  className="mt-1 opacity-40 hidden sm:block"
                />
                <div className="hidden absolute invisible opacity-0	sm:flex hover:opacity-100 hover:!visible p-5 h-[27rem] w-[50rem] justify-between top-full -translate-x-1/2 translate-y-[2px]   peer-hover:visible peer-hover:opacity-100 duration-300 transition-all bg-white  border border-gray-300">
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
              <li className="sm:h-20 flex items-center">
                <a
                  className="tracking-wider	 before:content-[''] before:h-[1px] before:duration-300 before:w-full before:absolute before:scale-x-0 before:hover:scale-x-100 before:bg-[#1367fe] cursor-pointer relative before:bottom-0 before:transition-all"
                  href="/blog"
                >
                  BLOG
                </a>
              </li>
              <li className="sm:h-20 flex items-center">
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
              <div className="bg-[#1367fe] -z-10  rounded-full flex items-center justify-center text-[10px] text-white h-4 w-4 absolute -top-3 -right-3">
                1
              </div>
              <button className="flex items-center">
                <a href="/cart">
                  <BsBag />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
