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

  // 초기 테마 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme)); // 로컬 스토리지에서 테마 설정
    }
  }, []);

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
    localStorage.setItem("theme", JSON.stringify(newTheme)); // 로컬 스토리지에 테마 저장
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
