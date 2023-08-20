import React, { useState } from "react";
import { styled } from "styled-components";
import arrow from "../../../assets/mypage/reservation/arrow.png";
import ReviewModal from "../Modals/ReviewModal";
import ModalTemplate from "../Modals/ModalTemplate";
import ReceiptModal from "../Modals/ReceiptModal";
const DetailMenus = ({ status }) => {
  //status -> 0: 에약완료 / 1: 촬영진행됨 / 2: 사진전달됨
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalTitle, setModalTitle] = useState("");
  const list = [
    [
      { menu: "예약 변경하기", title: "", content: <></> },
      { menu: "예약 취소하기" },
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: <ReceiptModal />,
      },
      { menu: "작가에게 문의하기" },
    ],
    [
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: <ReceiptModal />,
      },
      { menu: "작가에게 문의하기" },
    ],
    [
      { menu: "리뷰 쓰러가기", title: "리뷰쓰기", content: <ReviewModal /> },
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: <ReceiptModal />,
      },
      { menu: "작가에게 문의하기" },
    ],
  ];
  const openModal = (title, content) => {
    setModalContent(content);
    setModalTitle(title);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <ModalTemplate
          title={modalTitle}
          content={modalContent}
          setShowModal={setShowModal}
        />
      )}
      <List>
        {list[2].map((el) => {
          return (
            <>
              <Item onClick={() => openModal(el.title, el.content)}>
                <div className="title">{el.menu}</div>
                <img src={arrow} alt="" />
              </Item>
              <Line />
            </>
          );
        })}
      </List>
    </>
  );
};

export default DetailMenus;

const List = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const Item = styled.div`
  width: 100%;
  height: 79px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 12px;
    height: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    //모바일
    font-size: 14px;
    height: 42px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 8px;
      height: 13.333px;
      flex-shrink: 0;
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
`;
