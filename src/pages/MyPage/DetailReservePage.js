import React from "react";
import DetailedItem from "../../components/Mypage-User/Reservation/DetailedItem";
import { styled } from "styled-components";
import Header from "../../components/common/Header";

const DetailReservePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <DetailedItem />
        </div>
      </Wrapper>
    </>
  );
};

export default DetailReservePage;

const Wrapper = styled.div`
  .container {
    margin-top: 94px;
    @media (max-width: 768px) {
      margin-top: 23px;
    }
  }
`;
