import React from "react";
import Header from "../../components/common/Header";
import { styled } from "styled-components";
import ProfileContainer from "../../components/Mypage-User/Mypage/ProfileContainer";
import MyMenu from "../../components/Mypage-User/Mypage/MyMenu";
const UserMypage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="title">마이페이지</div>
        <div className="container">
          <ProfileContainer />
          <Line />
          <MyMenu id="0" />
          <Line />
          <MyMenu id="1" />
        </div>
        <MobileLogout>로그아웃</MobileLogout>
      </Wrapper>
    </>
  );
};

export default UserMypage;

const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    //모바일
    width: 85%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    margin-top: 23px;
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
const MobileLogout = styled.div`
  width: 100%;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    //모바일
    display: flex;
    justify-content: center;
    //푸터 수정 후 위치 재수정해야함
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(--darkgrey, #777);
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 121.5%; /* 12.15px */
    text-decoration-line: underline;
  }
`;
