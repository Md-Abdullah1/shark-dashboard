import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Brown",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sophia Lee",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const TeamMembersSection = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Three.js setup
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create particles (neural network nodes)
    const particleCount = 50;
    const particles = [];
    const connections = [];
    
    // Particle geometry and material
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffd700,
      transparent: true,
      opacity: 0.8
    });

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      
      // Add velocity for movement
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      
      particles.push(particle);
      scene.add(particle);
    }
    
    particlesRef.current = particles;

    // Create connections between nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffd700,
      transparent: true,
      opacity: 0.3
    });

    const updateConnections = () => {
      // Remove old connections
      connections.forEach(line => scene.remove(line));
      connections.length = 0;

      // Create new connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = particles[i].position.distanceTo(particles[j].position);
          
          if (distance < 3) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              particles[i].position,
              particles[j].position
            ]);
            
            const line = new THREE.Line(geometry, lineMaterial);
            connections.push(line);
            scene.add(line);
          }
        }
      }
    };

    connectionsRef.current = connections;

    // Camera position
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate particles
      particles.forEach(particle => {
        particle.position.add(particle.velocity);
        
        // Bounce off boundaries
        if (particle.position.x > 10 || particle.position.x < -10) {
          particle.velocity.x *= -1;
        }
        if (particle.position.y > 7.5 || particle.position.y < -7.5) {
          particle.velocity.y *= -1;
        }
        if (particle.position.z > 5 || particle.position.z < -5) {
          particle.velocity.z *= -1;
        }

        // Subtle pulsing effect
        const scale = 1 + Math.sin(Date.now() * 0.001 + particle.position.x) * 0.3;
        particle.scale.setScalar(scale);
      });

      // Update connections every few frames for performance
      if (Math.random() < 0.1) {
        updateConnections();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      // Clean up geometries and materials
      particles.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
      connections.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-16 text-white relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Three.js Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-20 rounded-full mb-4">
            <span className="text-2xl">👥</span>
            <span className="text-yellow-400 font-semibold text-sm">Team Members</span>
            <span className="text-2xl">👥</span>
          </div>
          <h2 className="text-5xl font-bold mt-2 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Meet Our Team Members
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:shadow-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:scale-105 hover:border-yellow-400/50 animate-float ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 object-cover rounded-full shadow-lg border-4 border-yellow-400/30"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
              <p className="text-sm text-yellow-400 font-medium">{member.role}</p>
              
              {/* Decorative elements */}
              <div className="mt-4 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional animated elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '20s', zIndex: 2 }}></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400/20 rotate-45 animate-pulse" style={{ zIndex: 2 }}></div>
      <div className="absolute top-1/2 left-5 w-1 h-20 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{ zIndex: 2 }}></div>
      <div className="absolute top-1/3 right-5 w-1 h-16 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-pulse" style={{ zIndex: 2 }}></div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float:nth-child(2) {
          animation-delay: -1s;
        }
        
        .animate-float:nth-child(3) {
          animation-delay: -2s;
        }
      `}</style>
    </section>
  );
};

export default TeamMembersSection;