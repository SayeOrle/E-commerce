import React from "react";

function Campaign() {
  return (
    <div className="h-screen relative bg mt-6 grid place-items-center">
      <div className="flex flex-col items-center text-white gap-y-3">
        <h2 className="text-[24px] font-bold">New Season Sale</h2>
        <strong className="text-[54px]">40% OFF</strong>
        <span className="bg-white h-1 w-10 "></span>
        <a
          href=""
          className="px-8 py-3 bg-white text-black hover:bg-[#1357fe] hover:text-white font-semibold"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

export default Campaign;
