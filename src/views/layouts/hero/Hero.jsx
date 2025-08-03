import React, { useEffect, useRef } from "react";
import subperson1 from "../../../assets/subperson1.webp";
import subperson2 from "../../../assets/subperson2.webp";
import subperson3 from "../../../assets/subperson3.webp";
import person1 from "../../../assets/person1.webp";
import background from "../../../assets/background.webp";
import Navbar from "../../components/navbar/Navbar";
const HeroSection = () => {
  const textRef = useRef(null);

  // Simple fade-in animation
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateY(20px)";

      setTimeout(() => {
        textRef.current.style.transition = "all 1s ease-out";
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <div className="">
      {/* navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="px-8 py-16 max-w-7xl mx-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" ref={textRef}>
            {/* Badge */}
            <div className="bg-gradient-to-r from-yellow-500 from-20% to-white to-10%">
              <div className="inline-flex items-center text-black px-4 py-2 rounded text-sm font-medium">
                SEO & Marketing Agency
              </div>
            </div>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering
              <br />
              Growth Unlock
              <br />
              SEO Solutions
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Saor, we are dedicated to helping businesses navigate the
              complex digital landscape with ease. We specialize in providing a
              full spectrum of SEO.
            </p>

            {/* CTA Section */}
            <div className="flex items-center gap-8">
              <button className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors flex items-center gap-2">
                Get Started Now
                <span className="rotate-45">↗</span>
              </button>

              {/* Social Proof */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Get Started Now</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      src={subperson1}
                      alt="User 1"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src={subperson2}
                      alt="User 2"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src={subperson3}
                      alt="User 3"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-black text-sm font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-12 h-12 border-2 border-gray-300 rotate-45"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-20 left-0 w-8 h-8 border-2 border-gray-300"></div>

            {/* Curved arrow */}
            <div className="absolute bottom-40 left-20">
              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                className="text-gray-400"
              >
                <path
                  d="M10 50 Q50 10 90 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M82 25 L90 30 L85 35"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Main Hero Image */}
            <div className="relative">
              {/* Yellow background blob */}
              <div className="absolute -bottom-22 -right-5 w-90 h-90 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 "></div>

              {/* Person Image */}
              <img
                src={person1}
                alt="Smiling man in yellow sweater pointing"
                className="w-80 h-96 object-cover rounded-lg relative z-20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
