import styled from "styled-components";
import Calendar from "./Calendar";
import ScheduleBox from "./ScheduleBox";
import { useState } from "react";
import { category } from "../../common/category";

const ReservationContainer = ({ data }) => {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentDay = date.getDay();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const [selectDay, setSelectDay] = useState(currentDay);

  // 해당 날짜에 일치하는 일정 보여주기
  let filteredData = data.filter((el) => {
    let newDate = new Date(el.planDate);
    console.log(selectDate);
    return (
      newDate.getMonth() === selectMonth && newDate.getDate() === selectDate
    );
  });

  return (
    <>
      <Title>스냅사진 예약 내역</Title>
      <Container>
        <Calendar
          setSelect={setSelectDate}
          select={selectDate}
          setMonth={setSelectMonth}
          month={selectMonth}
          setSelectDay={setSelectDay}
          selectDay={selectDay}
        />
        <ScheduleContainer>
          <SelectedDate>
            {selectMonth + 1}월 {selectDate}일 {selectDay}요일
          </SelectedDate>
          {filteredData &&
            filteredData.map((item, idx) => (
              <ScheduleBox
                key={idx}
                nickname={item.customer.nickname}
                snapType={category.filter((el) => el.key === item.category)}
                headCount={item.people}
                time={item.time || 0}
                place={item.wishPlace}
                requirement={item.request}
                idx={idx}
                planId={item.planId}
                profile={item.customer.profile}
                status={item.status}
              />
            ))}
        </ScheduleContainer>
      </Container>
    </>
  );
};

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.3rem;
  align-self: flex-start;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 0rem;
  }
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  padding-top: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0.5rem;
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

const Container = styled.div`
  /* display: flex;
  margin-bottom: 5rem;
  justify-content: space-around;
  width: 100%; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  margin-bottom: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
`;

export default ReservationContainer;
