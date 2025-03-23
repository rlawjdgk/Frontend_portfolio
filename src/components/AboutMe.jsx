import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 769px) {
    height: 70vh;
  }
  @media screen and (max-width: 430px) {
    height: 100vh;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  @media screen and (max-width: 769px) {
    padding-top: 40px;
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
  margin-bottom: 30px;
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  @media screen and (max-width: 769px) {
    height: 4%;
    margin-bottom: 30px;
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
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 200px;
  @media screen and (max-width: 769px) {
    gap: 120px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 390px) {
    gap: 20px;
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
      width: 100%;
      max-width: 100px;
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
      padding-left: 10px;
      @media screen and (max-width: 769px) {
        font-size: 16px;
      }
    }
  }
  .phone {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 100%;
      max-width: 100px;
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
      font-size: 16px;
      color: ${(props) => props.theme.textColor};
      padding-left: 10px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
  }
  .mail {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 100%;
      max-width: 100px;
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
      font-size: 16px;
      color: ${(props) => props.theme.textColor};
      padding-left: 10px;
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
  .birthday {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 100%;
      max-width: 173px;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 30px;
      padding: 6px 18px;
      margin-bottom: 15px;
      @media screen and (max-width: 769px) {
        font-size: 16px;
      }
      @media screen and (max-width: 390px) {
        width: 50%;
        font-size: 16px;
      }
    }
    .date {
      font-size: 16px;
      padding-left: 10px;
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
      & > span {
        margin-right: 10px;
        @media screen and (max-width: 390px) {
          font-size: 16px;
        }
      }
    }
  }
  .school {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 100%;
      max-width: 125px;
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
      padding-left: 10px;
      @media screen and (max-width: 769px) {
        font-size: 16px;
      }
      @media screen and (max-width: 390px) {
        font-size: 16px;
      }
    }
  }

  .mbti {
    color: ${(props) => props.theme.textColor};
    .item {
      width: 100%;
      max-width: 90px;
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
        margin-bottom: 30px;
      }
    }
    span {
      font-size: 18px;
      color: ${(props) => props.theme.textColor};
      padding-left: 10px;
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
            <div className="birthday">
              <div className="item"> Work Experience</div>
              <div className="date">
                <span>2002.05.10</span>
              </div>
            </div>
            <div className="school">
              <div className="item">Education</div>
              <span>정화예술대학교 메이크업학과 졸업</span>
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
