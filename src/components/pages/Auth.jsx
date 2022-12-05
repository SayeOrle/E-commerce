import React from "react";

function Auth() {
  return (
    <div className="pt-[7.7494rem] sm:pt-[8.7487rem]  container ">
      <div className="gap-x-10 py-10 flex">
        <form action="" className="flex-1 flex flex-col items-start gap-y-4">
          <h2 className="text-lg font-semibold">Login</h2>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm" htmlFor="userName">Username or email address</label>
            <input
              type="text"
              id="userName"
              className="p-2 border-2 border-gray-300 outline-none w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm" htmlFor="pass">Password</label>
            <input
              type="text"
              id="pass"
              className="p-2 border-2 border-gray-300 outline-none w-full"
            />
          </div>
          <div>
            <input type="checkbox" id="chcBox" />
            <label className="text-sm" htmlFor="chcBox"> Remember me</label>
          </div>
          <button className="text-white px-7 py-2 bg-red-500 flex items-center">
            Login
          </button>
          <a href="s" className="text-red-500 text-sm">
            Lost your password?
          </a>
        </form>
        <form action="" className="flex-1 flex flex-col items-start gap-y-4">
          <h2 className="text-lg font-semibold" >Register</h2>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm" htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              className="p-2 border-2 border-gray-300 outline-none w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm" htmlFor="pass">Email address</label>
            <input
              type="text"
              id="pass"
              className="p-2 border-2 border-gray-300 outline-none w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm" htmlFor="pass">Password</label>
            <input
              type="text"
              id="pass"
              className="p-2 border-2 border-gray-300 outline-none w-full"
            />
          </div>

          <div className="flex flex-col items-start gap-y-3">
            <p className="text-sm">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="px-8 py-2 bg-red-500  text-white">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
