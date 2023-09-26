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
        <BlackLine />
        <div className="container">
          <SettingsForm />
        </div>
        <Line />
      </Wrapper>

      <BtnWrapper>
        <SignOutBtn onClick={openModal}>회원 탈퇴하기</SignOutBtn>
      </BtnWrapper>
    </>
  );
};

export default SettingsPage;
const Wrapper = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }

  display: flex;
  flex-direction: column;
  margin: 0px auto;

  margin-top: 94px;
  @media (max-width: 768px) {
    margin-top: 17px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
    }
  }
  .container {
    width: 100%;
  }
`;

const BlackLine = styled.div`
  margin-top: 46px;
  background: #060606;
  height: 1px;
  min-width: 768px;
  @media (max-width: 768px) {
    //모바일
    margin-top: 14px;
    min-width: 0;
  }
`;

const Line = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 106px;
  margin-bottom: 51px;
  background: #e6e6e6;
  height: 1px;
  min-width: 768px;
  @media (max-width: 768px) {
    //모바일
    min-width: 0;
    margin-top: 56px;
    margin-bottom: 55px;
  }
`;
const SignOutBtn = styled.div`
  margin-left: 184px; // (116+84)

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
    width: 95%;
    margin-bottom: 100px;
    height: 34px;
  }
`;
const BtnWrapper = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }

  display: flex;
  margin: 0px auto;
`;
