import { styled } from "styled-components";
import prev from "../../../assets/photograph/prev_btn.png";
import next from "../../../assets/photograph/next_btn.png";
import dot from "../../../assets/photograph/dot.png";

const Calendar = ({
  setSelect,
  select,
  setMonth,
  month,
  setSelectDay,
  selectDay,
  planDates,
}) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 월의 첫 날짜를 가져옴
  const firstDayOfMonth = new Date(currentYear, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 현재 월의 마지막 날짜를 가져옴
  const lastDayOfMonth = new Date(currentYear, month + 1, 0);

  const daysInMonth = [];

  const selectedDate = new Date(currentYear, month, select);
  const selectedDayIndex = selectedDate.getDay(); // 0부터 6까지의 값 (일요일부터 토요일)

  // 선택한 날짜의 요일을 setSelectDay로 저장
  setSelectDay(week[selectedDayIndex]);

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
  const lastDayOfPrevMonth = new Date(currentYear, month, 0);
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
        <CalendarHeader>
          <PrevBtn src={prev} onClick={() => setMonth(month - 1)} />
          <CurrentDate>
            {currentYear}년 {month + 1}월
          </CurrentDate>
          <NextBtn src={next} onClick={() => setMonth(month + 1)} />
        </CalendarHeader>
        <WeekContainer>
          {week.map((el, i) => (
            <Week key={i}>{el}</Week>
          ))}
        </WeekContainer>
        <Line />
        {daysInMonthGrid.map((week, weekIndex) => (
          <DateContainer key={weekIndex}>
            {week.map((day, dayIndex) => {
              if (
                (weekIndex === 0 && IsPrevMonth(day)) ||
                (weekIndex === daysInMonthGrid.length - 1 && IsNextMonth(day))
              ) {
                return (
                  <RemainDate key={dayIndex} cur="true">
                    {day}
                  </RemainDate>
                );
              } else {
                const formattedDate = `${currentYear}-${month + 1}-${day
                  .toString()
                  .padStart(2, "0")}`;
                const showDot = planDates.includes(formattedDate);
                return (
                  <DayContainer>
                    <Day
                      key={dayIndex}
                      onClick={() => setSelect(day)}
                      isSelect={select === day ? true : false}
                    >
                      {day}
                    </Day>
                    {showDot && <Dot src={dot} />}
                  </DayContainer>
                );
              }
            })}
          </DateContainer>
        ))}
      </Container>
    </Center>
  );
};
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1.8rem;
`;

const Dot = styled.img`
  width: 0.4rem;
  margin-top: 0.2rem;
`;

const Day = styled.div`
  color: ${(props) =>
    props.cur === "true"
      ? "rgba(129, 129, 129, 0.40)"
      : props.isSelect
      ? "white"
      : "#000"};
  cursor: pointer;
  background-color: ${(props) => (props.isSelect ? "#3C3AAC" : "white")};
  width: 1.4rem;
  height: 1.3rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const RemainDate = styled(Day)`
  color: ${(props) =>
    props.cur === "true" ? "rgba(129, 129, 129, 0.40)" : "#000"};
  height: 1.8rem;
  display: flex;
  align-items: flex-start;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-right: 2.8rem;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 2.5rem;
    margin-right: 0;
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4rem;
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

const WeekContainer = styled(CalendarHeader)`
  justify-content: space-around;
  margin-bottom: 0;
`;

const DateContainer = styled(WeekContainer)`
  padding-top: 1rem;
  padding-bottom: 1.4rem;

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
