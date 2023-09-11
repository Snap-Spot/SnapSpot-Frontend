import styled from "styled-components";
import Dropdown from "../../components/Photographers/Custom/SpecialtyDropdown";
import SNSInput from "../../components/Photographers/Custom/SNSInput";
import Calender from "../../components/Photographers/Custom/Calendar";
import LayOut from "../../components/common/LayOut";
import Profile from "../../components/Photographers/Custom/Profile";
import PriceListInput from "../../components/Photographers/Custom/PriceListInput";
import FeaturedImgInput from "../../components/Photographers/Custom/FeaturedImgInput";
import { icon_src } from "../../components/Photographers/Custom/Data/IconList";
import TagInput from "../../components/Photographers/Custom/TagInput";
import IntroductionInput from "../../components/Photographers/Custom/IntroductionInput";
import LocationInput from "../../components/Photographers/Custom/LocationInput";
import NameInput from "../../components/Photographers/Custom/NameInput";
import useMobileDetection from "../../components/common/mobileDetection";

const Custom = () => {
  const isMobile = useMobileDetection();

  return (
    <LayOut>
      <Container>
        <Title>작가 페이지 커스텀</Title>
        <Line />
        <Row>
          <Profile />
          {isMobile && <Line2 />}
          <InputContainer>
            <NameInput />
            <PriceListInput />
          </InputContainer>
        </Row>
        <Line2 />
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
            <Calender />
            <FeaturedImgInput />
          </InputContainer>
        </Center>
        <ChangeBtn>변경하기</ChangeBtn>
      </Container>
    </LayOut>
  );
};

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 5rem;
  display: flex;
  width: 31rem;
  height: 46px;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border: none;
  margin-bottom: 10rem;
  margin-left: 11rem;

  @media (max-width: 768px) {
    width: 333px;
    height: 39px;
    margin: 0;
    margin-top: 4rem;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
  }
`;

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

const Container = styled.div`
  width: 75%;
  max-width: 1052px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  align-self: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Line2 = styled(Line)`
  background: #e6e6e6;
  width: 777px;
  margin-top: 1.3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
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

export default Custom;
