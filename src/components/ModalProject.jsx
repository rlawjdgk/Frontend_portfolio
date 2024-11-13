import React from "react";
import styled from "styled-components";
import { ProjectData } from "../assets/projectData";

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
  }
  @media screen and (max-width: 390px) {
  }
`;

const Inner = styled.div`
  width: 50%;
  max-width: 850px;
  height: 550px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 70%;
  }
  @media screen and (max-width: 390px) {
    width: 85%;
    height: 300px;
  }
`;

const ProjectWrap = styled.div`
  display: flex;
  padding: 0 30px;
  .projectItem {
    display: flex;
    align-items: center;
    margin-left: 10px;
    @media screen and (max-width: 390px) {
      gap: 10px;
    }
  }
`;

const DataWrap = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  img {
    width: 300px;
    height: 400px;
    @media screen and (max-width: 390px) {
      width: 150px;
      height: 250px;
    }
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 16px;
  }
`;

const Git = styled.p`
  width: 100%;
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 16px;
  }
`;

const Final = styled.p`
  width: 100%;
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 16px;
  }
`;

const Desc = styled.span`
  width: 22%;
  font-size: 20px;
  @media screen and (max-width: 390px) {
    font-size: 16px;
  }
`;
const Skill = styled.span`
  width: 100%;
  margin-top: 120px;
  font-size: 20px;
  border-radius: 8px;
  padding: 6px 8px;
  border: 1px solid #ccc;
  @media screen and (max-width: 390px) {
    font-size: 16px;
  }
`;

const CloseBtn = styled.div`
  border: none;
  position: absolute;
  right: 29%;
  bottom: 25%;
  @media screen and (max-width: 769px) {
    right: 20%;
    bottom: 32%;
  }
  @media screen and (max-width: 390px) {
    right: 13%;
    bottom: 32%;
  }
  button {
    border: none;
    width: 70px;
    height: 35px;
    border-radius: 20px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    @media screen and (max-width: 390px) {
      width: 60px;
      height: 30px;
    }
  }
`;
const ModalProject = ({ project, onClose }) => {
  if (!project) return null;

  // 선택한 skill에 해당하는 추가 정보 가져오기
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
                <Skill>{projectDetails.skill}</Skill>
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
