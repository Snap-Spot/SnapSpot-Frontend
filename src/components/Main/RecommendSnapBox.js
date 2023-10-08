import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RecommendSnapBox = ({ keyword, label, image }) => {
  const navigate = useNavigate();

  const onClickPage = () => {
    navigate(`/photographers?special=${keyword}`);
  };

  return (
    <Wrapper onClick={onClickPage}>
      <Photo image={image} />
      <Info>
        <LabelText>{label}</LabelText>
      </Info>
    </Wrapper>
  );
};

export default RecommendSnapBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Photo = styled.div`
  position: relative;
  display: flex;
  max-width: 316px;
  width: 100%;
  height: 316px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 6.625rem;
    height: 6.625rem;
    border-radius: 8px;
  }
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${(props) => props.image}) center/cover no-repeat, lightgray 50%;
`;

const Info = styled.div`
  position: relative;
  z-index: 1;
  /* height: 125px; */
  height: 80px;
  border-radius: 12px;
  background: #f6f6f6;
  top: -15px;
  max-width: 316px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 6.625rem;
    /* height: 3.225rem; */
    height: 1.7rem;
    border-radius: 12px;
    top: -15px;
  }
`;

const LabelText = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  /* font-weight: 700; */
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 400;
  }
`;
