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
  }
  @media screen and (max-width: 390px) {
    padding-top: 90px;
  }
`;

const SubTitle = styled.div`
  width: 130px;
  height: 5%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-top: 30px;
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
  }
  @media screen and (max-width: 390px) {
    height: 15%;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  line-height: 1.4;
  margin-bottom: 60px;
  & > span {
    font-weight: 700;
  }
  @media screen and (max-width: 769px) {
    font-size: 16px;
  }
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 150px;
  @media screen and (max-width: 769px) {
    gap: 100px;
  }
  @media screen and (max-width: 390px) {
    gap: 50px;
    flex-direction: column;
  }
`;

const MyContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .name {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 38%;
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 30%;
        font-size: 16px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 16px;
      @media screen and (max-width: 769px) {
        font-size: 16px;
      }
    }
  }
  .phone {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 38%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 30%;
        font-size: 16px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 16px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
  }
  .mail {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 38%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 30%;
        font-size: 16px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 16px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
  }
`;

const MyEtcInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .school {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 40%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 35%;
        font-size: 16px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 20px;
      @media screen and (max-width: 769px) {
        font-size: 20px;
      }
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
  }

  .workExperience {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 58%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 50%;
        font-size: 16px;
      }
    }
    .date {
      font-size: 16px;
      padding-left: 20px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
      & > span {
        font-weight: bold;
        color: ${(props) => props.theme.nameWrap};
        margin-right: 10px;
        @media screen and (max-width: 390px) {
          font-size: 16px;
        }
      }
    }
  }
  .mbti {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 28%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 390px) {
        width: 25%;
        font-size: 16px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 20px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
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
        <Text>
          안녕하세요. 프론트엔드 개발자 <span>김정하</span>입니다. <br />
          최신 웹 기술을 활용해 사용자 경험을 최우선으로 고려하며,
          <br /> 직관적이고 매력적인 웹 애플리케이션을 구현하는데 열정을 가지고
          있습니다. <br /> 다양한 프로젝트를 통해 창의적이고 효율적인 솔루션을
          제공하고, 항상 새로운 도전을 추구합니다.
        </Text>
        <Info>
          <MyContact>
            <div className="name">
              <div className="item">Name</div>
              <span>김정하</span>
            </div>
            <div className="phone">
              <div className="item"> Phone</div>
              <span>010-7546-3273</span>
            </div>
            <div className="mail">
              <div className="item"> Mail</div>
              <span>gloria0205p0@naver.com</span>
            </div>
          </MyContact>
          <MyEtcInfo>
            <div className="school">
              <div className="item">Education</div>
              <span>정화예술대학교 메이크업학과 졸업</span>
            </div>
            <div className="workExperience">
              <div className="item"> Work Experience</div>
              <div className="date">
                <span> 2023 - 2024</span>
                Makeup Forever Sales
              </div>
            </div>
            <div className="mbti">
              <div className="item">MBTI</div>
              <span>INTJ</span>
            </div>
          </MyEtcInfo>
        </Info>
      </Inner>
    </Wrapper>
  );
};

export default AboutMe;
