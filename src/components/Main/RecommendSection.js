import React, { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import right from "../../assets/search/ic_right.png";
import left from "../../assets/search/ic_left.png";

import { getKeywordSearch, getPhotographerList } from "../../api/search";
import { category } from "../../components/common/category";

import RecommendBox from "../../components/search/RecommendBox";
import RecommendSnapBox from "./RecommendSnapBox";

import LoadingImg from "../../assets/signup/loading.png";

const responsive = {
  0: {
    items: 2,
  },
  374: {
    items: 3,
  },
  768: {
    items: 2,
  },
  1200: {
    items: 3,
  },
};

const RecommendSection = ({ info }) => {
  // < 버튼
  const renderPrevButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={left} className="prev-button" alt="prev-button" />;
  };

  // > 버튼
  const renderNextButton = ({ isDisabled }) => {
    if (isDisabled) {
      return null;
    }
    return <img src={right} className="next-button" alt="next-button" />;
  };

  // api로 받아온 데이터
  const [data, setData] = useState([]);

  // api로 데이터 받아오기
  const getData = async () => {
    if (info.type === "keyword") {
      // 키워드 검색일 경우
      const res = await getKeywordSearch(info.keyword);
      // 검색 결과가 있을 경우 areaResult (만약 길이가 7 이상일 경우 6개만 표시),
      // 없을 경우 recommend
      setData(
        res.areaResult
          ? res.areaResult.length >= 7
            ? res.areaResult.slice(0, 6)
            : res.areaResult
          : res.recommend
      );
    } else if (info.type === "photographer") {
      // 사진작가 리스트 조회일 경우
      let endpoint = "/photographers";
      const queryParams = [];
      // 옵션에 따라 query 붙이기 (ex. sort=SCORE&special=WEDDING)
      Object.entries(info.keyword).forEach((item) => {
        queryParams.push(`${item[0]}=${item[1]}`);
      });
      // query들을 모아서 사진작가 리스트 조회
      const res = await getPhotographerList(
        endpoint + "?" + queryParams.join("&")
      );
      // 길이가 7 이상일 경우 6개만 표시
      setData(res.length >= 7 ? res.slice(0, 6) : res);
    } else {
      // 스냅 리스트
      setData(category);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Title>{info.title}</Title>
      <RecommendList>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          dotsDisabled={true}
          responsive={responsive}
          duration={400}
          startIndex={1}
          mouseDragEnabled={true}
          className="custom-carousel"
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          {data.length > 0 ? (
            data.map((item, index) => {
              return info.type === "snap" ? (
                <RecommendSnapBox
                  key={index}
                  keyword={item.key}
                  label={item.label}
                  image={item.image}
                />
              ) : (
                <RecommendBox
                  key={index}
                  id={item.photographerId}
                  image={item.image}
                  tags={item.tags}
                  photographer={item.nickname}
                  star={item.averageScore}
                  price={item.lowestPay}
                  review={item.totalReview}
                />
              );
            })
          ) : (
            <LoadingImage src={LoadingImg} alt="로딩 스피너" /> // 데이터가 로딩 중일 때 표시할 내용
          )}
        </AliceCarousel>
      </RecommendList>
    </Wrapper>
  );
};

export default RecommendSection;

const Wrapper = styled.div`
  width: 75%;
  max-width: 1048px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.div`
  display: flex;
  /* width: 1050px; */
  width: 100%;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.1rem;
  font-weight: 700;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.063rem;
    margin-bottom: 0.75rem;
    width: 21.875rem;
  }
`;

const RecommendList = styled.div`
  .alice-carousel__dots {
    display: none !important;
  }

  .jwAHne {
    display: flex;
    align-items: center;
  }

  .prev-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 170px;
    left: -20px;
  }

  .next-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 170px;
    right: 10px;
  }

  .alice-carousel__stage-item {
    padding: 0 0.3rem;
  }

  /* 모바일에서의 스타일 */
  @media (max-width: 768px) {
    .prev-button {
      width: 20px;
      height: 20px;
      left: 0px;
      top: 55px;
    }

    .next-button {
      width: 20px;
      height: 20px;
      right: 0px;
      top: 55px;
    }
  }
`;

// 로딩 관련 style
const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  width: 15%;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 25%;
  }
`;
