import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import photo from "../../../assets/mypage/modals/photo.png";
import photographer from "../../../assets/mypage/modals/photographer.png";
import close from "../../../assets/mypage/modals/close.png";
import add from "../../../assets/mypage/modals/add.png";
import SearchList from "./SearchList";
import getS3ImgUrl from "../../../api/s3upload";
const AddSnapModal = () => {
  const imgRef = useRef();
  const [imgFile, setImgFile] = useState();
  const [previewImg, setPreviewImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  //사진 첨부 및 미리보기
  const uploadImg = () => {
    let file = imgRef.current.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e) => {
      setPreviewImg(e.target.result);
      //s3업로드 및 url 얻기
      const url = await getS3ImgUrl(file);
      console.log(url);
    };
  };
  //사진 첨부 취소
  const deleteImg = () => {
    imgRef.current.value = "";
    setPreviewImg();
    setImgFile();
  };
  return (
    <Wrapper>
      <Photo>
        <input
          className="input"
          accept=".jpg, .jpeg, .png"
          type="file"
          id="file"
          multiple
          onChange={uploadImg}
          ref={imgRef}
        />
        <div className="subject-subtitle">
          사진 첨부하기 &nbsp;&nbsp;&nbsp;
          <img className="icon" src={photo} alt="" />
        </div>
        {!previewImg && (
          <label htmlFor="file">
            <div className="addBtn">
              <div className="img" alt="" />
              <img className="add" src={add} alt="" />
            </div>
          </label>
        )}

        {previewImg && (
          <div className="preview">
            <img className="img" src={previewImg} alt="" />
            <img className="close" src={close} alt="" onClick={deleteImg} />
          </div>
        )}
      </Photo>

      <Photographer>
        <div className="subject-title">사진 작가</div>
        <div className="subject-subtitle">
          사진 작가 검색하기 &nbsp;&nbsp;&nbsp;
          <img src={photographer} alt="" />
        </div>
        <SearchList />
      </Photographer>

      <Location>
        <div className="subject-title">촬영 위치</div>
        <div className="subject-subtitle">촬영 위치 입력하기</div>
        <input placeholder="시/도/군 > 동/읍/면"></input>
      </Location>

      <Tags>
        <div className="subject-title"># 촬영 태그</div>
        <div className="subject-subtitle">촬영 태그 입력하기</div>
        <input placeholder="#"></input>
        <input placeholder="#"></input>
        <input placeholder="#"></input>
      </Tags>

      <Date>
        <div className="subject-title">촬영 일자</div>
        <div className="subject-subtitle">촬영 일자 입력하기</div>
        <input placeholder="0000년 00월 00일"></input>
      </Date>

      <Btn>등록</Btn>
    </Wrapper>
  );
};

export default AddSnapModal;
const Wrapper = styled.div`
  width: 100%;

  input {
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 13.21px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      padding: 0 14px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .subject-title {
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 16px;
    }
  }

  .subject-subtitle {
    margin-top: 8px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

const Photo = styled.div`
  margin-bottom: 45px;
  @media (max-width: 768px) {
    //모바일
    margin-bottom: 32px;
  }
  .icon {
    width: 26px;
    height: 23.303px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      //모바일
      width: 16px;
      height: 14.341px;
      flex-shrink: 0;
    }
  }
  .input {
    display: none;
  }

  .preview {
    position: relative;
    margin-top: 16.68px;
    display: flex;
    width: 140px;
    height: 140px;
    justify-content: flex-end;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 12px;
    background: lightgray 50% / cover no-repeat;

    .img {
      width: 140px;
      height: 140px;
      border-radius: 12px;
    }
    @media (max-width: 768px) {
      //모바일
      width: 80px;
      height: 80px;
      margin-top: 8px;

      .img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .addBtn {
    cursor: pointer;
    position: relative;
    margin-top: 16.68px;
    display: flex;
    width: 140px;
    height: 140px;
    justify-content: flex-end;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 12px;
    background: lightgray 50% / cover no-repeat;

    .img {
      width: 140px;
      height: 140px;
      border-radius: 12px;
    }
    @media (max-width: 768px) {
      //모바일
      width: 80px;
      height: 80px;
      margin-top: 8px;

      .img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .add {
    position: absolute;
    top: 50%;
    right: 50%;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    transform: translate(50%, -50%);
    @media (max-width: 768px) {
      //모바일
      width: 24px;
      height: 24px;
    }
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      //모바일
      width: 24px;
      height: 24px;
      top: 4px;
      right: 4px;
    }
  }
`;

const Photographer = styled.div`
  margin-bottom: 45px;
  img {
    width: 29px;
    height: 25px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      //모바일
      width: 18px;
      height: 15px;
    }
  }
`;

const Location = styled.div`
  margin-bottom: 45px;
  input {
    width: 575px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 22.5px;
    background: #d9d9d9;
    @media (max-width: 768px) {
      //모바일
      width: 100%;
      height: 25px;
    }
  }
`;

const Tags = styled.div`
  margin-bottom: 45px;
  input {
    width: 205px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 22.5px;
    background: #d9d9d9;
    margin-right: 25px;
    @media (max-width: 768px) {
      //모바일
      margin-right: 3%;
      width: 30%;
      height: 25px;
    }
  }
`;

const Date = styled.div`
  margin-bottom: 45px;
  input {
    width: 323px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 22.5px;
    background: #d9d9d9;
    @media (max-width: 768px) {
      //모바일
      width: 100%;
      height: 25px;
    }
  }
`;

const Btn = styled.div`
  cursor: pointer;
  margin: 79px auto 0;
  border-radius: 32px;
  background: #a6b9ff;
  display: flex;
  width: 240px;
  height: 60px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    //모바일
    margin: 37px auto 0;
    width: 120px;
    height: 40px;
    font-size: 14px;
  }
`;
