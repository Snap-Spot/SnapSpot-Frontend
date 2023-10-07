import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import MainSlider from "../../components/Main/MainSlider";
import RecommendSection from "../../components/Main/RecommendSection";
import Main_Logo from "../../assets/main/main_logo.png";
import Header from "../../components/common/Header";

const MainPage = () => {
  // 캐러셀 관련 데이터
  let mainData = [
    {
      id: 0,
      title: "지금 뜨는 사진작가",
      type: "photographer",
      keyword: { sort: "SCORE" },
    }, // 별점 높은 순
    {
      id: 1,
      title: "제주도에서 활동하는 작가",
      type: "keyword",
      keyword: "제주",
    }, // 제주도로 검색
    {
      id: 2,
      title: "서울에서 활동하는 작가",
      type: "keyword",
      keyword: "서울",
    }, // 서울로 검색
    {
      id: 3,
      title: "다양한 스냅사진들을 찍어보아요",
      type: "snap",
      keyword: "special",
    }, // special
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <MainSlider />
        <MainDiv>
          <img src={Main_Logo} alt="snap-spot" />
        </MainDiv>
        {mainData.map((data, index) => {
          return <RecommendSection info={data} key={index} />;
        })}
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  /* width: 1050px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* width: 95%; */
  }
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    width: 50%;
  }
`;
