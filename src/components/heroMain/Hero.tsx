"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroCard from "./HeroCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined
    ) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="custompagination ">{i + 1}</div>
    ),
  };
  return (
    <section className="max-w-[1440px] flex xl:flex-row flex-col mx-auto relative">
      <Slider {...settings}>
        <section>
          <HeroCard />
        </section>
        <section>
          <HeroCard />
        </section>
        <section>
          <HeroCard />
        </section>
        <section>
          <HeroCard />
        </section>
        <section>
          <HeroCard />
        </section>
      </Slider>
    </section>
  );
}

export default Hero;
