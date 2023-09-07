import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useState } from "react";
import search from "../../../assets/mypage/modals/search.png";
const SearchList = () => {
  //전체리스트 받아와서 filter
  const totalData = [
    "송지민 작가",
    "김지민 작가",
    "이지민 작가",
    "이지연 작가",
    "이지민 작가",
    "이지연 작가",
    "이지민 작가",
    "이지연 작가",
  ];
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    setShowList(true);
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setFilteredData([]);
      setShowList(false);
    } else {
      setFilteredData(totalData.filter((el) => el.includes(e.target.value)));
    }
  };

  const selectItem = (el) => {
    setKeyword(el);
    setShowList(false);
  };

  return (
    <>
      <InputContainer>
        <input onChange={handleChange} value={keyword}></input>
        <img src={search} alt="" />
      </InputContainer>
      {showList && (
        <ListContainer>
          <div className="list">
            {filteredData.map((el) => {
              return (
                <div className="item" onClick={() => selectItem(el)}>
                  {el}
                </div>
              );
            })}
          </div>
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;

const ListContainer = styled.div`
  margin-top: 7px;
  width: 570px;
  display: flex;
  align-items: center;
  height: 194px;
  flex-shrink: 0;
  border-radius: 29px;
  background: #fff;
  @media (max-width: 768px) {
    //모바일
    width: 100%;
  }

  .list {
    padding-left: 19px;
    height: 166px;
    width: 100%;
    overflow-y: scroll;
  }

  .item {
    cursor: pointer;
    margin-bottom: 9px;
    font-weight: 500;
  }
`;

const InputContainer = styled.div`
  width: 575px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 22.5px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    //모바일
    width: 100%;
    height: 25px;
  }

  input {
    margin-top: 0px;
    width: 90%;
    border-radius: 22.5px;
    height: 100%;
    background: #d9d9d9;
    padding: 0;
  }
`;
