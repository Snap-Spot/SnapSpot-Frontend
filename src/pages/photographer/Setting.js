import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import Modal from "../../components/Photographer/MyPage/Modal";
import { useState, useRef } from "react";

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달 오픈
  const [imgfile, setImgFile] = useState(""); // 프로필 이미지

  const imgRef = useRef();

  // 프로필 이미지 프리뷰 생성
  const saveProfileImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <Center>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Center>
        <Title>계정 설정</Title>
        <Line />
        <Container>
          <Row>
            <label htmlFor="file">
              <PhotoContainer>
                <Profile src={imgfile ? imgfile : profile} />
                <InputImg
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={saveProfileImgFile}
                  ref={imgRef}
                ></InputImg>
                <Change>사진 변경</Change>
              </PhotoContainer>
            </label>
            <InputContainer>
              <SubTitle>닉네임</SubTitle>
              <Input />
              <SubTitle>이메일</SubTitle>
              <Input />
              <SubTitle>비밀번호</SubTitle>
              <Input />
              <ChangeBtn>변경하기</ChangeBtn>
              <WithDraw onClick={() => setIsOpen(true)}>회원 탈퇴하기</WithDraw>
            </InputContainer>
          </Row>
        </Container>
      </Center>
    </Center>
  );
};

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 5rem;
  cursor: pointer;

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
  background-color: #dbdbdb;
  cursor: pointer;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;
`;

const Change = styled.h3`
  font-size: 18px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130vh;
  width: 100%;
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
  margin-left: 10%;
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: black;
`;

const Profile = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 100%;
  cursor: pointer;
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

const InputImg = styled(Input)`
  display: none;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
`;

const InputContainer = styled.div``;

export default Setting;
