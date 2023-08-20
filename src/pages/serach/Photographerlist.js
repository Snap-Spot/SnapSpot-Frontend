import { React, useState, useEffect } from "react";
import styled from "styled-components";
import search from "../../assets/header/search.png";
import FilteringBox from "../../components/search/FilteringBox";
import SearchBox from "../../components/search/SearchBox";

const Photographerlist = () => {
  const [info, setInfo] = useState(true);
  const [isFilteringOpen, setIsFilteringOpen] = useState(false);

  const handleTabClick = () => {
    setIsFilteringOpen(!isFilteringOpen);
  };

  const tabs = ["지역", "날짜", "전문분야", "순서"];

  return (
    <div>
      <Box>
        <TabBox>
          {tabs.map((tab, index) => (
            <Tab key={index} onClick={handleTabClick}>
              {tab}
            </Tab>
          ))}
        </TabBox>
        <SearchTag>
          <input placeholder="태그 검색"></input>
          <img src={search} alt="검색하기" />
        </SearchTag>
      </Box>
      {isFilteringOpen && <FilteringBox />}
      <GridBox>
        <div class="grid">
          <div>
            <SearchBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="에밀리"
              star="4.7"
              region="제주도 서귀포"
              price="130,000"
              review="238"
            />
          </div>
          <div>
            <SearchBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="에밀리"
              star="4.7"
              region="제주도 서귀포"
              price="130,000"
              review="238"
            />
          </div>
          <div>
            <SearchBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="에밀리"
              star="4.7"
              region="제주도 서귀포"
              price="130,000"
              review="238"
            />
          </div>
          <div>
            <SearchBox
              tag="#커플스냅 #유채꽃 #화사함"
              photographer="에밀리"
              star="4.7"
              region="제주도 서귀포"
              price="130,000"
              review="238"
            />
          </div>
        </div>
      </GridBox>
    </div>
  );
};

export default Photographerlist;

const Box = styled.div`
  width: 100%;
  height: 3.983rem;
  border: 1px solid rgba(129, 129, 129, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Tab = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 7rem;
  text-align: center;
`;
const TabBox = styled.div`
  display: flex;
  width: 57%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* margin-right:30rem; */
`;
const SearchTag = styled.div`
  /* width: 18.5rem; */
  width: 23%;
  height: 2.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-width: 0 0.063rem 0 0.063rem;
  border-color: rgba(129, 129, 129, 0.4);
  border-style: solid;
  /* margin-left: 35rem; */

  input {
    /* width: 13rem; */
    width: 100%;
    border: none;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin: 1rem;
    /* padding: 1rem; */
    /* margin-left: 1.875rem; */

    /* @media (max-width: 768px) {
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
    } */
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #777;
  }

  img {
    width: 1.875rem;
    margin: 1rem;
  }
`;

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relatvie;

  .grid {
    position: absolute;
    z-index: -1;
    top: 140px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: repeat(3, minmax(100px, auto));
    column-gap: 44px;
    row-gap: 100px;

    margin-top: 8rem;

    @media (max-width: 768px) {
      grid-template-columns: 112px 112px 112px;
      grid-template-rows: repeat(3, minmax(20px, auto));
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;
