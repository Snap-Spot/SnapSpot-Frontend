import styled from "styled-components";
import { React, useState, useEffect } from "react";
import CustomCalender from "./CustomCalender";

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
      <FilterTab>
        {/* 지역필터링 */}
        <RegionTab>
          <Title>지역</Title>
          <List>
            <RegionList>
              {regions.map((region, index) => (
                <Box>
                  <Region
                    key={index}
                    onClick={() => handleRegionClick(region)}
                    isSelected={selectedRegion === region}
                  >
                    {region.name}
                  </Region>
                </Box>
              ))}
            </RegionList>
            <SubregionList>
              {selectedRegion && (
                <Box>
                  {selectedRegion.subregions.map((subregion, index) => (
                    <SubregionBox>
                      <Subregion
                        key={index}
                        onClick={() => handleSubRegionClick(subregion)}
                        isSelected={selectedSubRegion === subregion}
                      >
                        {subregion}
                      </Subregion>
                    </SubregionBox>
                  ))}
                </Box>
              )}
            </SubregionList>
          </List>
        </RegionTab>
        {/* 날짜 필터링 */}
        <DateTab>
          <Title>날짜</Title>
          <CalendarBox>
            <CustomCalender />
          </CalendarBox>
        </DateTab>
        {/* 전문분야 필터링 */}
        <SectionTab>
          <Title>전문분야</Title>
          <SectionList>
            {sections && (
              <Box>
                {sections.map((section, index) => (
                  <>
                    <Section
                      key={index}
                      onClick={() => handleSectionClick(section)}
                      isSelected={selectedSection === section}
                    >
                      {section}
                    </Section>
                    {index !== sections.length - 1 && <Line />}
                  </>
                ))}
              </Box>
            )}
          </SectionList>
        </SectionTab>
        {/* 순서 필터링 */}
        <OrderTab>
          <Title>순서</Title>{" "}
          <SectionList>
            {orders && (
              <Box>
                {orders.map((order, index) => (
                  <>
                    <Section
                      key={index}
                      onClick={() => handleOrderClick(order)}
                      isSelected={selectedOrder === order}
                    >
                      {order}
                    </Section>
                    {index !== orders.length - 1 && <Line />}
                  </>
                ))}
              </Box>
            )}
          </SectionList>
        </OrderTab>
      </FilterTab>
      {/* 조회하기 버튼이 있는 Tab */}
      <BtnTab>
        <Btn>조회하기</Btn>
      </BtnTab>
    </Wrapper>
  );
};

export default FilteringBox;

const Wrapper = styled.div`
  width: 100%;
  height: 35.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0rem 1rem 3.188rem 0rem rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 81vh;
  }
  @media (max-height: 680px) {
    //비율 유지를 위해 height가 작은 기종일 경우 높이 별도 설정
    height: 92vh;
  }
`;

const FilterTab = styled.div`
  //조회하기 버튼을 제외한 Filter 컴포넌트가 위치
  width: 100%;
  height: 26.875rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    margin: 0;
  }
`;

const RegionTab = styled.div`
  width: 24%;
  height: 100%;
  @media (max-width: 768px) {
    height: 22%;
    width: 90%;
    border-bottom: 0.063rem solid #dbdbdb;
  }
`;

const DateTab = styled.div`
  width: 20%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    height: 36%;
    width: 90%;
    border-bottom: 0.063rem solid #dbdbdb;
    padding: 0.5rem 0;
  }
`;

const SectionTab = styled.div`
  width: 5.5%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    border-bottom: 0.063rem solid #dbdbdb;
    padding: 0.5rem 0;
  }
`;

const OrderTab = styled.div`
  width: 8%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    padding: 0.5rem 0;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  margin-top: 0.3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RegionList = styled.div`
  width: 7rem;
  overflow: auto;
  border-right: solid 0.063rem #e6e6e6;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    padding-bottom: 0.5rem;
    border: none;
  }
`;
const Region = styled.div`
  cursor: pointer;
  color: #060606;
  display: inline-block;
  padding: 0.1rem;
  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  overflow: auto;
  margin-right: 1rem;

  margin: 0.2rem 1rem 0.2rem 0;

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;

  `}

  
@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    
    color: #000;
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 128.5%;

    margin-bottom: 0.5rem;
    ${(props) =>
      props.isSelected &&
      `
      font-weight: 700;
      color: #3C3AAC;
