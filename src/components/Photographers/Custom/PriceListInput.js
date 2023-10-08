import styled from "styled-components";
import plus from "../../../assets/photograph/plus.png";
import { useState, useRef } from "react";

const PriceListInput = ({ priceimg, setPaymentImage }) => {
  const [previewImg, setPreviewImg] = useState("");
  const imgRef = useRef();

  // 가격표 이미지 프리뷰
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    setPaymentImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e) => {
      setPreviewImg(e.target.result);
    };
  };

  // 가격표 이미지 프리뷰 삭제
  const deleteFileImg = () => {
    setPreviewImg("");
    setPaymentImage("");
  };

  return (
    <>
      <SubTitle>가격표 사진 업로드</SubTitle>
      <Row2>
        <ImgContainer priceimg={priceimg}>
          <PreImgs
            src={previewImg || priceimg}
            onClick={() => deleteFileImg()}
          />
        </ImgContainer>
        <InputImg
          type="file"
          name="file"
          id={`file-price`}
          accept="image/*"
          onChange={saveImgFile}
          ref={imgRef}
        />
        <label htmlFor={`file-price`}>
          <Plus src={plus} />
        </label>
      </Row2>
    </>
  );
};

const ImgContainer = styled.div`
  position: relative;
  display: ${(props) => (props.priceimg ? "inline" : "none")};
  height: ${(props) => (props.priceimg ? "100%" : "0px")};

  @media (max-width: 768px) {
    display: ${(props) => (props.priceimg ? "inline" : "none")};
  }
`;

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

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InputImg = styled.input`
  display: none;
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

export default PriceListInput;
