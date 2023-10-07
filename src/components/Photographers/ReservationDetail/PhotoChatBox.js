import styled from "styled-components";

const PhotoChatBox = ({ text, time }) => {
  return (
    <ChatBoxContainer>
      <ChatContainer>
        <Chat>{text}</Chat>
      </ChatContainer>
      <Time>{time}</Time>
    </ChatBoxContainer>
  );
};

const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Chat = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  border-radius: 32px;
  background: #fff;
  border: 1px solid #5170de;
  /* box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25); */
  font-size: 16px;
  padding-left: 24px;
  padding-top: 16px;
  padding-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    border-radius: 20px;
    font-size: 12px;
    padding-left: 14px;
    padding-top: 10px;
  }
`;

const Time = styled.p`
  font-size: 15px;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 8px;
    color: #777777;
  }
`;

export default PhotoChatBox;
