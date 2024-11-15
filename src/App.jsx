import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles.js";
import Main from "../src/pages/Main.jsx";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, vintageTheme, warmTheme } from "./theme.js";
import MobileHeader from "./components/MobileHeader.jsx";

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  // 테마 상태를 관리하는 변수 (기본값: lightTheme

  // 초기 테마 로드 (로컬 스토리지에서 저장된 테마를 불러옴)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // 로컬 스토리지에서 'theme' 항목 가져오기

    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
      // 로컬 스토리지에서 테마 설정
    }
  }, []); // 빈 배열을 넣어서 컴포넌트가 처음 렌더링될 때만 실행

  // 테마 변경 함수
  const changeTheme = (selectedTheme) => {
    let newTheme;
    if (selectedTheme === "light") {
      newTheme = lightTheme;
    } else if (selectedTheme === "dark") {
      newTheme = darkTheme;
    } else if (selectedTheme === "vintage") {
      newTheme = vintageTheme;
    } else if (selectedTheme === "warm") {
      newTheme = warmTheme;
    }
    setTheme(newTheme);
    // 새로운 테마 상태로 업데이트
    localStorage.setItem("theme", JSON.stringify(newTheme));
    // 로컬 스토리지에 선택된 테마 저장
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header changeTheme={changeTheme} />
        <MobileHeader changeTheme={changeTheme} />
        <Main />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
