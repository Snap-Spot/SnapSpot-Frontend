import styled from "styled-components";

const SNSInput = ({ iconSrc, text }) => {
  return (
    <Container>
      <Icon src={iconSrc} />
      <Input placeholder={text} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`;

const Icon = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  height: 44px;
  border: none;
  padding-left: 1.4rem;
  outline: none;
  font-size: 16px;

  width: 510px;

  @media (max-width: 768px) {
    width: 323px;
    height: 34px;
    font-size: 14px;
  }
`;

export default SNSInput;
