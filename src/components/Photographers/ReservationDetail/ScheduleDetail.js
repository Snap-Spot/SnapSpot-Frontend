import { useState, useEffect } from "react";
import styled from "styled-components";
import basicProfile from "../../../assets/header/profile.png";
import RejectModal from "./RejectModal";
import MinInputModal from "./MinInputModal";
import ChatBox from "./ChatBox";
import ReviewBox from "../Review/ReviewBox";
import AddressSearch from "./AddressSearch";
import { putDeposit } from "../../../api/plan";
import { useParams } from "react-router-dom";
import { postMessage } from "../../../api/message";
import { status_list } from "../Reservation/MockData/status";
import PhotoChatBox from "./PhotoChatBox";
import FileInputModal from "./FileInputModal";

const ScheduleDetail = ({
  nickname,
  reservationNum,
  time,
  place,
  requirement,
  date,
  profile,
  status,
  price,
  placeAddress,
  setChange,
  change,
  messages,
  review,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isReject, setIsReject] = useState(false); // 예약 거절 모달
  const [isDepositModal, setIsDepositModal] = useState(true); // 입금 요청 모달
  const [isRejectModal, setIsRejectModal] = useState(true); // 예약 거절 모달
  const [isConfirmDeposit, setIsConfirmDeposit] = useState(false); // 입금 확인 모달
  const [message, setMessage] = useState(""); // 전달할 메세지
  const [prices, setPrices] = useState(0); // 가격
  const [placeAddressinput, setPlaceAddressinput] = useState("");
  const [isPhotoModal, setIsPhotoModal] = useState(false);
  const [isMinInput, setIsMinInput] = useState(true);
  const { planId } = useParams();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const postMessages = async () => {
    try {
      const data = await postMessage(planId, message);
      alert("공지사항을 전달했습니다.");
      setChange(change + 1);
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const putDeposits = async () => {
    try {
      const data = await putDeposit(
        planId,
        prices,
        place,
        placeAddressinput,
        message
      );
      setChange(change + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isReject && (
        <RejectModal
          setIsOpen={setIsReject}
          isOpen={isReject}
          title="정말 거절하시겠어요?"
          content="만약 비슷한 시간대에 촬영이 가능하신 경우, 메세지에 변경 가능한 촬영
          시간대를 적어주세요. 50자 이상으로 전달사항을 작성해주셔야 거절이
          가능해요."
          status={status}
          message={message}
          planId={planId}
          identify={0}
          setChange={setChange}
          change={change}
        />
      )}
      {!isDepositModal && (
        <MinInputModal
          setIsMinInput={setIsDepositModal}
          isMinInput={isDepositModal}
          text="압금 요청 시 추가적인 공지사항과 입금받으실 계좌번호를 작성해주세요. 50자 이상으로 전달사항을 작성해주셔야 요청이
          가능해요."
        />
      )}
      {!isRejectModal && (
        <MinInputModal
          setIsMinInput={setIsRejectModal}
          isMinInput={isRejectModal}
          text="만약 비슷한 시간대에 촬영이 가능하신 경우, 메세지에 변경 가능한 촬영
        시간대를 적어주세요. 50자 이상으로 전달사항을 작성해주셔야 거절이
        가능해요."
        />
      )}
      {!isMinInput && (
        <MinInputModal
          setIsMinInput={setIsMinInput}
          isMinInput={isMinInput}
          text="사진과 함께 전달할 메세지를 작성해주세요. 50자 이상으로 전달사항을 작성해주셔야 전달이
          가능해요."
        />
      )}
      {isConfirmDeposit && (
        <RejectModal
          setIsOpen={setIsConfirmDeposit}
          isOpen={isConfirmDeposit}
          title="계좌 입금을 확인하셨나요?"
          content="아래 확인 버튼을 누르시면, 작가분께서는 요청하신 계좌로 입금이 완료되었음을 확인하였으며, 고객분과의 예약이 확정됨을 의미합니다."
          status={status}
          message={message}
          planId={planId}
          identify={1}
          setChange={setChange}
          change={change}
          setMessage={setMessage}
        />
      )}
      {isPhotoModal && (
        <FileInputModal
          setIsPhotoModal={setIsPhotoModal}
          planId={planId}
          contents={message}
          setChange={setChange}
          change={change}
          setMessage={setMessage}
        />
      )}
      <Container>
        <Row2>
          <Profile src={profile || basicProfile} />
          <NickName>{nickname}</NickName>
          {!isMobile && <Btn>{status_list[status][0]}</Btn>}
          {!isMobile && review.length > 0 && (
            <Btn style={{ marginLeft: "1rem" }}>리뷰작성</Btn>
          )}
          <BtnContainer>
            {status === "REQUEST" && (
              <RejectBtn
                onClick={() => {
                  if (message.length < 50) {
                    setIsRejectModal(false);
                  } else {
                    setIsReject(!isReject);
                  }
                }}
              >
                예약 거절하기
              </RejectBtn>
            )}
            {status_list[status][1] !== "" && (
              <RequestBtn
                onClick={() => {
                  if (status === "DEPOSIT") {
                    setIsConfirmDeposit(!isConfirmDeposit);
                  } else if (status === "COMPLETE" || status === "TODAY") {
                    if (message.length === 0) {
                      setIsMinInput(false);
                    } else {
                      setIsPhotoModal(true);
                    }
                  } else {
                    if (message.length < 50) {
                      setIsDepositModal(false);
                    } else if (!prices || !placeAddressinput) {
                      alert("내용을 모두 입력해주세요.");
                    } else if (status === "REQUEST") {
                      putDeposits();
                      setMessage("");
                    }
                  }
                }}
              >
                {status_list[status][1]}
              </RequestBtn>
            )}
          </BtnContainer>
        </Row2>
        {isMobile && (
          <BtnContainer2>
            <Btn>{status_list[status][0]}</Btn>
            {review.length > 0 && (
              <Btn style={{ marginLeft: "1rem", display: "inline" }}>
                리뷰작성
              </Btn>
            )}
          </BtnContainer2>
        )}
        <Headcount>스냅 예약번호 {reservationNum}</Headcount>
        <Row>
          <TitleContainer
            ismargin={status === "DELIVERY" || status === "REFUSE" ? "t" : "f"}
          >
            <SubTitle>날짜</SubTitle>
            <SubTitle>시간</SubTitle>
            <SubTitle>장소</SubTitle>
            <SubTitle>요청사항</SubTitle>
            {status === "REQUEST" ? (
              <>
                <SubTitle2>가격</SubTitle2>
                <SubTitle2>여기서 만나요</SubTitle2>
              </>
            ) : (
              <>
                <SubTitle>가격</SubTitle>
                <SubTitle style={{ marginBottom: "0.5rem" }}>
                  여기서 만나요
                </SubTitle>
              </>
            )}
            {status === "DELIVERY" || status === "REFUSE" ? (
              ""
            ) : isMobile ? (
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
            {status === "REQUEST" ? (
              <PriceInput
                placeholder="스냅사진 촬영 가격을 적어주세요!"
                value={price || prices}
                onChange={(e) => setPrices(e.target.value)}
              />
            ) : (
              <Content>{price || prices}</Content>
            )}
            {status === "REQUEST" ? (
              <AddressSearch
                setPlaceAddress={setPlaceAddressinput}
                placeAddress={placeAddress || placeAddressinput}
              />
            ) : (
              <Content>{placeAddress || placeAddressinput}</Content>
            )}
          </ContentContainer>
        </Row>
        {status === "REQUEST" && (
          <MessageBox
            placeholder="입금 요청 시, 추가적인 공지사항과 입금받으실 계좌번호를 작성해주세요. (예약 거절시에는 거절 사유를 적어주세요.)"
            onChange={handleMessageChange}
            value={message}
          />
        )}
        {(status === "DEPOSIT" ||
          status === "RESERVED" ||
          status === "TODAY") && (
          <MessageBox
            placeholder="메세지를 입력해주세요."
            onChange={handleMessageChange}
            value={message}
          />
        )}
        {(status === "RESERVED" || status === "TODAY") && (
          <BtnContainer style={{ marginTop: "2rem" }}>
            <RequestBtn onClick={() => postMessages()}>
              공지사항 보내기
            </RequestBtn>
          </BtnContainer>
        )}
        {status === "DELIVERY" && review.length > 0 && (
          <>
            {/* 리뷰 확인 */}
            <ReviewTitle>이런 리뷰를 남겨주셨어요!</ReviewTitle>
            <ReviewBox
              type="detail"
              profile={profile}
              nickname={nickname}
              title={review[0].title}
              content={review[0].comment}
              date={review[0].plan.planDate.slice(0, 10)}
              score={review[0].score}
              isLine="none"
            />
          </>
        )}
        {messages.length > 0 && (
          <>
            <MessageTitle>지금까지 보낸 메세지 확인하기</MessageTitle>
            {messages.map((el) =>
              el.contents ? (
                el.isMine ? (
                  <PhotoChatBox
                    text={el.contents}
                    time="2023.06.28 오전 06:32"
                  />
                ) : (
                  <ChatBox
                    text={el.contents}
                    time="2023.06.28 오전 06:32"
                    profile={profile}
                  />
                )
              ) : (
                ""
              )
            )}
          </>
        )}
      </Container>
    </>
  );
};

const BtnContainer2 = styled.div``;

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
  color: black;

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
  width: 8rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: -0.1rem;
`;

const MessageBox = styled.textarea`
  padding: 20px;
  border-radius: 32px;
  margin-top: 1rem;
  background: var(--lightgrey-1, #e6e6e6);
  border: none;
  outline: none;
  font-size: 15px;
  height: 80px;

  @media (max-width: 768px) {
    font-size: 13px;
    border-radius: 20px;
    height: 70px;
    margin-top: 0;
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
  width: 400px;
  height: 25px;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 100px;
    height: 18px;
    font-size: 14px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.ismargin === "t" ? "1.5rem" : "-5rem")};
  @media (max-width: 768px) {
    margin-right: 1rem;
    margin-bottom: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8.7rem;
  width: 100%;
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

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
    margin-top: 0rem;
    margin-bottom: 0.6rem;
    width: 6rem;
  }
`;

const ReviewTitle = styled(SubTitle)`
  font-size: 1rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 12rem;
    margin-top: 5rem;
  }
`;

const MessageTitle = styled(SubTitle)`
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 13rem;
    margin-top: 5rem;
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
    font-size: 14px;
    margin-top: 0rem;
    margin-bottom: 0.6rem;
  }
`;

const Content1 = styled(Content)`
  margin-left: 0.5rem;
  margin-bottom: 0.7rem;
`;

export default ScheduleDetail;
