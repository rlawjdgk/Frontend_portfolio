import React, { useState } from "react"; // useState 추가
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { SkillData } from "../assets/skillData";
import SkillInfoModal from "./SkillInfoModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 769px) {
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media screen and (max-width: 769px) {
    padding-top: 0;
  }
  @media screen and (max-width: 390px) {
    padding-top: 0;
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
  margin-top: 70px;
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

const SkillWrap = styled.div`
  width: 900px;
  flex-wrap: wrap;
  display: flex;
  margin-top: 40px;
  gap: 30px;
  @media screen and (max-width: 769px) {
    width: 770px;
  }
  @media screen and (max-width: 390px) {
    width: 365px;
  }
  .skillItem {
    width: 200px;
    height: 200px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: all 0.7s;
    cursor: pointer; // 마우스 커서를 포인터로 변경
    &:hover {
      scale: 1.2;
    }
    @media screen and (max-width: 769px) {
      width: 160px;
      height: 160px;
      padding-top: 20px;
      gap: 20px;
    }
    @media screen and (max-width: 390px) {
      width: 25%;
      height: 120px;
      padding-top: 15px;
      gap: 20px;
    }
  }
  .data {
    width: 64px;
    height: 64px;
    @media screen and (max-width: 390px) {
      width: 30px;
      height: 30px;
    }
  }
  span {
    font-size: 24px;
    @media screen and (max-width: 769px) {
      font-size: 16px;
    }
    @media screen and (max-width: 390px) {
      font-size: 14px;
    }
  }
`;

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // 선택한 기술 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <Wrapper>
      <Inner id="Skills">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>My Skills</span>
        </SubTitle>
        <SkillWrap>
          {SkillData.map((skill) => (
            <div
              className="skillItem"
              key={skill.id}
              onClick={() => openModal(skill)} // 클릭 시 모달 열기
            >
              <img className="data" src={skill.image} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </SkillWrap>
      </Inner>
      {isModalOpen && (
        <SkillInfoModal skill={selectedSkill} onClose={closeModal} /> // 모달 렌더링
      )}
    </Wrapper>
  );
};

export default Skills;
