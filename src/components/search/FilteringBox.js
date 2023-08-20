import styled from "styled-components";
import { React, useState, useEffect } from "react";
import calendar from "../../assets/search/calendar.png";

const FilteringBox = ({}) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubRegion, setSelectedSubRegion] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleSubRegionClick = (subregion) => {
    setSelectedSubRegion(subregion);
  };
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Wrapper>
      <RegionTab>
        <Title>지역</Title>
        <List>
          <RegionList>
            {regions.map((region, index) => (
              <Region
                key={index}
                onClick={() => handleRegionClick(region)}
                isSelected={selectedRegion === region}
              >
                {region.name}
              </Region>
            ))}
          </RegionList>
          <SubregionList>
            {selectedRegion && (
              <div>
                {selectedRegion.subregions.map((subregion, index) => (
                  <Subregion
                    key={index}
                    onClick={() => handleSubRegionClick(subregion)}
                    isSelected={selectedSubRegion === subregion}
                  >
                    {subregion}
                  </Subregion>
                ))}
              </div>
            )}
          </SubregionList>
        </List>
      </RegionTab>
      <DateTab>
        <Title>날짜</Title>
        <Calendar>
          <img src={calendar} alt="검색하기" />
        </Calendar>
      </DateTab>
      <SectionTab>
        <Title>전문분야</Title>
        <SectionList>
          {sections && (
            <div>
              {sections.map((section, index) => (
                <Section
                  key={index}
                  onClick={() => handleSectionClick(section)}
                  isSelected={selectedSection === section}
                >
                  {section}
                </Section>
              ))}
            </div>
          )}
        </SectionList>
      </SectionTab>
      <OrderTab>
        <Title>순서</Title>{" "}
        <SectionList>
          {orders && (
            <div>
              {orders.map((order, index) => (
                <Section
                  key={index}
                  onClick={() => handleOrderClick(order)}
                  isSelected={selectedOrder === order}
                >
                  {order}
                </Section>
              ))}
            </div>
          )}
        </SectionList>
      </OrderTab>
    </Wrapper>
  );
};

export default FilteringBox;

const regions = [
  {
    name: "서울",
    subregions: [
      "강남/역삼/삼성/논현",
      "서초/신사/방배",
      "잠실/신천",
      "여의도/당산/문래",
      "신림/서울대/사당/동작",
      "천호/길동/둔촌",
      "화곡/까치산/양천/목동",
      "구로/금천/오류/신도림",
      "신촌/홍대/합정/연남",
      "망원/성산/상암",
      "구파발/연신내/불광/응암",
      "종로/대학로/동묘",
      "성신여대/성북/월곡",
      "이태원/용산/서울역",
      "시청/명동/회현",
      "동대문/을지로/충무로",
      "신당/약수/한강진",
      "회기/고려대/청량리/신설동",
      "장안동/답십리",
      "왕십리/성수/금호",
      "수유/미아",
      "상봉/중랑/면목",
      "태릉/노원/도봉/창동",
    ],
  },
  {
    name: "경기",
    subregions: ["강남", "강북", "송파"],
  },
  {
    name: "인천",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "강원",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "제주",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "대전",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "충북",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "충남/세종",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "부산",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "울산",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "경남",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "대구",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "경북",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "광주",
    subregions: ["제주시", "서귀포"],
  },
  {
    name: "전북",
    subregions: ["제주시", "서귀포"],
  },
];
const sections = ["커플스냅", "우정스냅", "졸업스냅", "웨딩스냅", "가족스냅"];
const orders = ["기본", "별점 높은 순", "가격 낮은 순", "후기 많은 순"];

const Wrapper = styled.div`
  width: 100%;
  height: 26.875rem;
  background: #fff;
  box-shadow: 0px 16px 51px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  margin-top: 0.8rem;
`;
const RegionTab = styled.div`
  width: 22%;
  border-right: solid 0.1rem rgba(129, 129, 129, 0.4);
  height: 100%;
  /* border-width: 0.1rem;
  border-style: solid; */
`;
const DateTab = styled.div`
  width: 16.5%;
  height: 100%;
  border-right: solid 0.1rem rgba(129, 129, 129, 0.4);
  padding: 0 2rem;
`;
const SectionTab = styled.div`
  width: 8%;
  height: 100%;
  border-right: solid 0.1rem rgba(129, 129, 129, 0.4);
  padding: 0 2rem;
`;
const OrderTab = styled.div`
  width: 8%;
  /* height: 370px; */
  height: 100%;
  padding: 0 2rem;
  /* border-width: 0.1rem;
  border-style: solid; */
`;
const Title = styled.div`
  color: #000;
  /* web_b18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Calendar = styled.div`
  height: 320px;
  img {
    margin-top: 2rem;
    width: 235.32px;
    height: 335px;
  }
`;
const RegionList = styled.div`
  width: 6rem;
  overflow: auto;
  border-right: solid 0.063rem #e6e6e6;
`;

const Region = styled.div`
  /* margin-right: 3rem; */
  cursor: pointer;
  color: #060606;
  display: inline-block;
  padding: 0.1rem;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: auto;
  margin-right: 1rem;

  margin: 0.2rem 1rem 0.2rem 0;

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 1px solid #3C3AAC; 
    border-radius: 4px;
  `}
`;

const SubregionList = styled.div`
  overflow: auto;
  margin-left: 1.563rem;
  width: 12rem;
`;

const Subregion = styled.div`
  cursor: pointer;
  color: #060606;
  display: inline-block;
  padding: 0.1rem;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: auto;
  margin: 0.2rem 1rem 0.2rem 0;
  /* margin: 0.1rem; */

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 1px solid #3C3AAC; 
    border-radius: 4px;
  `}
`;
const SectionList = styled.div`
  overflow: auto;
  /* margin-left: 1.563rem; */
  width: 7rem;
  margin-top: 0.8rem;
`;

const Section = styled.div`
  cursor: pointer;
  color: #060606;
  display: inline-block;
  padding: 0.1rem;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: auto;
  margin: 0.2rem 1rem 0.2rem 0;
  /* margin: 0.1rem; */

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 1px solid #3C3AAC; 
    border-radius: 4px;
  `}
`;
