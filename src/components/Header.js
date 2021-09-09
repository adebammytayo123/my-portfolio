import React, { useState } from "react";
import styled from "styled-components";
import devices from "../utils/devices";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {

  Aos.init()

  const [activeClass, setActiveClass] = useState('');

  return (
    <NavBody>
      <NavTitle className="nav-title">
        <Heading>Adetokun Adetayo</Heading>
      </NavTitle>
      <Nav>
        <NavItem>
          <NavLink href="#about-me" onClick={() => setActiveClass('about')}>About me</NavLink>
          {activeClass === 'about' ? 
          <Active
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"></Active>
          : ""}
        </NavItem>
        <NavItem>
          <NavLink href="#skills" onClick={() => setActiveClass('skill')}>Skills</NavLink>
          {activeClass === 'skill' ? 
          <Active
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"></Active>
          : ""}
        </NavItem>
        <NavItem>
          <NavLink href="#projects" onClick={() => setActiveClass('project')}>Projects</NavLink>
          {activeClass === 'project' ? 
          <Active
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"></Active>
          : ""}
        </NavItem>
        <NavItem>
          <NavLink href="#contact-me" onClick={() => setActiveClass('contact')}>Contact me</NavLink>
          {activeClass === 'contact' ? 
          <Active
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"></Active>
          : ""}
        </NavItem>
      </Nav>
    </NavBody>
  );
};

const NavBody = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  background: var(--headerBlue);
  color: var(--mainWhite);
  padding: 1rem 3rem;
  @media ${devices.mobile} {
    padding: 1rem 0 !important;
  }
`;

const NavTitle = styled.div`
  font-size: 1rem;
  margin-top: -1rem;
  @media ${devices.mobile} {
    display: none;
  }
`;
const Heading = styled.h1`
  @media ${devices.mobile} {
    font-size: 1rem;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 2rem;
  @media ${devices.mobile} {
    margin-left: 1rem !important;
    font-size: 0.9rem;
  }
  @media(max-width: 320px) {
    margin-left: 0.5rem !important;
  }
`;

const Active = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 1rem;
width: 7px;
height: 7px;
border-radius: 50%;
background-color: var(--mainPeach);
`

const NavLink = styled.a`
  text-decoration: none;
  color: var(--mainWhite);
`

export default Header;
