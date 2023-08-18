import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import setting from "../../assets/photograph/setting.png";
import arrow from "../../assets/photograph/arrow.png";
import icon1 from "../../assets/photograph/icon1.png";
import icon2 from "../../assets/photograph/icon2.png";
import icon3 from "../../assets/photograph/icon3.png";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <Center>
      <Container>
        <Title>마이페이지</Title>
        <Row>
          <Profile src={profile} />
          <Column>
            <NickName>닉네임</NickName>
            <Email>hello@snapspot.com</Email>
          </Column>
          <Setting
            src={setting}
            onClick={() => navigate("/photograph-setting")}
          />
          <Btn>로그아웃</Btn>
        </Row>
        <Line />
        <SubTitle>고객관리</SubTitle>
      </Container>
      <Menus>
        <MenuContainer>
          <Icon src={icon1} />
          <Menu>스냅 사진 예약/일정 관리</Menu>
          <Arrow src={arrow} />
        </MenuContainer>
        <Line2 />
        <MenuContainer>
          <Icon src={icon2} />
          <Menu>상세 리뷰 보기</Menu>
          <Arrow src={arrow} />
        </MenuContainer>
        <Line2 />
        <MenuContainer onClick={() => navigate("/photograph-custom")}>
          <Icon src={icon3} />
          <Menu>작가 페이지 커스텀</Menu>
          <Arrow src={arrow} />
        </MenuContainer>
        <Line2 />
      </Menus>
    </Center>
  );
};

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 46px;
  height: 44px;
  margin-right: 0.8rem;
`;

const Line2 = styled.div`
  background: #e6e6e6;
  width: 409px;
  height: 1px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 409px;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Menu = styled.p`
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Arrow = styled.img`
  width: 0.6rem;
  margin-left: auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 3rem;
  /* margin-left: -4rem; */

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 18px;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;

const Column = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const NickName = styled.h3`
  font-size: 20px;
  margin-bottom: 0;
`;

const Email = styled.p`
  font-size: 12px;
`;

const Btn = styled.button`
  align-self: flex-start;
  margin-top: 1rem;
  border-radius: 16px;
  background: #d9d9d9;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 15px;
  line-height: 128.5%;
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  color: #3c3aac;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-left: 1.2rem;
    font-size: 18px;
    margin-bottom: 1.2rem;
  }
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 2rem;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
`;

const Setting = styled.img`
  width: 19px;
  height: 19px;
  align-self: flex-start;
  margin-top: 1.4rem;
  cursor: pointer;
`;

export default MyPage;
