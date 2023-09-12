import styled from "styled-components";
import ScheduleDetail from "../../components/Photographers/ReservationDetail/ScheduleDetail";
import LayOut from "../../components/common/LayOut";

const ReservationDetail = () => {
  return (
    <LayOut>
      <Container>
        <Title>스냅사진 예약 상세내역</Title>
        <ScheduleDetail
          nickname="kui01"
          reservationNum="01234567812423"
          time="12:30 ~ 14:30"
          place="뚝섬유원지"
          requirement="편안한 분위기에서 촬영하고 싶어요!"
          date="2023.05.16.화"
        />
      </Container>
    </LayOut>
  );
};

const Container = styled.div`
  width: 75%;
  max-width: 1052px;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 1rem;
    margin-left: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.5rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
    font-size: 18px;
  }
`;

export default ReservationDetail;
