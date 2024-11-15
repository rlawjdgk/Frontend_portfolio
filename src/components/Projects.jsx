import React, { useState } from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { ProjectData } from "../assets/projectData";
import ModalProject from "./ModalProject";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media screen and (max-width: 769px) {
    padding-top: 0px;
  }
`;

const SubTitle = styled.div`
  width: 130px;
  height: 37px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  @media screen and (max-width: 769px) {
    margin-top: 0px;
    padding-top: 0px;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 390px) {
    margin-top: 40px;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  gap: 30px;
  cursor: pointer;
  .projectItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    @media screen and (max-width: 769px) {
      width: 30%;
      padding-top: 20px;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 390px) {
      width: 45%;
      padding-top: 0px;
      gap: 20px;
    }
  }
  .data {
    width: 200px;
    height: 200px;
    background: #ccc;
    display: flex;
    border-radius: 20px;
    transition: all 0.7s;
    &:hover {
      scale: 1.2;
    }
    @media screen and (max-width: 390px) {
      width: 150px;
      height: 150px;
    }
  }
`;

const Span = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // 선택한 프로젝트 상태를 관리하는 React 상태 변수
  // 초기값은 `null`, 사용자가 프로젝트를 선택할 때 해당 프로젝트 정보를 저장

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태

  const openModal = (project) => {
    setSelectedProject(project);
    // 선택한 프로젝트 정보를 `selectedProject` 상태에 저장

    setIsModalOpen(true);
    // 모달을 열기 위해 `isModalOpen`을 `true`로 설정
  };

  const closeModal = () => {
    setSelectedProject(false);
    // 모달을 닫을 때 선택된 프로젝트를 초기화 (null로 설정)

    setSelectedProject(null);
    // 모달을 닫기 위해 `isModalOpen`을 `false`로 설정
  };
  return (
    <Wrapper>
      <Inner id="Project">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>Projects</span>
        </SubTitle>
        <MenuWrap>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>TYPESCRIPT</li>
        </MenuWrap>
        <ProjectItem>
          {ProjectData.map((project) => (
            <div
              className="projectItem"
              key={project.id}
              onClick={() => openModal(project)} // 클릭 시 모달 열기
            >
              <img className="data" src={project.image} alt={project.name} />
              <Span>{project.name}</Span>
            </div>
          ))}
        </ProjectItem>
      </Inner>
      {isModalOpen && (
        <ModalProject project={selectedProject} onClose={closeModal} /> // 모달 렌더링
      )}
    </Wrapper>
  );
};

export default Projects;
