import styled from "styled-components";

const LocationInput = () => {
  return (
    <>
      <SubTitle>활동 지역 설정</SubTitle>
      <Input />
    </>
  );
};

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

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default LocationInput;
