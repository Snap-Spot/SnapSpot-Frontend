import styled from "styled-components";

const IntroductionInput = ({ bio, setBio }) => {
  return (
    <>
      <SubTitle>한 줄 소개글 등록 (최대 500자)</SubTitle>
      <TextArea
        placeholder={bio || ""}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
    </>
  );
};

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  height: 137px;
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 550px;
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 16px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 92%;
    height: 85px;
    font-size: 14px;
  }
`;

export default IntroductionInput;
