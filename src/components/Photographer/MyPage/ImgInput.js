import imgPlus from "../../../assets/photograph/imgPlus.png";
import deleteIcon from "../../../assets/photograph/deleteIcon.png";
import styled from "styled-components";
import { useState, useRef } from "react";

const ImgInput = () => {
  const [featuredImgfiles, setFeaturedImgFiles] = useState([]); // 대표 이미지
  const featuredImgRef = useRef([]);

  // 이미지 프리뷰
  const saveImgFiles = () => {
    const file = featuredImgRef.current[featuredImgfiles.length].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFeaturedImgFiles((prevImgFiles) => [...prevImgFiles, reader.result]);
    };
  };

  // 이미지 프리뷰 삭제
  const deleteFileImgs = (index) => {
    const updatedFiles = [...featuredImgfiles];
    updatedFiles[index] = null;
    setFeaturedImgFiles(updatedFiles);
  };

  return (
    <>
      {featuredImgfiles.map((imgfile, index) => (
        <ImgContainer key={index} imgfile={imgfile}>
          <DeleteImgBtn
            imgfile={imgfile}
            onClick={() => deleteFileImgs(index)}
            src={deleteIcon}
          />
          <PreImgs src={imgfile ? imgfile : ``} />
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
        <InputImg2 src={imgPlus} />
      </label>
    </>
  );
};

const ImgContainer = styled.div`
  display: ${(props) => (props.imgfile ? "block" : "none")};
  height: ${(props) => (props.imgfile ? "100%" : "0px")};
`;

const PreImgs = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 22px;
  margin-right: 2rem;
`;

const InputImg = styled.img`
  display: none;
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

const InputImg2 = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export default ImgInput;
