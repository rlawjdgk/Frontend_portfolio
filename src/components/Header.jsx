import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoColorWandOutline } from "react-icons/io5";
import ModalTheme from "./ModalTheme";
import { Link, Events, scroller } from "react-scroll";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  z-index: 99;
`;

const DesktopHeader = styled.header`
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;

  .colorTheme {
    font-size: 22px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
`;

const Tab = styled(Link)`
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 16px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.borderColor};
    transition: width 0.3s ease;
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

  useEffect(() => {
    // React Scroll 이벤트 등록
    Events.scrollEvent.register("begin", () => {
      console.log("Scroll event started");
    });

    Events.scrollEvent.register("end", () => {
      console.log("Scroll event ended");
    });

    return () => {
      // React Scroll 이벤트 해제
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <DesktopHeader>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={selectedTab === tab ? "selected" : ""}
            to={tab.replace(" ", "")}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setSelectedTab(tab)} // 활성 탭 설정
            onClick={() => {
              // Contact 탭 누를 때 강제로 스크롤
              if (tab === "Contact") {
                scroller.scrollTo("Contact", {
                  smooth: true,
                  duration: 500,
                  offset: -90, // 헤더 높이 보정
                });
              }
            }}
          >
            {tab}
          </Tab>
        ))}
        <div className="colorTheme" onClick={toggleModal}>
          <IoColorWandOutline />
        </div>
      </DesktopHeader>
      {isModalOpen && (
        <ModalTheme
          changeTheme={changeTheme}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </Wrapper>
  );
};

export default Header;
