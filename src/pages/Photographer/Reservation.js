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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);

  return (
    <LayOut>
      <Container>
        {data && (
          <>
            <ReservationContainer data={data.reserved} />
            <RequestContainer request={data.request} />
            <UpcomingContainer reservation={data.reserved} />
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
