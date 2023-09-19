import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import { RequestData } from "../../components/Photographers/Reservation/MockData/requestData";
import LayOut from "../../components/common/LayOut";
import { getAllReservation } from "../../api/plan";
import { useState, useEffect } from "react";

const RequestList = () => {
  const [requestData, setRequestData] = useState();

  useEffect(() => {
    setRequestData(getAllReservation());
  }, []);

  return (
    <LayOut>
      <RequestContainer>
        <Title>스냅 사진 촬영 요청 목록</Title>
        {requestData.request.map((item, idx) => (
          <UpcomingSchedule
            key={idx}
            // nickname={item.nickname}
            snapType={item.category}
            headCount={item.headCount}
            // time={item.time}
            place={item.wishPlace}
            requirement={item.request}
            date={item.planDate}
            // num={item.num}
            id={item.id}
            btn_text="예약신청"
          />
        ))}
      </RequestContainer>
    </LayOut>
  );
};

const RequestContainer = styled.div`
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

export default RequestList;
