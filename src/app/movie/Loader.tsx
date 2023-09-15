import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <section>
      <div>
        <div className="w-full relative">
          <div className="relative bg-gray-200 h-[475px] rounded-lg max-xs:h-[200px]">
            <div className="h-full w-full animate-pulse bg-gray-300 rounded-lg"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[54px] h-[54px] bg-gray-300 animate-pulse"></div>

            <div className="w-[110px] h-[110px] bg-gray-300 animate-pulse absolute"></div>
          </div>
        </div>

        <div className="pt-5 flex justify-evenly ">
          <div className="items-center ">
            <div className="mt-5 relative">
              <section>
                <div>
                  <div className="flex items-center justify-between mt-4 max-xl:flex-col max-lg:flex-col bg-gray-300 animate-pulse">
                    <div className="font-extrabold text-[23px] mb-2 mt-2 font-poppins flex items-center gap-4 text-gray-300">
                      <p className="max-xl:text-[20px] max-sm:text-[10px] bg-gray-300 animate-pulse"></p>

                      <p className="bg-gray-300 animate-pulse"></p>

                      <p className="bg-gray-300 animate-pulse"></p>
                      <p className="bg-gray-300 animate-pulse"></p>
                    </div>

                    <div className="lg:ml-10 max-lg:flex-col bg-gray-300 animate-pulse">
                      <div className="text-2xl flex items-center gap-2 justify-center font-poppins leading-normal">
                        <div className="w-[30px] h-[30px] bg-gray-300 animate-pulse max-sm:w-5"></div>
                        <p className="text-gray-300 text-[25px] font-[500] max-sm:text-[15px] bg-gray-300 animate-pulse"></p>
                        <p className="text-gray-300 text-[20px] font-[500]  max-sm:text-[15px] bg-gray-300 animate-pulse"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-5 relative">
              <section className="w-fit relative items-center">
                <div className="flex justify-between gap-[24px] items-center max-lg:flex-col max-xl:flex-col  max-lg:w-fit">
                  <div className="font-poppins font-[400] text-[20px] max-lg:text-[15px] max-sm:text-[10px] bg-gray-300 animate-pulse ">
                    <p className="text-gray-300 bg-gray-300 animate-pulse"></p>
                    <div className="relative mt-10">
                      <div className="flex flex-col gap-[31px] font-[400] text-[20px] max-lg:text-[10px]">
                        <p className="text-gray-300">
                          <span className=" bg-gray-300 animate-pulse"></span>
                        </p>

                        <p className="text-gray-300">
                          <span className=" bg-gray-300 animate-pulse"></span>
                        </p>

                        <p className="text-gray-300">
                          <span className=" bg-gray-300 animate-pulse"></span>
                        </p>
                      </div>
                      <div className="w-full mt-6 flex items-center  gap-2 border border-[#C7C7C7]  rounded-[10px] text-white">
                        <div className="lg:w-[253px] text-white  h-[55px] rounded-[10px] max-sm:w-[100px] max-xs:w-[70px] max-xs:text-[8px] bg-gray-300 animate-pulse"></div>
                        <input
                          type="text"
                          placeholder=""
                          className=" text-black font-poppins font-[500] text-[20px] max-xs:text-[10px] bg-inherit outline-none bg-gray-300 animate-pulse"
                        />
                        <div className="flex absolute right-4 items-center font-extrabold">
                          <div className="w-[30px] h-[30px] bg-gray-300 animate-pulse max-xs:w-[15px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center w-full pb-4">
                    <div className=" flex flex-col items-center justify-center gap-[24px]">
                      <div className="max-xs:text-[10px] w-full flex gap-[10px]  text-white font-[500] text-[20px]  font-poppins leading-normal items-center justify-center h-[55px] rounded-[10px] bg-gray-300 animate-pulse">
                        <div className="w-[24px] h-[24px] bg-gray-300 animate-pulse max-xs:w-[15px]"></div>
                      </div>

                      <div className="max-xs:text-[10px] w-full flex gap-[10px]  text-[#333] font-[500] text-[20px] font-poppins leading-normal items-center justify-center h-[55px] rounded-[10px] border bg-gray-300 animate-pulse">
                        <div className="w-[24px] h-[24px] bg-gray-300 animate-pulse max-xs:w-[15px]"></div>
                      </div>
                      <div className="w-full relative rounded-[15px]">
                        <div className="w-[360px] h-[229px] bg-gray-200 animate-pulse rounded-[15px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
