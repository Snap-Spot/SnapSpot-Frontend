import styled from "styled-components";
import ReviewBox from "../../../components/Photographers/Review/ReviewBox";
import Paging from "../../../components/Photographers/Review/Paging/Paging";
import Filtering from "../../../components/Photographers/Introduction/ReviewFiltering";
import ReviewPhoto from "../../../components/Photographers/Introduction/ReviewPhoto";
import { useEffect, useState } from "react";
import ReviewFiltering from "../../../components/Photographers/Introduction/ReviewFiltering";

const ReviewContainer = ({ reviewData }) => {
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    setProducts(reviewData);
    setCount(products.totalReview);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    products.reviews &&
      setCurrentPosts(
        products.reviews.slice(indexOfFirstPost, indexOfLastPost)
      );
  }, [currentPage, postPerPage, indexOfLastPost, indexOfFirstPost]);

  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <Container>
      <Review>후기</Review>
      {currentPosts && currentPosts.length > 0 && (
        <ReviewPhoto reviews={products.reviews} />
      )}
      <Row>
        <Length>총 {products.totalReview}개</Length>
        <ReviewFiltering
          setCurrentPosts={setCurrentPosts}
          currentPosts={currentPosts}
        />
      </Row>
      <Line2 />
      <ReviewList>
        {currentPosts && currentPosts.length > 0 ? (
          <>
            {currentPosts.map((productData, idx) => (
              <ReviewBox
                key={idx}
                type="list"
                profile={productData.plan.customer.profile}
                nickname={productData.plan.customer.nickname}
                title={productData.title}
                content={productData.comment}
                date={productData.plan.planDate.slice(0, 10)}
                score={productData.score}
              />
            ))}
            <Paging
              page={currentPage}
              count={count}
              setPage={setPage}
              itemsCountPerPage={6}
            />
          </>
        ) : (
          <Content>리뷰가 없습니다.</Content>
        )}
      </ReviewList>
    </Container>
  );
};

const Content = styled.div`
  margin-top: 6rem;
`;

const Length = styled.p`
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Review = styled.h2`
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line2 = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  margin-top: 2rem;
  max-width: 1068px;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

export default ReviewContainer;
