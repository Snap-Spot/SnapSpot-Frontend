import styled from "styled-components";
import Carousel from "../../components/Photographers/Introduction/Carousel";
import { useState, useEffect } from "react";
import ReservationModal from "../../components/Photographers/Introduction/ReservationModal";
import LayOut from "../../components/common/LayOut";
import Profile from "../../components/Photographers/Introduction/Profile";
import ReviewContainer from "../../components/Photographers/Introduction/Review";
import { getPhotographer, getReview } from "../../api/photographer";
import { useParams } from "react-router-dom";

const Introduction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState();
  const [reviewData, setReviewData] = useState();
  const { photographerId } = useParams();

  useEffect(() => {
    setData(getPhotographer(photographerId)); // 작가 관련 데이터
    setReviewData(getReview(photographerId)); // 리뷰 데이터
  }, []);

  return (
    <>
      <Center>
        {modalOpen && (
          <ReservationModal
            setModalOpen={setModalOpen}
            photographerId={photographerId}
          />
        )}
      </Center>
      <LayOut>
        <ProfileContainer>
          <Title>작가님을 소개합니다!</Title>
          <Profile
            setModalOpen={setModalOpen}
            nickname={data.member.nickname}
            profile={data.member.profile}
            lowestPay={data.lowestPay}
            paymentImage={data.paymentImage}
            areas={data.areas}
            sns={data.sns}
            bio={data.bio}
          />
        </ProfileContainer>
        <Carousel carouselList={data.images} />
        <ReviewContainer reviewData={reviewData} />
      </LayOut>
    </>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
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

export default Introduction;
