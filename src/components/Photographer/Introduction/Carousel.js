import { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carousel from "../../../assets/photograph/carousel.png";
import left from "../../../assets/photograph/left.png";
import right from "../../../assets/photograph/right.png";

const DemoCarousel = () => {
  const list = [carousel, carousel, carousel, carousel, carousel, carousel];
  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(0);

  const handleLeftBtnClick = () => {
    setMoveLeft((prevMarginLeft) => prevMarginLeft + 1536);
  };

  const handleRightBtnClick = () => {
    setMoveRight((prevMarginRight) => prevMarginRight - 1536);
  };

  return (
    <Container
      style={{
        marginLeft: `${moveLeft}px`,
        marginRight: `${moveRight + 768}px`,
      }}
    >
      <LeftBtn src={left} onClick={handleLeftBtnClick} />
      <RightBtn src={right} onClick={handleRightBtnClick} />
      {list.map((el, idx) => (
        <Img src={el} key={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 6rem;
  transition: margin-left 0.3s ease-in-out;
`;

const LeftBtn = styled.img`
  position: absolute;
  left: 15.5rem;
  width: 50px;
  height: 50px;
  margin-top: 10rem;
  cursor: pointer;
`;

const RightBtn = styled.img`
  position: absolute;
  right: 15.5rem;
  width: 50px;
  height: 50px;
  margin-top: 10rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 769px;
  height: 436px;
`;

export default DemoCarousel;
