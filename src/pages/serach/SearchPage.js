import styled from "styled-components";
import footer from "../../assets/photograph/Footer.png";
import more from "../../assets/search/more.png";

import SearchBox from "../../components/search/SearchBox";
const SearchPage = () => {
  return (
    <Wrapper>
      <Title>
        <div class="searchTitle">'에밀리’</div>에 대한 검색결과
      </Title>
      <Title>
        <div class="regionName">'제주도’</div>에서 활동하는 작가
        <img src={more} />
      </Title>
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
    </Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  width: 100%;
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

    margin-top: 3.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  width: 1050px;
  /* margin-left: 14%; */
  color: var(--black, #060606);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  margin-top: 3rem;

  &:nth-child(1) {
    font-size: 24px;
    margin-top: 5rem;
  }

  .searchTitle,
  .regionName {
    color: #3c3aac;
  }

  img {
    margin-left: 1.1rem;
    margin-top: 0.2rem;
    width: 12px;
    height: 20px;
  }
`;
