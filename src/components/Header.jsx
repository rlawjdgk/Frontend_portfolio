import React, { useState } from "react";
import styled from "styled-components";
import { IoColorWandOutline } from "react-icons/io5";
import ModalTheme from "./ModalTheme"; // 모달 컴포넌트 가져오기
import { Link } from "react-scroll"; // react-scroll 라이브러리

// 전체 헤더 Wrapper
const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  z-index: 99;
`;

// 데스크탑용 헤더
const DesktopHeader = styled.header`
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center; /* 화면 중앙 정렬 */
  gap: 40px;
  position: relative;

  @media screen and (max-width: 769px) {
    gap: 20px; /* 모바일에서 간격 축소 */
  }

  .colorTheme {
    font-size: 22px;
    position: absolute;
    right: 10%;
    cursor: pointer;

    @media screen and (max-width: 769px) {
      right: 5%; /* 모바일에서 위치 조정 */
    }
  }
`;

// 네비게이션 탭
const Tab = styled(Link)`
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  text-decoration: none;
  position: relative; /* ::after 배치를 위해 position 설정 */
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 16px; /* 기본 폰트 크기 */

  @media screen and (max-width: 769px) {
    font-size: 14px; /* 모바일에서 폰트 크기 축소 */
  }

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

// 탭 리스트
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
