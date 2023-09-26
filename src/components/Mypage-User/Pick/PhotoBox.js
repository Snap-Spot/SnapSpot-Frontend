import styled from "styled-components";
import filledHeart from "../../../assets/mypage/pick/filledHeart.png";
import unfilledHeart from "../../../assets/mypage/pick/unfilledHeart.png";
import { useState } from "react";
const PhotoBox = ({ photo, photographer, region }) => {
  const [isHeart, setIsHeart] = useState(true);
  return (
    <Wrapper>
      <Photo>
        <img src={photo} alt="" />
      </Photo>
      <Info>
        <TopInfo>
          <Photographer>{photographer} 작가</Photographer>
          <Heart
            onClick={() => {
              setIsHeart(!isHeart);
            }}
          >
            {isHeart ? (
              <img src={filledHeart} alt="" />
            ) : (
              <img src={unfilledHeart} alt="" />
            )}
          </Heart>
        </TopInfo>
        <Region>{region}에서 활동중</Region>
      </Info>
    </Wrapper>
  );
};

export default PhotoBox;
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
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 320px;
  /* padding: 28px 20px 12px 20px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 32px;

  @media (max-width: 768px) {
    height: 112px;
    border-radius: 8px;
  }

  img {
    border-radius: 32px;
    width: 100%;
    height: 100%;
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 768px) {
      //모바일
      border-radius: 8px;
    }
  }
`;

const Info = styled.div`
  width: 100%;
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

  width: 100%;
  @media (max-width: 768px) {
    font-size: 2px;
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
const Heart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  img {
    margin-right: 0.4rem;
    /* padding-top: 0.5rem; */
    width: 32px;
    height: 28px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      margin-right: 0.1rem;
      width: 11.066px;
      height: 9.745px;
      flex-shrink: 0;
    }
  }
`;
