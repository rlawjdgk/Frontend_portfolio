import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll"; // 스크롤 라이브러리

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: auto;
    position: fixed;
    top: 5%;
    left: 48.5%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 390px) {
    width: 100%;
    height: auto;
    position: fixed;
    top: 15%;
    transform: translateX(-50%);
  }
`;

const Inner = styled.div`
  position: absolute;
  top: -20%;
  right: 3.5%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 390px) {
    height: auto;
  }
`;

const ThemeButton = styled.div`
  width: 25px;
  height: 25px;
  font-size: 30px;
  border: 2px solid #afafaf;
  border-radius: 50%;
  cursor: pointer;
  &:nth-child(1) {
    background-color: #e6ebf4; /* 밝은 테마 */
  }
  &:nth-child(2) {
    background-color: #181823; /* 다크 테마 */
  }
  &:nth-child(3) {
    background-color: #f2d8d8; /* 빈티지 테마 */
  }
  &:nth-child(4) {
    background-color: #fff2d7; /* 따뜻한 테마 */
  }
`;

const ModalTheme = ({ changeTheme, closeModal }) => {
  const handleThemeChange = (theme) => {
    changeTheme(theme); // 테마 변경
    scroll.scrollToTop(); // 페이지 최상단으로 이동
  };

  return (
    <Wrapper onClick={closeModal}>
      <Inner onClick={(e) => e.stopPropagation()}>
        <ThemeButton onClick={() => handleThemeChange("light")}></ThemeButton>
        <ThemeButton onClick={() => handleThemeChange("dark")}></ThemeButton>
        <ThemeButton onClick={() => handleThemeChange("vintage")}></ThemeButton>
        <ThemeButton onClick={() => handleThemeChange("warm")}></ThemeButton>
      </Inner>
    </Wrapper>
  );
};

export default ModalTheme;
