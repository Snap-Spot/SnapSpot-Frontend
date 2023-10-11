import styled from "styled-components";
import photo from "../../assets/search/photo.jpeg";
import reviewIcon from "../../assets/search/reviewIcon.png";
import starIcon from "../../assets/search/starIcon.png";
import { useNavigate } from "react-router-dom";
import useMobileDetection from "../common/mobileDetection";

const SearchBox = ({
  id,
  image,
  tags,
  photographer,
  star,
  region,
  subregion,
  regionCount,
  price,
  review,
}) => {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();

  const onClickPage = () => {
    navigate(`/photographers/${id}`);
  };

  const starValue = !isNaN(parseFloat(star)) ? parseFloat(star).toFixed(1) : 0;

  const tag = Object.values(tags)
    .filter((tag) => tag !== null)
    .map((tagValue) => `#${tagValue}`)
    .join(" ");

  return (
    <Wrapper onClick={onClickPage}>
      <Photo image={image}>
        <Tag>{tag}</Tag>
      </Photo>
      <Info>
        <TopInfo>
          <Photographer>
            {isMobile ? <>{photographer}</> : <>{photographer} 작가</>}
          </Photographer>
          <Star>
            <img src={starIcon} />
            {starValue} ({review})
          </Star>
        </TopInfo>
        {regionCount == 0 ? (
          <></>
        ) : (
          <>
            {regionCount > 1 ? (
              <Region>
                {region} {subregion} 외 {regionCount - 1}곳 에서 활동중
              </Region>
            ) : (
              <Region>
                {region} {subregion}에서 활동중
              </Region>
            )}
          </>
        )}
        <Price> {price ? price.toLocaleString() + "원 ~" : "없음"}</Price>
      </Info>
    </Wrapper>
  );
};

export default SearchBox;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;

  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Photo = styled.div`
  display: flex;
  height: 320px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 32px;

  /* 배경 이미지 설정 */
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${(props) => props.image}) center/cover no-repeat, lightgray 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 112px;
    border-radius: 8px;
    background-size: cover;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Photographer = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 35px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 175px;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 15px;
    max-width: 65px;
  }
`;

const Region = styled.div`
  color: #777;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 11px;
    /* width: 108px; */
  }
`;
const Price = styled.div`
  color: #3c3aac;

  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  height: 35px;
  margin-top: 6px;
  @media (max-width: 768px) {
    font-size: 5px;
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
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 5px;
  }

  img {
    margin-right: 0.4rem;
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      margin-right: 0.1rem;
      width: 8px;
      height: 8px;
    }
  }
`;
