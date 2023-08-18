import styled from "styled-components";
import profile from "../../assets/photograph/profile.png";
import arrow from "../../assets/photograph/arrow.png";
import line from "../../assets/photograph/line.png";

const UpcomingSchedule = ({
  nickname,
  snapType,
  headCount,
  time,
  place,
  requirement,
  date,
  num,
}) => {
  return (
    <Container>
      <Padding>
        <Row2>
          <Date>{date}</Date>
          <Detail>
            상세보기 <Arrow src={arrow} />
          </Detail>
        </Row2>
        <ReservationNum>스냅 예약번호 {num}</ReservationNum>
      </Padding>
      <BottomLine />
      <Padding>
        <Row>
          <Profile src={profile} />
          <NickName>{nickname}</NickName>
          <Btn>예약신청</Btn>
        </Row>
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
      </Padding>
    </Container>
  );
};

const ReservationNum = styled.p`
  font-size: 0.9rem;
  color: #777777;
  margin-top: 0.3rem;
  font-weight: 400;
`;

const Padding = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 32px;
  border: 1px solid var(--lightgrey-2, #dbdbdb);
  margin-bottom: 2rem;
`;

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
  margin-bottom: 0.5rem;
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
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.img`
  width: 0.5rem;
  margin-left: 0.2rem;
`;

const Profile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Date = styled.h2`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
`;

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
  margin-top: 0;
  margin-bottom: 0;
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

export default UpcomingSchedule;
