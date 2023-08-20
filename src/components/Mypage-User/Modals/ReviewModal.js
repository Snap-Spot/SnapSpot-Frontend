import React from "react";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import nullstar from "../../../assets/mypage/modals/nullstar.png";
import filledstar from "../../../assets/mypage/modals/filledstar.png";
import photo from "../../../assets/mypage/modals/photo.png";
import close from "../../../assets/mypage/modals/close.png";
const ReviewModal = () => {
  const [starCount, setStarCount] = useState();
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

  return (
    <Wrapper>
      <Modal>
        <div className="title">
          리뷰쓰기 <img src={close} alt="" />
        </div>
        <div className="subTitle">별점을 매겨주세요</div>
        <Stars setStarCount={setStarCount} />
        <Form placeholder="리뷰를 작성해주세요.(1000자 이내)"></Form>

        <div className="subTitle">
          사진 첨부하기 <img src={photo} alt="" />
        </div>

        <Preview />

        <div className="button">등록</div>
      </Modal>
    </Wrapper>
  );
};

export default ReviewModal;

const Stars = ({ setStarCount }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  useEffect(() => {
    setStarCount(clicked.filter(Boolean).length);
  }, [clicked]);
  return (
    <>
      <StarContainer>
        {array.map((el) =>
          clicked[el] ? (
            <div>
              <img
                src={filledstar}
                key={el}
                onClick={() => handleStarClick(el)}
                alt=""
              />
            </div>
          ) : (
            <div>
              <img
                src={nullstar}
                key={el}
                onClick={() => handleStarClick(el)}
                alt=""
              />
            </div>
          )
        )}
      </StarContainer>
    </>
  );
};

const Preview = () => {
  return (
    <PreviewContainer>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
    </PreviewContainer>
  );
};

const StarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 8px;
  div {
    margin-right: 6px;
  }

  img {
    width: 32px;
    height: 32px;
    @media (max-width: 768px) {
      //모바일
      width: 20px;
      height: 20px;
    }
  }
`;
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
  height: 660px; //수정
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);

  @media (max-width: 768px) {
    //모바일
    width: 85vw;
    height: 420px;
    padding: 20px 15px;
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
  .subTitle {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
    }
    display: flex;
    align-items: center;

    img {
      margin-left: 13px;
      width: 32px;
      height: 28.681px;
      flex-shrink: 0;
      margin-top: 3px;
      @media (max-width: 768px) {
        margin-left: 3px;
        width: 16px;
        height: 14.341px;
        flex-shrink: 0;
      }
    }
  }
  .button {
    display: inline-flex;
    padding: 16px 100px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: #a6b9ff;
    margin-top: 30px;
    @media (max-width: 768px) {
      padding: 12px 40px;
    }
  }
`;
const Form = styled.textarea`
  display: flex;
  min-height: 160px;
  box-sizing: border-box;
  padding: 20px 32px;
  width: 100%;
  border: none;
  border-radius: 32px;
  background: var(--lightgrey-1, #e6e6e6);
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  resize: none;
  font-size: 16px;
  @media (max-width: 768px) {
    display: flex;
    min-height: 100px;
    padding: 12px 20px;
    align-items: flex-start;
    font-size: 12px;
  }
`;
const PreviewContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  justify-content: start;
  height: 140px;
  @media (max-width: 768px) {
    height: 80px;
  }
  .image {
    border-radius: 12px;
    background: lightgray 50% / cover no-repeat;
    margin-right: 10px;
  }
  img {
    width: 140px;
    height: 140px;

    border-radius: 12px;
    @media (max-width: 768px) {
      height: 80px;
      width: 80px;
    }
  }
`;
