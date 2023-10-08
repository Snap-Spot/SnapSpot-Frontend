import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import { styled } from "styled-components";
import ProfileContainer from "../../components/Mypage-User/Mypage/ProfileContainer";
import MyMenu from "../../components/Mypage-User/Mypage/MyMenu";
import { getMyProfile } from "../../api/member";
import { useLoadingContext } from "../../components/common/LoadingContext";
import Loading from "../../components/common/Loading";
const UserMypage = () => {
  const [isPhotographer, setIsPhotographer] = useState(false);
  const [profileData, setProfileData] = useState({});
  const { isLoading, startLoading, stopLoading } = useLoadingContext();

  const getData = async () => {
    try {
      startLoading();
      const data = await getMyProfile();
      setProfileData(data);

      //접속시 작가인지 일반 고객인지 결정
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
    } finally {
      stopLoading();
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Wrapper>
            <div className="title">마이페이지</div>
            <div className="container">
              <ProfileContainer profileData={profileData} />
              <Line />

              {!isPhotographer ? (
                <>
                  <MyMenu id="0" />
                  <SeperateLine />
                  <MyMenu id="1" />
                </>
              ) : (
                <MyMenu id="2" />
              )}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default UserMypage;

const Wrapper = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    margin-top: 17px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 18px;
    }
  }
  .container {
    width: 100%;
  }
`;

const Line = styled.div`
  width: 100%;
  background: #e6e6e6;
  height: 1px;
`;

const SeperateLine = styled.div`
  margin-top: 31px;
  width: 100%;
  background: #e6e6e6;
  height: 1px;
`;
