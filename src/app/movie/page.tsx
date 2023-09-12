/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Card from "./Card";
import Card3 from "./Card3";
import Link from "next/link";
import Sidebar from "./Sidebar";
type Props = {};

function MoviePage({}: Props) {
  return (
    <section className="max-container pt-5 movie-cont pl-10 pr-10 w-full mt-5 mb-[10rem] h-full p-4 flex gap-[24px]">
      <div className=" sidebar relative rounded-r-[45px] border border-black border-opacity-30">
        <Sidebar />
      </div>
      <div>
        <Link href="/">
          <div className="w-full relative">
            <Image src="/movie.png" alt="" height={600} width={1440} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/Play.png" alt="" width={54} height={54} />
              <Image
                src="/Ellipse4.svg"
                alt=""
                width={110}
                height={110}
                className="absolute"
              />
            </div>
          </div>
        </Link>
        <div className="pt-5 flex flex-col justify-evenly ">
          <div className="items-center ">
            <div className="mt-5 relative">
              <Card3 />
            </div>
            <div className="mt-5 relative">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoviePage;
