/* eslint-disable @next/next/no-img-element */
"use client";
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const sidebarData = [
  {
    id: 1,
    Name: "Home",
    imgUrl: "/images/home.png",
    vector: "/images/vector.svg",
    href: "/",
  },
  {
    id: 2,
    Name: "Movies",
    imgUrl: "/images/projector.png",
    vector: "/images/vector.svg",
    href: "/movie/1",
  },
  {
    id: 3,
    Name: "TV Series",
    imgUrl: "/images/show.png",
    vector: "/images/vector.svg",
    href: "/series",
  },
  {
    id: 4,
    Name: "Upcoming",
    imgUrl: "/images/calendar.png",
    vector: "/images/vector.svg",
    href: "/",
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    setSidebarVisible(true);
  }, []);

  return (
    <section className="">
      <div
        className={`${
          sidebarVisible
            ? "transform translate-x-0 transition-transform duration-300 ease-in-out"
            : "transform -translate-x-full transition-transform duration-300 ease-in-out"
        } absolute z-20 mt-4 ml-2 hover:cursor-pointer max-lg:mt-5 max-xs:top-0`}
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        <img
          src="/tv.png"
          alt=""
          width={50}
          height={50}
          className="max-sm:w-10"
        />
      </div>
      <div
        className={`sidebar max-lg:w-full relative  rounded-r-[45px] border border-black max-lg:border-white border-opacity-30 transform transition-transform duration-300 ease-in-out max-lg:h-[100px] ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } ${sidebarVisible ? "" : "hidden"}`}
      >
        <div
          className={`mt-9 ml-8 flex gap-[24px] justify-center items-center`}
        >
          <Link href="/">
            <span className="max-lg:hidden leading-[24px] text-2xl font-DMsans font-[700] text-[#333] max-lg:text-[20px]">
              MovieBox
            </span>
          </Link>
        </div>
        <div
          className={`lg:mt-[90px] max-lg:flex max-lg:right-0 max-lg:flex-row max-lg:-top-12 max-lg:absolute `}
        >
          {sidebarData.map((data, index) => (
            <div key={index} className="">
              <Link href={data.href}>
                <div
                  key={data.id}
                  className={`w-max  group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${
                    pathname === data.href ? "bg-[#BE123C]/10" : ""
                  }`}
                >
                  <div className="mt-[50px] flex gap-[15px] lg:text-[20px] lg:w-[226px] max-lg:w-[100px]  max-sm:w-[60px] h-[82px] items-center justify-center ">
                    <span className="max-sm:hidden">
                      <Image src={data.imgUrl} alt="" width={25} height={25} />
                    </span>
                    <h1 className=" max-lg:text-[9px] font-poppins font-[600] text-[#BE123C]">
                      {data.Name}
                    </h1>
                    {pathname === data.href && (
                      <div className="bg-[#BE123C] h-[86px] flex absolute -right-0 ">
                        <Image
                          src={data.vector}
                          alt=""
                          width={6}
                          height={100}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={`max-lg:hidden w-max flex ml-6 mt-[24px] `}>
          <div className="w-[170px] flex flex-col h-[210px] border p-[16px] border-[#BE123C] rounded-[20px] items-center justify-center ">
            <p className="text-[15px] font-[600]">
              Play movie quizes and earn free tickets
            </p>
            <p className="text-[12px] font-[500] mt-[9px]">
              50k people are playing now
            </p>
            <button className=" px-[17px] py-[2px] mt-[6px] bg-rose-200 rounded-[30px] h-[30px] text-[#BE123C] font-[12px]">
              Start playing
            </button>
          </div>
        </div>

        <Link href="/">
          <div className={`w-max absolute max-lg:-top-0 `}>
            <div className="mt-[5px] flex lg:gap-[15px] max-lg:gap-0 text-[20px] w-[226px] h-[82px] items-center justify-center ">
              <span>
                <Image
                  src="/images/logout.png"
                  alt=""
                  width={25}
                  height={25}
                  className="max-lg:hidden"
                />
              </span>
              <h1 className="font-poppins font-[600] text-[#666] max-lg:text-[12px] max-sm:hidden">
                Log out
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Sidebar;

//
