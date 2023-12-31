import styled from "styled-components";
import cancel from "../../../assets/photograph/cancel.png";
import Filtering from "./Filtering";
import { postReservation } from "../../../api/plan";
import { useState } from "react";
import { category } from "../../common/category";

const ReservationModal = ({ setModalOpen, photographerId }) => {
  const type_option = [
    "커플스냅",
    "우정스냅",
    "졸업스냅",
    "웨딩스냅",
    "가족스냅",
  ];
  const head_count = ["1명", "2명", "3명", "4명", "5명+"];
  const [planDate, setPlanDate] = useState("");
  const [time, setTime] = useState();
  const [categories, setCategories] = useState("커플스냅");
  const [wishPlace, setWishPlace] = useState("");
  const [people, setPeople] = useState("1명");
  const [request, setRequest] = useState("");

  const postRequest = async (
    photographerId,
    planDate,
    time,
    category,
    people,
    wishPlace,
    request
  ) => {
    try {
      const data = await postReservation(
        photographerId,
        planDate,
        time,
        category,
        people,
        wishPlace,
        request
      );
      console.log(data);
      alert("성공적으로 예약되었습니다!");
      setModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCalendarInputChange = (e) => {
    setPlanDate(e.target.value); // calendarInput의 값을 상태에 저장
  };

  return (
    <>
      <Conatiner>
        <Header>
          <Title>예약하기</Title>
          <CancelIcon src={cancel} onClick={() => setModalOpen(false)} />
        </Header>
        <SubTitle>예약날짜</SubTitle>
        <CalendarInput
          type="date"
          value={planDate}
          onChange={handleCalendarInputChange}
        />
        <SubTitle>예약시간</SubTitle>
        <TimeInput
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <SubTitle>스냅사진 종류</SubTitle>
        <Filtering
          option={type_option}
          setSelect={setCategories}
          select={categories}
        />
        <SubTitle>인원</SubTitle>
        <Filtering
          option={head_count}
          short={true}
          setSelect={setPeople}
          select={people}
        />
        <SubTitle>위치</SubTitle>
        <LocationInput
          placeholder="스냅사진을 찍을 위치를 작성해주세요."
          value={wishPlace}
          onChange={(e) => setWishPlace(e.target.value)}
        />
        <SubTitle>요청사항</SubTitle>
        <RequestInput
          placeholder="요청사항을 작성해주세요."
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
        <BtnContainer>
          <CancelBtn onClick={() => setModalOpen(false)}>취소</CancelBtn>
          <ConfirmBtn
            onClick={() =>
              postRequest(
                +photographerId,
                planDate + "T00:00:00",
                time,
                category.filter((el) => el.label === categories)[0].key,
                +people[0],
                wishPlace,
                request
              )
            }
          >
            예약하기
          </ConfirmBtn>
        </BtnContainer>
      </Conatiner>
      <BG></BG>
    </>
  );
};

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const CancelBtn = styled.button`
  display: flex;
  width: 237px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  font-size: 20px;
  background: #e6e6e6;
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: black;

  @media (max-width: 768px) {
    width: 120px;
    height: 45px;
    border-radius: 15px;
    font-size: 14px;
    margin-right: 0.7rem;
    margin-left: 0.7rem;
  }
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #a6b9ff;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Title = styled.h2`
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CalendarInput = styled.input`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-size: 20px;
  outline: none;

  @media (max-width: 768px) {
    height: 38px;
    width: 170px;
    font-size: 16px;
  }
`;

const TimeInput = styled.input`
  width: 160px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-size: 20px;
  outline: none;

  @media (max-width: 768px) {
    height: 38px;
    width: 130px;
    font-size: 16px;
  }
`;

const LocationInput = styled.textarea`
  width: 96%;
  height: 100px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.9rem;
  padding-right: 0.6rem;
  padding-top: 1rem;
  font-size: 20px;
  outline: none;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 50px;
    padding-top: 0.8rem;
    padding-left: 0.7rem;
    width: 93%;
  }
`;

const RequestInput = styled(LocationInput)``;

const SubTitle = styled.h3`
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 1rem;
  }
`;

const BG = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 319vh;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 30%;
  z-index: 3;
`;

const Conatiner = styled.div`
  position: absolute;
  top: 14rem;
  display: flex;
  width: 40rem;
  padding: 50px 40px;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 4;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    /* width: 21rem; */
    width: 80%;
    padding: 10px 15px;
    padding-bottom: 25px;
    top: 7rem;
  }
`;

const CancelIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export default ReservationModal;
