import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "Search Engine Optimization",
    description: "Our SEO services ensure your website ranks higher on search engines like Google, helping your business.",
    action: "→",
    highlight: true,
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Maximize ROI with targeted ads that convert. Our PPC services drive quality traffic and sales.",
    action: "↗",
    highlight: false,
  },
  {
    title: "Content Marketing",
    description: "Build authority and trust with valuable content tailored to your audience and SEO goals.",
    action: "↗",
    highlight: false,
  },
  {
    title: "Email Marketing",
    description: "Boost engagement and nurture leads with smart, personalized email campaigns.",
    action: "↗",
    highlight: false,
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness across all social platforms.",
    action: "↗",
    highlight: false,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Turn more visitors into customers with data-driven optimization strategies.",
    action: "↗",
    highlight: false,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const servicesRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate services items on scroll/load
    const animateServices = () => {
      servicesRef.current.forEach((service, index) => {
        if (service) {
          service.style.opacity = '0';
          service.style.transform = 'translateY(20px)';
          setTimeout(() => {
            service.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            service.style.opacity = '1';
            service.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });

      // Animate image
      if (imageRef.current) {
        imageRef.current.style.opacity = '0';
        imageRef.current.style.transform = 'scale(0.9)';
        setTimeout(() => {
          imageRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          imageRef.current.style.opacity = '1';
          imageRef.current.style.transform = 'scale(1)';
        }, 300);
      }
    };

    animateServices();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 px-6 md:px-20 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg">🔶</span>
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              Our Services
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            Boost your SEO ranking with<br />
            excellent effective services
          </h2>
        </div>
        
        {/* View All Work Button */}
        <div className="hidden md:block">
          <button className="w-32 h-32 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:border-gray-400 hover:bg-white transition-all duration-300 group">
            <div className="text-center">
              <div className="text-sm font-medium group-hover:transform group-hover:translate-x-1 transition-transform">
                View All Work
              </div>
              <div className="mt-1 group-hover:transform group-hover:translate-x-1 transition-transform">
                <span className="rotate-45 inline-block">↗</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => servicesRef.current[index] = el}
              className={`group cursor-pointer border-b border-gray-300 py-8 hover:bg-white hover:px-6 hover:mx-(-6) rounded-lg transition-all duration-300 ${
                service.highlight ? 'bg-white px-6 mx-(-6) rounded-lg shadow-sm' : ''
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <p className="text-gray-600 text-base leading-relaxed pr-8">
                      {service.description}
                    </p>
                  )}
                </div>
                
                <div className="flex-shrink-0 ml-6">
                  {service.highlight ? (
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black text-xl font-bold group-hover:bg-yellow-500 transition-colors">
                      {service.action}
                    </div>
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center text-gray-400 text-xl group-hover:text-black group-hover:transform group-hover:translate-x-1 transition-all">
                      {service.action}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - SEO Image */}
        <div className="flex justify-center items-center relative">
          <div ref={imageRef} className="relative w-full max-w-lg">
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-gray-300 rotate-45"></div>
            
            {/* Main laptop image */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format"
                alt="SEO Analytics Dashboard"
                className="w-full h-80 object-cover"
              />
              
              {/* Overlay with SEO graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">SEO</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Search Rankings</div>
                      <div className="text-xs text-green-600">↗ +23%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    <div className="text-xs">
                      <div className="font-semibold">Traffic Growth</div>
                      <div className="text-green-600">+45% this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating rocket icon */}
            <div className="absolute -top-8 -right-8 transform rotate-45">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl transform -rotate-45">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View All Work Button */}
      <div className="md:hidden mt-12 text-center">
        <button className="border-2 border-gray-300 rounded-full px-8 py-3 text-gray-700 hover:border-gray-400 hover:bg-white transition-all">
          View All Work ↗
        </button>
      </div>
    </section>
  );
};

export default Services;