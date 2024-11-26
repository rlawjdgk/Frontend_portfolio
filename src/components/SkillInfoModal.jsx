import React from "react";
import styled from "styled-components";
import { SkillInfoData } from "../assets/skillInfoData"; // skill 정보

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
  max-width: 580px;
  height: 50%;
  background: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 70%;
  }
  @media screen and (max-width: 390px) {
    width: 85%;
    height: 350px;
  }
`;

const SkillWrap = styled.div`
  display: flex;
  padding: 0 30px;
  .skillItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    gap: 30px;
    @media screen and (max-width: 390px) {
      gap: 10px;
    }
  }
`;

const DataWrap = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 64px;
    height: 64px;
    @media screen and (max-width: 769px) {
      width: 100%;
      height: 53px;
    }
    @media screen and (max-width: 390px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 1.5;
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

const CloseBtn = styled.div`
  border: none;
  position: absolute;
  right: 32%;
  bottom: 28%;
  @media screen and (max-width: 769px) {
    right: 20%;
    bottom: 28%;
  }
  @media screen and (max-width: 390px) {
    right: 13%;
    bottom: 30%;
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
const SkillInfoModal = ({ skill, onClose }) => {
  if (!skill) return null;

  // 선택한 skill에 해당하는 추가 정보 가져오기
  const skillDetails = SkillInfoData.find((info) => info.id === skill.id);

  return (
    <ModalWrapper>
      <Inner>
        <SkillWrap>
          <div className="skillItem">
            <DataWrap>
              <img src={skillDetails.image} alt={skillDetails.name} />
              <span>{skillDetails.name}</span>
            </DataWrap>
            <Desc>{skillDetails.desc}</Desc>
          </div>
        </SkillWrap>
        <CloseBtn>
          <button onClick={onClose}>Close</button>
        </CloseBtn>
      </Inner>
    </ModalWrapper>
  );
};

export default SkillInfoModal;
