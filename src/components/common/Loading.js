import React from "react";
import styled, { keyframes } from "styled-components";
import LoadingImg from "../../assets/signup/loading.png";
import Header from "./Header";

function Loading() {
  return (
    <>
      <Header />
      <Div>
        <LoadingImage src={LoadingImg} alt="로딩 스피너" />
        <div style={{ marginTop: "20px" }}>Loading</div>
      </Div>
    </>
  );
}

export default Loading;

const Div = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* PC, 모바일 모두 가운데 정렬 */
  height: 100vh;
`;

const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  width: 15%;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
