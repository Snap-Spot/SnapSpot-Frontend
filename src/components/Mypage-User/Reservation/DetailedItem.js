import React from "react";
import { styled } from "styled-components";
import DetailMenus from "./DetailMenus";
import KakaoMap from "./KakaoMap";
const DetailedItem = () => {
  const status = 0;

  return (
    <>
      <Title>예약내역 상세</Title>
      <Wrapper>
        <div className="infos">
          <UpperDiv>
            <p className="date">2023.07.23(일)</p>
            <p className="id">스냅 예약번호&nbsp;&nbsp;0123920293848</p>
          </UpperDiv>
          <Main>
            <img src={""} alt="작가사진" />
            <div className="list">
              <p className="status-mobile">사진전달</p>
              <div className="top">
                <p className="name">한빛나라 작가&nbsp;&nbsp;</p>
                <p className="category">|&nbsp;&nbsp;졸업스냅</p>
                <p className="status-pc">사진전달</p>
              </div>
              <div className="item">
                <p className="subject">예약일시</p>
                <p className="content">2023.7.23(일) 14:30</p>
              </div>
              <div className="item">
                <p className="subject">예약원수</p>
                <p className="content">2인</p>
              </div>
              <div className="item">
                <p className="subject">가격</p>
                <p className="content">1200000원</p>
              </div>
              <div className="item">
                <p className="subject">장소</p>
                <p className="content">서울시 서대문구</p>
              </div>
            </div>
          </Main>
        </div>
        <DetailMenus status={status} />
        <KakaoMap />
      </Wrapper>
    </>
  );
};

export default DetailedItem;
const Title = styled.div`
  width: 75%;
  margin: auto;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    //모바일
    font-size: 16px;
    width: 85%;
  }
`;
const Wrapper = styled.div`
  width: 75%;
  margin: auto;

  .infos {
    margin-top: 53px;
  }
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    //모바일
    width: 90%;

    .infos {
      margin-top: 20px;
    }
  }
`;
const UpperDiv = styled.div`
  .date {
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      font-weight: 400;
    }
  }
  .id {
    color: var(--darkgrey, #777);
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

const Main = styled.div`
  width: 100%;

  margin-top: 35px;
  height: 232px;
  display: flex;
  .list {
    flex-shrink: 0;
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    .item,
    .top {
      width: 100%;
      display: flex;
      .category {
        color: var(--darkgrey, #777);
      }

      .content {
        font-size: 0.8rem;
      }
    }

    .top {
      display: flex;
      align-items: center;
      font-weight: 500;
      margin-top: 12px;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        //모바일
        font-weight: 400;
        margin-top: 4px;
        margin-bottom: 8px;
      }
    }

    .name,
    .subject {
      min-width: 130px;
      @media (max-width: 768px) {
        //모바일
        min-width: 90px;
      }
    }
    .content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  img {
    flex-shrink: 0;
    width: 232px;
    height: 232px;
    border-radius: 12px;
    background: lightgray 50% / cover no-repeat;
  }

  .status-mobile {
    display: none;
  }
  .status-pc {
    margin-left: 19px;
    color: var(--lesswhite, #f6f6f6);
    font-size: 0.9rem;
    font-weight: 500;
    display: inline-flex;
    padding: 10px 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: var(--sub-color, #5170de);
  }
  @media (max-width: 768px) {
    //모바일
    margin-top: 20px;
    height: 135px;
    .list {
      margin-left: 1rem;
    }
    img {
      width: 134px;
      height: 134px;
    }
    .top {
      .status-pc {
        display: none;
      }
      font-size: 14px;
    }
    .item {
      font-size: 12px;
    }

    .status-mobile {
      width: 52px;
      display: block;
      display: inline-flex;
      padding: 4px 8px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      background: var(--sub-color, #5170de);

      color: var(--lesswhite, #f6f6f6);

      font-size: 14px;
      font-weight: 400;
      line-height: 128.5%; /* 17.99px */
    }
  }
`;
