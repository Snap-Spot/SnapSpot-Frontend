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
        <div className="line" />
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
  margin-top: 32px;
  .container {
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .line {
    @media (max-width: 768px) {
      //모바일
      background: #dbdbdb;
      width: 100%;
      height: 1px;
      margin-top: 16px;
      margin-bottom: 32px;
    }
  }
`;
const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    //모바일
    flex-direction: row;
  }
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
      width: 35px;
      height: 35px;
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
      margin-left: 20px;
      margin-top: 0px;
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
      height: 34px;
      margin-bottom: 16px;
    }
  }
  .btn {
    display: flex;
    width: 558px;
    height: 46px;
    box-sizing: border-box;
    padding: 6px 15px;
    justify-content: center;
    align-items: center;
    margin-top: 74px;
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
      margin-top: 49px;
      height: 34px;
    }
  }
`;
