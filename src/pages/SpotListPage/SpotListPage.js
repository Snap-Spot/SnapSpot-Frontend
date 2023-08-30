import React from "react";
import { styled } from "styled-components";
import SpotList from "../../components/SpotList/SpotList";
import Header from "../../components/common/Header";

const SpotListPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="title">다른 사람들은 어떤 사진을 찍었을까요?</div>
        <div className="subtitle">베스트 스냅사진들을 모았어요</div>
        <div className="mb-title">베스트 스냅사진 리스트</div>
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
    color: var(--black, #060606);
    font-size: 16px;
    font-weight: 700;
    @media (min-width: 768px) {
      //모바일
      display: none;
    }
  }
`;
