import React from "react";
import { styled } from "styled-components";

const ReceiptModal = () => {
  return (
    <Wrapper>
      <Header>
        <div className="subject">
          <div>스냅 예약번호</div>
          <div>0123920293848</div>
        </div>
        <div className="subject">
          <div>거래일시</div>
          <div>2023.07.20.목</div>
        </div>
        <div className="subject">
          <div>상품명</div>
          <div>한빛나리 작가&nbsp;&nbsp;|&nbsp;&nbsp;졸업스냅</div>
        </div>
      </Header>
      <Line />
      <Footer>
        <div>결제금액</div>
        <div className="price">120,000원</div>
      </Footer>
    </Wrapper>
  );
};

export default ReceiptModal;
const Wrapper = styled.div`
  width: 100%;
`;
const Header = styled.div`
  margin-top: 20px;
  .subject {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    margin-bottom: 12px;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 8px;
    }
  }
`;
const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: #dbdbdb;
`;
const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 768px) {
    //모바일
    font-size: 16px;
  }

  .price {
    color: var(--main-font-color, #3c3aac);
  }
`;
