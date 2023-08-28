import { React, useState } from "react";
import { styled } from "styled-components";
import { S } from "../common/SignUpLoginBtn.style";
import { useNavigate } from "react-router";
import KakaoLoginBtn from "./KakaoLoginBtn";

const LoginForm = () => {
  const navigate = useNavigate();

  // 회원가입 페이지로 이동
  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigate("/signup/member");
    } else {
      // 비밀번호 찾기
    }
  };

  return (
    <SignUpWrapper>
      <S.InputWrapper>
        <MainText>이메일</MainText>
        <S.InputBox placeholder="example@snapspot.com" />
        <MainText style={{ marginTop: "15px" }}>비밀번호</MainText>
        <S.InputBox placeholder="password" />
        <S.PasswordMatchText>
          아이디 또는 비밀번호를 다시 확인해주세요.
        </S.PasswordMatchText>
      </S.InputWrapper>

      <S.EmailLoginBtn className="login">이메일로 로그인</S.EmailLoginBtn>

      <KakaoLoginBtn formType="login" />

      <BottomDiv>
        <EtcText
          onClick={() => {
            navigateToPage("signup");
          }}
        >
          회원가입
        </EtcText>
        <EtcText>|</EtcText>
        <EtcText>비밀번호 찾기</EtcText>
      </BottomDiv>
    </SignUpWrapper>
  );
};

export default LoginForm;

// 1rem == 16px
const BASIC_FONT_SIZE = 1;
const INPUT_WIDTH = 80;
const TEXT_INDENT = 32;
const M_TEXT_INDENT = 18;

const SignUpWrapper = styled.div`
  width: 450px;
  border-radius: 30px;
  border: 0.5px solid var(--lightgrey-2, #dbdbdb);
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    border: 0px;
    width: 100%;
    margin-bottom: 0;
  }
`;

const MainText = styled.div`
  width: ${INPUT_WIDTH}%;

  font-family: Noto Sans KR;
  font-size: ${BASIC_FONT_SIZE}rem;
  text-indent: ${TEXT_INDENT}px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const EtcText = styled.span`
  color: var(--darkgrey, #777);
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 0.8rem;
`;
