import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import plus from "../../assets/photograph/plus.png";
import imgPlus from "../../assets/photograph/imgPlus.png";
import deleteIcon from "../../assets/photograph/deleteIcon.png";
import { useState, useRef } from "react";

const Custom = () => {
  const [imgfile, setImgFile] = useState([]); // 가격표 이미지
  const [profileImg, setProfileImg] = useState(""); // 프로필 이미지
  const imgRef = useRef([]);
  const imgRef2 = useRef();

  // 프로필 이미지 프리뷰 생성
  const saveProfileImgFile = () => {
    const file = imgRef2.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
  };

  // 가격표 이미지 프리뷰
  const saveImgFile = () => {
    const file = imgRef.current[imgfile.length].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile((prevImgFiles) => [...prevImgFiles, reader.result]);
    };
  };

  // 가격표 이미지 프리뷰 삭제
  const deleteFileImg = (index) => {
    const updatedFiles = [...imgfile];
    updatedFiles[index] = null;
    setImgFile(updatedFiles);
  };

  return (
    <Center>
      <Container>
        <Title>작가 페이지 커스텀</Title>
        <Line />
        <Row>
          <label htmlFor="file">
            <PhotoContainer>
              <Profile src={profileImg ? profileImg : profile} />
              <InputImg
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={saveProfileImgFile}
                ref={imgRef2}
              ></InputImg>
              <Change>작가 사진 변경</Change>
            </PhotoContainer>
          </label>
          <InputContainer>
            <SubTitle>작가명</SubTitle>
            <Input />
            <SubTitle>가격표 사진 업로드</SubTitle>
            <Row2>
              {imgfile.map((imgFile, index) => (
                <ImgContainer key={index} imgfile={imgFile}>
                  <DeleteImgBtn
                    imgfile={imgFile}
                    onClick={() => deleteFileImg(index)}
                    src={deleteIcon}
                  />
                  <PreImg src={imgFile ? imgFile : ``} />
                </ImgContainer>
              ))}
              <InputImg
                type="file"
                name="file"
                id={`file-${imgfile.length}`}
                accept="image/*"
                onChange={saveImgFile}
                ref={(el) => (imgRef.current[imgfile.length] = el)}
              />
              <label htmlFor={`file-${imgfile.length}`}>
                <Plus src={plus} />
              </label>
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
          <InputImg2 src={imgPlus} />
          <InputImg2 src={imgPlus} />
        </InputContainer>
        <ChangeBtn>변경하기</ChangeBtn>
      </Container>
    </Center>
  );
};

const ImgContainer = styled.div`
  display: ${(props) => (props.imgfile ? "block" : "none")};
  height: ${(props) => (props.imgfile ? "100%" : "0px")};
`;

const DeleteImgBtn = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  margin-left: 90px;
  margin-top: 7px;
  cursor: pointer;
  display: ${(props) => (props.imgfile ? "block" : "none")};
`;

const PreImg = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 22px;
  margin-right: 2rem;
`;

const Plus = styled.img`
  width: 38px;
  height: 50.091px;
  margin-top: -1rem;
  cursor: pointer;
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
  cursor: pointer;
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
  border-radius: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 560px;
  height: 44px;
  border: none;
  padding-left: 1rem;
  outline: none;
  font-size: 16px;
`;

const Input3 = styled(Input)`
  width: 510px;
  margin-right: 1rem;
`;

const Input2 = styled.textarea`
  height: 137px;
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 550px;
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 16px;
`;

const InputImg = styled(Input)`
  display: none;
`;

const InputImg2 = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 0.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
`;

const InputContainer = styled.div``;

export default Custom;
