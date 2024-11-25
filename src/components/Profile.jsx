import React, { useState } from "react";
import styled from "styled-components";
import { FiGithub, FiBold, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // react-scroll 라이브러리
import { RxNotionLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
`;

const Inner = styled.div`
  width: 320px;
  height: 680px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  z-index: 99;
  position: fixed;
  top: 53%;
  left: 50px;
  transform: translateY(-50%);
  @media screen and (max-width: 769px) {
    width: 100%;
    position: inherit;
    margin-top: 360px;
    padding: 10px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

const NameWrap = styled.div`
  width: 93%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .name {
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.nameWrap};
  }
  @media screen and (max-width: 769px) {
    width: 36%;
  }
  @media screen and (max-width: 398px) {
    width: 83%;
  }
`;

const AnimalImg = styled.div`
  width: 100px;
  height: 100px;
  svg {
    stroke: ${(props) => props.theme.nameWrap};
  }
`;

const MyPhoto = styled.div`
  display: flex;
  margin-top: 8px;
  img {
    width: 250px;
    height: 250px;
  }
`;

const InfoWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  @media screen and (max-width: 769px) {
    width: 36%;
  }
  @media screen and (max-width: 390px) {
    width: 81%;
  }
`;

const Specialization = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  .introduce {
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
  }
  .job {
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
  }
`;

const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  .basedIn {
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
  }
  .address {
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
  }
`;

const Sns = styled.div`
  display: flex;
  margin-top: 20px;
  .icon {
    width: 40px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.iconColor};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.btnColor};
      color: ${(props) => props.theme.btnTextColor};
    }
  }
  @media screen and (max-width: 769px) {
    display: flex;
  }
`;

const Tab = styled(Link)`
  width: 260px;
  height: 50px;
  border-radius: 20px;
  background: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTextColor};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.btnTextColor};
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${(props) => props.theme.accentColor};
  border-radius: 2px;
