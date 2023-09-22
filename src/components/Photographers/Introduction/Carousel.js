import { useState, useEffect } from "react";
import styled from "styled-components";
import left from "../../../assets/photograph/left.png";
import right from "../../../assets/photograph/right.png";

const Carousel = ({ carouselList }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slideWidth = isMobile ? 323 : 769; // 이미지 하나의 너비
  const totalSlides = carouselList.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currList, setCurrList] = useState([]);

  useEffect(() => {
    if (carouselList) {
      const imageKeys = Object.keys(carouselList);

      if (imageKeys.length > 0) {
        const startData = carouselList[imageKeys[0]];
        const endData = carouselList[imageKeys[imageKeys.length - 1]];
        const newList = [
          ...imageKeys.map((key) => carouselList[key]),
          startData,
        ];

        setCurrList(newList);
      }
    }
  }, [carouselList]);

  const handleLeftBtnClick = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + totalSlides + 1) % (totalSlides + 1)
      );
    }
  };

  const handleRightBtnClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // 뷰포트 변화 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BtnContainer>
        <LeftBtn src={left} onClick={handleLeftBtnClick} />
        <RightBtn src={right} onClick={handleRightBtnClick} />
      </BtnContainer>
      <Container
        style={{
          transform: `translateX(-${(currentSlide + 1) * slideWidth}px)`,
        }}
        listLen={currList.length}
        isMobile={isMobile}
      >
        {currList.map((el, idx) => (
          <Img src={el} key={idx} />
        ))}
      </Container>
    </>
  );
};

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

export default Carousel;
