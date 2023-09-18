import styled from "styled-components";
import photo from "../../../assets/photograph/photo.png";
import heart from "../../../assets/photograph/heart_.png";
import useMobileDetection from "../../common/mobileDetection";

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

  return (
    <>
      <ProfileContainer>
        <ProfileImg src={profile} />
        <Contents>
          <ProfileContainer>
            <TitleContainer>
              <SubTitle1>작가명</SubTitle1>
              <SubTitle1>가격표</SubTitle1>
            </TitleContainer>
            <ContentContainer>
              <Align>
                <HighLight>{nickname}</HighLight>
                <Heart src={heart} />
              </Align>
              <Price>{lowestPay}원 ~</Price>
            </ContentContainer>
          </ProfileContainer>
          {!isMobile && (
            <>
              <Line />
              <ProfileContainer>
                <TitleContainer>
                  <SubTitle>활동 지역</SubTitle>
                  <SubTitle>SNS</SubTitle>
                  <SubTitle>한 줄 소개</SubTitle>
                </TitleContainer>
                <ContentContainer>
                  <Content>제주도 전역 </Content>
                  <Content>인스타그램 @myonghans </Content>
                  <Content>빛과 그림자를 이용한 극적인 연출</Content>
                </ContentContainer>
              </ProfileContainer>
            </>
          )}
        </Contents>
      </ProfileContainer>
      {isMobile && (
        <>
          <Line />
          <InfoContainer>
            <SubTitle>활동 지역</SubTitle>
            <Content>{areas.map((el) => el.city)} </Content>
            <SubTitle>SNS</SubTitle>
            {/* sns 어떻게 보여줄지 */}
            <Content>{sns.homepage} </Content>
            <SubTitle>한 줄 소개</SubTitle>
            <Content>{bio}</Content>
          </InfoContainer>
        </>
      )}
      <ReservationBtn onClick={() => setModalOpen(true)}>
        예약하기
      </ReservationBtn>
    </>
  );
};

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
  width: 504px;
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
    margin-top: 2rem;
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

const TitleContainer = styled.div`
  width: 8rem;

  @media (max-width: 768px) {
    width: 3.3rem;
    margin-left: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 17rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const Content = styled.p`
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

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 1.8rem;
  }
`;

const SubTitle = styled.p`
  color: var(--darkgrey, #777);
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0;
    margin-bottom: 0.2rem;
  }
`;

const SubTitle1 = styled(SubTitle)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const HighLight = styled.h3`
  margin: 0.3rem;
  margin-left: 0;
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
