import React from "react";
import { styled } from "styled-components";
import Customer from "../../assets/signup/customer.png";
import Photographer from "../../assets/signup/photographer.png";
import M_Customer from "../../assets/signup/customer_mobile.png";
import M_Photographer from "../../assets/signup/photographer_mobile.png";
import Arrow from "../../assets/signup/arrow_left.png";
import { useNavigate } from "react-router";

const SignUpMemberPage = () => {
  const navigate = useNavigate();

  // 정보 입력 페이지로 이동
  const navigateToInfoPage = (memberType) => {
    navigate(`/signup/${memberType}/info`);
  };

  return (
    <Wrapper>
      <div className="container">
        <ArrowBack src={Arrow} alt="뒤로가기" />
        <MainText>회원가입 유형을 골라주세요!</MainText>
        <MainDiv>
          <MemberDiv>
            <MemberImage
              src={window.innerWidth < 768 ? M_Customer : Customer}
              alt="고객"
              onClick={() => {
                navigateToInfoPage("customer");
              }}
            />
            <MemberText color="#008EDE">인생사진을 찍고 싶어요!</MemberText>
          </MemberDiv>
          <MemberDiv>
            <MemberImage
              src={window.innerWidth < 768 ? M_Photographer : Photographer}
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
  );
};

export default SignUpMemberPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
const MainText = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.065rem;
  font-weight: 600;

  margin-bottom: 60px;

  margin-top: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
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

// 모바일에만 있는 뒤로가기 버튼
const ArrowBack = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;

    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 30px;

    width: 30px;
  }
`;
