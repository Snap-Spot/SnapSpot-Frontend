import styled from "styled-components";
import profile from "../../assets/photograph/ex_profile.png";
import plus from "../../assets/photograph/plus.png";
import imgPlus from "../../assets/photograph/imgPlus.png";
import Dropdown from "../../components/Photographer/Custom/Dropdown";
import { useState, useEffect, useRef } from "react";

const Custom = () => {
  const [imgfile, setImgFile] = useState([]); // 가격표 이미지
  const [profileImg, setProfileImg] = useState(""); // 프로필 이미지
  const [featuredImgfiles, setFeaturedImgFiles] = useState([]); // 대표 이미지
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const imgRef = useRef([]);
  const imgRef2 = useRef();
  const featuredImgRef = useRef([]);

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

  // 대표 이미지 프리뷰
  const saveImgFiles = () => {
    const file = featuredImgRef.current[featuredImgfiles.length].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFeaturedImgFiles((prevImgFiles) => [...prevImgFiles, reader.result]);
    };
  };

  // 대표 이미지 프리뷰 삭제
  const deleteFileImgs = (index) => {
    const updatedFiles = featuredImgfiles.filter((_, i) => i !== index);
    setFeaturedImgFiles(updatedFiles);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {isMobile && <Line2 />}
          <InputContainer>
            <SubTitle>작가명</SubTitle>
            <Input />
            <SubTitle>가격표 사진 업로드</SubTitle>
            <Row2>
              {imgfile.map((imgFile, index) => (
                <ImgContainer key={index} imgfile={imgFile}>
                  <PreImgs
                    src={imgFile ? imgFile : ``}
                    onClick={() => deleteFileImg(index)}
                  />
                </ImgContainer>
              ))}
              <InputImg
                type="file"
                name="file"
                id={`file-${imgfile.length}-price`}
                accept="image/*"
                onChange={saveImgFile}
                ref={(el) => (imgRef.current[imgfile.length] = el)}
              />
              <label htmlFor={`file-${imgfile.length}-price`}>
                <Plus src={plus} />
              </label>
            </Row2>
          </InputContainer>
        </Row>
        <Line2 />
        <Center2>
          <InputContainer>
            <SubTitle>활동 지역 설정</SubTitle>
            <Input />
            <SubTitle>SNS 등록</SubTitle>
            <Input3 />
            <SubTitle>한 줄 소개글 등록 (최대 500자)</SubTitle>
            <Input2 />
            <SubTitle>전문 분야 등록</SubTitle>
            <Dropdown />
            <SubTitle>태그 입력</SubTitle>
            <TagInput />
            <TagInput />
            <TagInput />
            <SubTitle>대표 사진 업로드 (최대 10장)</SubTitle>
            {featuredImgfiles.map((imgfile, index) => (
              <ImgContainer key={index} imgfile={imgfile}>
                {imgfile && (
                  <PreImgs
                    src={imgfile}
                    onClick={() => deleteFileImgs(index)}
                  />
                )}
              </ImgContainer>
            ))}
            <InputImg
              type="file"
              name="file"
              id={`file-${featuredImgfiles.length}`}
              accept="image/*"
              onChange={saveImgFiles}
              ref={(el) =>
                (featuredImgRef.current[featuredImgfiles.length] = el)
              }
            />
            <label htmlFor={`file-${featuredImgfiles.length}`}>
              {featuredImgfiles.length < 10 && (
                <>
                  {[...Array(10 - featuredImgfiles.length)].map((_, index) => (
                    <InputImg2 key={index} src={imgPlus} />
                  ))}
                </>
              )}
            </label>
          </InputContainer>
        </Center2>
        <ChangeBtn>변경하기</ChangeBtn>
      </Container>
    </Center>
  );
};

const PreImgs = styled.img`
  width: 115px;
  height: 115px;
  margin-right: 0.5rem;
  border-radius: 22px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    height: 88px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: ${(props) => (props.imgfile ? "inline" : "none")};
  height: ${(props) => (props.imgfile ? "100%" : "0px")};

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Plus = styled.img`
  width: 38px;
  height: 50.091px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 28px;
    height: 39px;
    margin-left: 1rem;
  }
`;

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 7rem;
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

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-right: 0;
  }
`;

const Change = styled.h3`
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
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

const Row2 = styled(Row)`
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center2 = styled(Center)`
  margin-left: 17rem;
  width: 37rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
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

const Profile = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-right: 1rem;
  }
`;

const Input = styled.input`
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  width: 560px;
  height: 44px;
  border: none;
  padding-left: 1.4rem;
  outline: none;
  font-size: 16px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 323px;
    height: 34px;
    font-size: 14px;
  }
`;

const Input3 = styled(Input)`
  width: 510px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 323px;
    height: 34px;
  }
`;

const TagInput = styled(Input)`
  width: 8rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 5.2rem;
    margin-right: 0.5rem;
  }
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
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 323px;
    height: 85px;
    font-size: 14px;
  }
`;

const InputImg = styled(Input)`
  display: none;
`;

const InputImg2 = styled.img`
  width: 115px;
  height: 115px;
  margin-right: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 79px;
    height: 79px;
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
