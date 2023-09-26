import { useState, useEffect } from "react";
import styled from "styled-components";

const ScheduleDetail = ({
  nickname,
  reservationNum,
  time,
  place,
  requirement,
  date,
  profile,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <Row2>
          <Profile src={profile} />
          <NickName>{nickname}</NickName>
          {!isMobile && <Btn>예약신청</Btn>}
          <BtnContainer>
            <RejectBtn>예약 거절하기</RejectBtn>
            <RequestBtn>입금 요청하기</RequestBtn>
          </BtnContainer>
        </Row2>
        {isMobile && <Btn>예약신청</Btn>}
        <Headcount>스냅 예약번호 {reservationNum}</Headcount>
        <Row>
          <TitleContainer>
            <SubTitle>날짜</SubTitle>
            <SubTitle>시간</SubTitle>
            <SubTitle>장소</SubTitle>
            <SubTitle>요청사항</SubTitle>
            <SubTitle2>가격</SubTitle2>
            <SubTitle2>여기서 만나요</SubTitle2>
            {isMobile ? (
              <SubTitle>메세지</SubTitle>
            ) : (
              <SubTitle>메세지에 전달사항을 입력해주세요</SubTitle>
            )}
          </TitleContainer>
          <ContentContainer>
            <Content>{date}</Content>
            <Content>{time}</Content>
            <Content>{place}</Content>
            <Content>{requirement}</Content>
            <Row>
              <PriceInput placeholder="ex. 120000" />
              <Content1>원</Content1>
            </Row>
            {/* 카카오 맵 연결 */}
            <Input placeholder="처음 만나는 장소를 적어주세요!" />
          </ContentContainer>
        </Row>
        <MessageBox placeholder="입금 요청 시, 추가적인 공지사항과 입금받으실 계좌번호를 작성해주세요. (예약 거절시에는 거절 사유를 적어주세요.)" />
        {/* 아래는 예약 완료시 보이게 */}
        {/* <AlertBtn>공지사항 보내기</AlertBtn>
        <SubTitle>지금까지 보낸 메세지 확인하기</SubTitle> */}
      </Container>
    </>
  );
};

const RejectBtn = styled.button`
  border-radius: 18px;
  background: var(--lessred, #ff9e9e);
  display: inline-flex;
  padding: 18px;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 600;
  font-size: 18px;
  margin-right: 0.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 13px;
    border-radius: 12px;
    padding: 12px;
  }
`;

const RequestBtn = styled(RejectBtn)`
  background-color: #a6b9ff;

  @media (max-width: 768px) {
    margin-right: 0rem;
  }
`;

const AlertBtn = styled(RequestBtn)`
  width: 10rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: -1.5rem;
`;

const MessageBox = styled.textarea`
  padding: 20px;
  border-radius: 32px;
  margin-top: 0rem;
  background: var(--lightgrey-1, #e6e6e6);
  border: none;
  outline: none;
  font-size: 15px;
  height: 80px;

  @media (max-width: 768px) {
    font-size: 13px;
    border-radius: 20px;
    height: 70px;
  }
`;

const Input = styled.input`
  outline: none;
  display: flex;
  width: 350px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  border: 1px solid var(--darkgrey, #777);
  font-size: 18px;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 170px;
    font-size: 14px;
    margin-top: 0.9rem;
  }
`;

const PriceInput = styled(Input)`
  width: 150px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 85px;
    font-size: 14px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -4rem;
  height: 17.5rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 17.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
  margin-bottom: 1.7rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Row2 = styled(Row)`
  justify-content: flex-start;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-items: flex-end;
  margin-left: auto;
`;

const NickName = styled.p`
  font-size: 20px;
  margin-left: 1rem;
  margin-right: 3.6rem;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 14px;
    margin-left: 0.5rem;
  }
`;

const Btn = styled.button`
  border-radius: 8px;
  background: #5170de;
  color: var(--lesswhite, #f6f6f6);
  font-size: 18px;
  width: 5rem;
  height: 2.5rem;
  border: none;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 4rem;
    height: 2rem;
  }
`;

const Headcount = styled.p`
  font-size: 0.8rem;
  color: var(--darkgrey, #777);
  margin: 0;
  margin-top: 0.8rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 1rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 0.6rem;
    width: 6rem;
  }
`;

const SubTitle2 = styled(SubTitle)`
  margin-bottom: 1.3rem;
  margin-top: 0.9rem;
`;

const Content = styled.p`
  margin-bottom: 0;
  font-size: 18px;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Content1 = styled(Content)`
  margin-left: 0.5rem;
  margin-bottom: 0.7rem;
`;

export default ScheduleDetail;
