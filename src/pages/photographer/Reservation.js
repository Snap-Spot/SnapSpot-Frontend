import styled from "styled-components";
import ScheduleBox from "../../components/Photograph/ScheduleBox";
import UpcomingSchedule from "../../components/Photograph/UpcomingSchedule";
import footer from "../../assets/photograph/Footer.png";
import Calendar from "../../components/Photograph/Calendar";
import { useState, useEffect } from "react";

const Reservation = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const [select, setSelect] = useState(currentDate);
  return (
    <>
      <Center>
        <Container>
          <Title>스냅사진 예약 내역</Title>
          <Row>
            <Calendar setSelect={setSelect} select={select} />
            <Schedule>
              <SelectedDate>5월 16일 화요일</SelectedDate>
              <ScheduleBox
                nickname="kui01"
                snapType="우정스냅"
                headCount="4"
                time="12:30 ~ 14:30"
                place="뚝섬유원지"
                requirement="편안한 분위기에서 촬영하고 싶어요!"
                idx="0"
              />
              <ScheduleBox
                nickname="kui01"
                snapType="우정스냅"
                headCount="4"
                time="12:30 ~ 14:30"
                place="뚝섬유원지"
                requirement="편안한 분위기에서 촬영하고 싶어요!"
                idx="1"
              />
            </Schedule>
          </Row>
          <Title>촬영날이 곧 다가와요!</Title>
          <UpcomingSchedule
            nickname="kui01"
            snapType="우정스냅"
            headCount="4"
            time="12:30 ~ 14:30"
            place="뚝섬유원지"
            requirement="편안한 분위기에서 촬영하고 싶어요!"
            date="2023.07.23(일)"
            num="0123920293848"
          />
          <UpcomingSchedule
            nickname="kui01"
            snapType="우정스냅"
            headCount="4"
            time="12:30 ~ 14:30"
            place="뚝섬유원지"
            requirement="편안한 분위기에서 촬영하고 싶어요!"
            date="2023.07.23(일)"
            num="0123920293848"
          />
          <UpcomingSchedule
            nickname="kui01"
            snapType="우정스냅"
            headCount="4"
            time="12:30 ~ 14:30"
            place="뚝섬유원지"
            requirement="편안한 분위기에서 촬영하고 싶어요!"
            date="2023.07.23(일)"
            num="0123920293848"
          />
        </Container>
      </Center>
      <Footer src={footer} />
    </>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 66rem;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.img`
  width: 100vw;
  vertical-align: bottom;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  align-self: flex-start;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  padding-top: 1rem;
  width: 40%;
`;

const SelectedDate = styled.h2`
  font-size: 1.2rem;
  padding-left: 1.4rem;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 7rem;
  justify-content: space-around;
  width: 100%;
`;

export default Reservation;
