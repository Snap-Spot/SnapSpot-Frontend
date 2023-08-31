import styled from "styled-components";
import profile from "../../../assets/photograph/profile.png";

const ChatBox = ({ text, time }) => {
  return (
    <ChatBoxContainer>
      <ChatContainer>
        <Profile src={profile} />
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
`;

const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.5rem;
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

const Chat = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 611.364px;
  height: 100px;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  padding-left: 24px;
  padding-top: 16px;
`;

const Time = styled.p`
  font-size: 15px;
  margin-left: auto;
`;

export default ChatBox;
