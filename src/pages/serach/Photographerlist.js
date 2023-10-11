import { React, useState, useEffect, useRef, useSearchParams } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import "../../components/Photographers/Review/Paging/Paging.css";
import { useNavigate, useLocation } from "react-router-dom";
import FilteringBox from "../../components/search/FilteringBox";
import SearchBox from "../../components/search/SearchBox";
import Header from "../../components/common/Header";
import { useLoadingContext } from "../../components/common/LoadingContext";
import { getPhotographerList } from "../../api/search";
import Loading from "../../components/common/Loading";
import { regions } from "../../components/search/FilteringList.js";

const Photographerlist = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingContext();

  const navigate = useNavigate();
  const location = useLocation();
  const outSection = useRef();
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("");
  const [isFilteringOpen, setIsFilteringOpen] = useState(false);
  const tabs = ["지역", "날짜", "전문분야", "순서"];

  const searchData = location.state?.searchData;

  const searchParams = new URLSearchParams(location.search);

  const areaId = searchParams.get("areaId") || null;
  const ableDate = searchParams.get("ableDate") || null;
  const special = searchParams.get("special") || null;
  const sort = searchParams.get("sort") || null;

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    } else {
      onSearch();
    }
  }, [areaId, ableDate, special, sort]);

  const handleTabClick = () => {
    if (!isFilteringOpen) {
      setIsFilteringOpen(true);
    } else {
      setIsFilteringOpen(false);
    }
  };

  const onSearch = async () => {
    startLoading(); //로딩 시작
    try {
      let endpoint = "/photographers";
      const queryParams = [];
      if (areaId) {
        queryParams.push(`areaId=${areaId}`);
        const subregion = regions
          .map((region) =>
            region.subregions.find((sub) => sub.areaId === Number(areaId))
          )
          .find((sub) => sub !== undefined);
        if (subregion) {
          setRegion(subregion.subregion);
        }
      }
      if (special) {
        queryParams.push(`special=${special}`);
      }
      if (ableDate) {
        queryParams.push(`ableDate=${ableDate}`);
      }
      if (sort && sort.length > 0) {
        queryParams.push(`sort=${sort}`);
      }
      if (queryParams.length > 0) {
        endpoint += "?" + queryParams.join("&");
      }
      navigate(endpoint);
      const getData = await getPhotographerList(endpoint);
      setData(getData);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading(); //데이터 받은 후 로딩 중지
    }
  };

  const itemsPerPage = 15; // 페이지당 아이템 개수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 페이지 넘버 변경 시 로컬 스토리지에 저장
    localStorage.setItem("currentPage", pageNumber.toString());
  };

  const initialPageNumber = parseInt(localStorage.getItem("currentPage")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPageNumber);

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const savedPageNumber = localStorage.getItem("currentPage");
    if (savedPageNumber) {
      setCurrentPage(parseInt(savedPageNumber));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const handleOutsideClick = (e) => {
    if (!isFilteringOpen) {
      e.stopPropagation();
    }
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

  const shouldForwardProp = (prop, defaultValidatorFn) =>
    !["isFilteringOpen"].includes(prop) && defaultValidatorFn(prop);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
                    setIsFilteringOpen={setIsFilteringOpen}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </div>
            <Content isFilteringOpen={isFilteringOpen}>
              {region && region.length > 0 ? (
                <RegionTitle>
                  <div className="subject">'{region}' </div> 에서 활동하는
                  작가들
                </RegionTitle>
              ) : (
                <></>
              )}
              <GridBox>
                <div className="grid">
                  {currentPosts.map((data) => (
                    <div key={data.photographerId}>
                      <SearchBox
                        id={data.photographerId}
                        image={data.image}
                        tags={data.tags}
                        photographer={data.nickname}
                        star={data.averageScore}
                        region={
                          data.areas.length > 0
                            ? data.areas[0].metropolitan
                            : ""
                        }
                        subregion={
                          data.areas.length > 0 ? data.areas[0].city : ""
                        }
                        regionCount={data.areas.length}
                        price={data.lowestPay}
                        review={data.totalReview}
                      />
                    </div>
                  ))}
                </div>
              </GridBox>
            </Content>
          </Wrapper>
          {data.length > 0 ? (
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={handlePageChange}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </>
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

const Content = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["isFilteringOpen"].includes(prop),
})`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isFilteringOpen ? "pointer" : "auto")};

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
    align-items: start;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 44px;
    row-gap: 100px;
    margin-top: 4rem;

    @media (max-width: 768px) {
      column-gap: 15px;
      row-gap: 30px;

      margin-top: 1.25rem;
    }
  }
`;

const RegionTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  font-size: 1.2rem;
  font-weight: 700;

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 1rem;
  }
`;
