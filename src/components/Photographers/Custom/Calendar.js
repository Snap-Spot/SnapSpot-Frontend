import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import previousarrow from "../../../assets/search/previousarrow.png";
import nextarrow from "../../../assets/search/nextarrow.png";
import styled from "styled-components";
import { format } from "date-fns";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const customKoLocale = {
  ...ko,
  options: {
    ...ko.options,
    weekStartsOn: 1, // 월요일부터 시작
  },
  formatWeekdayShort: (i) => {
    // 요일을 한글로 변경
    const weekdays = ["월", "화", "수", "목", "금", "토", "일"];
    return weekdays[i];
  },
};

function Calender({ unableSchedules }) {
  let defaultval =
    unableSchedules &&
    Object.values(unableSchedules).map((el) => {
      const isoDate = new Date(el);
      return isoDate.toLocaleString("en-US", options);
    });
  const [selectedDates, setSelectedDates] = useState(defaultval || []); // 선택한 날짜 배열
  const [key, setKey] = useState(0);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  console.log(selectedDates);

  const toggleDateSelection = (date) => {
    // 이미 선택된 날짜인지 확인
    const isSelected = selectedDates.some(
      (selectedDate) => selectedDate.toDateString() === date.toDateString()
    );

    // 선택 여부에 따라 배열에 추가 또는 제거
    if (isSelected) {
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => selectedDate.toDateString() !== date.toDateString()
        )
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }

    setKey(key + 1);
  };

  // {selectedDates.map(
  //   (date) => format(date, "yyyy-MM-dd'T'HH:mm:ss") // "2023-10-06T00:00:00" 형식으로 포맷
  // )}

  return (
    <>
      <SubTitle>불가능한 날짜 선택</SubTitle>

      <StyledCalendar>
        <DatePicker
          key={key} // 키 값 변경으로 다시 렌더링
          onSelect={toggleDateSelection} // 선택한 날짜 추가 또는 제거
          selectsRange
          inline
          locale={customKoLocale}
          renderCustomHeader={({
            date,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div className="customHeaderContainer">
              <div
                className="btn_month btn_month-prev"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src={previousarrow} alt="Previous Month" />
              </div>
              <div className="month-day">
                {getYear(date)}.{months[getMonth(date)]}
              </div>

              <div
                className="btn_month btn_month-next"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <img src={nextarrow} alt="Next Month" />
              </div>
            </div>
          )}
          highlightDates={selectedDates}
        />
      </StyledCalendar>
    </>
  );
}

export default Calender;

const StyledCalendar = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .react-datepicker {
    border: none;
  }

  .react-datepicker__header {
    background-color: white;
    border: 0;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .month-day {
    color: var(--black, #060606);
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .react-datepicker__day-names {
    color: #000;
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .react-datepicker__day-name {
    width: 1.7rem;
    margin-right: 1rem;
    @media (max-width: 768px) {
      width: 2.2rem;
      margin: 0.1rem 0.4rem;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background: none;
  }

  .react-datepicker__day {
    color: #616161;
    text-align: center;
    width: 1.7rem;
    margin-right: 1rem;
    margin-top: 0.4rem;
    font-family: Noto Sans KR;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      width: 2.2rem;
      margin: 0.17rem 0.4rem;
      font-size: 1rem;
    }
  }
  .react-datepicker__day--outside-month {
    color: #b3b3b3;
  }
  .react-datepicker__day--weekend {
    color: #3c3aac;
  }

  .react-datepicker__day--outside-month.react-datepicker__day--weekend {
    color: var(--sub-color-2, #a6b9ff);
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    color: var(--lesswhite, #f6f6f6);
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    border-radius: 4px;
    background: #ff0000;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .react-datepicker__day--in-selecting-range {
    background: #b1b0ef;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  .react-datepicker__day--highlighted {
    background-color: #ff0000;
    color: white;
  }

  .customHeaderContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin-bottom: 1.3rem;
    background-color: white;

    border: none;
    @media (max-width: 768px) {
      margin-bottom: 0.3rem;
    }
  }
  img {
    width: 13px;
    height: 13px;
  }
`;

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
