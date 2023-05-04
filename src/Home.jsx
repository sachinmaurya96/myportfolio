import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import { homeproject ,resume} from "./components/Reusable";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection link="/resume" btnName="resume"/>
      <Experience/>
      <Projects homeproject={homeproject}/>
      <Contact />
    </>
  );
};

export default Home;
