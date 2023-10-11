import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import left from "../../../assets/photograph/left.png";
import right from "../../../assets/photograph/right.png";

const ExCarousel = ({ carouselList }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const items = Object.values(carouselList)
    .filter((el) => !!el)
    .map((el, idx) => (
      <div className="item" data-value={idx}>
        <img src={el} className="item-image" />
      </div>
    ));

  const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}/${itemsCount}`;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <img src={left} className="prev-next-button" />;
  };

  const renderNextButton = ({ isDisabled }) => {
    return <img src={right} className="prev-next-button" />;
  };

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

const Wrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  margin-top: 5rem;

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
    width: 100%;
    height: 550px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  /* arrow button image */
  .prev-next-button {
    width: 3.65vw;
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
    width: 18%;
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

const Container = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 6rem;
  margin-right: ${(props) =>
    props.isMobile ? (props.listLen - 1) * -323 : (props.listLen - 1) * -768}px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 54rem;
  z-index: 2;
`;

const LeftBtn = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 36rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 16rem;
    width: 35px;
    height: 35px;
  }
`;

const RightBtn = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const Img = styled.img`
  width: 769px;
  height: 436px;

  @media (max-width: 768px) {
    width: 323px;
    height: 186px;
  }
`;

export default ExCarousel;
