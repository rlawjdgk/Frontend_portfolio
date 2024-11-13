import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { SlChart } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { IoMailOutline, IoColorWandOutline } from "react-icons/io5";
import ModalTheme from "./ModalTheme"; // 모달 컴포넌트
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // react-scroll 라이브러리

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 769px) {
    width: fit-content;
    height: 5%;
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
    height: 7%;
    padding-top: 15px;
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
        background: ${(props) => props.theme.mobileColor};
        border-radius: 100%;
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
  { id: "Home", icon: <RiHomeLine /> },
  { id: "AboutMe", icon: <FaRegUser /> },
  { id: "Skills", icon: <SlChart /> },
  { id: "Project", icon: <TiDocument /> },
  { id: "Contact", icon: <IoMailOutline /> },
];

const MobileHeader = ({ changeTheme }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
