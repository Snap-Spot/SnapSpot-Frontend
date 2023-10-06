import styled from "styled-components";
import arrow from "../../../assets/photograph/arrow.png";
import line from "../../../assets/photograph/line.png";
import { useNavigate } from "react-router-dom";
import { status_list } from "./MockData/status";

//복구
const ScheduleBox = ({
  nickname,
  snapType,
  headCount,
  time,
  place,
  requirement,
  idx,
  id,
  profile,
  status,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {idx !== 0 && <BottomLine />}
      <Container>
        <Header>
          <RowContainer>
            <Profile src={profile} />
            <NickName>{nickname}</NickName>
            <Btn>{status_list[status][0]}</Btn>
          </RowContainer>
          <Detail onClick={() => navigate(`/photographer/reserve/${id}`)}>
            상세보기 <Arrow src={arrow} />
          </Detail>
        </Header>
        <RowContainer>
          <SnapType>{snapType[0].label}</SnapType>
          <Line src={line} />
          <Headcount>
            {headCount < 5 ? `${headCount}인` : `${headCount}인 이상`}
          </Headcount>
        </RowContainer>
        <RowContainer>
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
        </RowContainer>
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

  @media (max-width: 768px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
    margin-top: 0.5rem;
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
    padding-left: 1rem;
  }
`;

const Profile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled(RowContainer)`
  justify-content: space-between;
`;

const NickName = styled.p`
  font-size: 0.9rem;
  margin-left: 0.5rem;
  margin-right: 1.6rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8rem;
  }
`;

const Btn = styled.button`
  border-radius: 6px;
  background: #5170de;
  color: var(--lesswhite, #f6f6f6);
  font-size: 0.9rem;
  width: 4.2rem;
  height: 2.2rem;
  border: none;

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 2rem;
    font-size: 0.9rem;
  }
`;

const Detail = styled.p`
  cursor: pointer;
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
    margin-top: 0.3rem;
  }
`;

const Content = styled.p`
  margin-bottom: 0;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 0.5rem;
  }
`;

export default ScheduleBox;
