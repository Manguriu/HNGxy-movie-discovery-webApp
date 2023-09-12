/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

function Card3({}: Props) {
  return (
    <section>
      <div>
        <div className="flex items-center justify-between mt-4">
          <div className="font-extrabold text-[23px] mb-2 mt-2 font-poppins flex items-center gap-4 text-[#404040]">
            <p>Ashoka Starwars . 2022 . PG-13 . 2h 10m</p>
            <span className="inline-block  border border-[#F8E7EB] rounded-[15px] px-3 py-1 text-sm font-[500] text-[#B91C1C] leading-normal">
              Action
            </span>
            <span className="inline-block  border border-[#F8E7EB] rounded-[15px] px-3 py-1 text-sm font-[500] text-[#B91C1C] leading-normal">
              Drama
            </span>
          </div>
          <div className="ml-10">
            <div className="text-2xl flex items-center gap-2 justify-center font-poppins leading-normal">
              <img src="/star.png" alt="" width={30} height={30} />
              <p className="text-[#E8E8E8] text-[25px] font-[500]">
                8.5 <span>|</span>
              </p>
              <p className="text-[#666] text-[20px] font-[500]">350k</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card3;
