/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";
import Link from "next/link";

function FeaturedMovies() {
  return (
    <section className="max-container">
      <div className="flex flex-row  items-center justify-between gap-5">
        <Link href="/" className="font-bold text-2xl font-palanquin">
          Featured Movie
        </Link>
        <Link
          href="/"
          className="font-[400] font-DMSans text-rose-700 leading-[24px] flex gap-[8px]"
        >
          See more
          <Image src="/more.svg" alt="" width={20} height={20} />
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-10">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedMovies;
