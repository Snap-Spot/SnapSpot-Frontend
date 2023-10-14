import React from "react";
import { styled } from "styled-components";
import coupon from "../../assets/event/wedding_coupon.png";
import { useNavigate } from "react-router-dom";

const EventItem = () => {
  const navigate = useNavigate();
  const isSignUp = () => {
    if (!!localStorage.getItem("accessToken")) {
      // 이미 로그인되어 있는 경우 (회원가입을 한 경우)
      alert(
        "이미 로그인 되어 있습니다.\n하단 버튼을 통해 쿠폰을 다운받아주세요."
      );
    } else {
      // 로그인되어 있지 않을 경우
      navigate("/signup/member");
    }
  };
  return (
    <>
      <Title>웨딩 스냅사진 할인 쿠폰</Title>
      <SubTitle>
        <div className="text1">스냅스팟이</div>
        <div className="text2">여러분께 드리는</div>
        <div className="text3">웨딩 스냅사진 할인 쿠폰</div>
      </SubTitle>
      <CouponDiv>
        <img src={coupon} alt="coupon" />
        <span>지급 기간 : 10월 30일 ~ 11월 6일</span>
      </CouponDiv>
      <ButtonDiv>
        <button className="signup-download" onClick={isSignUp}>
          회원가입 하고 쿠폰 받기
        </button>
        <button className="download">쿠폰 다운로드</button>
      </ButtonDiv>
    </>
  );
};

export default EventItem;

const Title = styled.div`
  width: 100%;

  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 700;

  margin: 40px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 2rem;

    margin-top: 70px;
  }

  .text1 {
    font-size: 0.9rem;
  }

  .text3 {
    color: var(--main_font_color, #3c3aac);
  }
`;

const CouponDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  img {
    /* box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.25); */
    filter: drop-shadow(0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25));
  }

  span {
    text-align: right;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 70px;

  width: 250px;

  @media (max-width: 768px) {
    width: 50%;
    margin-top: 60px;
  }

  button {
    font-family: Noto Sans KR;
    font-size: 0.8rem;

    border: 0px;

    border-radius: 30px;
    height: 2.5rem;

    cursor: pointer;

    @media (max-width: 768px) {
      border-radius: 12px;
    }
  }

  .signup-download {
    background: var(--lightgrey2, #dbdbdb);
  }

  .download {
    background: var(--sub_color2, #a6b9ff);
  }
`;
