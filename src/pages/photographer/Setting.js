import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";

const Setting = () => {
  return (
    <Center>
      <Container>
        <Title>계정 설정</Title>
        <Line />
        <Row>
          <PhotoContainer>
            <Profile src={profile} />
            <Change>사진 변경</Change>
          </PhotoContainer>
          <InputContainer>
            <SubTitle>닉네임</SubTitle>
            <Input />
            <SubTitle>이메일</SubTitle>
            <Input />
            <SubTitle>비밀번호</SubTitle>
            <Input />
            <ChangeBtn>변경하기</ChangeBtn>
            <WithDraw>회원 탈퇴하기</WithDraw>
          </InputContainer>
        </Row>
      </Container>
    </Center>
  );
};

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 5rem;

  display: flex;
  width: 516px;
  height: 46px;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border: none;
`;

const WithDraw = styled(ChangeBtn)`
  background-color: #777777;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;
`;

const Change = styled.h3`
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 66rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
  align-self: flex-start;
  margin-bottom: 2rem;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Profile = styled.img`
  width: 116px;
  height: 116px;
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 500px;
  height: 44px;
  border: none;
  padding-left: 1rem;
  outline: none;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
`;

const InputContainer = styled.div``;

export default Setting;
