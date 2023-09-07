import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import footer from "../../assets/photograph/Footer.png";
import more from "../../assets/search/more.png";
import SearchBox from "../../components/search/SearchBox";
import EamptySearch from "../../components/search/EamptySearch";

const SearchPage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);

  const handleMoreClick = () => {
    navigate(`/photographer`);
  };

  return (
    <>
      <Header></Header>
      <Wrapper>
        <SearchTitle>
          <div class="subject">'에밀리'</div>에 대한 검색결과
        </SearchTitle>
        {info ? (
          <Content>
            <SubTitle>
              <div class="subject">'제주도'</div>에서 활동하는 작가
              <img src={more} onClick={handleMoreClick} />
            </SubTitle>
            <Box>
              <div class="grid">
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
              </div>
            </Box>
            <SubTitle>
              <div class="subject">'제주도' </div> 작가
              <img src={more} onClick={handleMoreClick} />
            </SubTitle>
            <Box>
              <div class="grid">
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
                <div>
                  <SearchBox
                    tag="#커플스냅 #유채꽃 #화사함"
                    photographer="에밀리"
                    star="4.7"
                    region="제주도 서귀포"
                    price="130,000"
                    review="238"
                  />
                </div>
              </div>
            </Box>
          </Content>
        ) : (
          <EamptySearch />
        )}
      </Wrapper>
    </>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  .grid {
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 44px;
    row-gap: 100px;
    margin-top: 3.5rem;
    position: relative;
    grid-template-columns: repeat(3, 1fr);

    &:first-child {
      margin-bottom: 10rem;
    }

    @media (max-width: 768px) {
      column-gap: 15px;
      row-gap: 20px;

      margin-top: 1.25rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1048px;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1048px;
`;

const SearchTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 1.063rem;
  }
`;

const SubTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1048px;
  color: #060606;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;

  .subject {
    color: #3c3aac;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 0.75rem;
  }

  img {
    margin-left: 1.1rem;
    margin-top: 0.2rem;
    width: 12px;
    height: 20px;

    @media (max-width: 768px) {
      margin-left: 0.7rem;
      margin-top: 0.3rem;
      width: 8px;
      height: 13.333px;
    }
  }
`;
