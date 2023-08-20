import React from "react";
import { styled } from "styled-components";
import arrow from "../../assets/mypage/reservation/arrow.png";
const ReservationItem = () => {
  return (
    <Wrapper>
      <Header>
        <div className="left-content">
          <div className="date">2023.7.23(일)</div>
          <div className="id">스냅 예약번호&nbsp;&nbsp;0123920293848</div>
        </div>
        <div className="right-content">
          상세보기
          <div className="arrow">
            <img src={arrow} />
          </div>
        </div>
      </Header>
      <div className="line"></div>
      <Footer>
        <div className="img">
          <img src={""} />
        </div>
        <Infos>
          <div className="status">예약완료</div>
          <p>
            <div className="name">한빛나라 작가</div>
            <div className="category">&nbsp;&nbsp;|&nbsp;&nbsp;졸업스냅</div>
          </p>
          <div className="dateNtime">2023.7.23(일) 14:30</div>
          <div className="count">예약인원 : 2인</div>
        </Infos>
      </Footer>
    </Wrapper>
  );
};

export default ReservationItem;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 40px 0px;
  height: 226px;
  margin-bottom: 40px;
  border-radius: 32px;
  border: 1px solid var(--lightgrey-2, #dbdbdb);
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  @media (max-width: 768px) {
    //모바일
    height: 153px;
    padding: 16px 0px;
    width: 90%;
    margin-bottom: 36px;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #dbdbdb;
  }
`;
const Header = styled.div`
  height: 30%;
  margin: 0px 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    //모바일
    margin: 0px 16px;
  }

  .date {
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .id {
    color: var(--darkgrey, #777);
    font-size: 0.9rem;
    margin-top: 3px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .right-content {
    display: flex;
    color: #060606;
    font-size: 0.9rem;
    font-weight: 500;
    img {
      margin-left: 8px;
      width: 12px;
      height: 20px;
    }

    //모바일
    @media (max-width: 768px) {
      img {
        margin-left: 3px;
        width: 8px;
        height: 13.333px;
      }
    }
  }
`;
const Footer = styled.div`
  margin: 0px 40px;
  height: 70%;
  display: flex;
  align-items: end;
  .img {
    img {
      width: 136px;
      height: 136px;
      border-radius: 12px;
      background: lightgray 50% / cover no-repeat;
    }
  }

  @media (max-width: 768px) {
    //모바일
    margin: 0px 16px;
    .img {
      display: flex;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
const Infos = styled.div`
  margin-left: 4%;
  height: 136px;

  @media (max-width: 768px) {
    //모바일
    height: 100px;
  }

  p {
    margin: 6px 0 8px 0;
    @media (max-width: 768px) {
      //모바일
      margin: 4px 0 8px 0;
      font-size: 14px;
    }
    display: flex;
    font-size: 1rem;
    font-weight: 500;

    .name {
      color: var(--black, #060606);
    }
    .category {
      color: var(--darkgrey, #777);
    }
  }
  .status {
    display: inline-flex;
    padding: 0.5rem 0.6rem;
    @media (max-width: 768px) {
      //모바일
      padding: 0.25rem 0.5rem;
      margin-top: 2px;
      font-size: 14px;
    }
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--sub-color, #5170de);

    color: var(--lesswhite, #f6f6f6);
    font-size: 0.9rem;
  }

  .dateNtime {
    color: #000;
    font-size: 0.85rem;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .count {
    margin-top: 4px;
    color: var(--darkgrey, #777);
    font-size: 0.85rem;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
