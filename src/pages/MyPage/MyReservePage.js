import React from "react";
import ReservationList from "../../components/Reservation/ReservationList";
import { styled } from "styled-components";

const MyReservePage = () => {
  return (
    <div>
      <Wrapper>
        <div className="container">
          <ReservationList />
        </div>
      </Wrapper>
    </div>
  );
};

export default MyReservePage;

const Wrapper = styled.div`
  .container {
    margin-top: 94px;
    @media (max-width: 768px) {
      margin-top: 23px;
    }
  }
`;
