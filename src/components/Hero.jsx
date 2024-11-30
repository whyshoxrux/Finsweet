import React from "react";
import wallet from "../images/wallet.svg";

export function Hero() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-20">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] text-white font-semibold leading-tight font-poppins">
              Building stellar <br />
              websites for early <br /> startups
            </h1>

            <p className="text-gray-300 text-sm sm:text-base w-full sm:w-[562px] mx-auto md:mx-0 opacity-70 font-poppins font-normal leading-[28px] text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="space-x-4 mt-6 text-center md:text-left">
              <button className="bg-[#FCD980] text-black px-5 py-3 rounded-full hover:bg-[#ffff]">
                View our work
              </button>
              <button className="bg-transparent text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#e06856]">
                View Pricing →
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={wallet}
              alt="Development workflow illustration"
              className="w-full max-w-[500px] mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
