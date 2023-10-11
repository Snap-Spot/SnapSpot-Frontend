import React, { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import { keyframes, styled } from "styled-components";
import DropdownFilter from "./DropdownFilter";
import { getMyReservationList } from "../../../api/plan";
import LoadingImg from "../../../assets/signup/loading.png";
const ReservationList = () => {
  const [list, setList] = useState([]);
  const filterList = ["최근 3개월", "최근 6개월", "최근 1년", "최근 2년"];
  //미완료: 필터링 처리.
  const getData = async () => {
    try {
      const data = await getMyReservationList();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <div className="titleNdropdown">
        <div className="title">스냅 예약 내역</div>
        <div className="dropdown">
          <DropdownFilter filterList={filterList} />
        </div>
      </div>

      <div className="list">
        {list.length > 0 ? (
          list.map((item) => {
            return <ReservationItem key={item.planId} item={item} />;
          })
        ) : (
          <LoadingImage src={LoadingImg} />
        )}
      </div>
    </Wrapper>
  );
};

export default ReservationList;
const Wrapper = styled.div`
  .titleNdropdown {
    width: 75%;
    @media (max-width: 768px) {
      //모바일
      width: 90%;
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

  .dropdown {
    height: 44px;
  }
`;
// 로딩 관련 style
const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  margin: 200px auto;
  width: 200px;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
