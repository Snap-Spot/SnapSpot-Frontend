import styled from "styled-components";
import star from "../../../assets/photograph/star.png";

const ReviewBox = ({ profile, nickname, title, content, date, score }) => {
  return (
    <ReviewContainer>
      <ProfileContainer>
        <Profile src={profile} />
        <NickName>{nickname}</NickName>
      </ProfileContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Date>{date}</Date>
      </ContentContainer>
      <ScoreContainer>
        <Star src={star} />
        <Score>{score}</Score>
      </ScoreContainer>
    </ReviewContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Star = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 0.7rem;
`;

const ReviewContainer = styled.div`
  height: 12rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2.5rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-right: 3rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

const Profile = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 0.7rem;
`;

const NickName = styled.p`
  font-weight: 500;
`;

const Title = styled.p`
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

const Content = styled.p`
  font-weight: 500;
`;

const Date = styled.p`
  font-size: 0.8rem;
`;

const Score = styled.p`
  font-weight: 500;
  position: relative;
  top: -0.3rem;
`;

export default ReviewBox;
