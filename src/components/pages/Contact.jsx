import React from "react";

function Contact() {
  return (
    <div className="pt-[123.99] sm:pt-[139.98px]">
      <div className="w-full">
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=1037&amp;height=500&amp;hl=en&amp;q=%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="flex flex-col container gap-y-5 my-5">
        <div className="flex flex-col  justify-start max-w-[65rem]">
          <h4 className="text-red-600 font-semibold">Contact with us</h4>
          <h2 className="font-semibold text-3xl">Get In Touch</h2>
          <p>
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
            lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo
            a, pretium lobortis metus. Vivamus consectetur consequat justo.
          </p>
        </div>
        <div className="flex gap-x-10">
          <form action="" className="flex-1 ">
            <div className="flex gap-x-3">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="yourName">yourName</label>
                <input
                  id="yourName"
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="yourEmail">yourEmail</label>
                <input
                  id="yourEmail"
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="Subject ">Subject </label>
              <input
                type="text"
                name=""
                id="Subject "
                className="border-2 border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="Your message">Your message</label>
              <textarea
                className="border-2 border-gray-300 p-2"
                name=""
                id="Your message"
                cols="100"
                rows="2"
              ></textarea>
            </div>
            <button className="text-white bg-black  px-7 py-3 my-5">Send massage</button>
          </form>
          <div className="flex-1 flex flex-col items-start gap-y-4">
            <div className="flex flex-col items-start text-sm gap-y-2">
              <strong>Clotya Store</strong>
              <p>
                Clotya Store Germany — 785 15h Street, Office 478/B Green Mall
                Berlin, De 81566
              </p>
              <p>Phone: +1 1234 567 88</p>
              <p>Email: contact@example.com</p>
            </div>
            <div className="flex flex-col items-start ">
              <strong>Opening Hours</strong>
              <p>Monday - Friday : 9am - 5pm</p>
              <p>Weekend Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
