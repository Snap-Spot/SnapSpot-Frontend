import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Dropdown from "./Dropdown";
import MiniCalendar from "./MiniCalendar";
import calendar from "../../../assets/mypage/modals/calendar.png";
import { putPlanChange } from "../../../api/plan";
const ChangeModal = ({ planId, photographerName, category, date }) => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false); //수정
  const openCalendar = () => {
    setIsOpenCalendar(true);
  };
  const options = [
    {
      list: ["날씨가 안 좋아요", "개인 일정", "개인 변심", "기타"],
      title: "이유를 선택하세요",
      width: "224",
      mb_width: "159",
    },
    {
      list: [
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
      ],
      title: "9:00",
      width: "124",
      mb_width: "83",
    },
    {
      list: ["1명", "2명", "3명", "4명", "5명+"],
      title: "1명",
      width: "102",
      mb_width: "69",
    },
  ];

  useEffect(() => {
    //기존예약일로 날짜 초기 설정
    setPrevDate(new Date(date));
    formatDate(new Date(date));
  }, []);
  const [people, setPeople] = useState(1);
  const [time, setTime] = useState("09:00");
  const [reason, setReason] = useState("");
  const handlePeople = (text) => {
    setPeople(Number(text.substr(0, 1)));
  };
  const handleTime = (text) => {
    setTime(String(text).padStart(5, "0"));
  };
  const handleReason = (text) => {
    setReason(text);
  };
  const handleSubmit = async () => {
    if (reason !== "") {
      try {
        const res = await putPlanChange(
          planId,
          people,
          reason,
          time,
          localeDateTime
        );

        if (res.status === 200) {
          alert("예약을 변경했습니다.");
          window.location.reload();
        }
      } catch (err) {
        alert("에러");
      }
    } else {
      alert("변경 이유를 선택해주세요.");
    }
  };
  const formatDate = (date) => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    let dayOfWeek = week[date.getDay() % 7];

    setStringdate(
      year + "년 " + month + "월 " + day + "일 " + dayOfWeek + "요일"
    );

    setLocaleDateTime(
      year +
        "-" +
        month.padStart(2, "0") +
        "-" +
        day.padStart(2, "0") +
        "T00:00:00"
    );
  };

  const [prevDate, setPrevDate] = useState();
  const [stringDate, setStringdate] = useState("");
  const [localeDateTime, setLocaleDateTime] = useState("");
  return (
    <Wrapper>
      <div className="subtitle">
        원하시는 세부사항을 변경한 후, 사진작가에게 예약 변경을 요청하여
        변경사항을 확정하실 수 있습니다.
      </div>
      <div className="subject">예약 세부 정보</div>
      <div className="content">
        <div className="name">{photographerName} 작가</div>
        <div className="category">&nbsp;&nbsp;|&nbsp;&nbsp;{category}</div>
      </div>

      <div className="subject">변경하시는 이유가 무엇입니까?</div>
      <div className="content">
        <Dropdown options={options[0]} handleTarget={handleReason} />
      </div>

      <div className="subject">날짜</div>
      <div className="content">
        <>
          {isOpenCalendar ? (
            <Open>
              <MiniCalendar
                setIsOpenCalendar={setIsOpenCalendar}
                setStringdate={setStringdate}
                setPrevDate={setPrevDate}
                prevDate={prevDate}
                setLocaleDateTime={setLocaleDateTime}
              />
            </Open>
          ) : (
            <Close onClick={openCalendar}>
              {stringDate}
              <img src={calendar} alt="" />
            </Close>
          )}
        </>
      </div>

      <div className="subject">시간</div>
      <div className="content">
        <Dropdown options={options[1]} handleTarget={handleTime} />
      </div>

      <div className="subject">인원</div>
      <div className="content">
        <Dropdown options={options[2]} handleTarget={handlePeople} />
      </div>

      <div className="btn" onClick={handleSubmit}>
        변경하기
      </div>
    </Wrapper>
  );
};

export default ChangeModal;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .subtitle {
    width: 100%;
    margin-top: -21px;
    margin-bottom: 40px;
    font-size: 16px;
    @media (max-width: 768px) {
      //모바일
      font-size: 10px;
      width: 240px;
      margin-bottom: 20px;
    }
  }

  .subject {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 768px) {
      //모바일
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 7.77px;
    }
  }

  .content {
    height: 45px;
    margin-bottom: 20px;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      height: 34px;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 11.66px;
    }
  }

  .category {
    color: var(--darkgrey, #777);
  }
  .btn {
    margin: 40px auto 0;
    border-radius: 32px;
    background: #a6b9ff;
    display: flex;
    width: 240px;
    height: 60px;

    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 768px) {
      //모바일
      margin: 24px auto 0;
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  }
`;

const Open = styled.div``;
const Close = styled.div`
  display: flex;
  width: 268px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--darkgrey, #777);

  font-weight: 500;
  @media (max-width: 768px) {
    //모바일
    width: 190px;
    height: 33.025px;
    font-size: 14px;
    gap: 8px;
    flex-shrink: 0;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      //모바일
      width: 16px;
      height: 16px;
    }
  }
`;
