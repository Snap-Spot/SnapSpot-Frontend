import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useMobileDetection from "./mobileDetection";

import profile from "../../assets/header/profile.png";
import logo from "../../assets/header/logo.png";
import mobilelogo from "../../assets/header/mobilelogo.png";
import search from "../../assets/header/search.png";
import menu from "../../assets/header/menu.png";
import HomeMenu from "./HomeMenu";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();

  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  const openModal = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const onClickLogo = () => {
    navigate(`/`);
  };

  const onClickPhotogreapher = () => {
    navigate(`/photographer`);
  };

  const onClickFeed = () => {
    navigate(`/spot-list`);
  };

  const onClickMyPage = () => {
    navigate(`/mypage`);
  };

  const onClickSearchBtn = () => {
    navigate(`/search`);
  };

  return (
    <Wrapper>
      <HeaderDiv>
        <Main>
          <div className="logo">
            <img
              src={isMobile ? mobilelogo : logo}
              alt="로고"
              onClick={onClickLogo}
            />
          </div>
          <MobileLogo src={mobilelogo} alt="로고" onClick={onClickLogo} />
          {isMobile ? null : ( //모바일이 아닐 경우 Search Box
            <Search>
              <input placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."></input>
              <img onClick={onClickSearchBtn} src={search} alt="검색하기" />
            </Search>
          )}
          <Menu>
            <div className="subMenu" onClick={onClickPhotogreapher}>
              사진작가
            </div>
            <div className="subMenu" onClick={onClickFeed}>
              피드
            </div>
            <img
              className="mypage"
              onClick={onClickMyPage}
              src={profile}
              alt="마이페이지"
            />
            <img className="menu" onClick={openModal} src={menu} alt="메뉴" />
          </Menu>
        </Main>
        {isMobile ? ( //모바일일 때 Search Box
          <SearchDiv>
            <Search>
              <input placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."></input>
              <img onClick={onClickSearchBtn} src={search} alt="검색하기" />
            </Search>
          </SearchDiv>
        ) : null}
      </HeaderDiv>
      {isMobile && isHomeMenuOpen && (
        <HomeMenu
          isHomeMenuOpen={isHomeMenuOpen}
          setIsHomeMenuOpen={setIsHomeMenuOpen}
        />
      )}
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div``;

const HeaderDiv = styled.div`
  width: 100%;
  height: 6.125rem;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 0.875rem 1rem 0.875rem 1rem;
  }

  .logo {
    margin-right: 2.5rem;

    img {
      display: flex;
      width: 14.375rem;
      height: 1.5rem;
      justify-content: center;
      align-items: flex-end;
      gap: 1.695rem;
      flex-shrink: 0;

      @media (min-width: 769px) and (max-width: 1225px) {
        display: none;
      }

      @media (max-width: 1225px) {
        width: 1.84rem;
        height: 1.5rem;
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 0rem;

  .subMenu {
    padding: 0.5rem;
    gap: 0.75rem;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    color: #3c3aac;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 68.5%;
    min-width: 4.375rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mypage {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    margin-right: 1rem;
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin-right: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1.5rem;
    }
  }

  .menu {
    width: 1.25rem;
    height: 1.063rem;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
`;

const Search = styled.div`
  display: flex;
  width: 26rem;
  height: 2.7rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 3.25rem;
  background: #e6e6e6;
  margin-right: 2rem;

  @media (max-width: 768px) {
    /* width: 22.375rem; */
    width: 95%;
    height: 2.375rem;
    margin-right: 0rem;
  }

  input {
    width: 22.25rem;
    height: 1.25rem;
    border: none;
    background-color: #e6e6e6;
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 1.875rem;

    @media (max-width: 768px) {
      width: 16rem;
      height: 1.25rem;
      font-size: 0.75rem;
      margin-left: 1.25rem;
    }

    @media (max-width: 280px) {
      width: 16rem;
      height: 1.25rem;
      font-size: 0.563rem;
      margin-left: 0.938rem;
    }
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--transparent-grey, rgba(129, 129, 129, 0.4));
  }
  img {
    width: 1.3rem;
    margin-right: 2rem;
    @media (max-width: 768px) {
      width: 1rem;
      height: 1rem;

      margin-right: 1rem;
    }
  }
`;

const MobileLogo = styled.img`
  display: none;

  @media (min-width: 769px) and (max-width: 1225px) {
    display: flex;
    width: 1.84rem;
    height: 1.5rem;
    margin-right: 2rem;
  }
`;
