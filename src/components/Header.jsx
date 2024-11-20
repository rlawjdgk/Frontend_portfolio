import React, { useState } from "react";
import styled from "styled-components";
import { IoColorWandOutline } from "react-icons/io5";
import ModalTheme from "./ModalTheme"; // 모달 컴포넌트 가져오기
import { Link } from "react-scroll"; // react-scroll 라이브러리

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
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
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 26.5%;
  position: relative;
  .colorTheme {
    font-size: 22px;
    display: flex;
    position: fixed;
    right: 5%;
    cursor: pointer;
  }
`;

const Tab = styled(Link)`
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.5s ease;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.borderColor};
    transition: width 0.5s ease;
  }
  &.selected::after {
    width: 100%;
  }
`;

const tabs = [
  "Home",
  "About Me",
  "Skills",
  "Team Project",
  "Project",
  "Contact",
];

const Header = ({ changeTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // 탭 클릭 시 선택된 탭 업데이트
  };

  return (
    <Wrapper>
      <DesktopHeader>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={selectedTab === tab ? "selected" : ""}
            to={tab.replace(" ", "")} // 공백 제거
            spy={true} // 스크롤 감지 활성화
            smooth={true}
            duration={1000}
            offset={0} // 헤더 높이만큼 오프셋 조정 (음수 값으로 테스트)
            onSetActive={() => setSelectedTab(tab)} // 스크롤 시 활성화 시 탭 업데이트
            onClick={() => handleTabClick(tab)} // 클릭 시 탭 업데이트
          >
            {tab}
          </Tab>
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
