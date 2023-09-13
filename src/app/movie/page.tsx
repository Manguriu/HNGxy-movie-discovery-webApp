"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Card from "./Card";
import Card3 from "./Card3";
import Link from "next/link";
import Sidebar from "./Sidebar";

function MoviePage() {
  return (
    <section className="movie-overview" data-testid="movie-overview">
      <Sidebar />

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
