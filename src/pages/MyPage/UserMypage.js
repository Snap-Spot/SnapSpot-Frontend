import React, { useState } from "react";
import Header from "../../components/common/Header";
import { styled } from "styled-components";
import ProfileContainer from "../../components/Mypage-User/Mypage/ProfileContainer";
import MyMenu from "../../components/Mypage-User/Mypage/MyMenu";
const UserMypage = ({ isPhographer = false }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="title">마이페이지</div>
        <div className="container">
          <ProfileContainer />
          <Line />

          {!isPhographer ? (
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
