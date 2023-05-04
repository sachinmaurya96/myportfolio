import React from "react";
import styled from "styled-components";
import { FaLinkedin,FaGithubSquare,FaPhone,FaEnvelope,FaLocationArrow , FaDownload} from "react-icons/fa";
import { Button } from "../src/styles/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    duration: 1000
  }
);

function Resume() {
  return (
    <>
      <Wrapper>
        <div class="container-fluid">
          <div class="pdf">
            <div class="header">
              <img src="https://i.postimg.cc/NF3yfTCJ/my2.jpg" alt="heroimg" data-aos='fade-right'/>
              <div class="heading" data-aos='fade-left'>
                Sachin Maurya
                <p class="subheading">Front-end web developer</p>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <div class="contact">
                  <div class="title">contact</div>
                  <ul>
                    <li>
                      <FaPhone/>
                      <a href="tel:+919695439912">+919695439912</a>
                    </li>
                    <li>
                      <FaEnvelope/>
                      <a
                        href="mailto:nitinmaurya969543@gmail.com"
                        target="_blank"
                      >
                        nitinmaurya969543@gmail.com
                      </a>
                    </li>
                    <li>
                      <FaLocationArrow/>
                      <a
                        href="https://goo.gl/maps/fikb59aiaWTkwsS36"
                        target="_blank"
                      >
                        Noida, Sec-62 (UP)
                      </a>
                    </li>
                    <li>
                    <FaLinkedin/>
                      <a
                        href="https://www.linkedin.com/in/sachin-maurya-826111267/"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <FaGithubSquare/>
                      <a
                        href="https://github.com/sachinmaurya96"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="interest">
                  <div class="title">interests</div>
                  <ul>
                    <li>traveling</li>
                    <li>Movies</li>
                    <li>arts & entertainment</li>
                    <li>Gaming</li>
                  </ul>
                </div>
                <div class="education">
                  <div class="title">education</div>
                  <ul>
                    <li>degree/bachelor</li>
                    <li>BCA (Bachlor of Computer Application)</li>
                    <li>Allahabad University</li>
                    <li>2022-2024</li>
                  </ul>
                </div>
                <div class="language">
                  <div class="title">language</div>
                  <ul>
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
                <div class="keyskills">
                  <div class="title">KEY SKILLS</div>
                  <ul>
                    <li>Fast Learning</li>
                    <li>Problem Solving</li>
                    <li>Team Work</li>
                  </ul>
                </div>
              </div>
              <div class="right">
                <div class="profile">
                  <div class="title">profile</div>
                  <ul>
                    <li>
                      Hii! My name is Sachin Maurya. "As a MERN developer, I
                      specialize in building web applications using MongoDB,
                      Express.js, React.js, and Node.js. I have a solid
                      understanding of JavaScript and its concepts, as well as
                      experience in front-end development using HTML, CSS, and
                      React.js.
                    </li>
                    <br />
                    <li>
                      I am also skilled in back-end development using Node.js
                      and Express.js, as well as database management with
                      MongoDB. I have worked on a variety of projects, including
                      e-commerce websites, social media platforms, and
                      productivity applications.
                    </li>
                  </ul>
                </div>
                <div class="experience">
                  <div class="title">experience</div>
                  <ul>
                    <li>Fresher</li>
                    <br />
                    <li>
                      I am fresher but I have strong problem-solving abilities,
                      attention to detail, and the ability to work well in a
                      team. I am committed to staying up-to-date with the latest
                      developments in web development and am always looking for
                      new ways to improve my skills.
                    </li>
                  </ul>
                </div>
                <div class="proj">
                  <div class="title">projects</div>
                  <ul>
                    <li>
                      <a href="https://sachinmaurya96.github.io/">1. Portfolio-Web</a>
                    </li>
                    <li>
                      <a href="https://sachinmaurya96.github.io/Apple-india/">2. Apple india ui clone</a>
                    </li>
                    <li>
                      <a href="https://sachinmaurya96.github.io/google-digital-garage/">3. google digital garage clone</a>
                    </li>
                    <li>
                      <a href="https://sachinmaurya96.github.io/findwork/">4. a mini freelance web ui</a>
                    </li>
                    <li>
                      <a href="https://smmovies.netlify.app/">5. Movieapp</a>
                    </li>
                    <li>
                      <a href="https://sachinmaurya96.github.io/Textutils/">6. TextUtils</a>
                    </li>
                    <li>
                      <a href="https://github.com/sachinmaurya96/weather-app-using-only-expressjs">7. Weather App</a>
                    </li>
                    <li>
                      <a href="https://sachinmaurya96.github.io/reactTodolist/">8. Todo list</a>
                    </li>
                  </ul>
                </div>
                <div class="tecnical">
                  <div class="title">technical skills</div>
                  <ul>
                    <li>HTML, CSS , Javascript , React.js</li>
                    <li>Node.js , Express.js , MongoDB</li>
                    <li>Github</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
            <a href="#"><Button> <FaDownload/> Download resume</Button></a>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .container-fluid {
    width: calc(100vw - 400px);
    margin: 30px auto;
  }
  ul {
    padding: 0;
  }
  li a {
    font-size: 15px;
    font-family: "Hanuman", serif;
  }
  ul li {
    list-style: none;
    text-transform: capitalize;
    line-height: 25px;
    font-size: 15px;
    font-family: "Hanuman", serif;
  }
 
  .contact ul li {
    text-transform: none;
    display: flex;
    align-items:center;
    a{
        margin-left: 10px
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  .right p {
    color: black;
  }
  .header {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    border-bottom: 5px solid black;
    display: grid;
    grid-template-columns: 30% 65%;
    padding: 70px 150px;
  }
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header img {
    width: 80%;
    height: auto;
    border-radius: 50%;
  }
  .content {
    font-family: "Hanuman", serif;
    box-sizing: border-box;
  }
  .pdf {
    background: #fff;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  .contact {
    background: #e4e3e3;
    padding: 10px 10px;
    text-transform: uppercase;
  }

  .title {
    width: 100%;
    background: #e4e3e3;
    box-sizing: border-box;
    padding: 10px 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
  }
  .content {
    display: grid;
    grid-template-columns: 30% 65%;
    grid-gap: 5%;
    padding: 50px;
  }
  .heading {
    font-size: 60px;
    line-height: 25px;
  }
  .subheading {
    font-size: 30px;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  ul {
    margin-top: 25px;
  }
  li a:hover {
    color: blue;
  }
  .btn{
    display:flex;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    .container-fluid {
      width: calc(100vw - 100px);
    }
    .header {
      padding: 30px 20px;
    }
    .content {
      padding: 10px 10px;
    }
  }
  @media (max-width: 769px) {
    .header {
      grid-template-columns: 1fr;
      place-items: center;
    }
    .header img {
      width: 30%;
      margin-bottom: 30px;
    }
    .content {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
  @media (max-width: 426px) {
    .heading {
      font-size: 30px;
      font-weight: 600;
      line-height: 15px;
    }
    .subheading {
      font-size: 15px;
      font-weight: 400;
    }
    .container-fluid {
      width: 100%;
    }
    ul li {
      font-size: 15px;
    }
  }
  @media (max-width: 321px){
    .content{
        padding:0
    }
    .container-fluid{
        width:100%
    }
    ul{
        padding:10px
    }
  }
`;

export default Resume;
