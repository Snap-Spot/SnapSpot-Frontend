import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import PhotoBox from "../../components/Mypage-User/Pick/PhotoBox";
import Paging from "../../components/photographer/Review/Paging/Paging";
const MyHeartsPage = () => {
  const [list, setList] = useState([
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },

    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },

    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
    {
      photo: "",
      photographer: "에밀리",
      region: "제주도 서귀포",
    },
  ]); // 리스트에 나타낼 아이템들

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 12; // 페이지당 아이템 개수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header />

      <Wrapper>
        <div className="title">좋아요 모아보기</div>
        <GridBox>
          <div class="grid">
            {currentPosts.map((el) => {
              return (
                <div>
                  <PhotoBox
                    photo={el.photo}
                    photographer={el.photographer}
                    region={el.region}
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
  width: 1048px;
  margin: 0px auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 17px;
    width: 366px;
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
  .grid {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: repeat(3, minmax(100px, auto));
    column-gap: 44px;
    row-gap: 100px;

    margin-top: 56px;

    @media (max-width: 768px) {
      grid-template-columns: 112px 112px 112px;
      grid-template-rows: repeat(3, minmax(20px, auto));
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
