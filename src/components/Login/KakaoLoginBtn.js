import { React } from "react";
import { styled } from "styled-components";
import { S } from "../common/SignUpLoginBtn.style";
import kakaoLogo from "../../assets/signup/kakao.png";

const KakaoLoginBtn = (props) => {

  const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  // props.formType - "signup" 또는 "login"
  const REDIRECT_URI = encodeURI(
    `${CLIENT_MAIN_URL}/auth/kakao-${props.formType}`
  );

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.KakaoLoginBtn onClick={handleKakaoLogin} className={props.formType}>
      <img src={kakaoLogo} alt="kakao" />
      <p>카카오로 {props.formType === "signup" ? "시작하기" : "로그인"}</p>
    </S.KakaoLoginBtn>
  );
};

export default KakaoLoginBtn;
