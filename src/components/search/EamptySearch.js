import styled from "styled-components";
import glass from "../../assets/search/glass.png";
import RecommendBox from "./RecommendBox";

const EamptySearch = () => {
  return (
    <Wrapper>
      <EmptySection>
        <img src={glass} /> 검색된 정보가 없습니다.
      </EmptySection>
      <RecommendSection>
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
      </RecommendSection>
    </Wrapper>
  );
};

export default EamptySearch;

const Wrapper = styled.div`
  width: 1050px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const EmptySection = styled.div`
  display: flex;
  height: 32.188rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    height: 17.25rem;
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;
const RecommendSection = styled.div`
  /* display: flex;
  @media (max-width: 768px) {
    width: 95%;
  } */
  /* display: flex;
  flex-direction: row; */
`;

const Title = styled.div`
  display: flex;
  width: 1050px;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 16px;
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
