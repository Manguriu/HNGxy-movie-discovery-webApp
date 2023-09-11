/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
  return (
    <section className="max-w-[1440px] flex xl:flex-row flex-col p-1 bg-hero bg-cover mx-auto">
      <div className=" xl:w-2/5 flex flex-col  items-start w-full sm:px-16 px-8 mt-[10rem] ml-1 pb-20">
        <p className="text-[40px] font-palanquin text-white mt-4 pt-30">
          john Wick 3:
          <br />
          pallebulum
        </p>
        <div className="mt-2 flex gap-10">
          <p className="text-white flex gap-2 items-center">
            <span>
              <img src="/imdb.png" alt="" width={30} />
            </span>
            800/100
          </p>
          <p className="text-white ml-8 flex gap-2 items-center">
            <span>
              <img src="/tomato.png" alt="" width={28} />
            </span>
            97%
          </p>
        </div>
        <p className=" font-montserrat text-sm text-white mt-2 mb-2 leading-normal sm:max-w-sm">
          Discover new things Discover new things Discover new things Discover
          new things Discover new things Discover new things Discover new things
        </p>
        <button className="bg-red-900 px-4 py-2 rounded-md text-sm flex gap-2 ">
          <img src="/play.png" alt="" width={20} />
          <span className="text-white font-bold text-sm">WATCH TRAILER</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
