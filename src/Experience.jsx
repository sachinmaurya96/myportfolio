import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithubAlt,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    duration: 800,
    offset:200
  }
);
function Experience() {
  return (
    <>
    <Wrapper>
      <div className="container">
        <div className="icons">
          <div className="languages">
            <div className="frontend">
              <div className="card" data-aos="fade-right">
                <FaHtml5 />
              </div>
              <div className="card" data-aos="fade-right"  data-aos-delay="100">
                <FaCss3Alt />
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="200">
                <TbBrandJavascript />
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="300">
                <FaReact />
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="400">
                <FaNodeJs/>
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="500">
                <SiExpress/>
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="600">
                <SiMongodb/>
              </div>
              <div className="card" data-aos="fade-right" data-aos-delay="800">
                <FaGithubAlt/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
overflow-x: hidden;
    .icons{
        display:flex;
        justify-content:center;
        margin-top:20px
    }
    .laptop .img{
        width:100%
    }
    .img img{
        width:100%;
        height:auto
    }
    .languages{
        display:flex;
        align-items:center;
        gap:20px
        
    }
    .frontend,.backend{
        display:flex;
        gap:20px;

        .card{
            font-size:60px;
            display:flex;
            justify-content: center;
            padding:16px;
            border-radius:50%;
            background: rgb(98 84 243);
            color:#fff;
            cursor:pointer;
            

            &:hover{
                background: rgb(120 100 270);
                color:#fff;
                transition: all 0.3s ease;
                
            }
        }
        
    }
    @media (max-width:768px){
        .languages{
         
           flex-direction:column;
            
        }
    }
    @media (max-width:426px){
        .frontend,.backend{
           
           display:grid;
           grid-template-columns:repeat(2, 1fr)
            
        }
    }
    
    
`



export default Experience;
