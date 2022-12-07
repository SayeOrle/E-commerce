import "./App.css";
import Layout from "./layout";
import { mainContext } from "./context";
import OutsideClickHandler from "react-outside-click-handler";
import { BsSearch } from "react-icons/bs";
import product from "./images/1.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/pages/Shop";
import Auth from "./components/pages/Auth";
import Cart from "./components/pages/Cart";
import ProductDetail from "./components/pages/ProductDetail";
function App() {
  const [modal, setModal] = useState(false);
  const data = {
    modal,
    setModal,
  };
  // if (modal) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "auto";
  // }
  return (
    <mainContext.Provider value={data}>
      <Layout>
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/register" element={<Auth/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detail" element={<ProductDetail/>}/>

        </Routes>
        </BrowserRouter>

          <div
            className={`after:w-screen after:h-screen after:bg-black after:fixed after:z-40 after:top-0 after:opacity-60 grid place-content-center  ${
              modal ? " visible opacity-100 " : " invisible opacity-0 "
            } `}
          >
            <OutsideClickHandler onOutsideClick={() => setModal(false)}>
              <div className="flex  flex-col p-6 gap-y-5 overflow-y-auto w-full h-full  md:max-h-[36rem] md:max-w-[48rem] max-h-[30rem] max-w-[42rem] bg-white z-50 top-1/2 fixed letf-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="border-b-2 border-gray-300 flex flex-col gap-y-2">
                  <h3 className="text-3xl font-semibold">
                    Search for products
                  </h3>
                  <p className="text-sm opacity-70">
                    Start typing to see products you are looking for.
                  </p>
                </div>
                <div className="border-b-2 border-gray-300">
                  <div className="flex items-center pb-2">
                    <input
                      placeholder="Search a product"
                      className="w-full h-9 border-2 border-gray-300 outline-none p-2"
                      type="text"
                    />
                    <button className="h-9 w-12 border-l-0 border-2 border-gray-300 flex justify-center items-center">
                      <BsSearch />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="border-2 bg-[#f9f9f9] border-gray-300 p-3 font-semibold ">
                    <h3 className="text-sm">RESULTS FROM PRODUCT</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <a
                      href="#product"
                      className="flex w-full gap-x-5 p-4 border-2 border-gray-300 "
                    >
                      <div className="h-20 w-16">
                        <img src={product} className="w-full h-full" alt="" />
                      </div>
                      <div className="flex flex-col font-semibold text-sm gap-y-1">
                        <h4>Ridley High Waist</h4>
                        <span className="opacity-70">SKU:PDOO16</span>
                        <span className="text-[#dc3545] ">$100</span>
                      </div>
                    </a>
                  </div>
                </div>
                <button
                  className="absolute text-black  top-3 right-3"
                  onClick={() => setModal(false)}
                >
                  <AiOutlineCloseCircle size={"24px"} />
                </button>
              </div>
            </OutsideClickHandler>
          </div>

        </div>

      </Layout>
    </mainContext.Provider>
  );
}

export default App;
