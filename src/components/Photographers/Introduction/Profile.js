import styled from "styled-components";
import { useState, useEffect } from "react";
import heart from "../../../assets/photograph/heart_.png";
import clickedheart from "../../../assets/photograph/clickedheart.png";
import useMobileDetection from "../../common/mobileDetection";
import { icon_img } from "../Custom/Data/IconList";
import SNS from "./SNS";

const Profile = ({
  setModalOpen,
  nickname,
  profile,
  lowestPay,
  paymentImage,
  areas,
  sns,
  bio,
}) => {
  const isMobile = useMobileDetection(); // 모바일 여부 감지
  const values = Object.values(sns);
  const [clickedHeart, setClickedHeart] = useState(false);

  return (
    <>
      <ProfileContainer>
        <ProfileImg src={profile} />
        <Contents>
          <Container>
            <SubTitle>작가명</SubTitle>
            <Align>
              <HighLight>{nickname}</HighLight>
              {clickedHeart ? (
                <Heart src={clickedheart} />
              ) : (
                <Heart src={heart} />
              )}
            </Align>
          </Container>
          <Container>
            <SubTitle>가격표</SubTitle>
            <Price>{lowestPay.toLocaleString()}원 ~</Price>
          </Container>
          {!isMobile && (
            <>
              <Line />
              <Container>
                <SubTitle>활동 지역</SubTitle>
                <Content>
                  <Row>
                    {areas.length !== 0 ? (
                      areas.map((el, idx) => (
                        <Content>
                          {el.city}
                          {idx !== areas.length - 1 ? "," : ""}
                        </Content>
                      ))
                    ) : (
                      <Content>없음</Content>
                    )}
                  </Row>
                </Content>
              </Container>
              <Container>
                <SubTitle align="top">SNS</SubTitle>
                <Content>
                  {values.filter((el) => !!el).length !== 0 ? (
                    icon_img.map((el, i) => (
                      <SNS iconSrc={el} text={values[i]} />
                    ))
                  ) : (
                    <Content>없음</Content>
                  )}
                </Content>
              </Container>
              <Container>
                <SubTitle>한 줄 소개</SubTitle>
                <Content>{bio || "없음"}</Content>
              </Container>
              {/* 클릭하면 가격표 보여주기 */}
              <PriceBtn>상세 가격표 보기</PriceBtn>
              <ReservationBtn onClick={() => setModalOpen(true)}>
                예약하기
              </ReservationBtn>
            </>
          )}
        </Contents>
      </ProfileContainer>
      {isMobile && (
        <>
          <Line />
          <InfoContainer>
            <SubTitle>활동 지역</SubTitle>
            <Content>
              <Row>
                {areas.length !== 0 ? (
                  areas.map((el, idx) => (
                    <Content>
                      {el.city}
                      {idx !== areas.length - 1 ? "," : ""}
                    </Content>
                  ))
                ) : (
                  <Content>없음</Content>
                )}
              </Row>
            </Content>
            <SubTitle>SNS</SubTitle>
            <Content>
              {values.filter((el) => !!el).length !== 0 ? (
                icon_img.map((el, i) => <SNS iconSrc={el} text={values[i]} />)
              ) : (
                <Content>없음</Content>
              )}
            </Content>
            <SubTitle>한 줄 소개</SubTitle>
            <Content>{bio || "없음"}</Content>
          </InfoContainer>
          {/* 클릭하면 가격표 보여주기 */}
          <PriceBtn>상세 가격표 보기</PriceBtn>
          <ReservationBtn onClick={() => setModalOpen(true)}>
            예약하기
          </ReservationBtn>
        </>
      )}
    </>
  );
};

const Row = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
`;

const Heart = styled.img`
  width: 46px;
  height: 44px;
  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    position: absolute;
    margin-top: 20rem;
    margin-left: 4rem;
  }
`;

const ReservationBtn = styled.button`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 28px 92px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--sub-color, #5170de);
  border: none;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 335px;
    height: 47px;
    padding: 0px 22px;
    font-size: 18px;
    border-radius: 30px;
    margin-top: 1rem;
  }
`;

const PriceBtn = styled(ReservationBtn)`
  background: #777777;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

const Contents = styled.div`
  margin-left: auto;
`;

const ProfileContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InfoContainer = styled(ProfileContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.p`
  margin-top: 0rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const ProfileImg = styled.img`
  width: 272px;
  height: 410px;
  border-radius: 39px;
  filter: drop-shadow(14px 5px 50px rgba(0, 0, 0, 0.23));

  @media (max-width: 768px) {
    width: 159px;
    height: 213.75px;
    border-radius: 20px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 1.8rem;
  }
`;

const SubTitle = styled.p`
  color: var(--darkgrey, #777);
  font-size: 20px;
  margin-right: 4rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  align-self: ${(props) => (props.align === "top" ? "flex-start" : "")};
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0;
    margin-bottom: 0.2rem;
  }
`;

const HighLight = styled.h3`
  margin-left: 0;
  margin-top: 0rem;
  margin-bottom: 0;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0.2rem;
  }
`;

const Price = styled(HighLight)`
  color: #3c3aac;
`;

export default Profile;
