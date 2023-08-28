import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import Header from "../../components/common/Header";
import MySnaps from "../../components/Mypage-User/Pick/MySnaps";
import AddSnapModal from "../../components/Mypage-User/Modals/AddSnapModal";
import ModalTemplate from "../../components/Mypage-User/Modals/ModalTemplate";
const BestSnapPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <ModalTemplate
          isOverflow={1}
          title={"베스트 스냅사진 등록하기"}
          content={<AddSnapModal />}
          setShowModal={setShowModal}
        />
      )}
      <Header />
      <Wrapper>
        <div className="top">
          <div className="title">베스트 스냅사진 모아보기</div>
          <div className="btn" onClick={() => setShowModal(true)}>
            등록하기
          </div>
        </div>

        <MySnaps />
      </Wrapper>
    </>
  );
};

export default BestSnapPage;

const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      font-size: 16px;
    }
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    border-radius: 30px;
    background: #3c3aac;
    width: 139px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white, #fff);
    text-align: center;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 768px) {
      //모바일
      width: 76px;
      height: 31px;
      font-size: 14px;
      font-weight: 400;
      line-height: 128.5%;
    }
  }
`;
