import React, { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";
import MySnapBox from "./MySnapBox";
import Paging from "../../Photographers/Review/Paging/Paging";
import { getBestSnaps } from "../../../api/best-snap";
import { getDayOfWeek } from "../Reservation/ReservationItem";
import LoadingImg from "../../../assets/signup/loading.png";
const MySnaps = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [itemsPerPage, setItemsPerPage] = useState(6);

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = list && list.slice(indexOfFirstPost, indexOfLastPost);

  const resizingHandler = () => {
    if (window.innerWidth <= 768) {
      setItemsPerPage(18);
    } else {
      setItemsPerPage(6);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setItemsPerPage(18);
    }
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  const getData = async () => {
    const data = await getBestSnaps();
    setList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {currentPosts.length > 0 ? (
        <>
          <Wrapper>
            <GridBox>
              {currentPosts.map((el) => {
                const tags = [el.tag1, el.tag2, el.tag3];
                const date = `${el.photoDate.substr(0, 10)} 
              (${getDayOfWeek(el.photoDate.substr(0, 10))})`;
                return (
                  <MySnapBox
                    key={el.snapPhotoId}
                    photo={el.imageUrl}
                    photographer={el.photographerName}
                    region={el.location}
                    date={date}
                    tags={tags}
                  />
                );
              })}
            </GridBox>
          </Wrapper>
          <PagingContainer>
            <Paging
              page={currentPage}
              count={list.length}
              setPage={handlePageChange}
              itemsCountPerPage={itemsPerPage}
            />
          </PagingContainer>{" "}
        </>
      ) : (
        <LoadingImage src={LoadingImg} />
      )}
    </>
  );
};

export default MySnaps;

const GridBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    //모바일
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-rows: repeat(3, 1fr);

  row-gap: 64px;
  column-gap: 13%;

  @media (max-width: 1300px) {
    //모바일
    row-gap: 64px;
  }

  @media (max-width: 768px) {
    //모바일
    row-gap: 23px;
    column-gap: 11px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 103px;

  @media (max-width: 768px) {
    //모바일
    margin-top: 42px;
  }
`;
const PagingContainer = styled.div`
  margin-top: 152px;
  @media (max-width: 768px) {
    margin-top: 85px;
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
  margin: 200px auto;
  width: 200px;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
