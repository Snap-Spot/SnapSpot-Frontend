import React from "react";
import { styled } from "styled-components";
import close from "../../../assets/mypage/modals/close.png";
import { useEffect } from "react";

const ModalTemplate = ({ title, content, setShowModal }) => {
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
        <div className="title">
          {title}
          <img src={close} alt="" onClick={closeModal} />
        </div>
        {content}
      </Modal>
    </Wrapper>
  );
};

export default ModalTemplate;

const Wrapper = styled.div`
  display: block;
  z-index: 1;
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
  width: 880px;
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);

  @media (max-width: 768px) {
    //모바일
    width: 80vw;

    padding: 20px 20px;
  }
  .title {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    img {
      height: 32px;
      width: 32px;
    }
    @media (max-width: 768px) {
      //모바일
      font-size: 16px;
      img {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
