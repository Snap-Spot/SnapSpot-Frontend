import { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import { S } from "../common/SignUpLoginBtn.style";
import { useNavigate } from "react-router";
import KakaoLoginBtn from "./KakaoLoginBtn";
import { EmailSignInAPI } from "../../api/auth";

const LoginForm = () => {
  const navigate = useNavigate();

  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      // 회원가입 페이지로 이동
      navigate("/signup/member");
    } else {
      // 비밀번호 찾기 페이지로 이동
    }
  };

  // 로그인 정보
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // 입력값이 변경될 때 호출되는 함수
  const handleChange = (event) => {
    const { name, value } = event.target;

    // 입력값을 객체에 반영
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  // 로그인 버튼 disabled 여부
  const [isFilled, setIsFilled] = useState(false);

  // 로그인 버튼 활성화 조건 실시간으로 검사
  useEffect(() => {
    // loginInfo에 값이 있는지 여부
    const isLoginInfoValid = Object.values(loginInfo).every(
      (value) => value !== ""
    );
    // 값이 전부 있을 경우 `이메일로 로그인` 버튼 활성화
    isLoginInfoValid ? setIsFilled(true) : setIsFilled(false);
  }, [loginInfo]);

  // 로그인 성공 여부 - 실패(false)할 경우 display: block; (문구 표시)
  const [isLoginSuccess, setIsLoginSuccess] = useState(true);

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleSubmit = async () => {
    const res = await EmailSignInAPI(loginInfo);
    // 로그인에 실패할 경우 "아이디 또는 비밀번호를 다시 확인해주세요." 문구 표시
    if (res === "Login Fail") {
      setIsLoginSuccess(false);
    }
  };

  // 엔터 키 입력 시 submit
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isFilled) {
      handleSubmit();
    }
  };

  return (
    <SignUpWrapper>
      <S.InputWrapper>
        <MainText>이메일</MainText>
        <S.InputBox
          placeholder="example@snapspot.com"
          type="email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <MainText style={{ marginTop: "15px" }}>비밀번호</MainText>
        <S.InputBox
          placeholder="password"
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <S.PasswordMatchText className={isLoginSuccess ? "isMatched" : ""}>
          아이디 또는 비밀번호를 다시 확인해주세요.
        </S.PasswordMatchText>
      </S.InputWrapper>

      <S.EmailLoginBtn
        className={`login ${isFilled ? "" : "isFilled"}`}
        onClick={handleSubmit}
      >
        이메일로 로그인
      </S.EmailLoginBtn>

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
