import React from "react";
import { styled } from "styled-components";

const SpotBox = () => {
  return (
    <Wrapper>
      <div className="img">
        <img className="spotImg" src="" alt=""></img>
      </div>
    </Wrapper>
  );
};

export default SpotBox;
const Wrapper = styled.div`
  width: 100%;
  min-height: 264px;
  height: 10vh;
  @media (max-width: 768px) {
    //모바일
    min-height: 150px;
    height: 10vh;

    @media (max-width: 400px) {
      min-height: 87.897px;
      height: 10vh;
      border-radius: 9px;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 32px;

  .img {
    border-radius: 32px;
    width: 100%;
    height: 100%;
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 768px) {
      //모바일
      border-radius: 9px;
    }
  }
`;
