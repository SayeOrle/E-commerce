import React from "react";
import { BsTruck } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full h-screen flex flex-col gap-y-4 py-5 mt-5 border-t-2 border-gray-300">
      <div className="container">
        <div className="w-full flex justify-between">
          <div className="flex gap-x-3">
            <div>
              <BsTruck size={"55px"} />
            </div>
            <div className="flex flex-col">
              <strong>FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div>
              <BsTruck size={"55px"} />
            </div>
            <div className="flex flex-col">
              <strong>FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div>
              <BsTruck size={"55px"} />
            </div>
            <div className="flex flex-col">
              <strong>FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div>
              <BsTruck size={"55px"} />
            </div>
            <div className="flex flex-col">
              <strong>FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div>
              <BsTruck size={"55px"} />
            </div>
            <div className="flex flex-col">
              <strong>FREE DELIVERY</strong>
              <small>From $59.89</small>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-1/2 px-10 py-16">
        <div className="container flex justify-between">
          <div className="text-white flex flex-col gap-y-10 max-w-[30rem]">
            <div>
              <h3 className="text-[30px] ">
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
                  className="w-full p-3 outline-none text-black"
                  placeholder="Enter yout email address."
                  type="text"
                />
                <input className="bg-black px-7 py-2" type="submit" />
              </form>
              <p className="text-xs opacity-60">
                By subscribing you agree to our
                <a href="">Terms & Conditions and Privacy & Cookies Policy.</a>
              </p>
            </div>
          </div>
          <div className="text-white flex flex-col gap-y-24 max-w-[30rem]">
            <div>
              <h3 className="text-[30px] ">Need help? (+90) 123 456 78 90 </h3>
              <p className="text-sm opacity-60">
                We are available 8:00am – 7:00pm
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img
                  className="w-[122px] h-[35px]"
                  src="https://e-commerce-udemy.netlify.app/img/footer/google-play.png"
                  alt=""
                />
                <img
                  className="w-[115] h-[42px]"
                  src="https://e-commerce-udemy.netlify.app/img/footer/app-store.png"
                  alt=""
                />
              </div>
              <p className="text-xs opacity-60">
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-white h-1/3 flex justify-between py-10">
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
          <div className="flex justify-between flex-1">
            <div className="flex flex-col gap-y-5">
              <h4 className="font-semibold">Information</h4>
              <ul className="text-sm flex flex-col gap-y-2">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="font-semibold">Information</h4>
              <ul className="text-sm flex flex-col gap-y-2">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="font-semibold">Information</h4>
              <ul className="text-sm flex flex-col gap-y-2">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="font-semibold">Information</h4>
              <ul className="text-sm flex flex-col gap-y-2">
                <li>Dropshipping</li>
                <li>Privacy Policy</li>
                <li>Dashboard</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-300 py-16">
        <div className="container flex text-sm justify-between">
          <div className="flex gap-x-1">
            <p>
              Copyright 2022 © E-Commerce Theme. All right reserved. Powered by
              Saye.
            </p>
            <img
              src="https://e-commerce-udemy.netlify.app/img/footer/cards.png"
              alt=""
            />
          </div>
          <div className="flex gap-x-3">
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
