import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import "../../components/Photographers/Review/Paging/Paging.css";
import search from "../../assets/header/search.png";
import { useNavigate } from "react-router-dom";

import FilteringBox from "../../components/search/FilteringBox";
import SearchBox from "../../components/search/SearchBox";
import Header from "../../components/common/Header";

//dummyData
import { getAllPhotographerList } from "../../api/search";

const Photographerlist = () => {
  const outSection = useRef();
  const [info, setInfo] = useState(true);
  const [list, setList] = useState([]);
  const [isFilteringOpen, setIsFilteringOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = () => {
    if (!isFilteringOpen) {
      setIsFilteringOpen(true);
    } else {
      setIsFilteringOpen(false);
    }
  };

  const tabs = ["지역", "날짜", "전문분야", "순서"];

  useEffect(() => {
    getPhotoList();
  }, []);

  const getPhotoList = async () => {
    try {
      const data = await getAllPhotographerList();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 15; // 페이지당 아이템 개수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    if (outSection.current && !outSection.current.contains(e.target)) {
      setTimeout(() => {
        setIsFilteringOpen(false);
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <Header />
      <Wrapper>
        <div>
          <Box>
            <TabBox>
              {tabs.map((tab, index) => (
                <Tab key={index} onClick={handleTabClick}>
                  {tab}
                </Tab>
              ))}
            </TabBox>
          </Box>
          {isFilteringOpen && (
            <div ref={outSection}>
              <FilteringBox
                isFilteringOpen={isFilteringOpen}
                setIsFilteringOpen={setIsFilteringOpen}
              />
            </div>
          )}
        </div>
        <Content isFilteringOpen={isFilteringOpen}>
          <GridBox>
            <div className="grid">
              {currentPosts.map((data) => (
                <div key={data.photographerId}>
                  <SearchBox
                    tags={data.tags}
                    photographer={data.member.nickname}
                    star="4.7"
                    region={
                      data.areas.length > 0 ? data.areas[0].metropolitan : ""
                    }
                    subregion={data.areas.length > 0 ? data.areas[0].city : ""}
                    regionCount={data.areas.length}
                    price={data.lowestPay}
                    review="238"
                  />
                </div>
              ))}
            </div>
          </GridBox>
        </Content>
      </Wrapper>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={list.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Photographerlist;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    .wrapper {
      display: none;
    }
  }
`;

const Content = styled.div`
  width: 75%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isFilteringOpen ? "pointer" : "auto")};
  pointer-events: ${(props) => (props.isFilteringOpen ? "auto" : "none")};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Box = styled.div`
  height: 3.5rem;
  border-top: 1px solid rgba(129, 129, 129, 0.4);
  border-bottom: 3px solid #a6b9ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 2.5rem;
    margin-top: 0.563rem;
    justify-content: flex-start;
  }
`;

const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  padding-right: 5%;

  @media (max-width: 768px) {
    width: 65%;
    padding: 0;
    justify-content: flex-start;
  }
`;

const Tab = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 6.5rem;
  text-align: center;

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const GridBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1048px;

  .grid {
    position: relative;
    width: 95%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 44px;
    row-gap: 100px;
    margin-top: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      column-gap: 15px;
      row-gap: 20px;
      width: 100%;
      margin-top: 1.25rem;
    }
  }
`;
