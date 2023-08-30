import styled from "styled-components";
import cancel from "../../../assets/photograph/cancel.png";
import { useState, useEffect, useRef } from "react";
import filebtn from "../../../assets/photograph/filebtn.png";

const FileInputModal = ({ setIsOpen, isOpen }) => {
  const [imgfile, setImgFile] = useState([]);
  const imgRef = useRef([]);

  const saveImgFile = () => {
    const file = imgRef.current[imgfile.length].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile((prevImgFiles) => [...prevImgFiles, reader.result]);
    };
  };

  const deleteFileImg = (index) => {
    const updatedFiles = [...imgfile];
    updatedFiles[index] = null;
    setImgFile(updatedFiles);
  };

  return (
    <>
      <Conatiner>
        <Header>
          <Title>파일 삽입</Title>
          <CancelIcon src={cancel} onClick={() => setIsOpen(!isOpen)} />
        </Header>
        <Message>업로드</Message>
        <InputImg
          type="file"
          name="file"
          id={`file-${imgfile.length}-photo`}
          accept="image/*"
          onChange={saveImgFile}
          ref={(el) => (imgRef.current[imgfile.length] = el)}
        />
        <label htmlFor={`file-${imgfile.length}-photo`}>
          <FileInput />
          <FileSelectBtn src={filebtn} />
        </label>
        <Row2>
          {imgfile.map((imgFile, index) => (
            <ImgContainer key={index} imgfile={imgFile}>
              <PreImgs
                src={imgFile ? imgFile : ``}
                onClick={() => deleteFileImg(index)}
              />
            </ImgContainer>
          ))}
        </Row2>
        <BtnContainer>
          <CancelBtn onClick={() => setIsOpen(!isOpen)}>취소</CancelBtn>
          <ConfirmBtn>확인</ConfirmBtn>
        </BtnContainer>
      </Conatiner>
      <BG></BG>
    </>
  );
};

const Row2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
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

const InputImg = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  position: relative;
  display: ${(props) => (props.imgfile ? "inline" : "none")};
  height: ${(props) => (props.imgfile ? "100%" : "0px")};

  @media (max-width: 768px) {
    display: flex;
  }
`;

const FileSelectBtn = styled.img`
  position: absolute;
  margin-top: -6rem;
  margin-left: 15rem;
  background: var(--sub-color, #5170de);
  display: flex;
  height: 43px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 5rem;
    margin-top: -5rem;
    width: 9.8rem;
    height: 38px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BG = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 130vh;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 30%;
`;

const FileInput = styled.div`
  border-radius: 20px;
  border: 1px solid var(--main-font-color, #3c3aac);
  display: flex;
  width: 39rem;
  height: 160px;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  background: var(--lesswhite, #f6f6f6);

  @media (max-width: 768px) {
    width: 18.5rem;
    height: 70px;
  }
`;

const CancelIcon = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const CancelBtn = styled.button`
  display: flex;
  width: 237px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  background: #e6e6e6;
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
    height: 50px;
    border-radius: 15px;
  }
`;

const ConfirmBtn = styled(CancelBtn)`
  background: #a6b9ff;
  cursor: pointer;
`;

const Conatiner = styled.div`
  position: absolute;
  top: 18rem;
  display: flex;
  width: 40rem;
  padding: 40px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  z-index: 2;

  @media (max-width: 768px) {
    width: 19rem;
    padding: 20px 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Message = styled.p`
  color: #3c3aac;
  align-self: flex-start;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export default FileInputModal;
