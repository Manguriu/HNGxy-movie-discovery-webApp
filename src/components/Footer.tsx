import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <section className="mt-10 pt-10 pb-10">
      <div className="flex items-center justify-center flex-col gap-10">
        <div className="text-4xl flex flex-row gap-10">
          <a href="/">
            <AiFillFacebook />
          </a>
          <a href="/">
            <AiOutlineInstagram />
          </a>
          <a href="/">
            {" "}
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <AiFillYoutube />
          </a>
        </div>
        <div className="flex items-center gap-10 font-palanquin font-bold">
          <a href="/">
            <p className="text-2xl max-lg:text-[12px]"> Condition of Use</p>
          </a>
          <a href="/">
            <p className="text-2xl max-lg:text-[12px]"> Privacy & policy</p>
          </a>
          <a href="/">
            <p className="text-2xl max-lg:text-[12px]">Press Room</p>
          </a>
        </div>
        <div className="flex items-center gap-2 text-slate-400 font-extrabold font-palanquin">
          <span className="text-2xl">
            <AiOutlineCopyrightCircle />
          </span>
          <p className="max-lg:text-sm">2021 MovieBox by Brian_Miruri12</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
