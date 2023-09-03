import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Banner_Sample from "../../assets/main/banner2.png";
import Left_Arrow from "../../assets/main/main_arrow_left.png";
import Right_Arrow from "../../assets/main/main_arrow_right.png";

const items = [
  <div className="item" data-value="1">
    <img src={Banner_Sample} alt="배너 샘플" className="item-image" />
  </div>,
  <div className="item" data-value="2">
    <img src={Banner_Sample} alt="배너 샘플" className="item-image" />
  </div>,
  <div className="item" data-value="3">
    <img src={Banner_Sample} alt="배너 샘플" className="item-image" />
  </div>,
  <div className="item" data-value="4">
    <img src={Banner_Sample} alt="배너 샘플" className="item-image" />
  </div>,
  <div className="item" data-value="5">
    <img src={Banner_Sample} alt="배너 샘플" className="item-image" />
  </div>,
];

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}/${itemsCount}`;
};

const renderPrevButton = ({ isDisabled }) => {
  return <img src={Left_Arrow} className="prev-next-button" />;
};

const renderNextButton = ({ isDisabled }) => {
  return <img src={Right_Arrow} className="prev-next-button" />;
};

const MainSlider = () => {
  const percent = 0.16;
  const section = useRef(null);
  const [padding, setPadding] = useState(0);

  const syncState = () => {
    const { current } = section;
    if (current) {
      setPadding(current.offsetWidth * percent);
    }
  };

  useEffect(syncState, []);

  return (
    <Wrapper ref={section}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlay
        autoPlayInterval={5000}
        animationDuration={1000}
        animationType="slide"
        disableDotsControls
        items={items}
        paddingLeft={window.innerWidth < 768 ? 0 : padding}
        paddingRight={window.innerWidth < 768 ? 0 : padding}
        onResized={syncState}
        disableSlideInfo={false}
        renderSlideInfo={renderSlideInfo}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </Wrapper>
  );
};

export default MainSlider;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100vw;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  /* carousel elements */
  .item {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .item-image {
    width: 96%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  /* arrow button image */
  .prev-next-button {
    width: 1.65vw;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 768px) {
    width: 3vw;
  }
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* width: 65%; */
    width: 60%;
    padding: 0;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .alice-carousel__prev-btn {
    text-align: left;
  }

  .alice-carousel__next-btn {
    text-align: right;
  }

  .alice-carousel__slide-info {
    top: unset;
    bottom: 2vh;
    left: 18.5vw;
    right: unset;

    font-family: Noto Sans KR !important;
    font-size: 1vw;
    font-weight: 300;
    color: white;

    border-radius: 20px;
    background: var(--transparent-grey, rgba(129, 129, 129, 0.4));

    @media screen and (max-width: 768px) {
      bottom: 1.2vh;
      left: 4vw;
      padding: 2px 10px;
    }
  }
`;
