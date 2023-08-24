import React from "react";
import { styled } from "styled-components";

const SettingsForm = () => {
  return (
    <Wrapper>
      <div className="container">
        <ProfileImg>
          <img src="" alt="" />
          <div className="btn">사진 변경</div>
        </ProfileImg>
        <TextInputs>
          <div className="item">
            <div className="subject">닉네임</div>
            <input />
          </div>
          <div className="item">
            <div className="subject">이메일</div>
            <input />
          </div>
          <div className="item">
            <div className="subject">비밀번호</div>
            <input />
          </div>

          <div className="btn">변경하기</div>
        </TextInputs>
      </div>
    </Wrapper>
  );
};

export default SettingsForm;

const Wrapper = styled.div`
  margin-top: 64px;
  .container {
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  img {
    width: 116px;
    height: 116px;
    flex-shrink: 0;
    border-radius: 50%;
    background: lightgray;

    @media (max-width: 768px) {
      //모바일
      width: 70px;
      height: 70px;
    }
  }
  .btn {
    margin-top: 22px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 68.5%; /* 12.33px */
    @media (max-width: 768px) {
      //모바일
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
`;
const TextInputs = styled.div`
  margin-left: 68px;
  @media (max-width: 768px) {
    //모바일
    margin-left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subject {
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
  .item {
    @media (max-width: 768px) {
      //모바일
      width: 95%;
    }
  }
  input {
    width: 558px;
    height: 44px;
    border-radius: 22px;
    background: var(--lesswhite, #f6f6f6);
    border: none;
    outline: none;
    padding: 0 1rem;
    box-sizing: border-box;
    margin-bottom: 26px;
    @media (max-width: 768px) {
      //모바일
      width: 100%;
    }
  }
  .btn {
    margin-top: 100px;
    display: flex;
    width: 558px;
    height: 46px;
    box-sizing: border-box;
    padding: 6px 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--main-font-color, #3c3aac);
    cursor: pointer;

    color: var(--white, #fff);
    text-align: center;
    @media (max-width: 768px) {
      //모바일
      width: 95%;
    }
  }
`;
