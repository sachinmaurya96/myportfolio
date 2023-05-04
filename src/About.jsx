import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import { aboutdata } from "./components/Reusable";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection description={aboutdata} link="/contact" btnName="hire me"/>;
};

export default About;
