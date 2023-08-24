import { React, useState } from "react";
import { styled } from "styled-components";
import kakaoLogo from "../../assets/signup/kakao.png";

const SignUpForm = ({ memberType }) => {
  return (
    <SignUpWrapper>
      <InputWrapper>
        <InputBox placeholder="닉네임" />
        <InputBox placeholder="이메일" />
        <InputBox placeholder="비밀번호" type="password" />
        <InputBox placeholder="비밀번호 확인" type="password" />
        <PasswordMatchText>비밀번호가 일치하지 않습니다.</PasswordMatchText>
      </InputWrapper>

      <EmailLoginBtn>이메일로 시작하기</EmailLoginBtn>

      <OrText>또는</OrText>

      <KakaoLoginBtn>
        <img src={kakaoLogo} alt="kakao" />
        <p>카카오계정 로그인</p>
      </KakaoLoginBtn>
    </SignUpWrapper>
  );
};

export default SignUpForm;

// 1rem == 16px
const BASIC_FONT_SIZE = 1;
const INPUT_WIDTH = 80;
const TEXT_INDENT = 32;
const M_TEXT_INDENT = 18;

const SignUpWrapper = styled.div`
  width: 640px;
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
  font-size: 0.8rem;
  color: var(--lessred, #ff3d3d);

  width: ${INPUT_WIDTH}%;
  text-indent: ${TEXT_INDENT}px;

  @media screen and (max-width: 768px) {
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

const OrText = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  width: ${INPUT_WIDTH}%;

  font-family: Noto Sans KR;
  font-size: ${BASIC_FONT_SIZE}rem;

  margin: 30px 0;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    line-height: 0px;
    background-color: #ececec;
  }

  &::before {
    margin-right: 14px;
  }

  &::after {
    margin-left: 14px;
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
`;

const KakaoLoginBtn = styled(LoginButton)`
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: 70px;

  img {
    width: 23px;
  }

  p {
    color: rgba(#000000, 0.8);
    font-size: ${BASIC_FONT_SIZE}rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
