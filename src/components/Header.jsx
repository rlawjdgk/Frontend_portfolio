import React, { useState } from "react";
import styled from "styled-components";
import { IoColorWandOutline } from "react-icons/io5";
import ModalTheme from "./ModalTheme"; // 모달 컴포넌트 가져오기
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // react-scroll 라이브러리

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  z-index: 99;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const DesktopHeader = styled.header`
  width: 100%;
  height: 100%;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 26%;
  position: relative;
  .menu {
    color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px;
    transition: all 0.7s ease;
    cursor: pointer;
    &:hover {
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 20px;
      padding: 8px 16px;
    }
  }
  .colorTheme {
    font-size: 22px;
    display: flex;
    position: fixed;
    right: 5%;
    cursor: pointer;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${(props) => props.theme.accentColor};
  border-radius: 2px;
`;

const tabs = ["Home", "AboutMe", "Skills", "Project", "Contact"];
// 네비게이션 메뉴 항목의 이름을 배열로 정의
// 이 배열은 각각의 탭 이름을 나타냄

const Header = ({ changeTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달 창의 열림/닫힘 상태를 관리하는 상태 변수
  // 초기값은 false (모달이 닫힌 상태)
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  // 현재 선택된 탭을 관리하는 상태 변수
  // 초기값은 tabs 배열의 첫 번째 값 ("Home")

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // 모달 창의 상태를 현재 상태의 반대값으로 변경
    // true -> false, false -> true
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // 모달 창을 닫는 함수 (isModalOpen 상태를 false로 설정)
  };

  return (
    <Wrapper>
      <DesktopHeader>
        {tabs.map((tab) => (
          <Link
            key={tab}
            className={`menu ${selectedTab === tab ? "selected" : ""}`}
            to={tab.replace(" ", "")} // 공백 제거
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
            {selectedTab === tab && (
              <Underline
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        ))}
        <div className="colorTheme" onClick={toggleModal}>
          <IoColorWandOutline />
        </div>
      </DesktopHeader>
      {isModalOpen && (
        <ModalTheme changeTheme={changeTheme} closeModal={closeModal} />
      )}
    </Wrapper>
  );
};

export default Header;
