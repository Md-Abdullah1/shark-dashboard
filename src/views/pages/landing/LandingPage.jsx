import React from "react";
import HeroSection from "../../layouts/hero/Hero";
import AboutSection from "../../layouts/about/About";
import Services from "../../layouts/Services/Services";
import VisionMissionSection from "../../layouts/vision/Vision";
import TeamMembersSection from "../../layouts/team/Team";

const LandingPage = () => {
  return (
    <div className="landing-page-container w-[100%] min-h-screen flex flex-col ">
      <HeroSection />
      <AboutSection />
      <Services />
      <VisionMissionSection />
      <TeamMembersSection />
    </div>
  );
};

export default LandingPage;
