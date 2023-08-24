import React from "react";
import { styled } from "styled-components";
import { useEffect } from "react";
import warn from "../../../assets/mypage/userMypage/warn.png";
const SignOutCheckModal = ({ setShowModal }) => {
  useEffect(() => {
    //모달 뒤 배경 스크롤 막기
    document.body.style.cssText = `
                  position: fixed; 
                  top: -${window.scrollY}px;
                  overflow-y: scroll;
                  width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Wrapper onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <img src={warn} alt="warn" />
        <div className="title">정말 탈퇴하시겠어요?</div>
        <div className="subtitle">
          사진작가 분들이 고객님을 기다리고 있어요!
        </div>
        <div className="btns">
          <div className="no" onClick={closeModal}>
            아직이에요
          </div>
          <div className="yes">확인했어요</div>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default SignOutCheckModal;
const Wrapper = styled.div`
  display: block;
  background: black;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; //수정
`;
const Modal = styled.div`
  display: flex;
  width: 880px;
  height: 300px;
  padding: 40px 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  @media (max-width: 768px) {
    //모바일
    width: 80vw;
    height: 200px;
    padding: 20px 16px;
  }
  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      //모바일
      width: 25px;
      height: 25px;
    }
  }

  .title {
    margin-top: -25px;
    font-weight: 700;
    font-size: 1rem;
  }
  .subtitle {
    margin-top: -30px;
    color: var(--darkgrey, #777);
    font-size: 1rem;
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
    }
  }

  .btns {
    display: flex;
    width: 100%;

    .no {
      cursor: pointer;
      display: flex;
      width: 237px;
      padding: 16px 0;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 32px;
      background: var(--sub-color-2, #a6b9ff);
      @media (max-width: 768px) {
        //모바일
        width: 50%;
        font-size: 16px;
      }
    }

    .yes {
      cursor: pointer;
      margin-left: 40px;
      display: flex;
      width: 237px;
      padding: 16px 0;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 32px;
      background: #e6e6e6;
      @media (max-width: 768px) {
        //모바일
        width: 50%;
        margin-left: 15px;
        font-size: 16px;
      }
    }
  }
`;
