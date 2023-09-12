import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import { RequestData } from "../../components/Photographers/Reservation/MockData/requestData";
import LayOut from "../../components/common/LayOut";

const ReservationList = () => {
  return (
    <LayOut>
      <ReservationContainer>
        <Title>스냅 사진 예약 목록</Title>
        {RequestData.map((item, idx) => (
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
            btn_text="예약완료"
          />
        ))}
      </ReservationContainer>
    </LayOut>
  );
};

const ReservationContainer = styled.div`
  width: 100%;
  max-width: 1052px;
  width: 75%;
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
