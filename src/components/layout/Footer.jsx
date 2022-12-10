import React from "react";
import { BsTruck } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full h-screen flex flex-col gap-y-4 mt-5 border-t-2 border-gray-300 ">
      <div className="container">
        <div className="w-full flex justify-between flex-col sm:flex-row items-center gap-y-4 py-5">
          <div className="flex gap-x-3">
            <div className="text-4xl md:text-[3.5rem]">
              <BsTruck />
            </div>
            <div className="flex flex-col">
              <strong className="text-xs md:text-base">FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="text-4xl md:text-[3.5rem]">
              <BsTruck />
            </div>
            <div className="flex flex-col">
              <strong className="text-xs md:text-base">FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="text-4xl md:text-[3.5rem]">
              <BsTruck />
            </div>
            <div className="flex flex-col">
              <strong className="text-xs md:text-base">FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="text-4xl md:text-[3.5rem]">
              <BsTruck />
            </div>
            <div className="flex flex-col">
              <strong className="text-xs md:text-base">FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="text-4xl md:text-[3.5rem]">
              <BsTruck />
            </div>
            <div className="flex flex-col">
              <strong className="text-xs md:text-base">FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full px-10 py-16">
        <div className="container flex justify-between md:flex-row flex-col gap-x-5">
          <div className="text-white flex flex-col gap-y-14 max-w-[30rem]">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl ">
                Get our emails for info on new items, sales and more.
              </h3>
              <p className="text-sm opacity-60">
                We'll email you a voucher worth $10 off your first order over
                $50.
              </p>
            </div>
            <div>
              <form action="" className="bg-white flex justify-between p-1">
                <input
                  className="w-full outline-none text-black p-1 md:p-2 lg:p-3"
                  placeholder="Enter yout email address."
                  type="text"
                />
                <input className="bg-black px-7 py-2" type="submit" />
              </form>
              <p className="text-xs opacity-60 mt-2">
                By subscribing you agree to our
                <a href="">Terms & Conditions and Privacy & Cookies Policy.</a>
              </p>
            </div>
          </div>
          <div className="text-white flex flex-col gap-y-24 max-w-[30rem]">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl ">
                Need help? (+90) 123 456 78 90{" "}
              </h3>
              <p className="text-sm opacity-60">
                We are available 8:00am – 7:00pm
              </p>
            </div>
            <div>
              <div className="flex items-center flex-col md:flex-row">
                <img
                  className="w-[122px] h-[35px]"
                  src="https://e-commerce-udemy.netlify.app/img/footer/google-play.png"
                  alt=""
                />
                <img
                  className="w-[127px] h-[40px]"
                  src="https://e-commerce-udemy.netlify.app/img/footer/app-store.png"
                  alt=""
                />
              </div>
              <p className="text-xs opacity-60 mt-3">
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-white flex  max-w-[50rem] py-6 sm:py-8 mb-2 flex-col items-start md:flex-row gap-y-3">
          <div className="flex flex-col gap-y-2 max-w-[30rem] ">
            <h3 className="text-3xl font-semibold">LOGO</h3>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis in termapol.
            </p>
            <p>
              <a href="tel:0000 0">55 334 34</a> -
              <a href="mailto:info@example.com"> info@example.com</a>
            </p>
          </div>
          <div className="flex flex-col   gap-4  ">
            <div className="flex flex-col relative">
              <h4 className="font-semibold peer">Information</h4>
              <ul className=" bg-white border border-gray-400 p-4 text-sm flex flex-col gap-y-1 absolute top-0 -right-32 opacity-0 invisible peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100 transition-all">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col relative">
              <h4 className="font-semibold peer">Information</h4>
              <ul className=" bg-white border border-gray-400 p-4 text-sm flex flex-col gap-y-1 absolute top-0 -right-32 opacity-0 invisible peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100 transition-all">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col relative">
              <h4 className="font-semibold peer">Information</h4>
              <ul className=" bg-white border border-gray-400 p-4 text-sm flex flex-col gap-y-1 absolute top-0 -right-32 opacity-0 invisible peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100 transition-all">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col relative">
              <h4 className="font-semibold peer">Information</h4>
              <ul className=" bg-white border border-gray-400 p-4 text-sm flex flex-col gap-y-1 absolute top-0 -right-32 opacity-0 invisible peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100 transition-all">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-300 ">
        <div className="container flex justify-between text-sm flex-col md:flex-row items-start gap-y-3  py-4">
          <p>
            Copyright 2022 © E-Commerce Theme. All right reserved. Powered by
            Saye.
          </p>
          <img
            className="object-contain"
            src="https://e-commerce-udemy.netlify.app/img/footer/cards.png"
            alt=""
          />
          <div className="flex gap-x-4 flex-wrap justify-end">
            <a href="">Privacy Policy</a>
            <a href="">Privacy Policy</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
