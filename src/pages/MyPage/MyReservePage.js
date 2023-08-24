import React from "react";
import ReservationList from "../../components/Mypage-User/Reservation/ReservationList";
import { styled } from "styled-components";
import Header from "../../components/common/Header";

const MyReservePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <ReservationList />
        </div>
      </Wrapper>
    </>
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
