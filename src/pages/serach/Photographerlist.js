import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import "./Pagination.css";
import search from "../../assets/header/search.png";
import FilteringBox from "../../components/search/FilteringBox";
import SearchBox from "../../components/search/SearchBox";

const Photographerlist = () => {
  const [info, setInfo] = useState(true);
  const [items, setItems] = useState([
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리1",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리2",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리3",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리4",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리5",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리6",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리7",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리8",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리9",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리10",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리11",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리12",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리13",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리14",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리15",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리16",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
    {
      tag: "#커플스냅 #유채꽃 #화사함",
      photographer: "에밀리17",
      star: "4.7",
      region: "제주도 서귀포",
      price: "130,000",
      review: "238",
    },
  ]);
  const [isFilteringOpen, setIsFilteringOpen] = useState(false);

  const handleTabClick = () => {
    setIsFilteringOpen(!isFilteringOpen);
  };

  const tabs = ["지역", "날짜", "전문분야", "순서"];

  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(15); //페이지당 아이템 개수

  const setPage = (e) => {
    setCurrentpage(e);
  };

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 15; // 페이지당 아이템 개수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Wrapper>
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
        {isFilteringOpen && (
          <FilteringBox
            isFilteringOpen={isFilteringOpen}
            setIsFilteringOpen={setIsFilteringOpen}
          />
        )}
        <Content>
          <GridBox>
            <div className="grid">
              {currentPosts.map((item, index) => (
                <div key={index}>
                  <SearchBox
                    tag={item.tag}
                    photographer={item.photographer}
                    star={item.star}
                    region={item.region}
                    price={item.price}
                    review={item.review}
                  />
                </div>
              ))}
            </div>
          </GridBox>
        </Content>
      </Wrapper>
      <StyledPagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={items.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </>
  );
};

export default Photographerlist;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    .wrapper {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* 페이지 이동으로 Pagination이 이동하는지에 따라 변경하기 */
  height: 140rem;
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

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const TabBox = styled.div`
  display: flex;
  width: 57%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 62%;
  }
`;

const SearchTag = styled.div`
  width: 23%;
  height: 2.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-width: 0 0.063rem 0 0.063rem;
  border-color: rgba(129, 129, 129, 0.4);
  border-style: solid;
  @media (max-width: 768px) {
    width: 35%;
    border-right: none;
  }
  input {
    width: 100%;
    border: none;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin: 1rem;
    font-family: Noto Sans KR;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #777;
  }

  img {
    width: 1.6rem;
    margin: 1rem;
    @media (max-width: 768px) {
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
    }
  }
`;

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .grid {
    position: relative;
    z-index: -1;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: repeat(3, minmax(140px, auto));
    column-gap: 44px;
    row-gap: 100px;

    margin-top: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 112px 112px 112px;
      grid-template-rows: repeat(3, minmax(20px, auto));
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--lightgrey-2, #dbdbdb);
    /* text-align: right; */
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /* ul.pagination li:first-child {
  border-radius: 5px 0 0 5px;
}

ul.pagination li:last-child {
  border-radius: 0 5px 5px 0;
} */

  ul.pagination li a {
    display: none;
    text-decoration: none;
    color: var(--lightgrey-2, #dbdbdb);
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    height: 0.2rem;
  }

  ul.pagination li.active a {
    color: #000;
  }
  /* 
ul.pagination li.active {

} */

  /* ul.pagination li a:hover,
ul.pagination li a.active {
  color: blue;
} */

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
