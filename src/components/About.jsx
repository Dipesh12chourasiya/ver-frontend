import React from "react";

export default function About() {
  return (
    <section className="w-full h-[80vh] py-16 bg-[#F8FAFF] text-center">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1554AD]">
        About Us
      </h2>

      {/* Blue Line */}
      <div className="w-24 h-2 bg-[#1554AD] mx-auto mt-2 rounded-full"></div>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed text-sm md:text-base px-4">
        We are a team of passionate real estate professionals dedicated to helping 
        clients find the right homes and investments. With a focus on trust, transparency, 
        and exceptional service, we ensure a seamless experience from start to finish.
        Our mission is to guide clients with honesty and expertise, providing 
        industry-leading support at every step.
      </p>

      {/* Button */}
      <button
        className="mt-8 px-8 py-3 border border-[#1554AD] text-[#1554AD] 
                   rounded-lg hover:bg-[#1554AD] hover:text-white transition-all"
      >
        LEARN MORE
      </button>

    </section>
  );
}
