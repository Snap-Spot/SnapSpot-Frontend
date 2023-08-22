import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import profile from "../../assets/header/profile.png";
import logo from "../../assets/header/logo.png";
import mobilelogo from "../../assets/header/mobilelogo.png";
import search from "../../assets/header/search.png";
import menu from "../../assets/header/menu.png";
import HomeMenu from "./HomeMenu";

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setisMobile] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 여부 결정
  const resizingHandler = () => {
    if (window.innerWidth <= 768) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setisMobile(true);
    }
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  const openModal = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const onClickLogo = () => {
    navigate(`/`);
  };

  return (
    <Wrapper>
      <HeaderDiv>
        <Main>
          <div className="logo">
            {isMobile ? (
              <img src={mobilelogo} alt="로고" onClick={onClickLogo} />
            ) : (
              <img src={logo} alt="로고" onClick={onClickLogo} />
            )}
          </div>
          {isMobile ? null : ( //모바일이 아닐 경우 Search Box
            <Search>
              <input placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."></input>
              <img src={search} alt="검색하기" />
            </Search>
          )}
          <Menu>
            <div className="subMenu">사진작가</div>
            <div className="subMenu">피드</div>
            <img className="mypage" src={profile} alt="마이페이지" />
            <img className="menu" onClick={openModal} src={menu} alt="메뉴" />
          </Menu>{" "}
        </Main>
        {isMobile ? ( //모바일일 때 Search Box
          <SearchDiv>
            <Search>
              <input placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."></input>
              <img src={search} alt="검색하기" />
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
    margin-right: 6.625rem;

    img {
      width: 13rem;

      @media (max-width: 768px) {
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

  margin-left: 2.5rem;

  .subMenu {
    padding: 0.75rem;
    gap: 0.75rem;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    color: #3c3aac;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 68.5%;
    min-width: 4.375rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mypage {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 2.75rem;
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
  width: 31.938rem;
  height: 3rem;
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
    font-size: 1.125rem;
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
    width: 1.5rem;
    margin-right: 2rem;
    @media (max-width: 768px) {
      width: 1rem;
      height: 1rem;

      margin-right: 1rem;
    }
  }
`;
