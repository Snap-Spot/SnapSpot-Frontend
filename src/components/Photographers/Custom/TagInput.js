import styled from "styled-components";

const TagInput = ({ tags, setTag }) => {
  const handleTagChange = (tagName, value) => {
    setTag({ ...tags, [tagName]: value });
  };

  return (
    <>
      <SubTitle>태그 입력</SubTitle>
      {Object.entries(tags).map(([tagName, value]) => (
        <Input
          key={tagName}
          placeholder={value}
          value={value}
          onChange={(e) => handleTagChange(tagName, e.target.value)}
        />
      ))}
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

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  height: 44px;
  border: none;
  padding-left: 1.4rem;
  outline: none;
  font-size: 16px;
  width: 8rem;
  margin-right: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 24%;
    height: 34px;
    margin-right: 0.5rem;
    font-size: 14px;
  }
`;

export default TagInput;
