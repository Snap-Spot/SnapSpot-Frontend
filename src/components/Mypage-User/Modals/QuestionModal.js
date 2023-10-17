import React, { useState } from "react";
import { styled } from "styled-components";
import { postMessage } from "../../../api/message";
const QuestionModal = ({ planId }) => {
  const [contents, setContents] = useState("");
  const handleChange = (e) => {
    setContents(e.target.value);
  };
  const submitQuestion = async () => {
    if (contents !== "") {
      const res = await postMessage(planId, contents);
      if (res.status === 200) {
        alert("메세지를 전송했습니다.");
        window.location.reload();
      }
    } else {
      alert("메세지를 작성해주세요.");
    }
  };
  return (
    <Wrapper>
      <div className="subtitle">촬영에 대해 궁금한 점을 작성해주세요!</div>

      <Form
        onChange={handleChange}
        placeholder="메세지를 작성해주세요 (500자 이내)"
        value={contents}
      />
      <div className="button" onClick={submitQuestion}>
        문의하기
      </div>
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
