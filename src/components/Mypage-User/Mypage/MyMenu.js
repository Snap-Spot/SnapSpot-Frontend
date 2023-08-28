import React from "react";
import { styled } from "styled-components";
import bestPic from "../../../assets/mypage/userMypage/bestPic.png";
import booking from "../../../assets/mypage/userMypage/booking.png";
import heart from "../../../assets/mypage/userMypage/heart.png";
import arrow from "../../../assets/mypage/userMypage/arrow.png";
import schedule from "../../../assets/mypage/userMypage/schedule.png";
import review from "../../../assets/mypage/userMypage/review.png";
import custom from "../../../assets/mypage/userMypage/custom.png";
import { useNavigate } from "react-router-dom";
const MyMenu = ({ id }) => {
  const title = ["나의 베스트 픽 모아보기", "나의 예약", "고객관리"];
  const menus = [
    [
      { icon: heart, text: "사진작가 좋아요 모아보기", route: "./hearts" },
      {
        icon: bestPic,
        text: "베스트 스냅사진 모아보기 & 등록하기",
        route: "./best-snap",
      },
    ],
    [{ icon: booking, text: "스냅사진 예약 내역", route: "./reservation" }],
    [
      { icon: schedule, text: "스냅사진 예약/일정 관리", route: "./" },
      { icon: review, text: "상세 리뷰 보기", route: "./" },
      { icon: custom, text: "작가 페이지 커스텀", route: "./" },
    ],
  ];

  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <div className="subtitle">{title[id]}</div>
        <div className="menus">
          {menus[id].map((el, index) => {
            return (
              <>
                {menus[id].length !== 1 && index !== 0 && <Line />}
                <Menu>
                  <div className="subject" onClick={() => navigate(el.route)}>
                    <img className="icon" src={el.icon} alt="" />
                    {el.text}
                  </div>
                  <img className="arrow" src={arrow} alt="" />
                </Menu>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default MyMenu;

const Wrapper = styled.div`
  width: 100%;
  .subtitle {
    margin-top: 36px;
    color: #3c3aac;
    font-weight: 700;
  }

  .menus {
    margin-top: 30px;
    width: 50%;
    min-width: 419px;
    @media (max-width: 768px) {
      //모바일
      width: 100%;
      min-width: 0;
    }
  }
`;
const Menu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    @media (max-width: 768px) {
      //모바일
      width: 18px;
      height: 18px;
    }
  }
  .arrow {
    width: 12px;
    height: 20.465px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      //모바일
      width: 8px;
      height: 14px;
      flex-shrink: 0;
    }
  }
  .subject {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: flex;
    align-items: center;
  }

  font-size: 18px;
  font-weight: 500;
  @media (max-width: 768px) {
    //모바일
    font-size: 14px;
    font-weight: 400;
  }
`;

const Line = styled.div`
  width: 100%;
  background: #e6e6e6;
  height: 1px;
`;
