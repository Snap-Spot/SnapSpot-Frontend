import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import { styled } from "styled-components";
import Logo from "../assets/header/logo.png";
import { useParams } from "react-router";

const SignUpInfoPage = () => {
  const params = useParams();

  // 이전 페이지에서 받아온 멤버 유형(customer, photographer)
  const memberType = params.memberType;

  return (
    <Wrapper>
      <div className="container">
        {window.innerWidth < 768 ? (
          <LogoImage src={Logo} alt="snapspot" />
        ) : (
          <MainText>회원가입</MainText>
        )}
        <SignUpForm memberType={memberType}/>
      </div>
    </Wrapper>
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
`;
