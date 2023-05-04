import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import AOS from 'aos';
import { FaLink,FaGithub} from "react-icons/fa";
import 'aos/dist/aos.css';
import { homeproject ,projectdata} from "./components/Reusable";

AOS.init(
  {
    duration: 1000,
    offset:100 }
);


const Projects = (props) => {
  const { services } = useGlobalContext();
  console.log(services);
if(props.homeproject){
    return (
        <Wrapper className="section">
         <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="row">
                   {
                    homeproject.map((elem,index)=>{
                        return(
                            <div className="portfolio-col" data-aos="flip-right" data-aos-delay={elem.delay} key={index}>
                            <img src={elem.Image}/>
                            <div className="layer">
                                <h3>{elem.name}</h3>
                                <p>{elem.description}</p>
                               <div className="links">
                               <a href={elem.link} target="_blank"><FaLink/></a>
                                <a href={elem.gitlink} target="_blank"><FaGithub/></a>
                               </div>
                            </div>
                        </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
        </Wrapper>
      );
}else{
    return (
        <Wrapper className="section">
         <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="row">
                   {
                    projectdata.map((elem,index)=>{
                        return(
                            <div className="portfolio-col" data-aos="flip-right" data-aos-delay={elem.delay} key={index}>
                            <img src={elem.Image}/>
                            <div className="layer">
                                <h3>{elem.name}</h3>
                                <p>{elem.description}</p>
                               <div className="links">
                               <a href={elem.link} target="_blank"><FaLink/></a>
                                <a href={elem.gitlink} target="_blank"><FaGithub/></a>
                               </div>
                            </div>
                        </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
        </Wrapper>
      );
}
//   return (
//     <Wrapper className="section">
//      <div id="portfolio">
//         <div className="container">
//             <h1 className="sub-title">My Work</h1>
//             <div className="row">
//                 <div className="portfolio-col" data-aos="flip-right" data-aos-delay="0">
//                     <img src="https://i.postimg.cc/BZDDxPzr/card3.jpg"/>
//                     <div className="layer">
//                         <h3>Google digitle Garage</h3>
//                         <p>A single page ui project using HTML, CSS and React.js</p>
//                        <div className="links">
//                        <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaLink/></a>
//                         <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaGithub/></a>
//                        </div>
//                     </div>
//                 </div>
//                 <div className="portfolio-col" data-aos="flip-right"  data-aos-delay="200">
//                     <img src="https://i.postimg.cc/KvxKBqBT/card2.jpg"/>
//                     <div className="layer">
//                         <h3>Apple India</h3>
//                         <p>A single page ui project using HTML, CSS and React.js</p>
//                         <div className="links">
//                        <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaLink/></a>
//                         <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaGithub/></a>
//                        </div>
//                     </div>
//                 </div>
//                 <div className="portfolio-col" data-aos="flip-right"  data-aos-delay="400">
//                     <img src="https://i.postimg.cc/XYWgZk71/card1.jpg"/>
//                     <div className="layer">
//                         <h3>A mini frelance site</h3>
//                         <p>A single page ui project using HTML, CSS and React.js</p>
//                         <div className="links">
//                        <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaLink/></a>
//                         <a href="https://sachinmaurya96.github.io/google-digital-garage/" target="_blank"><FaGithub/></a>
//                        </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </Wrapper>
//   );
};

const Wrapper = styled.section`

  padding: 9rem 0;
  background-color: background: #d7e6f5;;
 .sub-title{
   text-transform: uppercase;
    font-size: 6.4rem;
 }
  #portfolio .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.portfolio-col{
    border-radius: 17px;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.portfolio-col img{
    width: 100%;
    border-radius: 17px;
    transition: transform 0.5s;
}

.portfolio-col:hover img {
    transform: scale(1.2);
}

#portfolio .layer {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    border-radius: 17px;
    padding: 0 40px;
    text-align: center;
    overflow: hidden;
    transition: height 0.5s;
    color:#fff
}

#portfolio .layer h3{
    font-size: 25px;
    font-weight: 500;
}

#portfolio .layer p{
    font-size: 15px;
    margin-top: 25px;
    color:#fff
}

#portfolio .layer a {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    color: black;
    font-size: 17px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;


}

#portfolio .portfolio-col:hover .layer {
    height: 100%;
}
.links{
    display:flex;
    gap:15px;
    a:hover{
        background:yellow;
        transition: all 0.3s ease
    }
}

`;

export default Projects;
