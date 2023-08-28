import React from "react";
import { styled } from "styled-components";

const MySnapBox = () => {
  return (
    <>
      <Container>
        <Photo>
          <img className="photo" src="" alt="" />
        </Photo>
        <Info>
          <div className="date">2023.07.23(일)</div>
          <div className="name">
            <div className="blue">뮴먕묭</div>&nbsp;작가
          </div>
          <div className="place">
            <div className="blue">
              <div className="left">
                제주특별자치도 어디시 어디로 18길 제주특별자치도 어디시 어디로
                18길
              </div>
            </div>
            <div className="right">에서 촬영</div>
          </div>

          <div className="tags">#커플스냅 #유채꽃 #상큼</div>
        </Info>
      </Container>

      <ContainerMb>
        <img className="photo" src="" alt="" />
      </ContainerMb>
    </>
  );
};

export default MySnapBox;

const Container = styled.div`
  width: 100%;
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

    img {
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
  }
`;
