import styled from "styled-components";
import warn from "../../../assets/photograph/warn.png";
import { putRejectReservation, putPlansReserve } from "../../../api/plan";
import { useNavigate } from "react-router-dom";

const RejectModal = ({
  setIsOpen,
  isOpen,
  title,
  content,
  message,
  planId,
  identify,
  setChange,
  change,
  setMessage,
}) => {
  const putReject = async () => {
    try {
      const data = await putRejectReservation(planId, message);
      console.log(data);
      alert("예약이 취소되었습니다.");
      navigate("/photographer/reserve");
    } catch (err) {
      console.log(err);
    }
  };

  const putPlansReserveation = async () => {
    try {
      const data = await putPlansReserve(planId, message);
      console.log("예약완료", data);
      setMessage("");
      setChange(change + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Conatiner>
        <WarnIcon src={warn} />
        <Warning>{title}</Warning>
        <Content>{content}</Content>
        <BtnContainer>
          <CancelBtn onClick={() => setIsOpen(!isOpen)}>아직이에요</CancelBtn>
          <ConfirmBtn
            onClick={() => {
              if (identify === 0) {
                putReject();
              } else if (identify === 1) {
                putPlansReserveation();
                alert("예약이 완료되었습니다.");
                setIsOpen(!isOpen);
              } else {
                setIsOpen(!isOpen);
              }
            }}
          >
            확인했어요
          </ConfirmBtn>
        </BtnContainer>
      </Conatiner>
      <BG></BG>
    </>
  );
};

const BG = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 130vh;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 30%;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Content = styled.p`
  color: var(--darkgrey, #777);
  margin-top: 0.4rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 0;
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
  font-size: 18px;
  background: #e6e6e6;
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 105px;
    height: 45px;
    border-radius: 15px;
    font-size: 14px;
  }
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #ff9e9e;
  cursor: pointer;
`;

const WarnIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 0.7rem;

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;

const Conatiner = styled.div`
  position: absolute;
  top: 14rem;
  display: flex;
  width: 40rem;
  padding: 50px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 2;

  @media (max-width: 768px) {
    width: 19rem;
    padding: 20px 20px;
  }
`;

const Warning = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default RejectModal;
