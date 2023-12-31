import styled from "styled-components";
import ScheduleDetail from "../../components/Photographers/ReservationDetail/ScheduleDetail";
import LayOut from "../../components/common/LayOut";
import { getMyReservation } from "../../api/plan";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api/review";

const ReservationDetail = () => {
  const [reservation, setReservation] = useState("");
  const [review, setReview] = useState([]);
  const { planId } = useParams();
  const [change, setChange] = useState(0);

  const getReservationDetail = async () => {
    try {
      const data = await getMyReservation(planId);
      setReservation(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getReview = async () => {
    try {
      const data = await getReviews();
      setReview(data.filter((el) => el.plan.planId === planId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReservationDetail();
    getReview();
  }, [change]);

  return (
    <LayOut>
      <Container>
        <Title>스냅사진 예약 상세내역</Title>
        {reservation && (
          <ScheduleDetail
            nickname={reservation.customer.nickname}
            reservationNum={reservation.planId}
            time={reservation.time || 0}
            place={reservation.wishPlace}
            requirement={reservation.request}
            date={reservation.planDate.slice(0, 10)}
            profile={reservation.customer.profile}
            status={reservation.status}
            price={reservation.price}
            placeAddress={reservation.placeAddress}
            setChange={setChange}
            change={change}
            messages={reservation.messages}
            review={review}
          />
        )}
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
    margin-top: 0rem;
  }
`;

export default ReservationDetail;
