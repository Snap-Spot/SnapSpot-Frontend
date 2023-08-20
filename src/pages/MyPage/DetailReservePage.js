import React from "react";
import DetailedItem from "../../components/Mypage-User/Reservation/DetailedItem";
import { styled } from "styled-components";

const DetailReservePage = () => {
  return (
    <div>
      <Wrapper>
        <div className="container">
          <DetailedItem />
        </div>
      </Wrapper>
    </div>
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
