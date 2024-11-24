import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SkillInfoModal from "../components/SkillInfoModal";
import ModalProject from "../components/ModalProject";
import TeamProject from "../components/TeamProject";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding: 20px;
    height: 650px;
  }
`;

const Right = styled.div`
  width: calc(100% - 500px);
  height: 100%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const RightWrap = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 769px) {
    height: 100%;
    /* margin-top: 100px; */
  }
`;

const MobileRight = styled.div`
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  @media screen and (max-width: 390px) {
    gap: 0;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Profile />
      <Right>
        <RightWrap>
          <Home />
        </RightWrap>
        <AboutMe />
        <SkillInfoModal />
        <Skills />
        <TeamProject />
        <ModalProject />
        <MobileRight>
          <Projects />
          <Contact />
        </MobileRight>
      </Right>
    </Wrapper>
  );
};

export default Main;
