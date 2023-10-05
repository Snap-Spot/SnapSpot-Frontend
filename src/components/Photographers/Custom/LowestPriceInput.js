import { styled } from "styled-components";

const LowestPriceInput = ({ lowestPay }) => {
  return (
    <>
      <SubTitle>최저 가격 입력</SubTitle>
      <Input placeholder={lowestPay || ""} />
    </>
  );
};

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 560px;
  height: 44px;
  border: none;
  padding-left: 1.4rem;
  outline: none;
  font-size: 16px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 34px;
    font-size: 14px;
    padding-left: 0;
  }
`;

export default LowestPriceInput;
