import React from "react";
import styled from "styled-components";
import { ProjectData } from "../assets/projectData"; // project 정보
import { FaTimes } from "react-icons/fa";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
    height: 600px;
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
      height: 300px;
    }
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
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

const Desc = styled.span`
  width: 100%;
  font-size: 16px;
  @media screen and (max-width: 430px) {
    font-size: 14px;
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
    margin-bottom: 30px;
    @media screen and (max-width: 769px) {
      width: 25px;
      height: 25px;
      margin-bottom: 15px;
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

const UrlButton = styled.div`
  display: flex;
  gap: 10px;
`;

const Git = styled.div`
  button {
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
  }
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

const Final = styled.div`
  button {
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
  }
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
  @media screen and (max-width: 430px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const CloseBtn = styled.div`
  border: none;
  position: absolute;
  right: 27%;
  top: 19%;
  @media screen and (max-width: 769px) {
    right: 8%;
    top: 23%;
  }
  @media screen and (max-width: 430px) {
    right: 8%;
    top: 22%;
  }
  button {
    border: none;
    width: 40px; /* 아이콘 크기에 맞게 조정 */
    height: 40px;
    border-radius: 50%; /* 둥근 버튼 */
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px; /* 아이콘 크기 조정 */
    @media screen and (max-width: 430px) {
      width: 35px;
      height: 35px;
      font-size: 18px;
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
                <UrlButton>
                  <Git>
                    <a href={projectDetails.gitURL}>
                      <button>Git-hub</button>
                    </a>
                  </Git>
                  <Final>
                    <a href={projectDetails.finalURL}>
                      <button>View Project</button>
                    </a>
                  </Final>
                </UrlButton>
              </ProjectDesc>
            </ProjectItem>
          </div>
        </ProjectWrap>
        <CloseBtn>
          <button onClick={onClose}>
            <FaTimes /> {/* X 아이콘 */}
          </button>
        </CloseBtn>
      </Inner>
    </ModalWrapper>
  );
};

export default ModalProject;
