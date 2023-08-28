import { React, useState } from "react";
import { styled } from "styled-components";
import { S } from "../common/SignUpLoginBtn.style";
import KakaoLoginBtn from "../Login/KakaoLoginBtn";

const SignUpForm = ({ memberType }) => {
  return (
    <SignUpWrapper>
      <S.InputWrapper>
        <S.InputBox placeholder="닉네임" />
        <S.InputBox placeholder="이메일" />
        <S.InputBox placeholder="비밀번호" type="password" />
        <S.InputBox placeholder="비밀번호 확인" type="password" />
        <S.PasswordMatchText>비밀번호가 일치하지 않습니다.</S.PasswordMatchText>
      </S.InputWrapper>

      <S.EmailLoginBtn>이메일로 시작하기</S.EmailLoginBtn>

      <OrText>또는</OrText>

      <KakaoLoginBtn formType="signup" />
    </SignUpWrapper>
  );
};

export default SignUpForm;

// 1rem == 16px
const BASIC_FONT_SIZE = 1;
const INPUT_WIDTH = 80;
// const TEXT_INDENT = 32;
// const M_TEXT_INDENT = 18;

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