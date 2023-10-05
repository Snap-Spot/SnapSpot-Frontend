import React, { useState } from "react";
import { styled } from "styled-components";
import MyChat from "./MyChat";
import YourChat from "./YourChat";

const ChatsContainer = ({ profile }) => {
  const [messages, setMessage] = useState([
    {
      isMine: true,
      contents: 1,
    },
    {
      isMine: false,
      contents: 1,
    },
  ]);
  return (
    messages.length !== 0 && (
      <Wrapper>
        <div className="chatsTitle">지금까지 보낸 메세지 확인하기</div>
        {messages.map((message) => {
          return message.isMine ? (
            <MyChat contents={message.contents} />
          ) : (
            <YourChat profile={profile} contents={message.contents} />
          );
        })}
      </Wrapper>
    )
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
`;
