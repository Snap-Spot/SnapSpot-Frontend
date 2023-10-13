import styled from "styled-components";
import cancel from "../../../assets/photograph/cancel.png";

const PriceModal = ({ setPriceModalOpen, paymentImage }) => {
  return (
    <>
      <Conatiner>
        <CancelIcon src={cancel} onClick={() => setPriceModalOpen(false)} />
        {paymentImage ? (
          <Img src={paymentImage} />
        ) : (
          <Message>이미지가 없습니다.</Message>
        )}
      </Conatiner>
      <BG></BG>
    </>
  );
};

const Message = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  margin-top: 1rem;
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
  z-index: 3;
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
  z-index: 4;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 15px;
    padding-bottom: 25px;
    top: 7rem;
  }
`;

const CancelIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    margin-top: 0.2rem;
  }
`;

export default PriceModal;
