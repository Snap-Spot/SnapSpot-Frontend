import styled from "styled-components";
import icon1 from "../../assets/photograph/icon1.png";
import icon2 from "../../assets/photograph/icon2.png";
import icon3 from "../../assets/photograph/icon3.png";
import MenuList from "../../components/Photographer/MyPage/MenuList";
import ProfileBox from "../../components/Photographer/MyPage/ProfileBox";

const MyPage = () => {
  const menuList = [
    {
      icon: icon1,
      text: "스냅 사진 예약/일정 관리",
      address: "/photographer/reserve",
    },
    {
      icon: icon2,
      text: "상세 리뷰 보기",
      address: "/photographer/review",
    },
    {
      icon: icon3,
      text: "작가 페이지 커스텀",
      address: "/photographer/custom",
    },
  ];

  return (
    <Center>
      <Container>
        <Title>마이페이지</Title>
        <ProfileBox />
        <Line />
        <SubTitle>고객관리</SubTitle>
      </Container>
      <MenuContainer>
        {menuList.map((item, idx) => (
          <MenuList
            key={idx}
            icon={item.icon}
            text={item.text}
            address={item.address}
          />
        ))}
      </MenuContainer>
    </Center>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    width: 90%;
  }
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
  margin-top: 1rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    margin-left: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 18px;
    margin-left: 0.7rem;
    margin-bottom: 1rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  color: #3c3aac;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 18px;
    margin-bottom: 1.2rem;
  }
`;

export default MyPage;
