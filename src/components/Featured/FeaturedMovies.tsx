/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeaturedCard from "./FeaturedCard";

function FeaturedMovies() {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-start gap-5">
        <p className="font-bold text-2xl font-palanquin">Featured Movie</p>
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
