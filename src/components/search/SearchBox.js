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
        <Review>
          <img src={reviewIcon} />
          후기 {review}개
        </Review>
      </Info>
    </Wrapper>
  );
};

export default SearchBox;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
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
`;
const Region = styled.div`
  color: rgba(129, 129, 129, 0.4);

  /* web_m18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 320px;
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
`;
const Review = styled.div`
  color: #060606;

  /* mob_m12 */
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.5%; /* 15.42px */

  /* width: 56px; */
  height: 15px;

  img {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;
const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Star = styled.div`
  color: #000;
  /* web_m20 */
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  img {
    width: 24px;
    height: 24px;
  }
`;
