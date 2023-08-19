import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import plus from "../../assets/photograph/plus.png";
import imgPlus from "../../assets/photograph/imgPlus.png";

const Custom = () => {
  return (
    <Center>
      <Container>
        <Title>작가 페이지 커스텀</Title>
        <Line />
        <Row>
          <PhotoContainer>
            <Profile src={profile} />
            <Change>작가 사진 변경</Change>
          </PhotoContainer>
          <InputContainer>
            <SubTitle>작가명</SubTitle>
            <Input />
            <SubTitle>가격표 사진 업로드</SubTitle>
            <Row2>
              <InputImg />
              <InputImg />
              <Plus src={plus} />
            </Row2>
          </InputContainer>
        </Row>
        <Line2 />
        <InputContainer>
          <SubTitle>활동 지역 설정</SubTitle>
          <Input />
          <SubTitle>SNS 등록</SubTitle>
          <Row2>
            <Input3 />
            <Plus src={plus} />
          </Row2>
          <SubTitle>한 줄 소개글 등록 (최대 500자)</SubTitle>
          <Input2 />
          <SubTitle>전문 분야 등록</SubTitle>
          <Input />
          <SubTitle>태그 입력</SubTitle>
          <Input />
          <SubTitle>대표 사진 업로드 (최대 10장)</SubTitle>
          <InputImg2 src={imgPlus} />
          <InputImg2 src={imgPlus} />
          <InputImg2 src={imgPlus} />
        </InputContainer>
        <ChangeBtn>변경하기</ChangeBtn>
      </Container>
    </Center>
  );
};

const Plus = styled.img`
  width: 38px;
  height: 50.091px;
  margin-top: -1rem;
`;

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

const Row2 = styled(Row)`
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
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

const Line2 = styled(Line)`
  background: #e6e6e6;
  width: 777px;
  margin-top: 3rem;
  margin-bottom: 2rem;
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

const Input3 = styled(Input)`
  width: 450px;
  margin-right: 1rem;
`;

const Input2 = styled(Input)`
  height: 137px;
`;

const InputImg = styled(Input)`
  width: 110px;
  height: 110px;
  margin-right: 1rem;
`;

const InputImg2 = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
`;

const InputContainer = styled.div``;

export default Custom;
