import React from "react";
import SignUpForm from "../../components/SignUp/SignUpForm";
import { styled } from "styled-components";
import Logo from "../../assets/header/logo.png";
import { useParams, useNavigate } from "react-router-dom";
import useMobileDetection from "../../components/common/mobileDetection";
import Header from "../../components/common/Header";

const SignUpInfoPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  // 이전 페이지에서 받아온 멤버 유형(customer, photographer)
  const memberType = params.memberType;

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
            <LogoImage src={Logo} alt="snapspot" onClick={onClickLogo} />
          ) : (
            <MainText>회원가입</MainText>
          )}
          <SignUpForm memberType={memberType} />
        </div>
      </Wrapper>
    </>
  );
};

export default SignUpInfoPage;

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
