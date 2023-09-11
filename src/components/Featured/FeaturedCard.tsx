/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

type Props = {};

function FeaturedCard({}: Props) {
  return (
    <a
      href="/movie"
      className=" hover:scale-102 rounded-md hover:shadow-lg transform transition duration-100 ease-in-out"
    >
      <div className="bg-white pb-4 justify-between items-start">
        <img
          className="w-full h-auto"
          src="https://static.bunnycdn.ru/i/cache/images/1/1a/1a58d33114f0163ef9855fd74db5d0b0.jpg"
          alt="Movie Poster"
        />
        <article className="absolute top-0 right-0 p-2 mr-2 mt-2 bg-slate-300 rounded-full">
          <a href="/">
            <AiOutlineHeart />
          </a>
        </article>
        <article className="absolute top-0 left-0 p-2 ml-2 mt-2 bg-slate-300 rounded-full px-3">
          <a href="/">
            <span className="text-[10px] font-bold">Tv series</span>
          </a>
        </article>
        <div className="p-1">
          <p className="text-slate-400  text-sm font-palanquin mt-2">
            USA,2016
          </p>
          <div className="font-extrabold text-lg mb-2 mt-2 font-plaquin">
            Ashoka Starwars
          </div>
          <div className="flex gap-10 mt-4">
            <p className="text-black flex gap-2 items-center">
              <span>
                <img src="/imdb.png" alt="" width={35} />
              </span>
              800/100
            </p>
            <p className="text-black ml-8 flex gap-2 items-center">
              <span>
                <img src="/tomato.png" alt="" width={25} />
              </span>
              97%
            </p>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Action, Drama ,Comedy
            <br />
          </p>
        </div>
      </div>
    </a>
  );
}

export default FeaturedCard;

{
  /* <div className=" flex flex-col w-fit max-sm:w-full p-4 justify-center outline">
        <div className="relative flex items-center justify-center bg-black rounded-md ">
          <img
            src="/hero1.png"
            alt="movie"
            className="w-[200px] h-[300px] cover object-cover relative"
          />
          <div className="absolute top-0 right-0 p-2 bg-slate-300 rounded-full">
            <a href="/">
              <AiOutlineHeart />
            </a>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between mt-auto">
          <h3 className="mt-3 text-[13px] leading-normal font-bold font-Montserrat ">
            Something
          </h3>
          <p className="mt-2  leading-normal text-[12px]">Ksh:400</p>
        </div>
        <p className="text-[12px] mt-2 font-Montserrat">Something</p>
        <div className="mt-2 flex justify-start gap-2">
          <AiFillStar />
          <p className="font-extralight text-[14px] leading-normal text-gray-500">
            (5)
          </p>
        </div>
        <div className="mt-4 leading-normal">
          <button></button>
        </div>
      </div> */
}
