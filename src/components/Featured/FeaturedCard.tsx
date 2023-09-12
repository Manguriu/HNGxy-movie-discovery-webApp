/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

type Props = {};

function FeaturedCard({}: Props) {
  return (
    <Link
      href="/movie"
      className=" hover:scale-102 rounded-md hover:shadow-lg transform transition duration-100 ease-in-out"
    >
      <div className="bg-white pb-4 justify-between items-start">
        <img
          className="w-full h-auto"
          src="/poster.png"
          alt="Movie Poster"
          width={250}
          height={370}
        />
        <div>
          <div className="absolute top-0 right-0 p-2 mr-2 mt-2">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <img
                  src="/Heart.svg"
                  alt=""
                  width={30}
                  height={19.474}
                  className="p-1"
                />
                <img
                  src="/Ellipse3.svg"
                  alt=""
                  width={30}
                  height={29.211}
                  className="absolute top-0 left-0"
                />
              </div>
            </Link>
          </div>
          <div className="absolute ml-2 mt-6 top-0 left-0 flex flex-start  rounded-[8px] bg-opacity-50 backdrop-blur-sm bg-[#F3F4F6]">
            <Link href="/" className="flex items-center">
              <span className="text-[12px] text-gray-900 px-1">Tv series</span>
            </Link>
          </div>
        </div>

        <div className="p-1 ">
          <p className="text-slate-400  text-sm font-palanquin mt-[12px]">
            USA,2016
          </p>
          <div className="font-extrabold text-lg mb-2 mt-[12px] font-plaquin">
            Ashoka Starwars
          </div>
          <div className="flex gap-10 mt-[12px] w-[250px]">
            <p className="text-gray-900 flex gap-2 items-center">
              <span>
                <img src="/imdb.png" alt="" width={35} />
              </span>
              800/100
            </p>
            <p className="text-gray-900 ml-8 flex gap-2 items-center">
              <span>
                <img src="/tomato.png" alt="" width={25} />
              </span>
              97%
            </p>
          </div>
          <p className="text-slate-400 text-sm mt-[12px]">
            Action, Drama ,Comedy
            <br />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedCard;
