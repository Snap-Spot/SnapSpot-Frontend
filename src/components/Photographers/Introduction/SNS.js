import styled from "styled-components";

const SNS = ({ iconSrc, text }) => {
  return (
    <Container>
      <Icon src={iconSrc} />
      <Input>{text}</Input>
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
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.p`
  border-radius: 22px;
  border: none;
  padding-left: 0.8rem;
  outline: none;
  font-size: 16px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`;

export default SNS;
