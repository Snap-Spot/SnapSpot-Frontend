import styled from "styled-components";

const SNS = ({ iconSrc, text }) => {
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
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Input = styled.input`
  border-radius: 22px;
  height: 44px;
  border: none;
  padding-left: 0.8rem;
  outline: none;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 90%;
    height: 34px;
    font-size: 14px;
  }
`;

export default SNS;
