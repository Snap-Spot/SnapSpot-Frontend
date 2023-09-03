import styled from "styled-components";
import photo from "../../assets/photograph/photo.png";
import heart from "../../assets/photograph/heart_.png";
import ReviewBox from "../../components/Photographer/Review/ReviewBox";
import Paging from "../../components/Photographer/Review/Paging/Paging";
import Filtering from "../../components/Photographer/Introduction/ReviewFiltering";
import Carousel from "../../components/Photographer/Introduction/Carousel";
import ReviewPhoto from "../../components/Photographer/Introduction/ReviewPhoto";
import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import ReservationModal from "../../components/Photographer/Introduction/ReservationModal";
import carousel from "../../assets/photograph/carousel.png";
import carousel2 from "../../assets/photograph/carousel2.png";
import carousel3 from "../../assets/photograph/carousel3.png";

const Introduction = () => {
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const list = [carousel3, carousel, carousel2]; // 캐러셀 이미지

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

  // 뷰포트 변화 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <>
      <Center>
        {modalOpen && <ReservationModal setModalOpen={setModalOpen} />}
      </Center>
      <Header />
      <Center>
        <Container>
          <Title>작가님을 소개합니다!</Title>
          <ProfileContainer>
            <Profile src={photo} />
            <Contents>
              <ProfileContainer>
                <TitleContainer>
                  <SubTitle1>작가명</SubTitle1>
                  <SubTitle1>가격표</SubTitle1>
                </TitleContainer>
                <ContentContainer>
                  <Align>
                    <HighLight>이명한 작가</HighLight>
                    <Heart src={heart} />
                  </Align>
                  <Price>120,000원 ~</Price>
                </ContentContainer>
              </ProfileContainer>
              {!isMobile && (
                <>
                  <Line />
                  <ProfileContainer>
                    <TitleContainer>
                      <SubTitle>활동 지역</SubTitle>
                      <SubTitle>SNS</SubTitle>
                      <SubTitle>한 줄 소개</SubTitle>
                    </TitleContainer>
                    <ContentContainer>
                      <Content>제주도 전역 </Content>
                      <Content>인스타그램 @myonghans </Content>
                      <Content>빛과 그림자를 이용한 극적인 연출</Content>
                    </ContentContainer>
                  </ProfileContainer>
                </>
              )}
            </Contents>
          </ProfileContainer>
          {isMobile && (
            <>
              <Line />
              <InfoContainer>
                <SubTitle>활동 지역</SubTitle>
                <Content>제주도 전역 </Content>
                <SubTitle>SNS</SubTitle>
                <Content>인스타그램 @myonghans </Content>
                <SubTitle>한 줄 소개</SubTitle>
                <Content>빛과 그림자를 이용한 극적인 연출</Content>
              </InfoContainer>
            </>
          )}
          <ReservationBtn onClick={() => setModalOpen(true)}>
            예약하기
          </ReservationBtn>
        </Container>
        {/* 캐러셀 */}
        <Carousel carouselList={list} />
        <Container2>
          {/* 후기 */}
          <Review>후기</Review>
          <ReviewPhoto />
          <Row>
            <Length>총 {products.length}개</Length>
            <Filtering />
          </Row>
          <Line2 />
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
        </Container2>
      </Center>
    </>
  );
};

const Length = styled.p`
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
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

const Review = styled.h2`
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
`;

const Heart = styled.img`
  width: 46px;
  height: 44px;
  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    position: absolute;
    margin-top: 20rem;
    margin-left: 4rem;
  }
`;

const HighLight = styled.h3`
  margin: 0.3rem;
  margin-left: 0;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0.2rem;
  }
`;

const Price = styled(HighLight)`
  color: #3c3aac;
`;

const ReservationBtn = styled.button`
  display: flex;
  width: 504px;
  height: 72px;
  padding: 28px 92px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--sub-color, #5170de);
  border: none;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 335px;
    height: 47px;
    padding: 0px 22px;
    font-size: 18px;
    border-radius: 30px;
    margin-top: 2rem;
  }
`;

const Contents = styled.div`
  margin-left: auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 1.8rem;
  }
`;

const Line2 = styled(Line)`
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled(ProfileContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 890px;
  width: 70rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 21rem;
    margin-top: 1rem;
  }
`;

const Container2 = styled(Container)`
  max-width: 1068px;

  @media (max-width: 768px) {
    width: 22rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0.9rem;
    font-size: 16px;
  }
`;

const TitleContainer = styled.div`
  width: 8rem;

  @media (max-width: 768px) {
    width: 3.3rem;
    margin-left: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 17rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const SubTitle = styled.p`
  color: var(--darkgrey, #777);
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0;
    margin-bottom: 0.2rem;
  }
`;

const SubTitle1 = styled(SubTitle)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Profile = styled.img`
  width: 272px;
  height: 410px;
  border-radius: 39px;
  filter: drop-shadow(14px 5px 50px rgba(0, 0, 0, 0.23));

  @media (max-width: 768px) {
    width: 159px;
    height: 213.75px;
    border-radius: 20px;
  }
`;

export default Introduction;
