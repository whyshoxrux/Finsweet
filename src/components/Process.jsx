import React from "react";
import onephoto from "../images/pointer1.svg";
import twophoto from "../images/pointer2.svg";
import threephoto from "../images/pointer3.svg";
import fourphoto from "../images/pointer4.svg";

const processSteps = [
  {
    image: onephoto,
    title: "Strategy",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    image: twophoto,
    title: "Wireframing",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    image: threephoto,
    title: "Design",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    image: fourphoto,
    title: "Development",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
];

export function Process() {
  return (
    <div className="bg-[#F4F6FC] py-40 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-[#282938] mb-4 font-poppins">
              How we work
            </h2>
            <p className="text-gray-600 mb-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <button className="text-[#5D5DFF] hover:text-[#4646ff] flex items-center">
              Get in touch with us →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="space-y-4">
                <div className="w-12 h-12">
                  <img
                    src={step.image}
                    alt={`${step.title} icon`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-20px font-Poppins text-[#2E2E5F] text-[29px] leading-[48px] text-left">
                  {step.title}
                </h3>
                <p className="text-gray-500  text-[15px] leading-[29px] font-Poppins">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
