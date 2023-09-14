"use client";
import React from "react";
import Image from "next/image";

function HeroCard({
  imgURL,
  desc,
  name,
  popularity,
  rating,
}: {
  imgURL: any;
  desc: any;
  name: any;
  popularity: any;
  rating: any;
}) {
  return (
    <main className="w-full h-[600px] relative">
      <section className="w-full h-max relative">
        <div className={`bg-no-repeat bg-cover bg-center h-full w-full`}>
          <Image src={`${imgURL}`} alt="" height={600} width={1440} />
        </div>
        <div className="absolute left-0 top-0 text-white  w-fit z-50">
          <div className=" p-10 ml-[98px] flex flex-col  items-start w-full sm:px-0 px-8 mt-[10rem] pb-20">
            <p className="text-[48px] font-DMSans text-white mt-4 pt-30 w-fit capitalize break-words">
              {name}
            </p>
            <article className="mb-[16px] mt-[16px] flex gap-10 ">
              <p className="text-white flex gap-2 items-center">
                <span>
                  <Image src="/imdb.png" alt="" width={30} height={60} />
                </span>
                {rating}
              </p>
              <p className="text-white ml-8 flex gap-2 items-center">
                <span>
                  <Image src="/tomato.png" alt="" width={28} height={30} />
                </span>
                {popularity}
              </p>
            </article>
            <p className=" leading-[18px] text-sm text-white mt-2 mb-[16px] sm:max-w-sm z-auto">
              {desc}
            </p>
            <button className="bg-rose-700 px-4 py-2 rounded-md text-sm flex gap-[8px] ">
              <Image src="/Play.svg" alt="" width={20} height={20} />
              <span className="text-white font-14px text-sm">
                WATCH TRAILER
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroCard;
