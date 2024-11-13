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

const Header = ({ changeTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
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
