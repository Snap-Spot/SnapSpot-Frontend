import styled from "styled-components";
import arrow from "../../assets/photograph/arrow.png";
import ScheduleBox from "../../components/Photographer/Reservation/ScheduleBox";
import UpcomingSchedule from "../../components/Photographer/Reservation/UpcomingSchedule";
import Calendar from "../../components/Photographer/Reservation/Calendar";
import { useState } from "react";

const Reservation = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const [select, setSelect] = useState(currentDate);

  const mockData = [
    {
      nickname: "kui01",
      snapType: "우정스냅",
      headCount: "4",
      time: "12:30 ~ 14:30",
      place: "뚝섬유원지",
      requirement: "편안한 분위기에서 촬영하고 싶어요!",
      id: "ex",
    },
    {
      nickname: "kui01",
      snapType: "우정스냅",
      headCount: "4",
      time: "12:30 ~ 14:30",
      place: "뚝섬유원지",
      requirement: "편안한 분위기에서 촬영하고 싶어요!",
      id: "ex",
    },
  ];

  const mockData2 = [
    {
      nickname: "kui01",
      snapType: "우정스냅",
      headCount: "4",
      time: "12:30 ~ 14:30",
      place: "뚝섬유원지",
      requirement: "편안한 분위기에서 촬영하고 싶어요!",
      date: "2023.07.23(일)",
      num: "0123920293848",
      id: "ex",
    },
    {
      nickname: "kui01",
      snapType: "우정스냅",
      headCount: "4",
      time: "12:30 ~ 14:30",
      place: "뚝섬유원지",
      requirement: "편안한 분위기에서 촬영하고 싶어요!",
      date: "2023.07.23(일)",
      num: "0123920293848",
      id: "ex",
    },
  ];

  return (
    <Center>
      <Container>
        <Title>스냅사진 예약 내역</Title>
        <ReservationContainer>
          <Calendar setSelect={setSelect} select={select} />
          <ScheduleContainer>
            <SelectedDate>5월 16일 화요일</SelectedDate>
            {mockData.map((item, idx) => (
              <ScheduleBox
                key={idx}
                nickname={item.nickname}
                snapType={item.snapType}
                headCount={item.headCount}
                time={item.time}
                place={item.place}
                requirement={item.requirement}
                idx={idx}
                id={item.id}
              />
            ))}
          </ScheduleContainer>
        </ReservationContainer>
        <Title>
          새로 들어온 <Highlight>촬영 요청</Highlight>이 있어요
          <Arrow src={arrow} />
        </Title>
        {mockData2.map((item, idx) => (
          <UpcomingSchedule
            key={idx}
            nickname={item.nickname}
            snapType={item.snapType}
            headCount={item.headCount}
            time={item.time}
            place={item.place}
            requirement={item.requirement}
            date={item.date}
            num={item.num}
            id={item.id}
          />
        ))}
        <Title2>
          곧 돌아오는 <Highlight>촬영 일정</Highlight>이 있어요
          <Arrow src={arrow} />
        </Title2>
        {mockData2.map((item, idx) => (
          <UpcomingSchedule
            key={idx}
            nickname={item.nickname}
            snapType={item.snapType}
            headCount={item.headCount}
            time={item.time}
            place={item.place}
            requirement={item.requirement}
            date={item.date}
            num={item.num}
            id={item.id}
          />
        ))}
      </Container>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.img`
  width: 0.6rem;
  margin-left: 0.4rem;
`;

const Highlight = styled.span`
  color: #3c3aac;
`;

const Container = styled.div`
  width: 100%;
  max-width: 66rem;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.5rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-left: 1.2rem;
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

const Title2 = styled(Title)`
  margin-top: 5rem;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  padding-top: 1rem;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SelectedDate = styled.h2`
  font-size: 1.2rem;
  padding-left: 1.4rem;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ReservationContainer = styled.div`
  display: flex;
  margin-bottom: 7rem;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
`;

export default Reservation;
