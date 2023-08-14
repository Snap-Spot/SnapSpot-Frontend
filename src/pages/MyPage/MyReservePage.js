import React from "react";
import Header from "../../components/common/Header";
import ReservationList from "../../components/common/Reservation/ReservationList";
import { styled } from "styled-components";

const MyReservePage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <div className="title">스냅 예약 내역</div>
        <div className="dropdown"></div>
        <div className="container">
          <ReservationList />
        </div>
      </Wrapper>
    </div>
  );
};

export default MyReservePage;

const Wrapper = styled.div``;
