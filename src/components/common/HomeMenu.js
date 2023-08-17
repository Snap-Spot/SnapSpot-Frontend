import React from "react";
import { styled } from "styled-components";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";

const HomeMenu = ({ isHomeMenuOpen, setIsHomeMenuOpen }) => {
  return (
    <Wrapper>
      <MenuDiv>
        <Menu isFirst>
          <p>스팟 리스트</p>
        </Menu>
        <Line />
        <Menu>
          <p>작가 리스트</p>
        </Menu>
        <Line />
        <Menu isLast>
          <p>문의하기</p>
        </Menu>
      </MenuDiv>
    </Wrapper>
  );
};

export default HomeMenu;

const Wrapper = styled.div`
  position: fixed;
  top: 55px;
  right: 16px;
`;

const MenuDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 160px;
  border-radius: 22px;
  background: var(--lesswhite, #f6f6f6);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) =>
    props.isFirst ? "22px 22px 0 0" : props.isLast ? "0 0 22px 22px" : "0"};

  p {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 29.86px;
  }

  &:hover {
    background: #3c3aac;
  }

  &:hover p {
    color: white;
  }
`;

const Line = styled.div`
  width: 181.161px;
  height: 0.5px;
  background: #cecece;
`;
