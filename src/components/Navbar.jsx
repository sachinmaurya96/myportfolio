import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FaListAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});



const Navbar = () => {
    const [menu , setMenu] = useState("")

    const link = document.querySelectorAll(".link")
    Array.from(link).forEach((elem)=>{
        elem.addEventListener("click",()=>{
            setMenu("")
        })
    })
  setTimeout(()=>{
   document.getElementById("menubar")
.addEventListener("click" , ()=>{
  
  if(menu === ""){
    setMenu("show")
  }else{
    setMenu("")
  }
})  },100)
  
  
  return (
    <Nav>
    <nav data-aos="slide-down">
        <div className="container">
            <div className="navbar">
                <div className="brand">
                    <span>sachin portfolio</span>
                </div>
                <div className={`links ${menu}`} id="hide">
                    <NavLink to="/" className="link">home</NavLink>
                    <NavLink to="/about" className="link">about</NavLink>
                    <NavLink to="/projects"  className="link">projects</NavLink>
                    <NavLink to="/contact"  className="link">contact</NavLink>
                </div>
                <div id="menubar"  >
                <FaListAlt />
                </div>
            </div>
        </div>
    </nav>

    </Nav>
  );
};

const Nav = styled.nav`


  nav{
    width: 100vw;
}
.container {
    width: calc(100% - 200px);
    margin: 0 auto;
    
}
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 20px 0 0 0;


}
.links{
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
}
.link{
    text-decoration: none;
    color: black;
}
.link:hover{
    color:rgb(98 84 243)
}
.brand{
    font-weight: 700;
    font-size: 20px;
}
.brand span{
    color: #fff;
    background: black;
    padding: 5px 10px;
}
#menubar{
    display: none;
}
@media(max-width:768px){
    .container {
    width: calc(100% - 50px);
    margin: 0 auto;
    
}
}
@media(max-width:426px){
    .container {
   width: 100%;
   
    
}
.brand{
    padding: 0 10px;
    font-size: 15px;
}
.links{
    position: absolute;
    left: -100%;
    top: 55px;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 10px 10px;
    transition: left 0.3s ease;
    background: #d7e6f5;
    overflow-x: hidden;
    z-index: 9999;
}
.navbar{
    position: relative;
    
}
#menubar{
    display: block;
    font-size: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px;
    margin: 0 5px;
    border-radius: 4px;
}
.show{
    left: 0px;
    transition: left 0.3s ease;
}
}
  `;

export default Navbar;
