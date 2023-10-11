import styled from "styled-components";
import LayOut from "../../components/common/LayOut";
import ReservationContainer from "../../components/Photographers/Reservation/ReservationContainer";
import RequestContainer from "../../components/Photographers/Reservation/RequestContainer";
import UpcomingContainer from "../../components/Photographers/Reservation/UpcomingContainer";
import { getAllReservation } from "../../api/plan";
import { useState, useEffect } from "react";

const Reservation = () => {
  const [data, setData] = useState();

  // 예약 & 신청 내역
  const getReservation = async () => {
    try {
      const reservationData = await getAllReservation();
      setData(reservationData);
      console.log("이거!!", reservationData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);

  const today = new Date();

  // 오늘 날짜와 같거나 이후 데이터만 보이도록
  const filteredData =
    data &&
    data.filter((el) => {
      const planDate = new Date(el.planDate);
      const planTime = new Date(el.planTime);

      // 날짜 비교
      const sameDate =
        planDate.getFullYear() === today.getFullYear() &&
        planDate.getMonth() === today.getMonth() &&
        planDate.getDate() === today.getDate();

      // 같은 날짜일 때 시간 비교
      if (sameDate) {
        return planTime;
      } else {
        return planDate >= today;
      }
    });

  return (
    <LayOut>
      <Container>
        {data && (
          <>
            <ReservationContainer data={data} />
            <RequestContainer
              request={filteredData.filter((el) => el.status === "REQUEST")}
            />
            <UpcomingContainer
              reservation={filteredData.filter(
                (el) => el.status === "RESERVED"
              )}
            />
          </>
        )}
      </Container>
    </LayOut>
  );
};

const Container = styled.div`
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

export default Reservation;
