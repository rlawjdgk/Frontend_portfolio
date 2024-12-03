import React from "react";
import styled from "styled-components";
import { ProjectData } from "../assets/projectData"; // project 정보

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 430px) {
  }
`;

const Inner = styled.div`
  width: 50%;
  max-width: 850px;
  height: 550px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
    height: 500px;
  }
`;

const ProjectWrap = styled.div`
  display: flex;
  padding: 0 30px;
  .projectItem {
    display: flex;
    align-items: center;
    margin-left: 10px;
    @media screen and (max-width: 430px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px;
    }
  }
  @media screen and (max-width: 430px) {
    padding: 0 0;
  }
`;

const DataWrap = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media screen and (max-width: 430px) {
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    @media screen and (max-width: 430px) {
      width: 300px;
      height: 150px;
    }
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 430px) {
    gap: 10px;
    margin-left: 7px;
  }
`;

const ProjectDesc = styled.div`
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 430px) {
    gap: 10px;
    width: 90%;
  }
`;

const Name = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  @media screen and (max-width: 769px) {
    font-size: 24px;
  }
  @media screen and (max-width: 430px) {
    font-size: 18px;
    width: 90%;
  }
`;

const Git = styled.p`
  width: 100%;
  font-size: 14px;
  display: flex;
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

const Final = styled.p`
  width: 100%;
  font-size: 14px;
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
  @media screen and (max-width: 430px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Desc = styled.span`
  width: 100%;
  font-size: 16px;
  @media screen and (max-width: 430px) {
    font-size: 16px;
    width: 20%;
  }
`;

const Skill = styled.span`
  width: 55%;
  display: flex;
  gap: 10px;
  margin-top: 30px;
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    object-position: top;
    @media screen and (max-width: 769px) {
      width: 25px;
      height: 25px;
    }
  }
  @media screen and (max-width: 769px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 430px) {
    font-size: 12px;
    margin-top: 15px;
    width: 100%;
  }
`;

const CloseBtn = styled.div`
  border: none;
  position: absolute;
  right: 29%;
  bottom: 25%;
  @media screen and (max-width: 769px) {
    right: 8%;
    bottom: 23%;
  }
  @media screen and (max-width: 430px) {
    right: 11%;
    bottom: 22%;
  }
  button {
    border: none;
    width: 70px;
    height: 35px;
    border-radius: 20px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    @media screen and (max-width: 430px) {
      width: 60px;
      height: 30px;
    }
  }
`;

const ModalProject = ({ project, onClose }) => {
  if (!project) return null;

  const projectDetails = ProjectData.find((info) => info.id === project.id);

  return (
    <ModalWrapper>
      <Inner>
        <ProjectWrap>
          <div className="projectItem">
            <DataWrap>
              <img src={projectDetails.image} alt={projectDetails.name} />
            </DataWrap>
            <ProjectItem>
              <Name>{projectDetails.name}</Name>
              <ProjectDesc>
                <Git>Git URL: {projectDetails.gitURL}</Git>
                <Final>Final URL: {projectDetails.finalURL}</Final>
                <Desc>{projectDetails.desc}</Desc>
                <Skill>
                  {projectDetails.skillFirst && (
                    <img src={projectDetails.skillFirst} alt="skillFirst" />
                  )}
                  {projectDetails.skillSecond && (
                    <img src={projectDetails.skillSecond} alt="skillSecond" />
                  )}
                  {projectDetails.skillThird && (
                    <img src={projectDetails.skillThird} alt="skillThird" />
                  )}
                </Skill>
              </ProjectDesc>
            </ProjectItem>
          </div>
        </ProjectWrap>
        <CloseBtn>
          <button onClick={onClose}>Close</button>
        </CloseBtn>
      </Inner>
    </ModalWrapper>
  );
};

export default ModalProject;
