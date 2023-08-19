import styled from "styled-components";
import photo from "../../assets/search/photo.jpeg";
import reviewIcon from "../../assets/search/reviewIcon.png";
import starIcon from "../../assets/search/starIcon.png";

const RecommendBox = ({ tag, photographer, star, price, review }) => {
  return (
    <Wrapper>
      <Photo />
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
  width: 320px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Photo = styled.div`
  position: relative;
  display: flex;
  width: 316px;
  height: 316px;
  /* padding-top:244px; */
  /* padding: 28px 20px 12px 20px; */
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 112px;
    height: 112px;
    border-radius: 8px;
  }
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${photo}) center/cover no-repeat, lightgray 50%;
`;

const Tag = styled.p`
  color: #060606;

  /* web_m18 */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0 1.25rem;
`;

const Info = styled.div`
  position: relative;
  z-index: 1;
  width: 316px;
  height: 116px;
  border-radius: 12px;
  background: #f6f6f6;
  /* left: 10px; */
  top: -15px;
`;
const Photographer = styled.div`
  color: #000;
  /* web_b24 */
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  height: 35px;
  /* margin-top: 20px; */
  @media (max-width: 768px) {
    font-size: 10px;
    height: 15px;
  }
`;

const Price = styled.div`
  color: #3c3aac;

  /* web_b24 */
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
  }
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: 0.875rem 1.25rem 0 1.25rem;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Star = styled.div`
  color: #000;
  /* web_m20 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 0.4rem;
    /* padding-top: 0.5rem; */
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
      margin-right: 0.1rem;
      width: 8px;
      height: 8px;
    }
  }
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
