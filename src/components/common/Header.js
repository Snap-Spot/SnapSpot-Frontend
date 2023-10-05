import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getMyProfile } from "../../api/member";
import useMobileDetection from "./mobileDetection";
import profile from "../../assets/header/profile.png";
import logo from "../../assets/header/logo.png";
import mobilelogo from "../../assets/header/mobilelogo.png";
import menu from "../../assets/header/menu.png";
import HomeMenu from "./HomeMenu";
import SearchBox from "./SearchBox";

const Header = (props) => {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();
  const [profileData, setProfileData] = useState({});
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  const getData = async () => {
    try {
      const data = await getMyProfile();
      setProfileData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openModal = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const onClickLogo = () => {
    navigate(`/`);
  };

  const onClickPhotogreapher = () => {
    navigate(`/photographers`);
  };

  const onClickFeed = () => {
    navigate(`/spot-list`);
  };

  const onClickMyPage = () => {
    navigate(`/mypage`);
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
          <RightSection className={props.isAuthPage ? "hidden" : ""}>
            {isMobile ? null : <SearchBox />}
          </RightSection>
          <RightSection className={props.isAuthPage ? "hidden" : ""}>
            <Menu>
              <div className="subMenu" onClick={onClickPhotogreapher}>
                사진작가
              </div>
              <div className="subMenu" onClick={onClickFeed}>
                피드
              </div>
              <img
                className="mypage"
                src={profileData.profile}
                onClick={onClickMyPage}
                alt=""
              />
              <img className="menu" onClick={openModal} src={menu} alt="메뉴" />
            </Menu>
          </RightSection>
        </Main>
        <RightSection className={props.isAuthPage ? "hidden" : ""}>
          {isMobile ? <SearchBox /> : null}
        </RightSection>
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

const MobileLogo = styled.img`
  display: none;

  @media (min-width: 769px) and (max-width: 1225px) {
    display: flex;
    width: 1.84rem;
    height: 1.5rem;
    margin-right: 2rem;
  }
`;

// 로고 오른쪽 섹션 - 회원가입/로그인 페이지일 경우 보이지 않음
const RightSection = styled.div`
  &.hidden {
    visibility: hidden;
  }
`;
