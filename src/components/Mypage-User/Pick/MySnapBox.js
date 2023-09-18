import React from "react";
import { styled } from "styled-components";
import filledHeart from "../../../assets/mypage/pick/filledHeart.png";
const MySnapBox = ({ photo, photographer, region, date, tags }) => {
  return (
    <>
      <Container>
        <Photo>
          <img className="photo" src={photo} alt="" />
        </Photo>
        <Info>
          <div className="date">{date}</div>
          <div className="name">
            <div className="blue">{photographer}</div>&nbsp;작가
          </div>
          <div className="place">
            <div className="blue">
              <div className="left">{region}</div>
            </div>
            <div className="right">에서 촬영</div>
          </div>

          <div className="tags">
            {tags.map((tag) => {
              return `#${tag} \u00A0\u00A0`;
            })}
          </div>
        </Info>
      </Container>

      <ContainerMb>
        <img className="photo" src="" alt="" />
        <img className="heart" src={filledHeart} alt="" />
      </ContainerMb>
    </>
  );
};

export default MySnapBox;

const Container = styled.div`
  width: 100%;
  max-width: 448px;
  margin: 0 auto;
  height: 650px;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    //모바일
    display: none;
  }
`;
const Photo = styled.div`
  display: flex;
  width: 100%;
  height: 449px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 449px;
    border-radius: 32px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      lightgray 50% / cover no-repeat;
  }
`;
const Info = styled.div`
  padding: 28px 55px;
  height: 201px;
  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;

  .blue {
    color: #3c3aac;
  }
  .date {
    font-size: 20px;
  }

  .name {
    display: flex;
  }
  .place {
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 100%;

    .left {
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;

      display: -webkit-box;
      -webkit-line-clamp: 2; // 원하는 라인수
      -webkit-box-orient: vertical;
    }

    .right {
      min-width: 4rem;
      white-space: nowrap;
    }
  }
  .tags {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: flex;
    align-items: center;
  }
`;

const ContainerMb = styled.div`
  display: none;

  @media (max-width: 768px) {
    //모바일
    display: flex;
    width: 100%;
    height: 112px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background: lightgray 50%;
    position: relative;

    .photo {
      display: flex;
      width: 100%;
      height: 112px;
      flex-shrink: 0;
      border-radius: 8px;
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.1) 100%
        ),
        lightgray 50% / cover no-repeat;
    }

    .heart {
      position: absolute;
      bottom: 6.5px;
      right: 5%;
      width: 20px;
      height: 17.5px;
    }
  }
`;
