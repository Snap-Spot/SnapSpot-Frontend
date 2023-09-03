import styled from "styled-components";
import reviewPhoto from "../../../assets/photograph/review.png";
import { useState, useEffect } from "react";

const ReviewPhoto = () => {
  const img_list = [
    reviewPhoto,
    reviewPhoto,
    reviewPhoto,
    reviewPhoto,
    reviewPhoto,
    reviewPhoto,
    reviewPhoto,
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slice_list = isMobile ? img_list.slice(0, 4) : img_list.slice(0, 5); // 4개까지만 잘라서 보여주기

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
    <Container>
      {isMobile
        ? slice_list.map((el, idx) =>
            idx < 3 ? (
              <Img src={el} key={idx} num={idx} />
            ) : (
              <Rest>+ 더보기</Rest>
            )
          )
        : slice_list.map((el, idx) =>
            idx < 4 ? (
              <Img src={el} key={idx} num={idx} />
            ) : (
              <Rest>+ 더보기</Rest>
            )
          )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 213px;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 2rem;
  }
`;

const Rest = styled.div`
  width: 213px;
  height: 213px;
  background-color: #a6b9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 25px 25px 0px;
  display: inline-flex;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 88px;
    height: 88px;
    border-radius: 0;
  }
`;

const Img = styled.img`
  width: 213px;
  height: 213px;
  border-radius: ${(props) => (props.num === 0 ? "25px 0px 0px 25px" : 0)};

  @media (max-width: 768px) {
    width: 88px;
    height: 88px;
    border-radius: 0;
  }
`;

export default ReviewPhoto;
