import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media screen and (max-width: 769px) {
    padding-top: 0;
  }
`;

const SubTitle = styled.div`
  width: 130px;
  height: 37px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-top: 70px;
  margin-bottom: 50px;
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  @media screen and (max-width: 769px) {
    margin-top: 0;
    margin-bottom: 30px;
    padding-top: 0px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
  .name {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    span {
      font-size: 22px;
      color: ${(props) => props.theme.textColor};
      @media screen and (max-width: 769px) {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 76px) {
      font-size: 16px;
    }
  }
  .phone {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    span {
      font-size: 22px;
      color: ${(props) => props.theme.textColor};
    }
  }
  .mail {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    span {
      font-size: 22px;
      color: ${(props) => props.theme.textColor};
    }
  }
  .major {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    span {
      font-size: 22px;
      color: ${(props) => props.theme.textColor};
    }
  }
  .mbti {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    span {
      font-size: 22px;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Text = styled.div`
  font-size: 23px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  line-height: 1.4;
  & > span {
    font-weight: 700;
  }
  @media screen and (max-width: 769px) {
    font-size: 16px;
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Inner id="AboutMe">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>About Me</span>
        </SubTitle>
        <Info>
          <div className="name">
            Name
            <br />
            <span>김정하</span>
          </div>
          <div className="phone">
            Phone
            <br />
            <span>010-7546-3273</span>
          </div>
          <div className="mail">
            Mail
            <br />
            <span>gloria0205p0@naver.com</span>
          </div>
          <div className="major">
            Major
            <br />
            <span>메이크업 학과</span>
          </div>
          <div className="mbti">
            Mbti
            <br />
            <span>INTJ</span>
          </div>
        </Info>
        <Text>
          안녕하세요. 프론트엔드 개발자 <span>김정하</span>입니다. <br />
          최신 웹 기술을 활용해 사용자 경험을 최우선으로 고려하며,
          <br /> 직관적이고 매력적인 웹 애플리케이션을 구현하는데 열정을 가지고
          있습니다. <br /> 다양한 프로젝트를 통해 창의적이고 효율적인 솔루션을
          제공하고, 항상 새로운 도전을 추구합니다.
        </Text>
      </Inner>
    </Wrapper>
  );
};

export default AboutMe;
