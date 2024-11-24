import React, { useState } from "react";
import styled from "styled-components";
import { IoColorWandOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import ModalTheme from "./ModalTheme";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Wrapper: 모바일 환경에서만 표시되는 컨테이너
const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 769px) {
    width: 10%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    font-size: 25px;
    top: 55px;
    right: -15px;
    transform: translateX(-30%);
    z-index: 1000;
    cursor: pointer;
  }
  @media screen and (max-width: 390px) {
    top: 45px;
    right: -5px;
  }
`;

// Header: 탭들을 포함하는 컨테이너
const Header = styled.header`
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 390px) {
    padding: 10px;
    gap: 25px;
  }
`;

// Tab: Link 스타일
const Tab = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  color: ${(props) =>
    props.selected ? props.theme.nameWrap : props.theme.mobileHeader};
  transition: color 0.7s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.nameWrap};
  }
`;

// 탭에 underline 애니메이션 효과 추가 (선택된 탭)
const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${(props) => props.theme.accentColor};
  border-radius: 2px;
`;

const tabs = [
  { id: "Profile", icon: <FaCircle /> },
  { id: "AboutMe", icon: <FaCircle /> },
  { id: "Skills", icon: <FaCircle /> },
  { id: "TeamProject", icon: <FaCircle /> },
  { id: "Project", icon: <FaCircle /> },
  { id: "Contact", icon: <FaCircle /> },
];

const MobileHeader = ({ changeTheme }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id); // 현재 선택된 탭
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // 모달 열고 닫기
  };

  return (
    <Wrapper>
      <a className="menu" onClick={toggleModal}>
        <IoColorWandOutline />
      </a>
      <Header>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            to={tab.id} // 이동하려는 섹션 ID
            spy={true} // 섹션 감지 활성화
            smooth={true} // 부드러운 스크롤
            duration={500} // 스크롤 속도
            selected={selectedTab === tab.id} // 현재 선택된 탭 여부
            onSetActive={() => setSelectedTab(tab.id)} // 활성화된 탭 업데이트
          >
            {tab.icon}
            {selectedTab === tab.id && (
              <Underline
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Tab>
        ))}
      </Header>
      {isModalOpen && <ModalTheme changeTheme={changeTheme} />}
    </Wrapper>
  );
};

export default MobileHeader;
