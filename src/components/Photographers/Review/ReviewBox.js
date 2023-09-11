import styled from "styled-components";
import star from "../../../assets/photograph/star.png";
import { useState, useEffect } from "react";

const ReviewBox = ({ profile, nickname, title, content, date, score }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 모바일 너비에서는 리뷰 상세내용 50자로 잘라서 보여주기
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReviewContainer>
      <ProfileContainer>
        <Profile src={profile} />
        <NickName>{nickname}</NickName>
      </ProfileContainer>
      <ContentContainer>
        <Title>{title}</Title>
        {windowWidth <= 700 ? (
          <Content>{content.slice(0, 50)}...</Content>
        ) : (
          <Content>{content}</Content>
        )}
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

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Star = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 0.7rem;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
  }
`;

const ReviewContainer = styled.div`
  height: 10rem;
  padding-top: 2.5rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1.5rem;
    height: 9rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-right: 4rem;
  margin-left: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    margin-left: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    /* width: 65rem; */
    margin-right: 0;
  }
`;

const Profile = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 0.7rem;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 0;
  }
`;

const NickName = styled.p`
  font-weight: 500;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.2rem;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
    font-size: 13px;
  }
`;

const Content = styled.p`
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.p`
  font-size: 0.8rem;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 0.6rem;
    color: #777777;
  }
`;

const Score = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  position: relative;
  top: -0.3rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default ReviewBox;
