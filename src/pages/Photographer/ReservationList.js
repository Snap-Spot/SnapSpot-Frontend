import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographer/Reservation/UpcomingSchedule";

const ReservationList = () => {
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
      <ReservationContainer>
        <Title>스냅 사진 예약 목록</Title>
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
      </ReservationContainer>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReservationContainer = styled.div`
  width: 100%;
  max-width: 1052px;
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
  margin-bottom: 2.3rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

export default ReservationList;
