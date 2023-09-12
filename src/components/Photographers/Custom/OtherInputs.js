import styled from "styled-components";
import LocationInput from "./LocationInput";
import SNSInput from "./SNSInput";
import IntroductionInput from "./IntroductionInput";
import Dropdown from "./SpecialtyDropdown";
import TagInput from "./TagInput";
import Calendar from "./Calendar";
import FeaturedImgInput from "./FeaturedImgInput";
import { icon_src } from "./Data/IconList";

const OtherInputs = () => {
  return (
    <Center>
      <InputContainer>
        <LocationInput />
        <SubTitle>SNS 등록</SubTitle>
        {icon_src.map((item, idx) => (
          <SNSInput key={idx} iconSrc={item.src} text={item.text} />
        ))}
        <IntroductionInput />
        <Dropdown />
        <TagInput />
        <Calendar />
        <FeaturedImgInput />
      </InputContainer>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 17rem;
  width: 37rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
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

const InputContainer = styled.div`
  width: 100%;
  max-width: 37rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default OtherInputs;
