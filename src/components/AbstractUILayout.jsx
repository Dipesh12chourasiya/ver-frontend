import React from 'react';

import image1Src from "../assets/images/im2.svg";
import image2Src from "../assets/images/im1.svg";
import image3Src from "../assets/images/im3.svg";

const AbstractUILayout = () => {
  return (
    <div className="relative bg-[#F8FAFF] overflow-hidden py-16 px-6 lg:px-12">

      {/* --- Background Shapes --- */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-2xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute top-1/2 right-0 w-52 h-52 bg-blue-100 rounded-full opacity-20 blur-2xl translate-x-1/3"></div>

      {/* Small shapes */}
      <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-blue-500 -translate-x-1/2 -translate-y-1/2 z-10"></div>

      <div className="absolute top-[35%] right-[23%] w-8 h-8 border-t-4 border-r-4 border-blue-500 z-10"></div>

      <div className="absolute top-[28%] left-[22%] w-8 h-8 border-b-4 border-l-4 border-orange-500 z-10"></div>

      {/* Dotted pattern */}
      <div className="absolute top-0 right-0 p-4 opacity-40 z-0">
        <div className="space-y-1">
          <div className="w-2 h-2 bg-blue-200"></div>
          <div className="w-2 h-2 bg-blue-200 ml-1"></div>
          <div className="w-2 h-2 bg-blue-200 ml-2"></div>
        </div>
      </div>

      {/* --- Images Section (New balanced layout) --- */}
      <div className="relative z-20 max-w-5xl mx-auto mt-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left Image (Small) */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={image1Src}
              alt="Handshake"
              className="w-full max-w-[260px] rounded-lg shadow-lg border-4 border-orange-500/50"
            />
          </div>

          {/* Center Image (Large Main Image) */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={image2Src}
              alt="Showing House"
              className="w-full max-w-[330px] rounded-lg shadow-xl border-8 border-white"
            />
          </div>

          {/* Right Image (Small) */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={image3Src}
              alt="Couple Meeting"
              className="w-full max-w-[260px] rounded-lg shadow-lg border-4 border-orange-500/50"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AbstractUILayout;
