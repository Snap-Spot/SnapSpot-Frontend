import React from "react";
import { styled } from "styled-components";

const QuestionModal = () => {
  return (
    <Wrapper>
      <div className="subtitle">촬영에 대해 궁금한 점을 작성해주세요!</div>

      <Form placeholder="문의할 내용을 작성해주세요 (500자 이내)" />
      <div className="button">문의하기</div>
    </Wrapper>
  );
};

export default QuestionModal;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  .subtitle {
    color: #000;
    font-size: 0.8rem;
    margin-top: -20px;
    margin-bottom: 20px;
  }
  .button {
    cursor: pointer;
    margin: auto;
    display: flex;
    width: 240px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: #a6b9ff;
    margin-top: 36px;
    @media (max-width: 768px) {
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
const Form = styled.textarea`
  width: 100%;
  display: flex;
  height: 172px;
  box-sizing: border-box;
  padding: 20px 32px;
  border-radius: 32px;
  background: var(--lightgrey-1, #e6e6e6);
  outline: none;
  resize: none;
  border: none;
  font-size: 16px;
  @media (max-width: 768px) {
    //모바일
    height: 100px;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 12px;
    font-size: 10px;
  }
`;
