import React from "react";
import { styled } from "styled-components";
import SpotList from "../../components/SpotList/SpotList";
import Header from "../../components/common/Header";

const SpotListPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="title">베스트 스냅 명소를 추천해요</div>
        <div className="subtitle">스냅사진 대표 명소를 모았어요</div>
        <div className="mb-title">스냅사진 대표 명소를 모았어요</div>
        <SpotList />
      </Wrapper>
    </>
  );
};

export default SpotListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }
  margin: 0px auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    margin-top: 17px;
  }

  .title {
    width: 100%;
    color: #060606;
    font-size: 32px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      display: none;
    }
  }

  .subtitle {
    width: 100%;
    color: #3c3aac;
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      display: none;
    }
  }

  .mb-title {
    width: 100%;
    color: #3c3aac;
    font-size: 16px;
    font-weight: 700;
    @media (min-width: 768px) {
      //모바일
      display: none;
    }
  }
`;
