/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-[1440px] ml-14 h-[600px] ">
      <div className="flex items-center gap-[24px] max-lg:flex-col">
        <div className="mr-[10rem]">
          {" "}
          <Link href="/" className="flex gap-[24px] items-center">
            <img src="/tv.png" alt="" width={50} />
            <span className="leading-[24px] text-2xl font-DMsans font-[700] text-white max-lg:text-[20px]">
              MovieBox
            </span>
          </Link>
        </div>

        <div className="w-[525px]  flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className=" sm:flex-1 max-sm:w-full text-base leading-normal text-white text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-gray-300 max-sm:rounded-full bg-inherit "
          />
          <nav className="flex max-sm:justify-end items-center max-sm:w-full font-extrabold">
            <AiOutlineSearch />
          </nav>
        </div>
        <div className="ml-[10rem]">
          <ul className="flex-1 flex justify-center items-center gap-[27px] max-lg:hidden">
            <Link
              href="/"
              className="text-white font-[700] font-DMSans text-base"
            >
              Sign In
            </Link>
            <Link href="/" className="flex">
              <Image
                src="/Ellipse1.svg"
                alt=""
                width={30}
                height={30}
                className=" rounded-full"
              />
              <Image
                src="/menu.svg"
                alt=""
                width={30}
                height={30}
                className="absolute"
              />
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
