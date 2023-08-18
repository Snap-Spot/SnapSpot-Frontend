import styled from "styled-components";
import profile from "../../../assets/photograph/profile.png";
import arrow from "../../../assets/photograph/arrow.png";
import line from "../../../assets/photograph/line.png";

const ScheduleBox = ({
  nickname,
  snapType,
  headCount,
  time,
  place,
  requirement,
  idx,
}) => {
  return (
    <>
      {/* 나중에 idx 받아서 0일 때만 안보이게끔 설정 */}
      {idx !== "0" && <BottomLine />}
      <Container>
        <Row2>
          <Row>
            <Profile src={profile} />
            <NickName>{nickname}</NickName>
            <Btn>예약완료</Btn>
          </Row>
          <Detail>
            상세보기 <Arrow src={arrow} />
          </Detail>
        </Row2>
        <Row>
          <SnapType>{snapType}</SnapType>
          <Line src={line} />
          <Headcount>{headCount}인</Headcount>
        </Row>
        <Row>
          <TitleContainer>
            <SubTitle>시간</SubTitle>
            <SubTitle>장소</SubTitle>
            <SubTitle>요청사항</SubTitle>
          </TitleContainer>
          <ContentContainer>
            <Content>{time}</Content>
            <Content>{place}</Content>
            <Content>{requirement}</Content>
          </ContentContainer>
        </Row>
      </Container>
    </>
  );
};

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.2rem;
`;

const Line = styled.img`
  height: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.img`
  width: 0.5rem;
  margin-left: 0.2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
  margin-bottom: 1.7rem;

  @media (max-width: 768px) {
    padding-right: 0.7rem;
  }
`;

const Profile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Date = styled.h2``;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Row2 = styled(Row)`
  justify-content: space-between;
`;

const NickName = styled.p`
  font-size: 0.9rem;
  margin-left: 0.5rem;
  margin-right: 1.6rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const Btn = styled.button`
  border-radius: 6px;
  background: #5170de;
  color: var(--lesswhite, #f6f6f6);
  font-size: 0.8rem;
  width: 3.7rem;
  height: 1.8rem;
  border: none;
`;

const Detail = styled.p`
  font-size: 0.9rem;
`;

const SnapType = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 0.4rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Headcount = styled.p`
  font-size: 1rem;
  color: var(--darkgrey, #777);
  margin: 0;
  margin-top: 0.4rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 0.6rem;
  }
`;

const Content = styled.p`
  margin-bottom: 0;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default ScheduleBox;
