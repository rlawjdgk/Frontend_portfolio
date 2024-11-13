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
  margin-top: 100px;
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
  margin-top: 50px;
`;

const NameInput = styled.textarea`
  width: 30%;
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
  width: 30%;
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
  width: 80%;
  height: 345px;
  padding: 10px 18px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: ${(props) => props.theme.contactColor};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  resize: none;
  font-family: "Arial", sans-serif;
  padding-top: 18px;
  @media screen and (max-width: 390px) {
    width: 100%;
    height: 280px;
    padding: 13px;
  }
`;

const MailBtn = styled.div`
  margin-top: 50px;
  input {
    width: 238px;
    height: 62px;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    cursor: pointer;
    @media screen and (max-width: 769px) {
      font-size: 18px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 769px) {
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs를 사용하여 폼 제출
    emailjs
      .sendForm(
        "service_azj9dqy", // 이메일 서비스 ID
        "template_4q2s5dr", // 이메일 템플릿 ID
        form.current, // 폼 데이터
        "Uuz-mybybGNd_4XFD" // 사용자 ID (EmailJS에서 발급받은 ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); // 폼 초기화
          alert("메시지가 성공적으로 전송되었습니다.");
        },
        (error) => {
          console.error("실패...", error.text);
          alert("메시지 전송에 실패했습니다. 다시 시도해주세요.");
        }
      );

    return { sendEmail };
  };

  return (
    <Wrapper>
      <Inner>
        <SubTitle id="Contact">
          <span>
            <IoPawSharp />
          </span>
          <span>Contact</span>
        </SubTitle>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <NameInput id="user_name" name="user_name" placeholder="Your Name" />
          <MailInput
            id="user_email"
            name="user_mail"
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
