import React, { useState } from "react";
import styled from "styled-components";
import devices from "../utils/devices";

const Header = () => {

  const [activeClass, setActiveClass] = useState('about');

  return (
    <NavBody>
      <NavTitle className="nav-title">
        <Heading>Adetokun Adetayo</Heading>
      </NavTitle>
      <Nav>
        <NavItem>
          <NavLink href="#about-me" onClick={() => setActiveClass('about')} className={activeClass === 'about' ? 'active' : ""}>About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills" onClick={() => setActiveClass('skill')} className={activeClass === 'skill' ? 'active' : ""}>Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects" onClick={() => setActiveClass('project')}  className={activeClass === 'project' ? 'active' : ""}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact-me" onClick={() => setActiveClass('contact')} className={activeClass === 'contact' ? 'active' : ""}>Contact me</NavLink>
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
  .active {
    padding-top: 1rem;
    border-bottom: 2px double var(--mainPeach);
  }
  @media ${devices.mobile} {
    margin-left: 1rem !important;
    font-size: 0.9rem;
  }
  @media(max-width: 320px) {
    margin-left: 0.5rem !important;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--mainWhite);
`

export default Header;
