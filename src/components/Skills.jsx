import React, { useState } from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { SkillData1, SkillData2, SkillData3 } from "../assets/skillData";
import SkillInfoModal from "./SkillInfoModal";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  @media screen and (max-width: 769px) {
    margin-top: 250px;
  }
`;

const SubTitle = styled.div`
  width: 130px;
  height: 5%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-bottom: 30px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: ${(props) => props.theme.nameWrap};
  margin-bottom: 20px;
`;

const SkillWrap = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 769px) {
    width: 770px;
  }
  @media screen and (max-width: 390px) {
    width: 365px;
  }
  .skillItem {
    width: 120px;
    height: 120px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
    @media screen and (max-width: 769px) {
      width: 160px;
      height: 160px;
    }
    @media screen and (max-width: 390px) {
      width: 28%;
      height: 120px;
    }
  }
  .data {
    width: 30px;
    height: 30px;
    span {
      font-size: 14px;
    }
    @media screen and (max-width: 390px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  // 섹션 데이터 배열
  const sections = [
    { title: "Frontend Skills", data: SkillData1 },
    { title: "Backend Skills", data: SkillData2 },
    { title: "Other Skills", data: SkillData3 },
  ];

  return (
    <Wrapper>
      <Inner id="Skills">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>My Skills</span>
        </SubTitle>
        {sections.map((section, index) => (
          <div key={index}>
            <SectionTitle>{section.title}</SectionTitle>
            <SkillWrap>
              {section.data.map((skill) => (
                <div
                  className="skillItem"
                  key={skill.id}
                  onClick={() => openModal(skill)}
                >
                  <img className="data" src={skill.image} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </SkillWrap>
          </div>
        ))}
      </Inner>
      {isModalOpen && (
        <SkillInfoModal skill={selectedSkill} onClose={closeModal} />
      )}
    </Wrapper>
  );
};

export default Skills;
