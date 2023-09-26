import styled from "styled-components";
import redWarn from "../../../assets/photograph/redWarn.png";
import cancel from "../../../assets/photograph/cancel.png";

const MinInputModal = ({ setIsMinInput, isMinInput }) => {
  return (
    <>
      <Conatiner>
        <CancelBtn src={cancel} onClick={() => setIsMinInput(!isMinInput)} />
        <WarnIcon src={redWarn} />
        <Warning>100자 이상 입력해 주세요</Warning>
        <Content>
          만약 비슷한 시간대에 촬영이 가능하신 경우, 메세지에 변경 가능한 촬영
          시간대를 적어주세요. 100자 이상으로 전달사항을 작성해주셔야 거절이
          가능해요.
        </Content>
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

const Content = styled.p`
  color: var(--darkgrey, #777);
  margin-top: 0.4rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 0;
  }
`;

const WarnIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
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
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    width: 19rem;
    padding: 20px 20px;
  }
`;

const CancelBtn = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  cursor: pointer;
`;

const Warning = styled.h2`
  font-size: 20px;
  color: var(--lessred, #ff3d3d);
`;

export default MinInputModal;
