import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles.js";
import Main from "../src/pages/Main.jsx";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, vintageTheme, warmTheme } from "./theme.js";
import MobileHeader from "./components/MobileHeader.jsx";
import LandingPage from "./pages/LandingPage.jsx";

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  // 초기 테마 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }

    // 로딩 페이지가 일정 시간 후 사라지도록 설정
    const timer = setTimeout(() => {
      setIsLoading(false); // 로딩 상태 종료
    }, 2000); // 3초 동안 로딩 화면 표시

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

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
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? ( // 로딩 상태에 따라 화면 조건부 렌더링
        <LandingPage />
      ) : (
        <Wrapper>
          <GlobalStyles />
          <Header changeTheme={changeTheme} />
          <MobileHeader changeTheme={changeTheme} />
          <Main />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};

export default App;