`;

const tabs = ["Contact"];

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  // 선택된 탭의 상태를 관리하기 위한 React useState 훅
  // - `selectedTab`: 현재 선택된 탭의 값 (상태 변수)
  // - `setSelectedTab`: 상태를 업데이트하는 함수
  // - `tabs[0]`: 초기값으로 `tabs` 배열의 첫 번째 항목이 설정됨

  return (
    <Wrapper id="Profile">
      <Inner>
        <Container>
          <NameWrap>
            {/* <AnimalImg src="../public/img/animal.png" alt="animal" />÷ */}
            <AnimalImg>
              <svg viewBox="0 0 94 94" fill="none">
                <path
                  d="M75.3957 10.7708H18.6041C16.5266 10.7708 14.5341 11.596 13.0651 13.0651C11.596 14.5341 10.7708 16.5266 10.7708 18.6041V75.3957C10.7708 77.4733 11.596 79.4657 13.0651 80.9348C14.5341 82.4038 16.5266 83.2291 18.6041 83.2291H75.3957C77.4733 83.2291 79.4657 82.4038 80.9348 80.9348C82.4038 79.4657 83.2291 77.4733 83.2291 75.3957V18.6041C83.2291 16.5266 82.4038 14.5341 80.9348 13.0651C79.4657 11.596 77.4733 10.7708 75.3957 10.7708Z"
                  // stroke="#624E88"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.9675 33.0174C26.3984 33.4483 26.8096 33.8987 27.1621 34.3295L27.1817 34.3491M42.2021 33.977C39.9892 34.1337 37.7175 34.4078 35.5438 34.8778H35.5242M51.1517 33.9378C55.1271 34.1337 57.8688 34.5645 57.8688 34.5645C59.5138 32.5866 61.1588 31.4899 61.1588 31.4899M17.1355 83.2291C14.6092 73.3395 11.0842 56.2041 19.8771 43.0245C16.92 38.4224 16.5871 31.1766 19.3288 29.2966C19.8575 28.9441 20.543 29.0028 21.3263 29.3358M75.905 59.0437C76.5709 64.7816 76.6492 71.3028 75.9834 77.0799C75.7998 78.3269 76.0249 79.5999 76.625 80.7083C77.2251 81.8168 78.168 82.7011 79.3126 83.2291M74.1621 49.8982C73.0263 46.0403 71.4988 43.5141 69.7363 43.3574C69.7363 43.3574 70.2846 37.7566 70.2846 34.8974M47.6032 47.421C47.989 49.8924 47 51.4845 47 51.4845M47 51.4845C45.2963 52.1973 44.3641 52.5283 41.3444 52.8553M47 51.4845C47 51.4845 49.5811 52.4715 53.6975 52.8553M57.4321 44.5109C55.6755 45.445 54.6865 46.3772 54.6865 46.3772M36.568 44.5109C37.886 45.0044 39.6974 46.3772 39.6974 46.3772M46.0659 46.3772H48.7567M25.807 76.138C29.046 78.1139 33.7128 77.5656 35.9629 74.7652C38.213 71.9648 42.2785 72.6776 42.9933 75.7522C43.7081 78.8267 39.6955 83.2291 39.6955 83.2291M60.5067 83.2291C59.4805 80.9398 62.2045 75.7757 66.4365 78.6622C69.1958 80.5422 70.2807 83.2291 70.2807 83.2291M61.4408 10.7708C61.4408 10.7708 63.5813 13.4341 63.9671 16.07C68.5789 16.399 73.6295 17.388 76.3202 20.0219C77.9123 17.7698 80.1448 16.1797 83.2292 16.6732M42.2805 32.802C41.8105 31.8033 41.2034 30.0603 40.9684 27.2795C40.518 22.2662 43.9255 18.7608 49.2521 16.7241C49.2521 16.7241 49.683 12.827 53.3059 10.7708M76.4847 45.8288C80.8773 47.3661 83.2292 46.3772 83.2292 46.3772"
                  // stroke="#624E88"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M75.5526 48.318C72.3664 51.4298 70.3297 56.3217 74.5225 58.5679C77.8027 60.3245 80.4935 57.6867 80.9321 54.3947C81.3708 51.1027 81.1985 48.9525 79.857 46.6221M64.3627 77.832C64.3627 77.832 65.5573 72.0608 64.3627 69.4249C64.3627 69.4249 68.7298 71.3597 67.5763 66.9124C66.4228 62.465 59.7116 59.2533 57.0346 58.3877C54.3576 57.5222 52.2993 59.7879 54.1931 61.5994C48.6745 62.2182 42.0416 66.0115 42.0847 74.0799"
                  // stroke="#624E88"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M56.8289 63.6595C58.1469 63.9885 61.6464 65.802 62.8802 67.2002M55.2231 75.3958C53.7406 75.4781 50.9265 77.6616 54.9274 80.0077C58.9283 82.3538 58.4328 77.5363 58.4328 77.5363M52.2582 66.6245C52.8339 67.0357 54.3575 68.0149 54.3575 68.0149M29.3202 56.823C30.6382 58.3055 30.3503 60.6946 28.2079 60.6946C26.0655 60.6946 26.8899 54.1068 26.8899 54.1068M26.2319 47.4211C27.262 49.3285 27.0544 51.4709 25.4897 51.841C23.925 52.2111 22.607 49.0954 23.3904 45.4451M25.9852 27.0916C21.1677 26.0204 19.6597 31.257 23.0202 32.9392C25.0119 33.9379 26.4787 32.6924 26.4787 32.6924L28.1667 36.6874C30.6382 37.4277 38.4206 34.7506 39.4918 30.6753L37.3925 26.3083C39.2039 24.5791 40.3143 22.7676 37.886 20.915C35.4576 19.0624 33.7676 22.3544 33.7676 22.3544C31.6271 17.58 26.4787 18.6296 24.3382 20.3491C22.1977 22.0685 20.8367 24.6202 25.9832 27.0916"
                  // stroke="#624E88"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M51.1585 34.7316C51.4618 33.0169 49.6986 31.2715 47.2203 30.8331C44.7419 30.3947 42.487 31.4294 42.1837 33.1441C41.8804 34.8587 43.6436 36.6042 46.1219 37.0425C48.6002 37.4809 50.8552 36.4462 51.1585 34.7316Z"
                  // stroke="#624E88"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M57.0209 24.9648L55.5384 28.0668M77.0057 31.5526L75.249 34.9014M60.5616 30.1798C62.1537 32.7335 66.3269 34.684 71.1307 33.4738M64.5428 28.8071L68.0561 30.1798M64.6153 33.227L66.2995 29.4944M43.8433 52.499C44.1448 54.3124 43.8433 55.601 43.8433 55.601C43.8433 55.601 47.7971 56.5077 49.9102 55.2446C52.0232 53.9814 50.8717 52.4716 50.8717 52.4716M67.3805 16.4421C64.4332 18.6492 63.7458 23.0417 63.7458 23.0417M73.7979 18.2869C71.9277 20.5448 71.3246 24.9648 71.3246 24.9648"
                  // stroke="#624E88"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </AnimalImg>
            <div className="name">
              Kim
              <br /> JeongHa
            </div>
          </NameWrap>
          <MyPhoto>
            <img src="/img/myphoto.png" alt="myphoto" />
          </MyPhoto>
          <InfoWrap>
            <Specialization>
              <div className="introduce">Specialization:</div>
              <div className="job">Frontend Developer</div>
            </Specialization>
            <AddressWrap>
              <div className="basedIn">Address:</div>
              <div className="address">Goyang-si, Gyeonggi-do</div>
            </AddressWrap>
          </InfoWrap>
          <Sns>
            <a
              className="icon"
              href="https://www.notion.so/K-Digital-Training-KDT-FrontEnd-Develop-13ffe56a88d9802f916bd17601120e9b?pvs=4"
            >
              <RxNotionLogo />
            </a>
            <a
              className="icon"
              href="https://github.com/rlawjdgk/Frontend_Developer_-Diary"
            >
              <FiGithub />
            </a>
            <a className="icon" href="https://rlawjdgk.tistory.com/">
              <FiBold />
            </a>
            <a
              className="icon"
              href="https://linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            >
              <FaLinkedin />
            </a>
            <a
              className="icon"
              href="https://workspace.google.com/intl/ko/gmail/"
            >
              <FiMail />
            </a>
          </Sns>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={`menu ${selectedTab === tab ? "selected" : ""}`}
              to={tab.replace(" ", "")} // 공백 제거
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
              {selectedTab === tab && (
                <Underline
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Tab>
          ))}
        </Container>
      </Inner>
    </Wrapper>
  );
};

export default Profile;
