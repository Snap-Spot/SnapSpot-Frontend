import styled from "styled-components";
import glass from "../../assets/search/glass.png";
import RecommendBox from "./RecommendBox";

const EamptySearch = () => {
  return (
    <Wrapper>
      <EmptySection>
        <img src={glass} /> 검색된 정보가 없습니다.
      </EmptySection>
      <div>
        <Title>이 사진작가는 어떠세요?</Title>
        <RecommendList>
          <RecommendBox
            tag="#커플스냅 #유채꽃 #화사함"
            photographer="한빛나라"
            star="4.7"
            price="130,000"
            review="238"
          />
          <RecommendBox
            tag="#커플스냅 #유채꽃 #화사함"
            photographer="한빛나라"
            star="4.7"
            price="130,000"
            review="238"
          />
          <RecommendBox
            tag="#커플스냅 #유채꽃 #화사함"
            photographer="한빛나라"
            star="4.7"
            price="130,000"
            review="238"
          />
        </RecommendList>
      </div>
    </Wrapper>
  );
};

export default EamptySearch;

const Wrapper = styled.div`
  width: 1050px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const EmptySection = styled.div`
  display: flex;
  height: 25rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    height: 17.25rem;
  }

  img {
    width: 3.75rem;
    height: 3.75rem;
    margin-bottom: 3.75rem;

    @media (max-width: 768px) {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  width: 1050px;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.063rem;
    margin-bottom: 0.75rem;
    width: 100%;
  }
`;

const RecommendList = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
