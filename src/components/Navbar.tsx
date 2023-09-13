/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

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
        <Search />
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
