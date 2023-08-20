import { React, useState, useEffect } from "react";
import styled from "styled-components";
import search from "../../assets/header/search.png";

const Photographerlist = () => {
  return (
    <Wrapper>
      <Box>
        <TabBox>
          <Tab>지역</Tab>
          <Tab>날짜</Tab>
          <Tab>전문분야</Tab>
          <Tab>순서</Tab>
        </TabBox>
        <SearchTag>
          <input placeholder="태그 검색"></input>
          <img src={search} alt="검색하기" />
        </SearchTag>
      </Box>
    </Wrapper>
  );
};

export default Photographerlist;

const Wrapper = styled.div`
  width: 100%;
  height: 3.983rem;
  border: 1px solid rgba(129, 129, 129, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
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
