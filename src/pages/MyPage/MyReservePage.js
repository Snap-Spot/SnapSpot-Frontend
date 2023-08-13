import React from "react";
import Header from "../../components/common/Header";
import ReservationList from "../../components/common/Reservation/ReservationList";

const MyReservePage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <div className="title"></div>
        <div className="dropdown"></div>
        <div className="container">
          <ReservationList />
        </div>
      </Wrapper>
    </div>
  );
};

export default MyReservePage;
