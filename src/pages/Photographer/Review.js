import styled from "styled-components";
import ReviewBox from "../../components/Photographers/Review/ReviewBox";
import Paging from "../../components/Photographers/Review/Paging/Paging";
import { useEffect, useState } from "react";
import LayOut from "../../components/common/LayOut";
import { getReviews } from "../../api/review";

const Review = () => {
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태

  const getReview = async () => {
    try {
      const data = await getReviews();
      // console.log("데이터", data);
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  useEffect(() => {
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [products, currentPage, postPerPage, indexOfLastPost, indexOfFirstPost]);

  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <LayOut>
      <Container>
        <Title>리뷰 리스트</Title>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Length>총 {products.length}개</Length>
            <Line />
            <ReviewContainer>
              {products && currentPosts.length > 0 ? (
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
                  {count > 6 && (
                    <Paging
                      page={currentPage}
                      count={count}
                      setPage={setPage}
                      itemsCountPerPage={6}
                    />
                  )}
                </>
              ) : (
                <Content>리뷰가 없습니다.</Content>
              )}
            </ReviewContainer>
          </>
        )}
      </Container>
    </LayOut>
  );
};

const Content = styled.div`
  margin-top: 6rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1052px;
  margin-top: 2rem;
  width: 75%;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-size: 18px;
  }
`;

const Length = styled.p`
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
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
