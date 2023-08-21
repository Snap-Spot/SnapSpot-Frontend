import styled from "styled-components";
import photo from "../../assets/search/photo.jpeg";
import reviewIcon from "../../assets/search/reviewIcon.png";
import starIcon from "../../assets/search/starIcon.png";

const SearchBox = ({ tag, photographer, star, region, price, review }) => {
  return (
    <Wrapper>
      <Photo>
        <Tag>{tag}</Tag>
      </Photo>
      <Info>
        <TopInfo>
          <Photographer>{photographer} 작가</Photographer>
          <Star>
            <img src={starIcon} />
            {star} ({review})
          </Star>
        </TopInfo>
        <Region>{region}에서 활동중</Region>
        <Price>{price}원 ~</Price>
      </Info>
    </Wrapper>
  );
};

export default SearchBox;
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
  display: flex;
  width: 320px;
  height: 320px;
  /* padding: 28px 20px 12px 20px; */
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
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
  color: #fff;
  text-align: right;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Photographer = styled.div`
  color: #000;
  /* web_b24 */
  font-family: Noto Sans KR;
  font-size: 24px;
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
const Region = styled.div`
  color: #777;

  /* web_m18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 320px;
  @media (max-width: 768px) {
    font-size: 2px;
    width: 108px;
  }
`;
const Price = styled.div`
  color: #3c3aac;

  /* web_b24 */
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 320px;
  height: 35px;
  margin-top: 6px;
  @media (max-width: 768px) {
    font-size: 5px;
    width: 108px;
    height: 10px;
  }
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Star = styled.div`
  color: #000;
  /* web_m20 */
  font-family: Noto Sans KR;
  font-size: 20px;
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
