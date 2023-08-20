import React from "react";
import { styled } from "styled-components";
import arrow from "../../../assets/mypage/reservation/arrow.png";
const DetailMenus = ({ status }) => {
  //status -> 0: 에약완료 / 1: 촬영진행됨 / 2: 사진전달됨
  const list = [
    ["예약 변경하기", "예약 취소하기", "영수증 보러가기", "작가에게 문의하기"],
    ["영수증 보러가기", "작가에게 문의하기"],
    ["리뷰 쓰러가기", "영수증 보러가기", "작가에게 문의하기"],
  ];
  return (
    <List>
      {list[status].map((el) => {
        return (
          <>
            <Item>
              <div className="title">{el}</div>
              <img src={arrow} alt="" />
            </Item>
            <Line />
          </>
        );
      })}
    </List>
  );
};

export default DetailMenus;

const List = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const Item = styled.div`
  width: 100%;
  height: 79px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 12px;
    height: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    //모바일
    font-size: 14px;
    height: 42px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 8px;
      height: 13.333px;
      flex-shrink: 0;
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
`;
