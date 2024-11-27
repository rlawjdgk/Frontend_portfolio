import React, { useRef } from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import emailjs from "emailjs-com";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  @media screen and (max-width: 769px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 430px) {
    padding-top: 80px;
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NameInput = styled.textarea`
  width: 100%;
  max-width: 300px;
  height: 55px;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: ${(props) => props.theme.contactColor};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  resize: none;
  font-family: "Arial", sans-serif;
  overflow: hidden;
  @media screen and (max-width: 390px) {
    width: 60%;
    height: 40px;
    padding: 13px;
  }
`;

const MailInput = styled.textarea`
  width: 100%;
  max-width: 300px;
  height: 55px;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: ${(props) => props.theme.contactColor};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  resize: none;
  font-family: "Arial", sans-serif;
  text-align: justify;
  overflow: hidden;
  @media screen and (max-width: 390px) {
    width: 60%;
    height: 40px;
    padding: 13px;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  max-width: 700px;
  height: 330px;
  padding: 10px 18px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: ${(props) => props.theme.contactColor};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  resize: none;
  font-family: "Arial", sans-serif;
  padding-top: 18px;
  @media screen and (max-width: 769px) {
    width: 90%;
    height: 400px;
  }
  @media screen and (max-width: 390px) {
    width: 100%;
    height: 280px;
    padding: 13px;
  }
`;

const MailBtn = styled.div`
  input {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    cursor: pointer;
    @media screen and (max-width: 769px) {
      font-size: 18px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 769px) {
    margin-top: 10px;
  }
`;

const Contact = () => {
  const form = useRef(); // 폼 요소에 접근하기 위한 useRef 사용

  const sendEmail = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지

    // emailjs를 사용하여 폼 제출
    emailjs
      .sendForm(
        "service_azj9dqy", // EmailJS에서 생성한 이메일 서비스 ID
        "template_4q2s5dr", // EmailJS에서 생성한 템플릿 ID
        form.current, // 폼 요소 데이터를 참조
        "Uuz-mybybGNd_4XFD" // EmailJS 사용자 ID (API 키)
      )
      .then(
        (result) => {
          // 이메일 전송 성공 시 실행
          console.log(result.text); // 성공 메시지를 콘솔에 출력
          e.target.reset(); // 폼 초기화
          alert("메시지가 성공적으로 전송되었습니다."); // 성공 메시지 알림
        },
        // 이메일 전송 실패 시 실행
        (error) => {
          console.error("실패...", error.text); // 오류 메시지를 콘솔에 출력
          alert("메시지 전송에 실패했습니다. 다시 시도해주세요."); // 실패 메시지 알림
        }
      );
    // 이메일 전송 함수 반환 (특별한 목적 없이 호출 흐름 유지용)
    return { sendEmail };
  };

  return (
    <Wrapper id="Contact">
      <Inner>
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>Contact</span>
        </SubTitle>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <NameInput id="your_name" name="your_name" placeholder="Your Name" />
          <MailInput
            id="your_email"
            name="your_email"
            placeholder="Your Mail or Your Number"
          />
          <MessageInput id="message" name="message" placeholder="Message" />
          <MailBtn>
            <input type="submit" value="Send Message" />
          </MailBtn>
        </ContactForm>
      </Inner>
    </Wrapper>
  );
};

export default Contact;
