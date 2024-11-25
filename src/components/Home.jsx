import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; // Default to column for mobile
  align-items: center;
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  @media screen and (max-width: 769px) {
    height: 100%;
    padding-top: 10px;
    display: inherit;
    justify-content: inherit;
    margin-top: 300px;
  }
  @media screen and (max-width: 390px) {
    height: 30%;
    margin-top: 250px;
  }
`;
const SubTitle = styled.div`
  width: 190px;
  height: 5%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 769px) {
    margin-bottom: 23px;
  }
  @media screen and (max-width: 390px) {
    height: 15%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
`;
const MainTitle = styled(motion.div)`
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  background: linear-gradient(175deg, #5581b0, #cdb1d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: flex;
  @media screen and (max-width: 769px) {
    font-size: 30px;
  }
  @media screen and (max-width: 390px) {
    font-size: 26px;
  }
`;
const Home = () => {
  return (
    <Wrapper id="Home">
      <Inner>
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span> Nice to meet you</span>
        </SubTitle>
        <motion.div>
          <MainTitle
            animate={{ opacity: [1.5, 0.2, 1.5] }} // 깜빡이는 효과
            transition={{
              repeat: Infinity, // 무한 반복
              duration: 5, // 깜빡이는 시간
              ease: "easeInOut",
            }}
          >
            I'm a Frontend Developer <br /> who prioritizes user experience
          </MainTitle>
        </motion.div>
      </Inner>
    </Wrapper>
  );
};
export default Home;
