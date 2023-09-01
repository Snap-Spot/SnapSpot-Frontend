import styled from "styled-components";
import ReviewBox from "../../components/Photographer/Review/ReviewBox";
import Paging from "../../components/Photographer/Review/Paging/Paging";
import Header from "../../components/common/Header";
import { useEffect, useState } from "react";

const Review = () => {
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  const mockData = [
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
    {
      profile: "",
      nickname: "est0908",
      title: "너무 잘 담아주셔서 감사합니다",
      content:
        "친절한 답변과 깔끔한 일정 소개부터 인생사진까지..!! 너무 좋은 추억 남겨주셔서 감사해요 다른 작가분들과 다르게 소품이나 의상도 준비해주시고 사진 컨셉도 너무 좋았어요..",
      date: "2023.5.8",
      score: "5.0",
    },
  ];

  useEffect(() => {
    setProducts(mockData);
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, postPerPage, indexOfLastPost, indexOfFirstPost]);

  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <Center>
      <Header />
      <Container>
        <Title>리뷰 리스트</Title>
        <Length>총 {products.length}개</Length>
        <Line />
        <ReviewContainer>
          {currentPosts && products.length > 0 ? (
            currentPosts.map((productData, idx) => (
              <ReviewBox
                key={idx}
                type="list"
                profile={productData.profile}
                nickname={productData.nickname}
                title={productData.title}
                content={productData.content}
                date={productData.date}
                score={productData.score}
              />
            ))
          ) : (
            <div>리뷰가 없습니다.</div>
          )}
        </ReviewContainer>
        <Paging
          page={currentPage}
          count={count}
          setPage={setPage}
          itemsCountPerPage={6}
        />
      </Container>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1052px;
  width: 70rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 21rem;
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0.9rem;
    font-size: 18px;
  }
`;

const Length = styled.p`
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export default Review;
