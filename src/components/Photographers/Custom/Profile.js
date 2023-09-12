import profile from "../../../assets/photograph/ex_profile.png";
import styled from "styled-components";
import { useState, useRef } from "react";

const Profile = () => {
  const [profileImg, setProfileImg] = useState(""); // 프로필 이미지

  const imgRef = useRef();

  // 프로필 이미지 프리뷰 생성
  const saveProfileImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
  };

  return (
    <label htmlFor="file">
      <PhotoContainer>
        <ProfileImg src={profileImg ? profileImg : profile} />
        <InputImg
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={saveProfileImgFile}
          ref={imgRef}
        ></InputImg>
        <Change>작가 사진 변경</Change>
      </PhotoContainer>
    </label>
  );
};

const Change = styled.h3`
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
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

const InputImg = styled.input`
  display: none;
`;

const ProfileImg = styled.img`
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

export default Profile;
