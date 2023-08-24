import React, { useState } from "react";
import Header from "../../components/common/Header";
import { styled } from "styled-components";
import SettingsForm from "../../components/Mypage-User/Mypage/SettingsForm";
import SignOutCheckModal from "../../components/Mypage-User/Mypage/SignOutCheckModal";

const SettingsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <SignOutCheckModal setShowModal={setShowModal} isPhotographer={true} />
      )}
      <Header />
      <Wrapper>
        <div className="title">계정 설정</div>
        <div className="container">
          <SettingsForm />
        </div>
      </Wrapper>
      <Line />
      <Wrapper>
        <SignOutBtn onClick={openModal}>회원 탈퇴하기</SignOutBtn>
      </Wrapper>
    </>
  );
};

export default SettingsPage;
const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    //모바일
    width: 85%;
  }

  display: flex;
  flex-direction: column;
  margin: 0px auto;

  margin-top: 94px;
  @media (max-width: 768px) {
    margin-top: 17px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 18px;
    }
  }
  .container {
    width: 100%;
  }
`;

const Line = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 81px;
  background: #e6e6e6;
  height: 1px;
  @media (max-width: 768px) {
    //모바일
    width: 100vw;
  }
`;
const SignOutBtn = styled.div`
  margin-left: 184px; // (116+84)
  margin-top: 51px;
  display: flex;
  width: 558px;
  height: 46px;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--darkgrey, #777);
  cursor: pointer;
  box-sizing: border-box;
  color: var(--white, #fff);
  text-align: center;

  @media (max-width: 768px) {
    //모바일
    margin: 0 auto; // (116+84)
    margin-top: 51px;
    width: 95%;
    margin-bottom: 100px;
  }
`;
