import { React, useState, useEffect } from "react";

import styled from "styled-components";
import Header from "../../components/common/Header";
import footer from "../../assets/photograph/Footer.png";
import more from "../../assets/search/more.png";
import SearchBox from "../../components/search/SearchBox";
import EamptySearch from "../../components/search/EamptySearch";

const SearchPage = () => {
  const [info, setInfo] = useState(false);

  return (
    <Wrapper>
      <SearchTitle>
        <div class="subject">'에밀리’</div>에 대한 검색결과
      </SearchTitle>
      {info ? (
        <div>
          <RegionTitle>
            <div class="subject">'제주도’</div>에서 활동하는 작가
            <img src={more} />
          </RegionTitle>
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
        </div>
      ) : (
        <EamptySearch />
      )}
    </Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .grid {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: repeat(3, minmax(100px, auto));
    column-gap: 44px;
    row-gap: 100px;

    margin-top: 3.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 112px 112px 112px;
      grid-template-rows: repeat(3, minmax(20px, auto));
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;

const SearchTitle = styled.div`
  display: flex;
  width: 1050px;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    width: 95%;
    font-size: 16px;
    margin-top: 1.063rem;
  }
`;

const RegionTitle = styled.div`
  display: flex;
  width: 1050px;
  /* margin-left: 14%; */
  color: #060606;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    width: 95%;
    font-size: 14px;
    margin-top: 0.75rem;
  }

  img {
    margin-left: 1.1rem;
    margin-top: 0.2rem;
    width: 12px;
    height: 20px;

    @media (max-width: 768px) {
      margin-left: 0.7rem;
      margin-top: 0.3rem;
      width: 8px;
      height: 13.333px;
    }
  }
`;
