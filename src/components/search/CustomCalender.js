import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { enUS } from "date-fns/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import previousarrow from "../../assets/search/previousarrow.png";
import nextarrow from "../../assets/search/nextarrow.png";
import styled from "styled-components";

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

function CustomCalender() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <StyledCalendar>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
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
              x
            >
              <img src={nextarrow} alt="Next Month" />
            </div>
          </div>
        )}
      />
    </StyledCalendar>
  );
}

export default CustomCalender;

const StyledCalendar = styled.div`
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0;
  }
  .react-datepicker {
    border: none;
  }
  .react-datepicker__header {
    background-color: white;
    border: 0;
  }

  .month-day {
    color: var(--black, #060606);
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  .react-datepicker__day-names {
    color: #000;
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  .react-datepicker__day-name {
    @media (max-width: 768px) {
      width: 2.5rem;
      margin: 0.1rem 0.4rem;
    }
  }

  .react-datepicker__day {
    color: #616161;
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 15px;
      width: 2.5rem;
      margin: 0.1rem 0.4rem;
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
      font-size: 15px;
    }
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    color: var(--lesswhite, #f6f6f6);
    text-align: center;

    /* web_r16 */
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border-radius: 4px;
    background: var(--main-font-color, #3c3aac);
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  .react-datepicker__day--in-selecting-range {
    background: #b1b0ef;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  .customHeaderContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin-bottom: 2.5rem;
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