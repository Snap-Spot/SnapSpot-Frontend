import styled from "styled-components";
import warn from "../../../assets/photograph/warn.png";
//복구
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <Conatiner>
        <WarnIcon src={warn} />
        <Warning>정말 탈퇴하시겠어요?</Warning>
        <Content>고객님들께서 작가님을 그리워 할 거에요..🥺</Content>
        <BtnContainer>
          <CancelBtn onClick={() => setIsOpen(false)}>아직이에요</CancelBtn>
          <ConfirmBtn>확인했어요</ConfirmBtn>
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
  width: 170px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  font-size: 16px;
  background: var(--sub-color-2, #a6b9ff);
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #e6e6e6;
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
  padding: 40px 54px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 2;
`;

const Warning = styled.h2`
  font-size: 20px;
`;

export default Modal;
