import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import starIcon from "../../assets/search/starIcon.png";

const RecommendBox = ({
  id,
  image,
  tags,
  photographer,
  star,
  price,
  review,
}) => {
  const navigate = useNavigate();

  const onClickPage = () => {
    navigate(`/photographers/${id}`);
  };

  // const tag = Object.values(tags)
  //   .filter((tag) => tag !== null)
  //   .map((tagValue) => `#${tagValue}`)
  //   .join(" ");

  let tag = "";

  if (tags && typeof tags === "object") {
    tag = Object.values(tags)
      .filter((tag) => tag !== null)
      .map((tagValue) => `#${tagValue}`)
      .join(" ");
  }

  return (
    <Wrapper onClick={onClickPage}>
      <Photo image={image} />
      <Info>
        <TopInfo>
          <Photographer>{photographer} 작가</Photographer>
          <Star>
            <img src={starIcon} />
            {star} ({review})
          </Star>
        </TopInfo>
        <Price>{price}원~</Price>
        <Tag>{tag}</Tag>
      </Info>
    </Wrapper>
  );
};

export default RecommendBox;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    /* min-width: 3rem; */
    width: 100%;
    align-items: center;
    /* padding: 0 1rem; */
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

const Tag = styled.p`
  color: #060606;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0 1.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Info = styled.div`
  position: relative;
  z-index: 1;
  height: 125px;
  border-radius: 12px;
  background: #f6f6f6;
  top: -15px;
  max-width: 316px;

  @media (max-width: 768px) {
    width: 6.625rem;
    height: 3.225rem;
    border-radius: 12px;
    top: -15px;
  }
`;
const Photographer = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  height: 35px;

  @media (max-width: 768px) {
    margin: 0.4rem 0.5rem 0rem 0.5rem;
    font-size: 10px;
    font-weight: 400;
    height: 15px;

    /* max-width: 48px; */
  }
`;

const Price = styled.div`
  color: #3c3aac;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 320px;
  height: 35px;
  margin: 0rem 1.25rem;

  @media (max-width: 768px) {
    font-size: 5px;
    width: 108px;
    height: 10px;

    margin: 0rem 0.5rem;
  }
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.875rem 1.25rem 0 1.25rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
const Star = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    margin-right: 0.4rem;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
