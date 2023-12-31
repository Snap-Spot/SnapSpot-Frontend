import React from "react";
import { styled } from "styled-components";
import Customer from "../../assets/signup/customer.png";
import Photographer from "../../assets/signup/photographer.png";
import M_Customer from "../../assets/signup/customer_mobile.png";
import M_Photographer from "../../assets/signup/photographer_mobile.png";
import { useNavigate } from "react-router";
import useMobileDetection from "../../components/common/mobileDetection";
import Header from "../../components/common/Header";

const SignUpMemberPage = () => {
  const navigate = useNavigate();

  // localStorage에 role 저장 후 정보 입력 페이지로 이동
  const navigateToInfoPage = (memberType) => {
    localStorage.setItem("role", "ROLE_" + memberType.toUpperCase());
    navigate(`/signup/${memberType}/info`);
  };

  // 실시간 모바일 크기 알아오기
  const isMobile = useMobileDetection();

  return (
    <>
      <Header isAuthPage={true} />
      <Wrapper>
        <div className="container">
          {/* <ArrowBack src={Arrow} alt="뒤로가기" /> */}
          <MainText>회원가입 유형을 골라주세요!</MainText>
          <MainDiv>
            <MemberDiv>
              <MemberImage
                src={isMobile ? M_Customer : Customer}
                alt="고객"
                onClick={() => {
                  // 고객 - customer에서 member로 변경 (이미지 이름은 customer로 유지)
                  navigateToInfoPage("member");
                }}
              />
              <MemberText color="#008EDE">인생사진을 찍고 싶어요!</MemberText>
            </MemberDiv>
            <MemberDiv>
              <MemberImage
                src={isMobile ? M_Photographer : Photographer}
                alt="작가"
                onClick={() => {
                  navigateToInfoPage("photographer");
                }}
              />
              <MemberText color="#3C3AAC">멋진 사진을 찍어드릴게요!</MemberText>
            </MemberDiv>
          </MainDiv>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUpMemberPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // PC : 100vh - Header height
  height: calc(100vh - 6.125rem);

  // Mobile : 100vh - Header height - SearchBox height
  @media screen and (max-width: 768px) {
    height: calc(100vh - 6.125rem - 2.375rem);
  }
`;

const MainText = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.065rem;
  font-weight: 600;

  margin-bottom: 60px;
`;

const MainDiv = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    gap: 15px;
  }
`;

const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MemberImage = styled.img`
  width: 215px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  @media screen and (max-width: 768px) {
    width: 130px;
  }
`;

const MemberText = styled.span`
  font-family: Noto Sans KR;
  font-size: 1.065rem;
  font-weight: 500;

  text-align: center;
  color: ${(props) => props.color};

  margin-top: 30px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