;
`}
`;

const SubregionList = styled.div`
  overflow: auto;
  margin-left: 1.563rem;
  width: 12rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-top: 0.3rem;
    padding-bottom: 0.5rem;
  }
`;

const Subregion = styled.div`
  cursor: pointer;
  color: #060606;
  display: inline-block;


  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  overflow: auto;
  margin: 0.2rem 1rem 0.2rem 0;  
  padding: 0.1rem;
  /* margin: auto; */

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 0.063rem solid #3C3AAC; 
    border-radius: 0.25rem;
  `}

@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    border: 0.063rem solid var(--lightgrey-2, #dbdbdb);
    background: var(--lesswhite, #f6f6f6);
    padding: 0.688rem 1rem;
    color: var(--darkgrey, #777);
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.5rem;
    line-height: 128.5%;

    ${(props) =>
      props.isSelected &&
      `
    border-radius: 0.5rem;
    border: 0.063rem solid #5170DE;
    background: #FFF;
    box-shadow: 0.125rem 0.125rem 0.5rem 0rem rgba(166, 185, 255, 0.60);
    color: #3C3AAC;

    text-align: center;
    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128.5%;
`}
`;

const SubregionBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
`;

const CalendarBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const SectionList = styled.div`
  width: 7rem;
  margin-top: 0.8rem;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    padding-bottom: 0.5rem;
  }
`;

const Section = styled.div`
  cursor: pointer;
  color: #060606;
  display: inline-block;
  padding: 0.1rem;
  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${(props) =>
    props.isSelected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 1px solid #3C3AAC; 
    border-radius: 4px;
    `}

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    border: 1px solid var(--lightgrey-2, #dbdbdb);
    background: var(--lesswhite, #f6f6f6);
    padding: 11px 16px;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    color: var(--darkgrey, #777);
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 128.5%;

    ${(props) =>
      props.isSelected &&
      `
    border-radius: 0.5rem;
    border: 0.063rem solid #5170DE;
    background: #FFF;
    box-shadow: 0.125rem 0.125rem 0.5rem 0rem rgba(166, 185, 255, 0.60);
    color: #3C3AAC;

    text-align: center;
    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128.5%;
`}
  }
`;

const Box = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Line = styled.div`
  width: 5.313rem
  height: 0.063rem;
  background: #cecece;
  margin: 0.625rem 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  width: 20.9rem;
  height: 2.563rem;
  border-radius: 0.5rem;
  background: var(--main-font-color, #3c3aac);
  color: #fff;
  text-align: center;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const BtnTab = styled.div`
  /* @media (max-width: 768px) {
  } */
`;

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
    subregions: [
      "수원 인계",
      "수원역/구운/행궁/장안구",
      "수원시청/권선/영통/세류",
      "안양/평촌/인덕원/과천",
      "성남/분당/위례",
      "용인",
      "동탄/화성/오산/병점",
      "하남/광주/여주/이천",
      "안산 중앙역",
      "안산 고잔/상록수/선부동/월피동",
      "군포/의왕/금정/산본",
      "시흥/월곶",
      "광명",
      "평택/송탄/안성",
      "부천",
      "일산/고양",
      "파주",
      "김포",
      "의정부",
      "구리",
      "남양주",
      "포천",
      "양주/동두천/연천",
      "양평",
      "가평/청평",
    ],
  },
  {
    name: "인천",
    subregions: [
      "부평",
      "구월",
      "석남/서구청/검단",
      "작전/경인교대",
      "주안",
      "송도/연수",
      "인천공항/을왕리/영종도",
      "월미도/신포/동인천/연안부두",
      "강화/웅진",
      "동암/간석",
      "소래포구/호구포",
      "용현/숭의/도화/동구",
    ],
  },
  {
    name: "강원",
    subregions: [
      "춘천/강촌",
      "원주",
      "경포대/사천/주문진/정동진",
      "강릉역/교동/옥계",
      "영월/정선",
      "속초/고성",
      "양양",
      "동해/삼척/태백",
      "평창",
      "홍천/횡성",
      "화천/철원/인제/양구",
    ],
  },
  {
    name: "제주",
    subregions: [
      "서귀포시/중문/모슬포",
      "이호테우/하귀/애월/한림/협재",
      "함덕/김녕/세화",
      "남원/표선/성산",
      "용담/도두/뎐동/노형동",
      "제주시청/탑동/건입동",
    ],
  },
  {
    name: "대전",
    subregions: [
      "유성구",
      "은행/대흥/선화/유천",
      "용전/복합터미널",
      "둔산/용문/월평",
      "중리/신탄진",
    ],
  },
  {
    name: "충북",
    subregions: [
      "청주 흥덕구/서원구",
      "청주 상당구/청원구",
      "충주/수안보",
      "제천/단양",
      "진천/음성",
      "보은/옥천/괴산/증평/영동",
    ],
  },
  {
    name: "충남/세종",
    subregions: [
      "천안 서북구",
      "천안 동남구",
      "아산",
      "공주/동학사/세종",
      "계룡/금산/논산/청양",
      "예산/홍성",
      "태안/안면도/서산",
      "당진",
      "보령/대천해수욕장",
      "서천/부여",
    ],
  },
  {
    name: "부산",
    subregions: [
      "해운대/센텀시티/재송",
      "송정/기장/정관/오시리아 관광단지",
      "광안리/수영",
      "경성대/대연/용호동/문현",
      "서면/양정/초읍/부산시민공원",
      "남포동/중앙동/태종대/송도/영도",
      "부산역/범일동/부산진역",
      "연산/토곡",
      "동래/사직/미남/온천장/부산대/구서/서동",
      "사상/엄궁/학장",
      "덕천/화명/만덕/구포",
      "하단/명지/김해공항/다대포/강서/신호/괴정/지사",
    ],
  },
  {
    name: "울산",
    subregions: ["남구/중구", "동구/북구/울주군"],
  },
  {
    name: "경남",
    subregions: [
      "창원 상남동/용호동/중앙동/창원시청",
      "창원 명서동/봉곡동/팔용동/북면온천/창원종합버스터미널",
      "마산",
      "진해",
      "김해/장유",
      "양산/밀양",
      "진주",
      "거제/통영/고성",
      "사천/남해",
      "하동/산청/함양",
      "거창/함안/창녕/합천/의령",
    ],
  },
  {
    name: "대구",
    subregions: [
      "동성로/서문시장/대구역/경북대/엑스코",
      "동대구역/신천동/수성못/범어/라이온즈파크/알파시티/시지",
      "대구공항/혁신도시/동촌유원지/팔공산/이시아폴리스/군위",
      "서대구역/북부정류장/평리/비산/칠곡지구/동천동/금호지구",
      "두류/이월드/본리동/죽전동/서부정류장/앞산공원/안지랑/대명동/봉덕동",
      "성서/계명대/상인동/대곡/현풍/테크노폴리스/가창/달성군",
    ],
  },
  {
    name: "경북",
    subregions: [
      "포항 남구",
      "포항 북구",
      "경주",
      "구미",
      "경산",
      "안동",
      "영천/청도",
      "김천/칠곡/성주",
      "문경/상주/영주/예천/의성/봉화",
      "울진/영덕/청송",
      "울릉도",
    ],
  },
  {
    name: "광주",
    subregions: [
      "상무지구/금호지구/유스퀘어/서구",
      "충장로/대인시장/국립아시아문화전당/동구/남구",
      "첨단지구/양산동",
      "하남/광주여대/송정역/광산구",
      "광주역/기아챔피언스월드/전대사거리/북구",
    ],
  },
  {
    name: "전북",
    subregions: [
      "전주 덕진구",
      "전주 완산구/완주",
      "군산",
      "익산",
      "남원/임실/순창/무주/진안/장수",
      "정읍/부안/김제/고창",
    ],
  },
];
const sections = ["커플스냅", "우정스냅", "졸업스냅", "웨딩스냅", "가족스냅"];
const orders = ["기본", "별점 높은 순", "가격 낮은 순", "후기 많은 순"];
