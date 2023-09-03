import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import profile from "../../assets/header/profile.png";
import logo from "../../assets/header/logo.png";
import search from "../../assets/header/search.png";
import menu from "../../assets/header/menu.png";

const HomeMenu = ({ isHomeMenuOpen, setIsHomeMenuOpen }) => {
  const navigate = useNavigate();

  const onClickPhotogreapher = () => {
    navigate(`/photographer`);
  };

  const onClickFeed = () => {
    navigate(`/spot-list`);
  };

  return (
    <Wrapper>
      <MenuDiv>
        <Menu isFirst onClick={onClickFeed}>
          <p>스팟 리스트</p>
        </Menu>
        <Line />
        <Menu onClick={onClickPhotogreapher}>
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
  z-index: 1;
  position: fixed;
  top: 3.438rem;
  right: 1rem;
`;

const MenuDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 13.5rem;
  height: 10rem;
  border-radius: 1.375rem;
  background: var(--lesswhite, #f6f6f6);
  box-shadow: 0.25rem 0.25rem 0.938rem 0rem rgba(0, 0, 0, 0.25);
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) =>
    props.isFirst
      ? "1.375rem 1.375rem 0rem 0rem"
      : props.isLast
      ? "0 0 1.375rem 1.375rem;"
      : "0"};

  p {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 1.429rem;
  }

  &:hover {
    background: #3c3aac;
  }

  &:hover p {
    color: white;
  }
`;

const Line = styled.div`
  width: 11.323rem;
  height: 0.031rem;
  background: #cecece;
`;
