import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import { RequestData } from "../../components/Photographers/Reservation/MockData/requestData";
import LayOut from "../../components/common/LayOut";
import { getAllReservation } from "../../api/plan";
import { useState, useEffect } from "react";

const ReservationList = () => {
  const [reservation, setReservation] = useState();

  useEffect(() => {
    setReservation(getAllReservation());
  }, []);

  return (
    <LayOut>
      <ReservationContainer>
        <Title>스냅 사진 예약 목록</Title>
        {reservation.reserved.map((item, idx) => (
          <UpcomingSchedule
            key={idx}
            // nickname={item.nickname}
            snapType={item.category}
            headCount={item.people}
            // time={item.time}
            place={item.wishPlace}
            requirement={item.request}
            date={item.planDate}
            // num={item.num}
            id={item.planId}
            btn_text="예약완료"
          />
        ))}
      </ReservationContainer>
    </LayOut>
  );
};

const ReservationContainer = styled.div`
  width: 75%;
  max-width: 1052px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.3rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

export default ReservationList;
