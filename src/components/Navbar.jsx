import React from "react";

export function Navbar() {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-6 font-poppins">
          <div className="text-white text-2xl font-bold">{"{"}Finsweet</div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 ">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About us
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Features
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              FAQ
            </a>
            <a href="#" className="text-white hover:text-gray-300 ">
              Blog
            </a>
          </div>

          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2E2E5F]">
            Contact us
          </button>
        </nav>
      </div>
    </header>
  );
}
