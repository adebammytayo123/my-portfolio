import React from "react";
import devices from "../utils/devices";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import userdashboard from "../Assets/userdashboard.png";
import adeara from "../Assets/adeara.png";
import store from "../Assets/ninyxstore.png";
import recipe from '../Assets/recipe.png';

const Projects = () => {
  return (
    <ProjectsStyles id="projects">
      <ProjectsHeading>
        <LineStyle></LineStyle>
        My Projects
        <LineStyle></LineStyle>
      </ProjectsHeading>
      <ProjectsDiv>
        <ProjectContainer>
          <TextDiv>
            <TextHeading>User Dashboard</TextHeading>
            <TextPara>
              A dashboard that shows the details of all users, ranging from
              their names, locations, email address and also their photos
            </TextPara>
            <DetailsDiv>
              <TechStack>
                <Title>Stack:</Title>
                <Stack>React, Redux, Styled Components</Stack>
              </TechStack>
              <LinkDiv>
                <Title>Link:</Title>
                <a href="https://employees-details-manager.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="link" />
                </a>
              </LinkDiv>
            </DetailsDiv>
          </TextDiv>
          <ImageDiv>
            <Image src={userdashboard} alt="dashboard" />
          </ImageDiv>
        </ProjectContainer>
        <ProjectContainer>
          <TextDiv>
            <TextHeading>Adeara's Kitchen</TextHeading>
            <TextPara>
              A food website where you can find all your favorite dishes, order thema ns have them delivered to you.
            </TextPara>
            <DetailsDiv>
              <TechStack>
                <Title>Stack:</Title>
                <Stack>Html, Css, Bootstrap, JavaScript</Stack>
              </TechStack>
              <LinkDiv>
                <Title>Link:</Title>
                <a href="https://adearaskitchen.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="link" />
                </a>
              </LinkDiv>
            </DetailsDiv>
          </TextDiv>
          <ImageDiv>
            <Image src={adeara} alt="kitchen" />
          </ImageDiv>
        </ProjectContainer>
        <ProjectContainer>
          <TextDiv>
            <TextHeading>Ninyx Store</TextHeading>
            <TextPara>
              An e-commerce app where users can find their favorite accesssories and purchase them with their debit cards.
            </TextPara>
            <DetailsDiv>
              <TechStack>
                <Title>Stack:</Title>
                <Stack>Bootstrap, Context Api, React, Styled Components</Stack>
              </TechStack>
              <LinkDiv>
                <Title>Link:</Title>
                <a href="https://ninyx-store.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="link" />
                </a>
              </LinkDiv>
            </DetailsDiv>
          </TextDiv>
          <ImageDiv>
            <Image src={store} alt="store" />
          </ImageDiv>
        </ProjectContainer>
        <ProjectContainer>
          <TextDiv>
            <TextHeading>Taste Maker</TextHeading>
            <TextPara>
              A platform where users can find the recipe of their favorite dish, learn about new recipes and also contribute by adding their own recipes.
            </TextPara>
            <DetailsDiv>
              <TechStack>
                <Title>Stack:</Title>
                <Stack>React, Bootstrap, Styled Components</Stack>
              </TechStack>
              <LinkDiv>
                <Title>Link:</Title>
                <a href="https://tastemaker.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="link" />
                </a>
              </LinkDiv>
            </DetailsDiv>
          </TextDiv>
          <ImageDiv>
            <Image src={recipe} alt="recipe" />
          </ImageDiv>
        </ProjectContainer>
      </ProjectsDiv>
    </ProjectsStyles>
  );
};

const ProjectsStyles = styled.div`
  height: 150vh;
  padding-top: 15rem;
  @media ${devices.mobile} {
    height: auto;
    padding-top: 5rem;
  }
`;

const ProjectsHeading = styled.h1`
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--mainWhite);
  @media ${devices.mobile} {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem !important;
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

const ProjectsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  margin-bottom: 20rem;
  position: relative;
  transition: all 1s linear;
:hover{
  transform: scale(1.2)
}
`;


const TextDiv = styled.div`
  background: var(--darkBlue);
  border-radius: 10px;
  width: 450px;
  height: 300px;
  padding: 2rem;
  .link {
    font-size: 1.5rem;
    color: var(--mainPeach);
    cursor: pointer;
  }
  @media ${devices.mobile} {
    width: 90%;
    padding: 1rem;
  }
`;

const ImageDiv = styled.div`
  display: block;
  width: 450px;
  position: absolute;
  top: 70%;

  @media ${devices.mobile} {
    width: 100%;
    top: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-left: 2rem;
  border-radius: 10px;

  @media ${devices.mobile} {
    width: 90%;
    height: 300px;
    margin-left: 1.1rem;
  }
`;

const TextHeading = styled.h1`
  color: rgb(160, 174, 192);
  margin-top: -1rem;
  margin-bottom: 1rem;
  text-align: center;
  @media ${devices.mobile} {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const TextPara = styled.p`
  line-height: 1.5rem;
  color: rgb(160, 174, 192);
`;

const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TechStack = styled.div`
  color: rgb(160, 174, 192);
  @media ${devices.mobile} {
  }
`;
const LinkDiv = styled.div`
  color: rgb(160, 174, 192);
`;

const Title = styled.h4``;

const Stack = styled.h4`
  margin-right: 2rem;
`;

export default Projects;
