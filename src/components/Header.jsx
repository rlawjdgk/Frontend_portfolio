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
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  left: 30%;
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
  position: relative; /* ::after 배치를 위해 position 설정 */
  transition: color 0.3s ease;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.borderColor};
    transition: width 0.3s ease; /* width에 애니메이션 추가 */
  }
  &.selected::after {
    width: 100%;
    background-color: ${(props) => props.theme.borderColor};
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

  return (
    <Wrapper>
      <DesktopHeader>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={selectedTab === tab ? "selected" : ""}
            to={tab.replace(" ", "")} // 공백 제거와 대소문자 일치
            spy={true}
            onSetActive={() => setSelectedTab(tab)}
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
