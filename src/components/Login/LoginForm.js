import { React, useState } from "react";
import { styled } from "styled-components";
import kakaoLogo from "../../assets/signup/kakao.png";
import { useNavigate } from "react-router";

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
      <InputWrapper>
        <MainText>이메일</MainText>
        <InputBox placeholder="example@snapspot.com" />
        <MainText style={{ marginTop: "15px" }}>비밀번호</MainText>
        <InputBox placeholder="password" />
        <PasswordMatchText>
          아이디 또는 비밀번호를 다시 확인해주세요.
        </PasswordMatchText>
      </InputWrapper>

      <EmailLoginBtn>이메일로 로그인</EmailLoginBtn>

      <KakaoLoginBtn>
        <img src={kakaoLogo} alt="kakao" />
        <p>카카오로 로그인</p>
      </KakaoLoginBtn>

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

const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px 0;
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

const InputBox = styled.input`
  width: ${INPUT_WIDTH}%;
  /* width: 556px; */
  height: 3rem;
  border-radius: 30px;
  border: 1px solid #e7e7e7;

  font-family: Noto Sans KR;
  font-size: ${BASIC_FONT_SIZE}rem;
  text-indent: ${TEXT_INDENT}px;

  padding: 0;
  margin: 9px 0;

  &::placeholder {
    color: var(--darkgrey, #777);
  }

  @media screen and (max-width: 768px) {
    font-weight: 400;
    height: 2.8rem;
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

const PasswordMatchText = styled.div`
  font-family: Noto Sans KR;
  font-size: 14px;
  color: var(--lessred, #ff3d3d);

  width: ${INPUT_WIDTH}%;
  text-indent: ${TEXT_INDENT}px;

  @media screen and (max-width: 768px) {
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

const LoginButton = styled.button`
  width: ${INPUT_WIDTH}%;
  height: 3rem;
  border-radius: 30px;

  border: 0px;

  font-family: Noto Sans KR;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 2.8rem;
  }
`;

const EmailLoginBtn = styled(LoginButton)`
  background-color: var(--main-font-color, #3c3aac);
  font-size: ${BASIC_FONT_SIZE}rem;
  font-weight: 500;
  color: var(--white, #fff);

  margin-bottom: 15px;
`;

const KakaoLoginBtn = styled(LoginButton)`
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: 15px;

  img {
    width: 23px;
  }

  p {
    color: rgba(#000000, 0.8);
    font-size: ${BASIC_FONT_SIZE}rem;
    font-weight: 500;
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
