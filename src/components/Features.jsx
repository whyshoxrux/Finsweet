import React from "react";

import icon1 from "../images/Icon.svg";
import icon2 from "../images/Icon-2.svg";
import icon3 from "../images/Icon-3.svg";
import icon4 from "../images/Icon-4.svg";
import icon5 from "../images/Icon-5.svg";
import icon6 from "../images/Icon-6.svg";

const features = [
  {
    image: icon1,
    title: "Uses Client First",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    image: icon2,
    title: "Two Free Revision Round",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    image: icon3,
    title: "Template Customization",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    image: icon4,
    title: "24/7 Support",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    image: icon5,
    title: "Quick Delivery",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    image: icon6,
    title: "Hands-on approach",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-[#F4F6FC] font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#2E2E5F] mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2E2E5F] max-w-2xl mx-auto">
            Design that solves problems, one product at a time
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-9 ">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-6 hover:animate-shake">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-poppins text-[#2E2E5F] mb-2 leading-[51px]">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-poppins leading-[31px] text-left text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
