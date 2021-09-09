import React from "react";
import styled from "styled-components";
import ProfileImg from "../Assets/profileimg.jpeg";
import devices from '../utils/devices';

const Aboutme = () => {
  return (
    <AboutmeStyled id="about-me">
      <AboutHeading>
        <LineStyle></LineStyle>
        About Me
        <LineStyle></LineStyle>
      </AboutHeading>
      <AboutContent>
        <ImageDiv>
          <BorderDiv></BorderDiv>
          <Image src={ProfileImg} alt="profile-img" />
        </ImageDiv>
        <TextDiv>
          <TextPara>
            Hi, i'm Adetayo, a passionate frontend developer with an academic
            background in food science and engineering. I have a strong
            understanding of user experience and the ability to build
            user-friendly interfaces.
            <br></br>
            <br></br>I have the necessary skills and experience of the latest
            technologies required to provide software solutions to real-life
            problems. I love to keep myself aware of the latest technologies and
            tools in other to improve my skill sets.
            <br></br>
            <br></br>
            I'm a hardworking individual, honest, sincere, trustworthy and
            responsible to the assigned task.
          </TextPara>
        </TextDiv>
      </AboutContent>
    </AboutmeStyled>
  );
};

const AboutmeStyled = styled.div`
  padding-top: 15rem;
  height: 50vh;
  color: rgb(160, 174, 192);
  @media ${devices.mobile} {
    height: auto;
    padding-top: 10rem;
  }
`;

const AboutHeading = styled.h1`
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--mainWhite);
  @media ${devices.mobile} {
    font-size: 2rem;
  }
`;

const LineStyle = styled.div`
  background-color: var(--lightPeach);
  height: 0.1px;
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 7%;
  @media ${devices.mobile} {
    width: 15%;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15rem;
  align-items: flex-start;
  @media ${devices.mobile} {
    display: block;
    padding: 0 2rem;
  }
  @media (max-width: 1250px) {
    padding: 0 2rem !important;
  }
`;

const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  @media ${devices.mobile} {
    width: 100% !important;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const BorderDiv = styled.div`
  border: 1px solid var(--mainPeach);
  margin-right: 4rem;
  @media ${devices.mobile} {
    margin-right: 1rem;
  }
  @media (max-width: 1250px) {
    margin-right: 2rem !important;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  width: 50%;
  @media ${devices.mobile} {
    width: 95%;
  }
  @media (max-width: 1250px) {
    width: 90% !important;
  }
`;

const TextDiv = styled.div`
  width: 50%;
  text-align: left;
  margin-top: 1.5rem;
  @media ${devices.mobile} {
    width: 100% !important;
  }
`;

const TextPara = styled.div`
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

export default Aboutme;
