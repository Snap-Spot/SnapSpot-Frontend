import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import arrow from "../../../assets/mypage/reservation/arrow.png";
import ReviewModal from "../Modals/ReviewModal";
import ModalTemplate from "../Modals/ModalTemplate";
import ReceiptModal from "../Modals/ReceiptModal";
import QuestionModal from "../Modals/QuestionModal";
import ChangeModal from "../Modals/ChangeModal";
import CancelModal from "../Modals/CancelModal";

const DetailMenus = ({ status, plan, photographer, date, day, category }) => {
  //status.id -> 0,3: 에약신청,완료 / 4: 촬영진행 / 6: 사진 전달됨
  //1 입금요청 -, 2 예약거절 -> 메뉴없음, 5촬영완료, 7예약취소 -> 메뉴없음

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalTitle, setModalTitle] = useState("");

  const list = [
    [
      {
        menu: "예약 변경하기",
        title: "무엇을 변경하고 싶으세요?",
        content: (
          <ChangeModal
            planId={plan.planId}
            photographerName={photographer.nickname}
            category={category.kor}
            date={date}
          />
        ),
      },
      {
        menu: "예약 취소하기",
        title: "예약을 취소하시겠습니까?",
        content: (
          <CancelModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [
      {
        menu: "예약 변경하기",
        title: "무엇을 변경하고 싶으세요?",
        content: (
          <ChangeModal
            planId={plan.planId}
            photographerName={photographer.nickname}
            category={category.kor}
            date={date}
          />
        ),
      },
      {
        menu: "예약 취소하기",
        title: "예약을 취소하시겠습니까?",
        content: (
          <CancelModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [],
    [
      {
        menu: "예약 변경하기",
        title: "무엇을 변경하고 싶으세요?",
        content: (
          <ChangeModal
            planId={plan.planId}
            photographerName={photographer.nickname}
            category={category.kor}
            date={date}
          />
        ),
      },
      {
        menu: "예약 취소하기",
        title: "예약을 취소하시겠습니까?",
        content: (
          <CancelModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: (
          <ReceiptModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: (
          <ReceiptModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: (
          <ReceiptModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [
      {
        menu: "리뷰 쓰러가기",
        title: "리뷰쓰기",
        content: <ReviewModal planId={plan.planId} />,
      },
      {
        menu: "영수증 보러가기",
        title: "영수증 조회",
        content: (
          <ReceiptModal
            plan={plan}
            photographer={photographer}
            date={date}
            day={day}
            category={category.kor}
          />
        ),
      },
      {
        menu: "작가에게 문의하기",
        title: "문의하기",
        content: <QuestionModal planId={plan.planId} />,
      },
    ],
    [],
  ];
  let menus = [];
  const getMenus = (id) => {
    menus = list[id];
  };

  getMenus(status.id);

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
        {menus &&
          menus.map((el) => {
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
  cursor: pointer;
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
