import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const headingRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const statsRef = useRef(null);
  const marqueeRef = useRef(null);
  const progressBars = useRef([]);
  const circularBadgeRef = useRef(null);

  useEffect(() => {
    // Simulate GSAP animations with CSS transitions and transforms
    const animateElements = () => {
      // Header animation
      if (headingRef.current) {
        headingRef.current.style.opacity = '0';
        headingRef.current.style.transform = 'translateY(40px)';
        setTimeout(() => {
          headingRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          headingRef.current.style.opacity = '1';
          headingRef.current.style.transform = 'translateY(0)';
        }, 100);
      }

      // Left content animation
      if (leftContentRef.current) {
        leftContentRef.current.style.opacity = '0';
        leftContentRef.current.style.transform = 'translateX(-50px)';
        setTimeout(() => {
          leftContentRef.current.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          leftContentRef.current.style.opacity = '1';
          leftContentRef.current.style.transform = 'translateX(0)';
        }, 300);
      }

      // Right content animation
      if (rightContentRef.current) {
        rightContentRef.current.style.opacity = '0';
        rightContentRef.current.style.transform = 'translateX(50px)';
        setTimeout(() => {
          rightContentRef.current.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          rightContentRef.current.style.opacity = '1';
          rightContentRef.current.style.transform = 'translateX(0)';
        }, 500);
      }

      // Progress bars animation
      progressBars.current.forEach((bar, index) => {
        if (bar) {
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            bar.style.width = index === 0 ? '80%' : '90%';
          }, 800 + (index * 200));
        }
      });

      // Circular badge rotation
      if (circularBadgeRef.current) {
        circularBadgeRef.current.style.animation = 'spin 10s linear infinite';
      }

      // Stats animation
      if (statsRef.current) {
        statsRef.current.style.opacity = '0';
        statsRef.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          statsRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          statsRef.current.style.opacity = '1';
          statsRef.current.style.transform = 'translateY(0)';
        }, 1000);
      }

      // Marquee animation
      if (marqueeRef.current) {
        marqueeRef.current.style.animation = 'marquee 20s linear infinite';
      }
    };

    animateElements();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        {/* Header Section */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-500 text-lg">🔶</span>
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              Welcome to SEO Agency
            </p>
            <span className="text-yellow-500 text-lg">🔶</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Comprehensive SEO &<br />
            DigitalMarketing Solutions.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div ref={leftContentRef} className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Our SEO services ensure your website ranks higher on search engines like Google, helping your business attract more organic traffic. From keyword research and on-page optimization to link building and technical SEO, we use proven strategies to improve your visibility and authority online.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in making informed decisions by using analytics and performance.
            </p>

            {/* Progress Bars */}
            <div className="space-y-8 mt-12">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-semibold">SEO Analysis</span>
                  <span className="text-gray-900 font-bold">80%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressBars.current[0] = el}
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-semibold">Marketing Strategy</span>
                  <span className="text-gray-900 font-bold">90%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressBars.current[1] = el}
                    className="h-full bg-black rounded-full"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors mt-8 flex items-center gap-2">
              More About Us
              <span className="rotate-45">↗</span>
            </button>
          </div>

          {/* Right Column - Images */}
          <div ref={rightContentRef} className="relative">
            <div className="grid grid-cols-2 gap-6 items-center">
              {/* Top Left Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  alt="Woman working on laptop with digital icons"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 p-2 rounded">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Circular Badge */}
                <div className="flex justify-center mb-8">
                  <div 
                    ref={circularBadgeRef}
                    className="relative w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="text-black text-2xl mb-1">▶</div>
                      <div className="text-black text-xs font-bold leading-tight">
                        BUILD A SUCCESS<br />
                        BRAND WITH SAOR
                      </div>
                    </div>
                    {/* Rotating text around circle */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <path id="circle" d="M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" />
                        </defs>
                        <text className="text-xs fill-black font-semibold">
                          <textPath href="#circle">SUCCESS BRAND WITH SAOR BUILD A </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format"
                    className="w-full h-60 object-cover rounded-2xl shadow-lg"
                    alt="Team working together on analytics"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-gray-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-gray-300">
          {[
            { count: "3K+", label: "Successful Project" },
            { count: "20K", label: "Experienced Team" },
            { count: "43K+", label: "Happy Customers" },
            { count: "36K+", label: "Client 5 Star Review" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.count}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Marquee */}
        <div className="mt-16 overflow-hidden border-t-4 border-yellow-400 pt-8">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap text-2xl md:text-3xl font-bold text-gray-800"
          >
            <span className="inline-block mr-16">🔸 Analytics</span>
            <span className="inline-block mr-16">Marketing Solutions</span>
            <span className="inline-block mr-16">SEO Strategy Development</span>
            <span className="inline-block mr-16">Search Engine Optimization</span>
            <span className="inline-block mr-16">🔸 Analytics</span>
            <span className="inline-block mr-16">Marketing Solutions</span>
            <span className="inline-block mr-16">SEO Strategy Development</span>
            <span className="inline-block mr-16">Search Engine Optimization</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;