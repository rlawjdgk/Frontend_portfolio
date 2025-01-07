import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/LandingPageAnimation.css"; // 애니메이션 스타일 불러오기

const LandingPage = () => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  // 애니메이션이 끝난 후 로딩 페이지를 숨기도록 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true); // 애니메이션 종료 상태 업데이트
    }, 2000); // 3초 후 애니메이션 종료

    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingContainer>
      <Ball className="bounce"></Ball> {/* 공 애니메이션 */}
      {isAnimationFinished && <Text>Portfolio</Text>}{" "}
      {/* 애니메이션 종료 후 텍스트 표시 */}
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e6ebf4;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: #6d6d6d;
  border-radius: 50%;
  animation: bounce 1s ease-in-out infinite; /* 공 튕기는 애니메이션 */
`;

const Text = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  color: #333;
  animation: fadeIn 1s ease-out forwards; /* 텍스트가 서서히 나타나는 애니메이션 */
`;

export default LandingPage;
