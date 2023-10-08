import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import PhotoBox from "../../components/Mypage-User/Pick/PhotoBox";
import Paging from "../../components/Photographers/Review/Paging/Paging";
import { getMyHeartList } from "../../api/heart";
const MyHeartsPage = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 12; // 페이지당 아이템 개수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [currentPosts, setCurrentPosts] = useState([]);

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  //const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  const getData = async () => {
    const data = await getMyHeartList();

    setList(data);
    setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  };
  const filterData = (id) => {
    setCurrentPosts(
      list
        .slice(indexOfFirstPost, indexOfLastPost)
        .filter((el) => el.photographerId !== id)
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />

      <Wrapper>
        <div className="title">좋아요 모아보기</div>
        <GridBox>
          <div class="grid">
            {currentPosts.map((el) => {
              const region =
                el.areas[0] &&
                `${el.areas[0].metropolitan} ${el.areas[0].city} 외 ${
                  el.areas.length - 1
                }곳`;
              return (
                <div>
                  <PhotoBox
                    id={el.photographerId}
                    photo={el.image}
                    photographer={el.nickname}
                    region={region}
                    filterData={filterData}
                  />
                </div>
              );
            })}
          </div>
        </GridBox>
      </Wrapper>
      <PagingContainer>
        <Paging
          page={currentPage}
          count={list.length}
          setPage={handlePageChange}
          itemsCountPerPage={itemsPerPage}
        />
      </PagingContainer>
    </>
  );
};

export default MyHeartsPage;

const Wrapper = styled.div`
  width: 75%;

  margin: 0px auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 17px;
    width: 90%;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1048px;
  margin: 0 auto;

  .grid {
    width: 100%;

    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    column-gap: 44px;
    row-gap: 100px;

    margin-top: 56px;
    @media (max-width: 768px) {
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;
const PagingContainer = styled.div`
  margin-top: 322px;
  @media (max-width: 768px) {
    margin-top: 178px;
  }
`;
