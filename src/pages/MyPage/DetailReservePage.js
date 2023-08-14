import React from "react";
import Header from "../../components/common/Header";
import DetailedItem from "../../components/common/Reservation/DetailedItem";
import { styled } from "styled-components";

const DetailReservePage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <div className="title"></div>
        <div className="container"></div>
        <DetailedItem />
      </Wrapper>
    </div>
  );
};

export default DetailReservePage;

const Wrapper = styled.div``;
