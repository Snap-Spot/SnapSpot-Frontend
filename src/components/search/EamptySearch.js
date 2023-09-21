import { React } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

import RecommendBox from "./RecommendBox";

import glass from "../../assets/search/glass.png";
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

const EamptySearch = ({ data }) => {
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
      <EmptySection>
        <img src={glass} /> 검색된 정보가 없습니다.
      </EmptySection>
      <div>
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
            {data.map((item) => (
              <RecommendBox
                image={item.image}
                tags={item.tags}
                photographer={item.nickname}
                star={item.averageScore}
                price={item.lowestPay}
                review={item.totalReview}
              />
            ))}
          </AliceCarousel>
        </RecommendList>
      </div>
    </Wrapper>
  );
};

export default EamptySearch;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1048px;
`;

const EmptySection = styled.div`
  display: flex;
  height: 17rem;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    height: 17.25rem;
  }

  img {
    width: 3.75rem;
    height: 3.75rem;
    margin-bottom: 3.75rem;

    @media (max-width: 768px) {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.063rem;
    margin-bottom: 0.75rem;
    width: 100%;
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
    .alice-carousel__stage-item {
      /* min-width: 130px; */
    }
  }
`;
