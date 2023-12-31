import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import git from "../../assets/common/git.png";
import instagram from "../../assets/common/instagram.png";

const Footer = () => {
  const onClickGithub = () => {
    window.open("https://github.com/Snap-Spot");
  };

  const onClickInstagram = () => {
    window.open(
      "https://instagram.com/snapspot_official?igshid=MzRlODBiNWFlZA=="
    );
  };

  return (
    <Wrapper>
      <div className="copyright">
        <p>Copyright © 2023 EFUB 3RD SNAPSPOT TEAM</p>
        <p>이선의 곽지우 조민서 이주희 김민정 송지민 김예지 조은비 김이원</p>
      </div>
      <div className="icon">
        <InstagramLogo
          src={instagram}
          onClick={onClickInstagram}
          alt="인스타그램"
        />
        <GitLogo src={git} onClick={onClickGithub} alt="깃허브" />
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 162px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;

  p {
    margin: 0;
    color: var(--Grey-5, #a9a8b7);

    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .copyright {
    margin-left: 10%;
  }

  .icon {
    margin-right: 10%;
  }

  //모바일
  @media (max-width: 768px) {
    display: none;
  }
`;

const GitLogo = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: 16px;
`;

const InstagramLogo = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
