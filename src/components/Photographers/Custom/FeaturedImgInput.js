import styled from "styled-components";
import imgPlus from "../../../assets/photograph/imgPlus.png";
import { useState, useRef, useEffect } from "react";

const FeaturedImgInput = ({ images, setImage }) => {
  const [previewImg, setPreviewImg] = useState({});
  const featuredImgRef = useRef([]);

  useEffect(() => {
    setPreviewImg(images);
  }, [images]);

  // 대표 이미지 프리뷰
  const saveImgFiles = (index) => {
    const file = featuredImgRef.current[index].files[0];

    const updatedImages = { ...images };
    updatedImages[`image${index + 1}`] = file;
    setImage(updatedImages);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const updatedImages = { ...images };
      updatedImages[`image${index + 1}`] = reader.result;
      setPreviewImg(updatedImages);
    };
  };

  // 대표 이미지 프리뷰 삭제
  const deleteFileImgs = (index) => {
    console.log(index);
    const updatedImages = { ...images };
    delete updatedImages[`image${index + 1}`];
    setImage(updatedImages);
  };

  return (
    <>
      <SubTitle>대표 사진 업로드 (최대 10장)</SubTitle>
      {Object.keys(previewImg).map((key, index) => (
        <ImgContainer key={index} imgfile={images[key]}>
          {previewImg[key] && (
            <PreImgs
              src={previewImg[key]}
              onClick={() => deleteFileImgs(index)}
            />
          )}
        </ImgContainer>
      ))}
      <InputImg
        type="file"
        name="file"
        id={`file-${Object.values(previewImg).filter((el) => !!el).length}`}
        accept="image/*"
        onChange={() =>
          saveImgFiles(Object.values(previewImg).filter((el) => !!el).length)
        }
        ref={(el) =>
          (featuredImgRef.current[
            Object.values(previewImg).filter((el) => !!el).length
          ] = el)
        }
      />
      <label
        htmlFor={`file-${
          Object.values(previewImg).filter((el) => !!el).length
        }`}
      >
        {Object.values(previewImg).filter((el) => !!el).length < 10 && (
          <>
            {[
              ...Array(
                10 - Object.values(previewImg).filter((el) => !!el).length
              ),
            ].map((_, index) => (
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
