import styled from "styled-components";
import cancel from "../../../assets/photograph/cancel.png";
import btn from "../../../assets/photograph/filterbtn.png";
import Filtering from "./Filtering";

const ReservationModal = ({ setModalOpen }) => {
  const type_option = ["결혼스냅", "우정스냅", "커플스냅", "기타"];
  const head_count = ["1명", "2명", "3명", "4+"];

  return (
    <>
      <Conatiner>
        <Header>
          <Title>예약하기</Title>
          <CancelIcon src={cancel} onClick={() => setModalOpen(false)} />
        </Header>
        <SubTitle>예약날짜</SubTitle>
        <CalendarInput type="date" />
        <SubTitle>예약시간</SubTitle>
        <TimeInput type="time" />
        <SubTitle>스냅사진 종류</SubTitle>
        <Filtering option={type_option} />
        <SubTitle>인원</SubTitle>
        <Filtering option={head_count} short={true} />
        <SubTitle>위치</SubTitle>
        <LocationInput placeholder="스냅사진을 찍을 위치를 작성해주세요." />
        <SubTitle>요청사항</SubTitle>
        <RequestInput placeholder="요청사항을 작성해주세요." />
        <BtnContainer>
          <CancelBtn onClick={() => setModalOpen(false)}>취소</CancelBtn>
          <ConfirmBtn>예약하기</ConfirmBtn>
        </BtnContainer>
      </Conatiner>
      <BG></BG>
    </>
  );
};

const Btn = styled.img`
  width: 46px;
  height: 41px;
  cursor: pointer;
  position: relative;
  top: 0.8rem;

  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const CancelBtn = styled.button`
  display: flex;
  width: 237px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  font-size: 20px;
  background: #e6e6e6;
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
    height: 50px;
    border-radius: 15px;
  }
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #a6b9ff;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const CalendarInput = styled.input`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-size: 20px;
  outline: none;
`;

const TimeInput = styled.input`
  width: 160px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-size: 20px;
  outline: none;
`;

const TypeInput = styled.div`
  width: 160px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-size: 20px;
`;

const PeopleInput = styled(TypeInput)``;

const LocationInput = styled.textarea`
  width: 96%;
  height: 100px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.9rem;
  padding-right: 0.6rem;
  padding-top: 1rem;
  font-size: 20px;
  outline: none;
`;

const RequestInput = styled(LocationInput)``;

const SubTitle = styled.h3`
  margin-top: 2.5rem;
`;

const BG = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 319vh;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 30%;
  z-index: 2;
`;

const Conatiner = styled.div`
  position: absolute;
  top: 14rem;
  display: flex;
  width: 40rem;
  padding: 50px 40px;
  flex-direction: column;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 3;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    width: 19rem;
    padding: 20px 20px;
  }
`;

const CancelIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export default ReservationModal;
