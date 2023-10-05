import React from "react";
import { styled } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RecommendBox from "../../components/search/RecommendBox";
import right from "../../assets/search/ic_right.png";
import left from "../../assets/search/ic_left.png";

const responsive = {
  0: {
    items: 2,
  },
  374: {
    items: 3,
  },
  768: {
    items: 2,
  },
  1200: {
    items: 3,
  },
};

const RecommendSection = () => {

  const renderPrevButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={left} className="prev-button" />;
  };

  const renderNextButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={right} className="next-button" />;
  };

  return (
    <Wrapper>
      <Title>이 사진작가는 어떠세요?</Title>
      <RecommendList>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            dotsDisabled={true}
            responsive={responsive}
            duration={400}
            startIndex={1}
            mouseDragEnabled={true}
            className="custom-carousel"
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          >
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
            <RecommendBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="한빛나라"
              star="4.7"
              price="130,000"
              review="238"
            />
          </AliceCarousel>
        </RecommendList>
    </Wrapper>
  );
};

export default RecommendSection;

const Wrapper = styled.div`
  width: 75%;
  max-width: 1048px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.div`
  display: flex;
  /* width: 1050px; */
  width: 100%;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.1rem;
  font-weight: 700;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.063rem;
    margin-bottom: 0.75rem;
    width: 21.875rem;
  }
`;

const RecommendList = styled.div`
  .alice-carousel__dots {
    display: none !important;
  }

  .jwAHne {
    display: flex;
    align-items: center;
  }

  .prev-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 170px;
    left: -20px;
  }

  .next-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 170px;
    right: 10px;
  }

  .alice-carousel__stage-item {
    padding: 0 0.3rem;
  }

  /* 모바일에서의 스타일 */
  @media (max-width: 768px) {
    .prev-button {
      width: 20px;
      height: 20px;
      left: 0px;
      top: 55px;
    }

    .next-button {
      width: 20px;
      height: 20px;
      right: 0px;
      top: 55px;
    }
  }
`;