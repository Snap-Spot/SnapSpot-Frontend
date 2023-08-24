import React from "react";
import { styled } from "styled-components";
import footerLogo from "../../assets/common/footerLogo.png";
import inquiry from "../../assets/common/inquiry.png";
const Footer = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <p className="logo">
          <img src={footerLogo} alt="로고" />
        </p>
        <p className="inquiry">
          <img src={inquiry} alt="문의하기" /> 문의하기
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 453px;
  background: linear-gradient(
    180deg,
    rgba(4, 0, 255, 0) 0%,
    rgba(0, 70, 250, 0.08) 100%
  );
  p {
    margin: 0;
  }
  .wrapper {
    width: 191px;
    padding-top: 323px;
    padding-left: 73%;
    display: flex;
    flex-direction: column;
    align-items: end;
    .logo {
      img {
        width: 191px;
      }
    }

    .inquiry {
      cursor: pointer;
      height: 29px;

      display: flex;
      align-items: center;
      font-weight: 500;

      img {
        width: 22px;
        margin-right: 8px;
      }
    }
  }

  //모바일
  @media (max-width: 768px) {
    height: 225px;
    .wrapper {
      display: none;
    }
  }
`;
