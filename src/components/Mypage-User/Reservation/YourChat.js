import React from "react";
import { styled } from "styled-components";
const YourChat = ({ profile, contents }) => {
  return (
    <Wrapper>
      <img className="profile" src={profile} alt="" />
      <Chat>{contents}</Chat>
    </Wrapper>
  );
};

export default YourChat;
const Wrapper = styled.div`
  padding-right: 15px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  .profile {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: lightgray;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
const Chat = styled.textarea`
  padding-right: 15px;
  resize: none;
  outline: none;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-width: 600px;
  height: 100px;
  border-radius: 32px 32px 32px 0px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  padding-left: 24px;
  padding-top: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 768px) {
    padding-right: 10px;
    width: 55%;
    max-width: 380px;
    height: 50px;
    border-radius: 20px 20px 20px 0px;
    font-size: 12px;
    padding-left: 14px;
    padding-top: 10px;

    font-size: 10px;
    font-style: normal;
    font-weight: 400;
  }
`;
