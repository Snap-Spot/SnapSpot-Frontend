import React from "react";
import { styled } from "styled-components";
import MainSlider from "../../components/Main/MainSlider";
import RecommendSection from "../../components/Main/RecommendSection";
import Main_Logo from "../../assets/main/main_logo.png";
import Header from "../../components/common/Header";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainSlider />
      <MainDiv>
        <MainLogo src={Main_Logo} alt="snap-spot" />
      </MainDiv>
      <RecommendSection />
      <RecommendSection />
      <RecommendSection />
    </Wrapper>
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
`;

const MainLogo = styled.img`
  width: 50%;
`;
