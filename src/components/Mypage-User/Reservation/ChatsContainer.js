import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import MyChat from "./MyChat";
import YourChat from "./YourChat";
import { getMessages } from "../../../api/message";

const ChatsContainer = ({ profile, planId }) => {
  const [messages, setMessages] = useState([]);
  const getData = async () => {
    const res = await getMessages(planId);
    setMessages(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    messages.length !== 0 && (
      <Wrapper>
        <div className="chatsTitle">지금까지 보낸 메세지 확인하기</div>
        {messages.map((message) => {
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
