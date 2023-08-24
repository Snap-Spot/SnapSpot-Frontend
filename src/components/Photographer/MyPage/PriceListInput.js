import deleteIcon from "../../../assets/photograph/deleteIcon.png";
import plus from "../../../assets/photograph/plus.png";
import styled from "styled-components";
import { useState, useRef } from "react";

const PriceListInput = () => {
  const [priceImgfiles, setPriceImgFiles] = useState([]); // 대표 이미지
  const priceImgRef = useRef([]);

  // 이미지 프리뷰
  const savePriceImgFiles = () => {
    const file = priceImgRef.current[priceImgfiles.length].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPriceImgFiles((prevImgFiles) => [...prevImgFiles, reader.result]);
    };
  };

  // 이미지 프리뷰 삭제
  const deleteFileImgs = (index) => {
    const updatedFiles = [...priceImgfiles];
    updatedFiles[index] = null;
    setPriceImgFiles(updatedFiles);
  };

  return (
    <>
      {priceImgfiles.map((imgfile, index) => (
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
        id={`file-${priceImgfiles.length}`}
        accept="image/*"
        onChange={savePriceImgFiles}
        ref={(el) => (priceImgRef.current[priceImgfiles.length] = el)}
      />
      <label htmlFor={`file-${priceImgfiles.length}`}>
        <Plus src={plus} />
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

const Plus = styled.img`
  width: 38px;
  height: 50.091px;
  cursor: pointer;
`;

export default PriceListInput;
