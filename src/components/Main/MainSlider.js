import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import banner_new_member from "../../assets/main/banner_new_member.png";
import banner_october from "../../assets/main/banner_october.png";
import banner_jeju from "../../assets/main/banner_jeju.png";
import banner_graduation from "../../assets/main/banner_graduation.png";
import banner_wedding from "../../assets/main/banner_wedding.png";

import left_arrow from "../../assets/main/main_arrow_left.png";
import right_arrow from "../../assets/main/main_arrow_right.png";

export const bannerData = [
  { id: 1, name: "신규 가입", image: banner_new_member, discount: "11%" },
  { id: 2, name: "10월", image: banner_october, discount: "2만원" },
  { id: 3, name: "제주도 스냅", image: banner_jeju, discount: "3만원" },
  { id: 4, name: "졸업스냅", image: banner_graduation, discount: "7%" },
  { id: 5, name: "웨딩스냅", image: banner_wedding, discount: "2만원" },
];

const items = bannerData.map((value) => (
  <div className="item" data-value={value.id} key={value.id}>
    <img
      src={value.image}
      alt={"banner" + value.id}
      style={{ cursor: "pointer" }}
      className="item-image"
      onClick={() => {
        window.location.href = `/event/${value.id}`;
      }}
    />
  </div>
));

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}/${itemsCount}`;
};

const renderPrevButton = ({ isDisabled }) => {
  return (
    <img src={left_arrow} alt="prev-button" className="prev-next-button" />
  );
};

const renderNextButton = ({ isDisabled }) => {
  return (
    <img src={right_arrow} alt="next-button" className="prev-next-button" />
  );
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
