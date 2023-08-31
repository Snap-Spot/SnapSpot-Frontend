import { useState, useEffect } from "react";
import styled from "styled-components";
import left from "../../../assets/photograph/left.png";
import right from "../../../assets/photograph/right.png";

const Carousel = ({ carouselList }) => {
  const slideWidth = 769; // 이미지 하나의 너비
  const totalSlides = carouselList.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currList, setCurrList] = useState([]);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, []);

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
  margin-right: ${(props) => (props.listLen - 1) * -768}px;
  transition: transform 0.3s ease-in-out;
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
`;

const RightBtn = styled.img`
  width: 50px;
  height: 50px;

  cursor: pointer;
`;

const Img = styled.img`
  width: 769px;
  height: 436px;
`;

export default Carousel;
