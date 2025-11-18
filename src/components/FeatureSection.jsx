import React from "react";
import Doc1 from "../assets/images/doc1.svg";
import Doc2 from "../assets/images/doc2.svg";
import Doc3 from "../assets/images/doc3.svg";
// import Shape from "../assets/shape.svg"; // background curved line

export default function FeatureSection() {
  return (
    <section className="relative  w-full py-20 bg-[#F8FAFF] overflow-hidden text-center">

      {/* Background Decorative Shape */}
      {/* <img
        src={Shape}
        alt="shape"
        className="absolute right-0 top-0 w-[60%] opacity-70 pointer-events-none"
      /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1554AD]">
            Not Your Average Realtor
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            Real Trust UAE are experts at giving a property a detailed 
            second-selling design, and strategic marketing to get 
            the maximum exposure and the best value.
          </p>
        </div>

        {/* RIGHT IMAGES SECTION */}
        <div className="relative flex items-center justify-center">

          {/* Circle 1 – Big One */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#E5ECFF] shadow-md relative z-20">
            <img src={Doc1} alt="agent" className="w-full h-full object-cover" />
          </div>

          {/* Circle 2 – Top Right */}
          <div className="absolute -top-10 right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#E5ECFF] shadow-md">
            <img src={Doc2} alt="clients" className="w-full h-full object-cover" />
          </div>

          {/* Circle 3 – Bottom Right */}
          <div className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#E5ECFF] shadow-md">
            <img src={Doc3} alt="happy client" className="w-full h-full object-cover" />
          </div>

          {/* Colored Dots (Decorative) */}
          <div className="absolute -top-5 left-10 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-10 left-0 w-4 h-4 bg-orange-500 rounded-full"></div>

        </div>

      </div>
    </section>
  );
}
