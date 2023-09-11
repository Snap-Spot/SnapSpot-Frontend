import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import MySnapBox from "./MySnapBox";
import Paging from "../../Photographers/Review/Paging/Paging";
const MySnaps = () => {
  const [list, setList] = useState([
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },

    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },

    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },

    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
    {
      photo: "",
      photographer: "뮴먕묭",
      region: "제주특별자치도 어디시 어디로 18길",
      date: "2023.07.23(일)",
      tags: ["커플스냅", "유채꽃", "상큼"],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [itemsPerPage, setItemsPerPage] = useState(6);

  // 데이터 배열을 페이지에 맞게 자르기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

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

  return (
    <>
      <Wrapper>
        <GridBox>
          {currentPosts.map((el) => {
            return (
              <MySnapBox
                photo={el.photo}
                photographer={el.photographer}
                region={el.region}
                date={el.date}
                tags={el.tags}
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
      </PagingContainer>
    </>
  );
};

export default MySnaps;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    //모바일
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-rows: repeat(3, 1fr);

  row-gap: 64px;
  column-gap: 132px;
  @media (max-width: 1300px) {
    //모바일
    row-gap: 64px;
    column-gap: 70px;
  }

  @media (max-width: 768px) {
    //모바일
    row-gap: 23px;
    column-gap: 11px;
  }
`;

const Wrapper = styled.div`
  max-width: 1028px;
  width: 95%;
  margin: 0 auto;
  margin-top: 103px;

  @media (max-width: 768px) {
    //모바일
    width: 100%;
    margin-top: 42px;
  }
`;
const PagingContainer = styled.div`
  margin-top: 152px;
  @media (max-width: 768px) {
    margin-top: 85px;
  }
`;
