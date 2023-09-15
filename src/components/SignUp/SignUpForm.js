import { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import { S } from "../common/SignUpLoginBtn.style";
import KakaoLoginBtn from "../Login/KakaoLoginBtn";

const SignUpForm = ({ memberType }) => {
  // 회원가입 정보
  const [signUpInfo, setSignUpInfo] = useState({
    role: localStorage.getItem("role"),
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  // 입력값이 변경될 때 호출되는 함수
  const handleChange = (event) => {
    const { name, value } = event.target;

    // 입력값을 객체에 반영
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
    console.log(signUpInfo);
  };

  // 비밀번호, 비밀번호 확인 일치 여부 - 일치(true)할 경우 display: none;
  const [isMatched, setIsMatched] = useState(true);

  // 비밀번호 일치 여부 실시간 검사
  useEffect(() => {
    // 둘 중 하나라도 값이 있을 때
    if (signUpInfo.password || signUpInfo.passwordCheck) {
      // 비밀번호, 비밀번호 확인이 일치하지 않을 경우 "비밀번호가 일치하지 않습니다" 출력
      signUpInfo.password !== signUpInfo.passwordCheck
        ? setIsMatched(false)
        : setIsMatched(true);
    } else {
      setIsMatched(true);
    }
  }, [signUpInfo.password, signUpInfo.passwordCheck]);

  // 회원가입 버튼 disabled 여부
  const [isFilled, setIsFilled] = useState(false);

  // 회원가입 버튼 활성화 조건 실시간으로 검사
  useEffect(() => {
    // signUpInfo에 값이 있는지 여부
    const isSignUpInfoValid = Object.values(signUpInfo).every(
      (value) => value !== ""
    );
    // 값이 전부 있고 & 비밀번호가 일치할 경우 `이메일로 시작하기` 버튼 활성화
    isSignUpInfoValid && isMatched === true
      ? setIsFilled(true)
      : setIsFilled(false);
  }, [signUpInfo, isMatched]);

  return (
    <SignUpWrapper>
      <S.InputWrapper>
        <S.InputBox
          placeholder="닉네임"
          type="text"
          name="nickname"
          value={signUpInfo.nickname}
          onChange={handleChange}
        />
        <S.InputBox
          placeholder="이메일"
          type="email"
          name="email"
          value={signUpInfo.email}
          onChange={handleChange}
        />
        <S.InputBox
          placeholder="비밀번호 (8자 이상, 숫자/특수문자 포함)"
          type="password"
          name="password"
          value={signUpInfo.password}
          onChange={handleChange}
        />
        <S.InputBox
          placeholder="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={signUpInfo.passwordCheck}
          onChange={handleChange}
        />
        <S.PasswordMatchText className={isMatched ? "isMatched" : ""}>
          비밀번호가 일치하지 않습니다.
        </S.PasswordMatchText>
      </S.InputWrapper>

      <S.EmailLoginBtn className={isFilled ? "" : "isFilled"}>
        이메일로 시작하기
      </S.EmailLoginBtn>

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
