import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const textRef = useRef(null);

  // Simple fade-in animation
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        textRef.current.style.transition = 'all 1s ease-out';
        textRef.current.style.opacity = '1';
        textRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Static Navbar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <span className="text-2xl font-bold text-gray-800">SAOR</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
            Home <span className="text-xs">▼</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
            Portfolio <span className="text-xs">▼</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
            Pages <span className="text-xs">▼</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
            Blog <span className="text-xs">▼</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 border border-gray-300 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium flex items-center gap-2">
            Get A Quote
            <span className="rotate-45">↗</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" ref={textRef}>
            {/* Badge */}
            <div className="inline-flex items-center bg-yellow-300 text-black px-4 py-2 rounded text-sm font-medium">
              SEO & Marketing Agency
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering<br />
              Growth Unlock<br />
              SEO Solutions
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Saor, we are dedicated to helping businesses navigate the complex digital landscape with ease. We specialize in providing a full spectrum of SEO.
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
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
                      alt="User 1"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face&auto=format"
                      alt="User 2"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
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
              <svg width="100" height="60" viewBox="0 0 100 60" className="text-gray-400">
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
              <span className="absolute -bottom-6 left-8 text-sm text-gray-600">Get Started Now</span>
            </div>

            {/* Main Hero Image */}
            <div className="relative">
              {/* Yellow background blob */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full opacity-60 -z-10"></div>
              
              {/* Person Image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&auto=format"
                alt="Smiling man in yellow sweater pointing"
                className="w-80 h-96 object-cover rounded-lg relative z-10"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                }}
              />
            </div>

            {/* Social Proof Avatars near image */}
            <div className="absolute bottom-10 right-10 flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face&auto=format"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-black text-sm font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;