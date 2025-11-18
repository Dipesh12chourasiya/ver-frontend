import BgImage from "../assets/images/blueprint-couple.svg";
import Contact from "../pages/Landing/Contact";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[91vh] flex">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between px-6 md:px-12">

        {/* Left Text */}
        <div className="hidden md:block text-white font-bold text-4xl md:text-6xl leading-tight w-1/2">
          <h1>Consultation,</h1>
          <h1>Design,</h1>
          <h1>& Marketing</h1>
        </div>

        {/* Right Contact Form Card */}
        
        {/* RIGHT FORM BOX */}
        <div className="w-full max-w-sm">
          <div className="bg-[#465A86]/95 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Get a Free Consultation
            </h2>

            <Contact hideTitle={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
