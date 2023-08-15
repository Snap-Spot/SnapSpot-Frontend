import { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";
import HomeMenu from "./HomeMenu";

const Header = () => {
  //   const navigate = useNavigate();

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

  return (
    <Wrapper>
      <HeaderDiv>
        <Main>
          <div className="logo">
            <img src={logo} alt="로고" />
          </div>{" "}
          {isMobile ? null : ( //모바일이 아닐 경우 Search Box
            <Search>
              <input placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."></input>
              <img src={search} alt="검색하기" />
            </Search>
          )}
          <Menu>
            <div className="subMenu">스팟</div>
            <div className="subMenu">사진작가</div>
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
      {isHomeMenuOpen && (
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
  height: 98px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  /* margin: 0; */

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

    margin: 14px 16px 14px 17px;
    /* margin-bottom: 17px; */
  }

  .logo {
    margin-right: 72px;
    img {
      width: 161px;
      height: 35px;

      @media (max-width: 768px) {
        width: 98px;
        height: 21px;
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

  .subMenu {
    width: 66px;
    padding: 12px;
    gap: 12px;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    color: var(--sub-2, #008ede);
    font-family: "Godo B";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mypage {
    width: 44px;
    height: 44px;
    margin-right: 16px;
    margin-left: 27px;

    @media (max-width: 768px) {
      margin-right: 16px;
    }
  }

  .menu {
    width: 20px;
    height: 17px;
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
  width: 511px;
  height: 60px;
  justify-content: space-between;
  align-items: center;

  border-radius: 52px;
  background: #e6e6e6;
  margin-right: 71px;

  @media (max-width: 768px) {
    width: 358px;
    height: 38px;
    margin-right: 0px;
  }

  input {
    width: 356px;
    height: 20px;
    border: none;
    background-color: #e6e6e6;
    font-family: Godo M;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 26px;
    @media (max-width: 768px) {
      width: 256px;
      height: 20px;
      font-size: 12px;
    }
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--transparent-grey, rgba(129, 129, 129, 0.4));
  }
  img {
    width: 32px;
    height: 32px;
    margin-right: 32px;
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;

      margin-right: 16px;
    }
  }
`;
