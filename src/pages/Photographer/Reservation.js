import styled from "styled-components";
import arrow from "../../assets/photograph/arrow.png";
import ScheduleBox from "../../components/Photographers/Reservation/ScheduleBox";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import Calendar from "../../components/Photographers/Reservation/Calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationData } from "../../components/Photographers/Reservation/MockData/reservationData";
import LayOut from "../../components/common/LayOut";

const Reservation = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const navigate = useNavigate();

  return (
    <LayOut>
      <Container>
        <Title>스냅사진 예약 내역</Title>
        <ReservationContainer>
          <Calendar
            setSelect={setSelectDate}
            select={selectDate}
            setMonth={setSelectMonth}
            month={selectMonth}
          />
          <ScheduleContainer>
            <SelectedDate>
              {selectMonth + 1}월 {selectDate}일 화요일
            </SelectedDate>
            {ReservationData.map((item, idx) => (
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
        <Title onClick={() => navigate("/photographer/request")}>
          새로 들어온 <Highlight>촬영 요청</Highlight>이 있어요
          <Arrow src={arrow} />
        </Title>
        {ReservationData.map((item, idx) => (
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
        <Title2 onClick={() => navigate("/photographer/reservationlist")}>
          곧 돌아오는 <Highlight>촬영 일정</Highlight>이 있어요
          <Arrow src={arrow} />
        </Title2>
        {ReservationData.map((item, idx) => (
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
    </LayOut>
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
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

const Title2 = styled(Title)`
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  padding-top: 1rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 93%;
    padding-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const SelectedDate = styled.h2`
  font-size: 1.2rem;
  padding-left: 1.4rem;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ReservationContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
`;

export default Reservation;
