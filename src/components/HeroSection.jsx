import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

const HeroSection = (props) => {
  const { name } = useGlobalContext();

  

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data" data-aos="fade-right">
          <h3>Hii! I am</h3>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            My name is {name}. I am a full stack developer.
            <br />
            {props.description}
          </p>
          <NavLink to={props.link}>
          <Button className="btn hireme-btn">
            {props.btnName} 
          </Button>
          </NavLink>
        </div>

        {/* for image  */}
        <div className="section-hero-image" data-aos="fade-left">
          <picture>
            <img
              src="https://www.signinonline.com/images/features-img-1.png"
              alt="hero image"
              className="hero-img "
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow-x: hidden;
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Hanuman', serif;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: rgb(0,0,0);
    font-weight: 600;
    font-family: 'Hanuman', serif;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }
  .hireme-btn{
    font-size: 20px
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
