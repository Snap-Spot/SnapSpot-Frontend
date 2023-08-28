import styled from "styled-components";
import { React, useState, useEffect } from "react";
import CustomCalender from "./CustomCalender";
import { regions, sections, orders } from "./FilteringList.js";

const FilteringBox = ({ isFilteringOpen, setIsFilteringOpen }) => {
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

  const handleSearchBtnClick = (isFilteringOpen) => {
    setIsFilteringOpen(!isFilteringOpen);
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
        <Btn onClick={handleSearchBtnClick}>조회하기</Btn>
      </BtnTab>
    </Wrapper>
  );
};

export default FilteringBox;

const Wrapper = styled.div`
  width: 100%;
  height: 25.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0rem 1rem 3.188rem 0rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 81vh;
    justify-content: space-between;
  }

  @media (max-height: 680px) {
    //비율 유지를 위해 height가 작은 기종일 경우 높이 별도 설정
    height: 92vh;
  }
`;

const FilterTab = styled.div`
  //조회하기 버튼을 제외한 Filter 컴포넌트
  width: 100%;
  height: 21rem;
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
    height: 20%;
    width: 90%;
    border-bottom: 0.063rem solid #dbdbdb;
  }
`;

const DateTab = styled.div`
  width: 20%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    height: 40%;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 82%;
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
  font-family: Noto Sans KR;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  overflow: auto;
  margin-right: 1rem;

  margin: 0.15rem 1rem 0.15rem 0;
  padding: 0.05rem;

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
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  overflow: auto;
  margin: 0.15rem 1rem 0.15rem 0;
  padding: 0rem 0.2rem;
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
  padding: 0rem 0.2rem;
  font-family: Noto Sans KR;
  font-size: 0.9rem;
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
    margin-bottom: 0.4rem;
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
    font-size: 0.875rem;
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
  width: 5rem;
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
    /* margin-top: 1rem; */
  }
`;

const BtnTab = styled.div`
  @media (max-width: 768px) {
    height: 4rem;
  }
`;
