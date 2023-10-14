import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Banner_Sample from "../../assets/main/banner2.png";
import Left_Arrow from "../../assets/main/main_arrow_left.png";
import Right_Arrow from "../../assets/main/main_arrow_right.png";

const itemsArr = [1, 2, 3, 4, 5];

const items = itemsArr.map((value, index) => (
  <div className="item" data-value={value} key={index}>
    <img
      src={Banner_Sample}
      alt="banner_sample"
      style={{ cursor: "pointer" }}
      className="item-image"
      onClick={() => {
        window.location.href = "/event";
      }}
    />
  </div>
));

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
    transform: translateY(-50%);

    /* width: 65%; */
    width: 21%;
    padding: 0;

    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 8%;
    }
  }

  .alice-carousel__prev-btn {
    text-align: right;
    left: 0;
  }

  .alice-carousel__next-btn {
    text-align: left;
    right: 0;
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
