import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import DetailMenus from "./DetailMenus";
import KakaoMap from "./KakaoMap";
import { getPhotographer } from "../../../api/photographer";
import { getDayOfWeek } from "./ReservationItem";
import { useParams } from "react-router-dom";
import { getStatusFromEng } from "../../common/TranslateStatus";
import { getMyReservation } from "../../../api/plan";
import { getCategoryFromEng } from "../../common/TranslateCategory";

const DetailedItem = () => {
  //경로에서 planId 겟
  const { id } = useParams();

  const [plan, setPlan] = useState({});
  const [photographer, setPhotographer] = useState({});
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [status, setStatus] = useState({});
  const [category, setCategory] = useState({});

  const getData = async () => {
    const planData = await getMyReservation(id);
    console.log(planData);
    const photographerData = await getPhotographer(14);

    setPlan(planData);
    setPhotographer(photographerData.photographer.member);

    setStatus(getStatusFromEng(planData.status));
    setCategory(getCategoryFromEng(planData.category));

    setDate(planData.planDate.substr(0, 10));
    setDay(getDayOfWeek(planData.planDate.substr(0, 10)));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title>예약내역 상세</Title>
      <Wrapper>
        <div className="infos">
          <UpperDiv>
            <p className="date">
              {date}({day})
            </p>
            <p className="id">스냅 예약번호&nbsp;&nbsp;{plan.planId}</p>
          </UpperDiv>
          <Main>
            <img src={photographer.profile} alt="작가사진" />
            <div className="list">
              <p className="status-mobile">{status.kor}</p>
              <div className="top">
                <p className="name">{photographer.nickname} 작가&nbsp;&nbsp;</p>
                <p className="category">|&nbsp;&nbsp;{category.kor}</p>
                <p className="status-pc">{status.kor}</p>
              </div>
              <div className="item">
                <p className="subject">예약일시</p>
                <p className="content">
                  {date}({day}) {plan.time}
                </p>
              </div>
              <div className="item">
                <p className="subject">예약원수</p>
                <p className="content">{plan.people}인</p>
              </div>
              <div className="item">
                <p className="subject">가격</p>
                <p className="content">{plan.price ? plan.price원 : "미정"}</p>
              </div>
              <div className="item">
                <p className="subject">장소</p>
                <p className="content">{plan.wishPlace}</p>
              </div>
            </div>
          </Main>
        </div>
        <DetailMenus
          status={status}
          plan={plan}
          photographer={photographer}
          date={date}
          day={day}
          category={category}
        />
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
    width: 90%;
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
      align-items: center;

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
