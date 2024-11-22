import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { SlChart } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { IoMailOutline, IoColorWandOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import ModalTheme from "./ModalTheme";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // react-scroll 라이브러리

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 769px) {
    width: fit-content;
    height: 8%;
    border-radius: 30px;
    display: block;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background: #f2efef;
    padding: 5px 0;
    cursor: pointer;
  }
  @media screen and (max-width: 390px) {
    width: 80%;
    padding-top: 10px;
    padding-bottom: 40px;
    cursor: pointer;
  }
`;

const Header = styled.header`
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0 10px;
    cursor: pointer;
    @media screen and (max-width: 390px) {
      gap: 15px;
      font-size: 15px;
      cursor: pointer;
    }
    .menu {
      text-decoration: none;
      color: var(--black-color);
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      width: 100%;
      height: 100%;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.mobileColor};
        cursor: pointer;
      }
      @media screen and (max-width: 390px) {
        font-size: 15px;
        cursor: pointer;
      }
    }
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

const tabs = [
  { id: "Profile", icon: <FaRegUser /> },
  { id: "Home", icon: <RiHomeLine /> },
  { id: "AboutMe", icon: <SiAboutdotme /> },
  { id: "Skills", icon: <SlChart /> },
  { id: "Project", icon: <TiDocument /> },
  { id: "Contact", icon: <IoMailOutline /> },
];
// 네비게이션 메뉴 항목을 객체 배열로 정의
// - 각 객체는 id와 해당 탭에 표시할 아이콘(icon) 컴포넌트를 포함
// - id: 메뉴 항목의 고유 이름
// - icon: React 아이콘 컴포넌트 (각 항목에 시각적 아이콘 추가)

const MobileHeader = ({ changeTheme }) => {
  // 부모 컴포넌트에서 전달받은 changeTheme 함수로 테마 변경 가능
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  // 현재 선택된 탭의 id를 관리하는 상태 변수
  // 초기값은 tabs 배열의 첫 번째 항목("Profile")의 id
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달 창의 열림/닫힘 상태를 관리하는 상태 변수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // 모달 창의 상태를 현재 상태의 반대값으로 변경
    // true -> false, false -> true
  };

  return (
    <Wrapper>
      <Header>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            className={`menu ${selectedTab === tab.id ? "selected" : ""}`}
            to={tab.id}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setSelectedTab(tab.id)}
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
          </Link>
        ))}
        <a className="menu" onClick={toggleModal}>
          <span>
            <IoColorWandOutline />
          </span>
        </a>
      </Header>
      {isModalOpen && <ModalTheme changeTheme={changeTheme} />}
    </Wrapper>
  );
};

export default MobileHeader;
