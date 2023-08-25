import { styled } from "styled-components";
import prev from "../../../assets/photograph/prev_btn.png";
import next from "../../../assets/photograph/next_btn.png";
import { useState } from "react";

const Calendar = ({ setSelect, select }) => {
  const date = new Date();
  const current_year = date.getFullYear();
  const current_month = date.getMonth();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const [month, setMonth] = useState(current_month);

  // 현재 월의 첫 날짜를 가져옴
  const firstDayOfMonth = new Date(current_year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 현재 월의 마지막 날짜를 가져옴
  const lastDayOfMonth = new Date(current_year, month + 1, 0);

  const daysInMonth = [];

  // 첫 날부터 마지막 날까지의 날짜를 순회하며 일(day)을 추출하여 배열에 추가
  for (
    let date = firstDayOfMonth;
    date <= lastDayOfMonth;
    date.setDate(date.getDate() + 1)
  ) {
    const dayOfMonth = date.getDate(); // 해당 월의 날짜 (1 ~ 31)
    daysInMonth.push(dayOfMonth);
  }

  const daysInMonthGrid = [];
  let currentWeek = [];

  // 이전 달의 마지막 날짜를 가져옴
  const lastDayOfPrevMonth = new Date(current_year, month, 0);
  const lastDayPrevMonth = lastDayOfPrevMonth.getDate();

  // 빈 날짜 칸 채우기 (첫 주)
  for (let i = 0; i < firstDayOfWeek; i++) {
    const day = lastDayPrevMonth - firstDayOfWeek + i + 1;
    currentWeek.push(day);
  }

  // 날짜를 그리드에 추가
  daysInMonth.forEach((day) => {
    currentWeek.push(day);

    // 한 주가 완성되었을 때, 그리드에 추가하고 초기화
    if (currentWeek.length === 7) {
      daysInMonthGrid.push(currentWeek);
      currentWeek = [];
    }
  });

  // 남은 날짜 칸 채우기 (마지막 주)
  let i = 0;
  while (currentWeek.length < 7) {
    const day = i + 1;
    currentWeek.push(day);
    i++;
  }
  daysInMonthGrid.push(currentWeek);

  function IsPrevMonth(day) {
    return day >= 25 ? true : false;
  }

  function IsNextMonth(day) {
    return day < 25 ? true : false;
  }

  return (
    <Center>
      <Container>
        <Row>
          <PrevBtn src={prev} onClick={() => setMonth(month - 1)} />
          <CurrentDate>
            {current_year}년 {month + 1}월
          </CurrentDate>
          <NextBtn src={next} onClick={() => setMonth(month + 1)} />
        </Row>
        <Row2>
          {week.map((el, i) => (
            <Week key={i}>{el}</Week>
          ))}
        </Row2>
        <Line />
        {daysInMonthGrid.map((week, weekIndex) => (
          <Row3 key={weekIndex}>
            {week.map((day, dayIndex) => {
              if (
                (weekIndex === 0 && IsPrevMonth(day)) ||
                (weekIndex === daysInMonthGrid.length - 1 && IsNextMonth(day))
              ) {
                return (
                  <Day2 key={dayIndex} cur="true">
                    {day}
                  </Day2>
                );
              } else {
                return (
                  <Day
                    key={dayIndex}
                    onClick={() => setSelect(day)}
                    isSelect={select === day ? true : false}
                  >
                    {day}
                  </Day>
                );
              }
            })}
          </Row3>
        ))}
      </Container>
    </Center>
  );
};

const Day = styled.div`
  color: ${(props) =>
    props.cur === "true"
      ? "rgba(129, 129, 129, 0.40)"
      : props.isSelect
      ? "white"
      : "#000"};
  cursor: pointer;
  background-color: ${(props) => (props.isSelect ? "#3C3AAC" : "white")};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Day2 = styled(Day)`
  color: ${(props) =>
    props.cur === "true" ? "rgba(129, 129, 129, 0.40)" : "#000"};
`;

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #3c3aac;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 1px;
  }
`;

const Week = styled.p`
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Center = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 85%;

    margin-bottom: 2.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const PrevBtn = styled.img`
  width: 12px;
  height: 20px;
  margin-right: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10px;
    height: 16px;
  }
`;

const Row2 = styled(Row)`
  justify-content: space-around;
  margin-bottom: 0;
`;

const Row3 = styled(Row2)`
  padding-top: 1rem;
  padding-bottom: 2em;

  @media (max-width: 768px) {
    padding-top: 0.9rem;
    padding-bottom: 1em;
  }
`;

const NextBtn = styled(PrevBtn)`
  margin-left: 1rem;
`;

const CurrentDate = styled.p`
  color: #3c3aac;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Calendar;
