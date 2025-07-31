// VisionMissionSection.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const decorativeShapesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.from(".main-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Badge animation with rotation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      });

      // Mission and Vision cards staggered animation
      gsap.from([missionRef.current, visionRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.7,
      });

      // Decorative shapes animation
      gsap.from(".decorative-shape", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      });

      // Floating animation for decorative elements
      gsap.to(".floating-shape", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#f8f6f0] to-[#f2efe8] py-20 px-4 md:px-16 overflow-hidden"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape floating-shape absolute top-20 right-10 w-32 h-32 rounded-full bg-yellow-200 opacity-20"></div>
        <div className="decorative-shape floating-shape absolute bottom-40 left-10 w-24 h-24 rounded-full bg-yellow-300 opacity-30"></div>
        <div className="decorative-shape floating-shape absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-orange-200 opacity-25"></div>
        
        {/* Curved decorative lines */}
        <svg className="decorative-shape absolute top-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 400 400">
          <path
            d="M50,200 Q200,50 350,200 T650,200"
            stroke="#FCD34D"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0,150 Q150,0 300,150 T600,150"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 main-title">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            Our Mission & Vision
          </p>
          <div className="w-3 h-3 rounded-full bg-gray-800 animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Present creative and innovative{" "}
          <span className="text-yellow-500 relative">
            SEO solutions
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10">
              <path
                d="M0,7 Q50,0 100,7"
                stroke="#FCD34D"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative w-full flex flex-col lg:flex-row items-start justify-center gap-16">
        
        {/* Left Side - Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Experience Badge */}
          <div 
            ref={badgeRef}
            className="absolute -top-8 -left-8 z-10 rotate-[-15deg] bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-8 rounded-full text-center shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-300"
          >
            <div className="text-3xl font-black">24</div>
            <div className="text-xs font-bold uppercase tracking-wider leading-tight">
              YEARS OF<br />EXPERIENCE
            </div>
          </div>

          {/* Main Team Image */}
          <div className="relative group">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional Team Working Together"
              className="w-full max-w-lg rounded-2xl shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3ETeam Photo%3C/text%3E%3C/svg%3E";
              }}
            />
            
            {/* Image overlay decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-tr from-yellow-400 to-orange-400 opacity-20 -z-10"></div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-800 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Right Side - Mission & Vision Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          
          {/* Mission Card */}
          <div
            ref={missionRef}
            className="group bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-6 border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <p className="text-sm text-yellow-600 font-bold uppercase tracking-wider">Our Mission</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors">
              Customer Success Is Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to empower businesses by creating digital marketing strategies
              that are not only effective but sustainable. We believe in building long-term
              relationships with our clients by delivering results that exceed expectations
              and drive real, tangible growth.
            </p>
            
            {/* Decorative corner element */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className="group bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-6 border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <p className="text-sm text-gray-800 font-bold uppercase tracking-wider">Our Vision</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
              To be the Leading Agency in the Industry
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We help you build and maintain a strong social media presence across platforms
              like Facebook, Instagram, LinkedIn, and Twitter. By crafting tailored social
              media strategies, we engage your audience, foster brand loyalty, and drive
              conversions.
            </p>
            
            {/* Decorative corner element */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gray-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Section */}
      <div className="mt-20 text-center">
        <div className="flex justify-center items-center gap-4 opacity-60">
          <div className="decorative-shape floating-shape w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="decorative-shape floating-shape w-3 h-3 bg-gray-600 rounded-full"></div>
          <div className="decorative-shape floating-shape w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;