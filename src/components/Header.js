import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <NavBody>
      <NavTitle className="nav-title">
        <h1>Adetokun Adetayo</h1>
      </NavTitle>
      <Nav>
        <NavLink>
          <a href="#">About me</a>
        </NavLink>
        <NavLink>
          <a href="#skills">Skills</a>
        </NavLink>
        <NavLink>
          <a href="#projects">Projects</a>
        </NavLink>
        <NavLink>
          <a href="#contact">Contact me</a>
        </NavLink>
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
  height: 60px;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  background: var(--headerBlue);
 color: var(--mainWhite);
 padding: 1rem 3rem 1rem 3rem !important;
`;

const NavTitle = styled.div`
font-size: 1rem;
`

const Nav = styled.ul`
display: flex;
list-style: none;
`

const NavLink = styled.li` 
margin-left: 2rem;
a {
    text-decoration: none;
    color: var(--mainWhite);
}
`

export default Header;
