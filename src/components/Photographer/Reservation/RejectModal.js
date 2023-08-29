import styled from "styled-components";
import warn from "../../../assets/photograph/warn.png";

const RejectModal = ({ setIsReject }) => {
  return (
    <>
      <Conatiner>
        <WarnIcon src={warn} />
        <Warning>정말 거절하시겠어요?</Warning>
        <Content>
          만약 비슷한 시간대에 촬영이 가능하신 경우, 메세지에 변경 가능한 촬영
          시간대를 적어주세요. 100자 이상으로 전달사항을 작성해주셔야 거절이
          가능해요.
        </Content>
        <BtnContainer>
          <CancelBtn onClick={() => setIsReject(false)}>아직이에요</CancelBtn>
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

export default RejectModal;
