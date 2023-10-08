import React, { useRef, useState, useEffect } from "react";
import { styled } from "styled-components";
import { getMyProfile, updateMyProfile } from "../../../api/member";

const SettingsForm = () => {
  const imgRef = useRef();
  const [inputs, setInputs] = useState({
    profileImage: "",
    nickname: "",
    email: "",
    password: "",
  });
  const [previewImg, setPreviewImg] = useState(null);
  const [initialImage, setInitialImage] = useState("");
  const [isPhotographer, setIsPhotographer] = useState(false);
  //사진 첨부 및 미리보기
  const uploadImg = () => {
    let file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e) => {
      setPreviewImg(e.target.result);

      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        profileImage: file, // name 키를 가진 값을 value 로 설정
      });
    };
  };

  const getData = async () => {
    try {
      const data = await getMyProfile();
      setInputs({
        nickname: data.nickname,
        profileImage: "",
        email: data.email,
        password: "",
      });
      setPreviewImg(data.profile);
      setInitialImage(data.profile);

      if (data.role === "ROLE_MEMBER") {
        setIsPhotographer(false);
      } else if (data.role === "ROLE_PHOTOGRAPHER") {
        setIsPhotographer(true);
      }
    } catch (err) {
      //프로필 정보 조회 안될때 (unauthorized: 로그인 안 했을때)
      //로그인 화면으로 리다이렉트
      alert("로그인 되지 않았습니다. 로그인화면으로 이동합니다.");
      window.location.href = "/login";
    }
  };
  const updateData = async () => {
    try {
      const res = await updateMyProfile(isPhotographer, inputs, initialImage);

      if (res.status === 200) {
        alert("회원정보가 수정되었습니다.");
        window.location.href = "/mypage";
      }
    } catch (err) {
      if (err.response.data.status === 500) {
        alert(err.response.data.error);
      }
    }
  };
  const { profileImage, nickname, email, password } = inputs;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <ProfileImg>
          <img src={previewImg} alt="" />
          <input
            className="input"
            accept=".jpg, .jpeg, .png"
            type="file"
            id="file"
            multiple
            onChange={uploadImg}
            ref={imgRef}
          />
          <label htmlFor="file">
            <div className="btn">사진 변경</div>
          </label>
        </ProfileImg>
        <div className="line" />
        <TextInputs>
          <div className="item">
            <div className="subject">닉네임</div>
            <input name="nickname" onChange={handleChange} value={nickname} />
          </div>
          <div className="item">
            <div className="subject">이메일</div>
            <input name="email" onChange={handleChange} value={email} />
          </div>
          <div className="item">
            <div className="subject">비밀번호</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>

          <div className="btn" onClick={updateData}>
            변경하기
          </div>
        </TextInputs>
      </div>
    </Wrapper>
  );
};

export default SettingsForm;

const Wrapper = styled.div`
  margin-top: 32px;
  .container {
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .line {
    @media (max-width: 768px) {
      //모바일
      background: #dbdbdb;
      width: 100%;
      height: 1px;
      margin-top: 16px;
      margin-bottom: 32px;
    }
  }
`;
const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    //모바일
    flex-direction: row;
  }
  justify-content: start;
  align-items: center;
  img {
    width: 116px;
    height: 116px;
    flex-shrink: 0;
    border-radius: 50%;
    background: lightgray;

    @media (max-width: 768px) {
      //모바일
      width: 35px;
      height: 35px;
    }
  }
  .btn {
    margin-top: 22px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 68.5%; /* 12.33px */
    @media (max-width: 768px) {
      //모바일
      margin-left: 20px;
      margin-top: 0px;
    }
  }
  .input {
    display: none;
  }
`;
const TextInputs = styled.div`
  margin-left: 68px;
  @media (max-width: 768px) {
    //모바일
    margin-left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subject {
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
  .item {
    @media (max-width: 768px) {
      //모바일
      width: 95%;
    }
  }
  input {
    width: 558px;
    height: 44px;
    border-radius: 22px;
    background: var(--lesswhite, #f6f6f6);
    border: none;
    outline: none;
    padding: 0 1rem;
    box-sizing: border-box;
    margin-bottom: 26px;
    @media (max-width: 768px) {
      //모바일
      width: 100%;
      height: 34px;
      margin-bottom: 16px;
    }
  }
  .btn {
    display: flex;
    width: 558px;
    height: 46px;
    box-sizing: border-box;
    padding: 6px 15px;
    justify-content: center;
    align-items: center;
    margin-top: 74px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--main-font-color, #3c3aac);
    cursor: pointer;

    color: var(--white, #fff);
    text-align: center;
    @media (max-width: 768px) {
      //모바일
      width: 95%;
      margin-top: 49px;
      height: 34px;
    }
  }
`;
