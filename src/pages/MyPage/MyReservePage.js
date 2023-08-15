import React from "react";
import Header from "../../components/common/Header";
import ReservationList from "../../components/common/Reservation/ReservationList";
import { styled } from "styled-components";

const MyReservePage = () => {
  return (
    <div>
      <Header />
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
      margin-top: 17px;
    }
  }
`;
