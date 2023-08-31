import styled from "styled-components";
import reviewPhoto from "../../../assets/photograph/review.png";

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

  const slice_list = img_list.slice(0, 5); // 4개까지만 잘라서 보여주기

  return (
    <Container>
      {slice_list.map((el, idx) =>
        idx < 4 ? <Img src={el} key={idx} num={idx} /> : <Rest>+ 더보기</Rest>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 213px;
  margin-bottom: 5rem;
  display: flex;
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
`;

const Img = styled.img`
  width: 213px;
  height: 213px;
  border-radius: ${(props) => (props.num === 0 ? "25px 0px 0px 25px" : 0)};
`;

export default ReviewPhoto;
