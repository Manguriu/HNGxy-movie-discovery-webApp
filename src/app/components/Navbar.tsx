/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full ml-14 ">
      <div className="flex items-center  gap-4">
        <div className="mr-20">
          {" "}
          <a href="/" className="flex gap-2 items-center">
            <img src="/tele.png" alt="" width={30} />
            <span className="font-extrabold text-lg ml-4 text-white">
              MovieBox
            </span>
          </a>
        </div>

        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className=" sm:flex-1 max-sm:w-full text-base leading-normal text-white text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full bg-inherit "
          />
          <nav className="flex max-sm:justify-end items-center max-sm:w-full font-extrabold">
            <AiOutlineSearch />
          </nav>
        </div>
        <div className="ml-20">
          <ul className="flex-1 flex justify-center items-center gap-4 max-lg:hidden">
            <a href="/" className="text-white">
              Sign In
            </a>
            <a href="/">
              <img
                src="/menu.png"
                alt=""
                width={30}
                className="bg-white rounded-full"
              />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
