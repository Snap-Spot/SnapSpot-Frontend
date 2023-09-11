import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import { RequestData } from "../../components/Photographers/Reservation/MockData/requestData";
import LayOut from "../../components/common/LayOut";

const RequestList = () => {
  return (
    <LayOut>
      <RequestContainer>
        <Title>스냅 사진 촬영 요청 목록</Title>
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
