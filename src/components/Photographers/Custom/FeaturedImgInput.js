import styled from "styled-components";
import imgPlus from "../../../assets/photograph/imgPlus.png";
import { useState, useRef } from "react";

const FeaturedImgInput = ({ images }) => {
  let defaultImg = images ? Object.values(images) : [];
  const [featuredImgfiles, setFeaturedImgFiles] = useState(defaultImg); // 대표 이미지

  const featuredImgRef = useRef([]);

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

  return (
    <>
      <SubTitle>대표 사진 업로드 (최대 10장)</SubTitle>
      {featuredImgfiles.map((imgfile, index) => (
        <ImgContainer key={index} imgfile={imgfile}>
          {imgfile && (
            <PreImgs src={imgfile} onClick={() => deleteFileImgs(index)} />
          )}
        </ImgContainer>
      ))}
      <InputImg
        type="file"
        name="file"
        id={`file-${featuredImgfiles.length}`}
        accept="image/*"
        onChange={saveImgFiles}
        ref={(el) => (featuredImgRef.current[featuredImgfiles.length] = el)}
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
    </>
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
    display: ${(props) => (props.imgfile ? "inline" : "none")};
  }
`;

const InputImg = styled.input`
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

export default FeaturedImgInput;
