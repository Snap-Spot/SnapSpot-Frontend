import React, { useState } from "react";
import ReservationItem from "./ReservationItem";
import { styled } from "styled-components";
import Dropdown from "./Dropdown";
const ReservationList = () => {
  const [list, setList] = useState([1, 2, 3]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="titleNdropdown">
        <div className="title">스냅 예약 내역</div>
        <div className="dropdown">
          <Dropdown isOpen={isOpen} />
        </div>
      </div>

      <div className="list">
        {list.map((item) => {
          return <ReservationItem item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ReservationList;
const Wrapper = styled.div`
  .titleNdropdown {
    width: 70%;
    @media (max-width: 768px) {
      //모바일
      width: 85%;
    }
    display: flex;
    justify-content: space-between;
    margin: auto;

    .title {
      color: var(--black, #060606);
      /* web_b24 */
      font-family: Noto Sans KR;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media (max-width: 768px) {
        //모바일
        font-size: 16px;
      }
    }
  }
  .list {
    margin-top: 53px;
    @media (max-width: 768px) {
      //모바일
      margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
