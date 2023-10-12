import styled from "styled-components";
import Profile from "./Profile";
import NameInput from "./NameInput";
import PriceListInput from "./PriceListInput";
import useMobileDetection from "../../common/mobileDetection";
import LowestPriceInput from "./LowestPriceInput";

const BasicInput = ({
  profile,
  nickname,
  priceimg,
  lowestPay,
  setNickname,
  setProfileImage,
  setPaymentImage,
  setLowestPay,
}) => {
  const isMobile = useMobileDetection();

  return (
    <Container>
      <Profile profile={profile} setProfileImage={setProfileImage} />
      {isMobile && <Line2 />}
      <InputContainer>
        <NameInput nickname={nickname} setNickname={setNickname} />
        <PriceListInput priceimg={priceimg} setPaymentImage={setPaymentImage} />
        <LowestPriceInput lowestPay={lowestPay} setLowestPay={setLowestPay} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
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
    margin-bottom: 1.5rem;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 37rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default BasicInput;
