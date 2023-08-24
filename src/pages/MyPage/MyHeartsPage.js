import { React } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import PhotoBox from "../../components/Mypage-User/Pick/PhotoBox";

const MyHeartsPage = () => {
  return (
    <>
      <Header />

      <Wrapper>
        <div className="title">좋아요 모아보기</div>
        <GridBox>
          <div class="grid">
            <div>
              <PhotoBox
                photo={""}
                photographer="에밀리"
                region="제주도 서귀포"
              />
            </div>
            <div>
              <PhotoBox photographer="에밀리" region="제주도 서귀포" />
            </div>
            <div>
              <PhotoBox photographer="에밀리" region="제주도 서귀포" />
            </div>
            <div>
              <PhotoBox photographer="에밀리" region="제주도 서귀포" />
            </div>
          </div>
        </GridBox>
      </Wrapper>
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
