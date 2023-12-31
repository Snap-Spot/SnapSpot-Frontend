import React, { useState } from "react";
import { styled } from "styled-components";
import Dropdown from "./Dropdown";
import { cancelReservation } from "../../../api/plan";
const options = {
  list: [
    "다른 작가님으로 변경했어요",
    "날씨가 안 좋아요",
    "개인 일정",
    "개인 변심",
    "기타",
  ],
  title: "이유를 선택하세요",
  width: "224",
  mb_width: "190",
};

const CancelModal = ({ plan, photographer, date, day, category }) => {
  const [account, setAccount] = useState("");
  const [reason, setReason] = useState("");
  const handleChange = (e) => {
    setAccount(e.target.value);
  };
  function numFormat(value) {
    var number = parseFloat(value);
    if (isNaN(value)) return "0";
    if (number == 0) return "0";

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = number + "";
    while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");
    return n;
  }
  const handleCancel = async (id, reason, refundAccount) => {
    const res = await cancelReservation(id, reason, refundAccount);
    if (res.status === 200) {
      alert(res.message);
      window.location.reload();
    }
  };
  const handleReason = (text) => {
    setReason(text);
  };
  return (
    <Wrapper>
      <div className="subtitle">
        예약일을 기준으로 일주일 이내 취소 시, 100% 환불가능합니다.
      </div>
      <div className="subject">취소하시는 이유가 무엇입니까?</div>
      <div className="content">
        <div className="dropdown">
          <Dropdown options={options} handleTarget={handleReason} />
        </div>
      </div>
      <div className="subject">예약 세부 정보</div>
      <div>
        <div className="row">
          <div className="name">{photographer.nickname} 작가 </div>
          <div className="category">&nbsp;&nbsp;|&nbsp;&nbsp;{category}</div>
        </div>
        <div className="margin"></div>
        <div className="row">
          <div className="sub-subject">예약일시</div>
          <div className="content">
            {date}({day}) {plan.time}
          </div>
        </div>
        <div className="row">
          <div className="sub-subject">예약원수</div>
          <div className="content">{plan.people}인</div>
        </div>
        <div className="row">
          <div className="sub-subject">가격</div>
          <div className="content">
            {plan.price ? numFormat(plan.price) + "원" : "미정"}
          </div>
        </div>
        <div className="row">
          <div className="sub-subject">장소</div>
          <div className="content">{plan.wishPlace}</div>
        </div>
        <div className="row">
          <div className="sub-subject">
            <div className="refund">환불계좌</div>
          </div>
          <input
            onChange={handleChange}
            value={account}
            placeholder="신한 1102223342와 같이 입력해주세요"
          />
        </div>
      </div>
      <Btn onClick={() => handleCancel(plan.planId, reason, account)}>
        취소하기
      </Btn>
    </Wrapper>
  );
};

export default CancelModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .subtitle {
    width: 100%;
    margin-top: -21px;
    margin-bottom: 40px;
    font-size: 16px;
    @media (max-width: 768px) {
      //모바일
      font-size: 10px;
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .dropdown {
    height: 45px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      //모바일
      height: 34px;
      margin-bottom: 20px;
    }
  }
  .subject {
    color: var(--black, #060606);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    @media (max-width: 768px) {
      //모바일
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
  .row {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    @media (max-width: 768px) {
      //모바일
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 4px;
    }
  }
  .sub-subject {
    width: 110px;
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      width: 75px;
      font-weight: 400;
      font-size: 12px;
    }
  }
  .category {
    color: var(--darkgrey, #777);
  }

  .content {
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 768px) {
      //모바일
      font-size: 12px;
      font-weight: 400;
    }
  }

  .refund {
    color: #ff3d3d;
  }

  input {
    box-sizing: border-box;
    display: flex;
    width: 391px;
    height: 33px;
    padding: 8px 16px;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid var(--darkgrey, #777);
    outline: none;

    @media (max-width: 768px) {
      //모바일
      padding: 8px 10px;
      height: 23px;
      font-size: 12px;
      width: 230px;
      flex-shrink: 1;
    }
  }
  .margin {
    margin-bottom: 25px;
    @media (max-width: 768px) {
      //모바일
      margin-bottom: 12px;
    }
  }
`;
const Btn = styled.div`
  margin: 104px auto 0;
  border-radius: 32px;
  background: #a6b9ff;
  display: flex;
  width: 240px;
  height: 60px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    //모바일
    margin: 35px auto 0;
    width: 120px;
    height: 40px;
    font-size: 14px;
  }
`;
