import styled from "styled-components";
import profile from "../../../assets/photograph/ex_profile.png";
import setting from "../../../assets/photograph/setting.png";
import { useNavigate } from "react-router-dom";

const ProfileBox = () => {
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <Profile src={profile} />
      <Column>
        <NickName>닉네임</NickName>
        <Email>hello@snapspot.com</Email>
      </Column>
      <Setting
        src={setting}
        onClick={() => navigate("/photographer/setting")}
      />
      <LogOutBtn>로그아웃</LogOutBtn>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Column = styled.div``;

const NickName = styled.h3`
  font-size: 20px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Email = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const LogOutBtn = styled.button`
  align-self: flex-start;
  margin-top: 1rem;
  border-radius: 16px;
  background: #d9d9d9;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 15px;
  line-height: 128.5%;
  margin-left: auto;
  margin-right: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
    font-weight: 500;
  }
`;

const Profile = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
`;

const Setting = styled.img`
  width: 1rem;
  height: 1rem;
  align-self: flex-start;
  margin-top: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: -1rem;
  }
`;

export default ProfileBox;
