import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Features } from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1C1E53] font-poppins">
      <Navbar />
      <Hero />
      <Process />
      <Features />
    </div>
  );
}
