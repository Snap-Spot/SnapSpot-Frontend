import styled from "styled-components";
import useMobileDetection from "../../common/mobileDetection";

const ReviewPhoto = ({ reviews }) => {
  const isMobile = useMobileDetection();
  const img_list = Object.values(reviews.map((el) => el.image));
  const slice_list = isMobile ? img_list.slice(0, 4) : img_list.slice(0, 5); // 4개까지만 잘라서 보여주기

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
  justify-content: center;

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
