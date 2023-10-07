import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useMobileDetection from "./mobileDetection";
import search from "../../assets/header/search.png";

function SearchBox() {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickSearchBtn = () => {
    if (searchValue.length > 0) {
      navigate(`/search?keyword=${searchValue}`);
    } else {
      window.alert("검색어를 1자 이상 입력해 주세요.");
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearchBtn();
    }
  };

  return (
    <div>
      {isMobile ? (
        <SearchDiv>
          <Search>
            <input
              placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."
              value={searchValue}
              onChange={onInputChange}
              onKeyPress={handleOnKeyPress}
            ></input>
            <img onClick={onClickSearchBtn} src={search} alt="검색하기" />
          </Search>
        </SearchDiv> //모바일이 아닐 경우 Search Box
      ) : (
        <Search>
          <input
            placeholder="찾고 싶은 스팟이나 사진작가를 검색하세요."
            value={searchValue}
            onChange={onInputChange}
            onKeyPress={handleOnKeyPress}
          ></input>
          <img onClick={onClickSearchBtn} src={search} alt="검색하기" />
        </Search>
      )}
    </div>
  );
}

export default SearchBox;

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
