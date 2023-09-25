import React from "react";
import { styled } from "styled-components";
import Logo from "../../assets/header/logo.png";
import LoginForm from "../../components/Login/LoginForm";
import useMobileDetection from "../../components/common/mobileDetection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";

const LoginPage = () => {
  const navigate = useNavigate();

  // 실시간 모바일 크기 알아오기
  const isMobile = useMobileDetection();

  // 로고 클릭 시 MainPage로 이동
  const onClickLogo = () => {
    navigate(`/`);
  };

  return (
    <>
      {isMobile ? null : <Header isAuthPage={true} />}
      <Wrapper>
        <div className="container">
          {isMobile ? (
            <LogoImage src={Logo} alt="snapspot" onClick={onClickLogo}/>
          ) : (
            <MainText>로그인</MainText>
          )}
          <LoginForm />
        </div>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;

  @media screen and (max-width: 768px) {
    background-color: white;
    height: 100vh;
  }
`;

const MainText = styled.div`
  font-family: Noto Sans KR;
  font-size: 29px;
  margin: 40px 0;

  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  cursor: pointer;
`;
