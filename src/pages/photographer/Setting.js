import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import Modal from "../../components/Photographer/Setting/Modal";
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
      <Container>
        <Title>계정 설정</Title>
        <Line />
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
            <Display>
              <SubTitle>닉네임</SubTitle>
              <Input />
            </Display>
            <Display>
              <SubTitle>이메일</SubTitle>
              <Input />
            </Display>
            <Display>
              <SubTitle>비밀번호</SubTitle>
              <Input />
            </Display>
            <ChangeBtn>변경하기</ChangeBtn>
            <Line2 />
            <WithDraw onClick={() => setIsOpen(true)}>회원 탈퇴하기</WithDraw>
          </InputContainer>
        </Row>
      </Container>
    </Center>
  );
};

const Display = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 5rem;
  cursor: pointer;

  display: flex;
  width: 32rem;
  height: 46px;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border: none;

  @media (max-width: 768px) {
    width: 22rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 4rem;
  }
`;

const WithDraw = styled(ChangeBtn)`
  background-color: #dbdbdb;
  cursor: pointer;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;

  @media (max-width: 768px) {
    margin-right: 0;
    flex-direction: row;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
    margin-left: 0.7rem;
  }
`;

const Change = styled.h3`
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120vh;

  @media (max-width: 768px) {
    height: 80vh;
  }
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

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-top: 3rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Line2 = styled(Line)`
  margin-top: 3rem;
  width: 50rem;
  margin-left: -12rem;
  background-color: #e6e6e6;

  @media (max-width: 768px) {
    width: 23rem;
    margin-left: 0;
  }
`;

const Profile = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 500px;
  height: 44px;
  border: none;
  padding-left: 1rem;
  outline: none;

  @media (max-width: 768px) {
    width: 17rem;
    height: 2.5rem;
  }
`;

const InputImg = styled(Input)`
  display: none;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Setting;
