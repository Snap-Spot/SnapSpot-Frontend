import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "../../components/common/Header";
import more from "../../assets/search/more.png";
import SearchBox from "../../components/search/SearchBox";
import EamptySearch from "../../components/search/EamptySearch";
import { useLoadingContext } from "../../components/common/LoadingContext";
import { getKeywordSearch } from "../../api/search";
import Loading from "../../components/common/Loading";

const SearchPage = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingContext();

  const navigate = useNavigate();
  const location = useLocation();

  const [searchData, setSearchData] = useState([]); //검색 관련 data
  const [recommendData, setRecommendData] = useState([]); //추천 작가 리스트 data
  const nicknameData = searchData?.nicknameResult || [];
  const areaData = searchData?.areaResult || [];
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keywordParam = searchParams.get("keyword");
    if (keywordParam) {
      setKeyword(keywordParam);
      getSearch(keywordParam);
    }
  }, [location.search]);

  const handleMoreRegionClick = () => {
    navigate(`/photographers`, { state: { searchData: areaData } });
  };

  const handleMoreNicknameClick = () => {
    navigate(`/photographers`, { state: { searchData: nicknameData } });
  };

  const getSearch = async (keyword) => {
    //검색 함수
    startLoading();
    try {
      const getData = await getKeywordSearch(keyword);
      setSearchData(getData);
      if (areaData.length === 0 && nicknameData.length === 0) {
        setRecommendData(getData.recommend);
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header></Header>
          <Wrapper>
            <SearchTitle>
              <div className="subject">'{keyword}'</div>에 대한 검색결과
            </SearchTitle>
            {areaData.length > 0 || nicknameData.length > 0 ? ( //지역 관련 검색 결과
              <Content>
                {areaData && areaData.length > 0 ? (
                  <>
                    <SubTitle>
                      <div className="subject">'{keyword}'</div>에서 활동하는
                      작가
                      {areaData.length > 3 ? (
                        <img src={more} onClick={handleMoreRegionClick} />
                      ) : (
                        <></>
                      )}
                    </SubTitle>
                    <GridBox>
                      <div className="grid">
                        {areaData.slice(0, 3).map(
                          //상단 3개까지만 표시
                          (data) => (
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
                                  data.areas.length > 0
                                    ? data.areas[0].city
                                    : ""
                                }
                                regionCount={data.areas.length}
                                price={data.lowestPay}
                                review={data.totalReview}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </GridBox>
                  </>
                ) : (
                  <></>
                )}
                {nicknameData && nicknameData.length > 0 ? ( //닉네임 관련 검색 결과
                  <>
                    <SubTitle>
                      <div className="subject">'{keyword}' </div> 작가
                      {nicknameData.length > 3 ? (
                        <img src={more} onClick={handleMoreNicknameClick} />
                      ) : (
                        <></>
                      )}
                    </SubTitle>
                    <GridBox>
                      <div class="grid">
                        {nicknameData.slice(0, 3).map(
                          (
                            data //상단 3개까지만 표시
                          ) => (
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
                                  data.areas.length > 0
                                    ? data.areas[0].city
                                    : ""
                                }
                                regionCount={data.areas.length}
                                price={data.lowestPay}
                                review={data.totalReview}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </GridBox>
                  </>
                ) : (
                  <></>
                )}
              </Content>
            ) : (
              <EamptySearch data={recommendData} />
            )}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1048px;
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
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 44px;
    row-gap: 100px;
    margin-top: 3.5rem;
    position: relative;
    grid-template-columns: repeat(3, 1fr);

    &:first-child {
      margin-bottom: 10rem;
    }

    @media (max-width: 768px) {
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;

const SearchTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 1.063rem;
  }
`;

const SubTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  color: #060606;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
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
const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  width: 200px;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
