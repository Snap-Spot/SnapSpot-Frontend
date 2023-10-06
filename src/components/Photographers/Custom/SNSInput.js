import styled from "styled-components";

const SNSInput = ({ index, iconSrc, text, setSns, sns }) => {
  const handleChange = (e) => {
    let newVal = e.target.value;
    if (index === 0) {
      setSns({ ...sns, homepage: newVal });
    } else if (index === 1) {
      setSns({ ...sns, instagram: newVal });
    } else if (index === 2) {
      setSns({ ...sns, kakaoChannel: newVal });
    } else if (index === 3) {
      setSns({ ...sns, twitter: newVal });
    } else if (index === 4) {
      setSns({ ...sns, naverBlog: newVal });
    }
  };

  return (
    <Container>
      <Icon src={iconSrc} />
      <Input placeholder={text} value={text} onChange={handleChange} />
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
    width: 90%;
    height: 34px;
    font-size: 14px;
  }
`;

export default SNSInput;
