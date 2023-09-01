import React from "react";
import { styled } from "styled-components";
import SpotBox from "./SpotBox";
const SpotList = () => {
  return (
    <Wrapper>
      <GridBox>
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
        <SpotBox />
      </GridBox>
    </Wrapper>
  );
};

export default SpotList;

const GridBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  row-gap: 16px;
  column-gap: 14px;
  @media (max-width: 768px) {
    //모바일
    row-gap: 5px;
    column-gap: 9px;
  }
`;

const Wrapper = styled.div`
  max-width: 1001px;
  width: 95%;
  margin-top: 71px;
  @media (max-width: 768px) {
    //모바일
    width: 100%;
    margin-top: 32px;
  }
`;
