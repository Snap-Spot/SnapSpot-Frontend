import styled from "styled-components";
import warn from "../../../assets/photograph/warn.png";
import { useNavigate } from "react-router-dom";

const RejectModal = ({
  setIsOpen,
  isOpen,
  title,
  content,
  status,
  setStatus,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Conatiner>
        <WarnIcon src={warn} />
        <Warning>{title}</Warning>
        <Content>{content}</Content>
        <BtnContainer>
          <CancelBtn onClick={() => setIsOpen(!isOpen)}>아직이에요</CancelBtn>
          {/* 확인 버튼 클릭시 해당 예약 내역 delete 요청보내기 */}
          <ConfirmBtn
            onClick={() => {
              if (status === 0) {
                navigate("/photographer/reserve");
              } else {
                setStatus(status + 1);
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
`;

const Content = styled.p`
  color: var(--darkgrey, #777);
  margin-top: 0.4rem;
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
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #ff9e9e;
  cursor: pointer;
`;

const WarnIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 0.7rem;
`;

const Conatiner = styled.div`
  position: absolute;
  top: 18rem;
  display: flex;
  width: 40rem;
  padding: 50px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 2;
`;

const Warning = styled.h2`
  font-size: 20px;
`;

export default RejectModal;