import React from "react";
import { styled } from "styled-components";
import MySnapBox from "./MySnapBox";
const MySnaps = () => {
  return (
    <Wrapper>
      <GridBox>
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
        <MySnapBox />
      </GridBox>
    </Wrapper>
  );
};

export default MySnaps;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    //모바일
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-rows: repeat(4, 1fr);

  row-gap: 64px;
  column-gap: 132px;
  @media (max-width: 768px) {
    //모바일
    row-gap: 23px;
    column-gap: 11px;
  }
`;

const Wrapper = styled.div`
  max-width: 1028px;
  width: 95%;
  margin: 0 auto;
  margin-top: 103px;

  @media (max-width: 768px) {
    //모바일
    width: 100%;
    margin-top: 42px;
  }
`;
