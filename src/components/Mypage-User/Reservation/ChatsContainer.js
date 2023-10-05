import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import MyChat from "./MyChat";
import YourChat from "./YourChat";
import { getMessages } from "../../../api/message";

const ChatsContainer = ({ profile, messages }) => {
  return (
    <Wrapper>
      <div className="chatsTitle">지금까지 보낸 메세지 확인하기</div>
      {messages.length ? (
        messages.map((message) => {
          return message.isMine
            ? message.contents && (
                <MyChat contents={message.contents} key={message.messageId} />
              )
            : message.contents && (
                <YourChat
                  profile={profile}
                  contents={message.contents}
                  key={message.messageId}
                />
              );
        })
      ) : (
        <div className="empty">보내거나 받은 메세지가 없습니다.</div>
      )}
    </Wrapper>
  );
};

export default ChatsContainer;
const Wrapper = styled.div`
  .chatsTitle {
    font-size: 20px;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      //모바일
      font-size: 15px;
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }

  .empty {
    margin-top: 80px;
    text-align: center;
    color: gray;
    font-size: 16px;
    @media (max-width: 768px) {
      //모바일
      margin-top: 50px;
      font-size: 12px;
    }
  }
`;
