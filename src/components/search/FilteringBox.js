import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { regions, orders, category } from "./FilteringList.js";

const FilteringBox = ({ setIsFilteringOpen, setCurrentPage }) => {
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [selectedSubRegion, setSelectedSubRegion] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRegionClick = (region) => {
    setSelectedRegion((prevRegion) => (prevRegion === region ? null : region));
  };

  const handleSubRegionClick = (areaId) => {
    setSelectedSubRegion((prevAreaId) =>
      prevAreaId === areaId ? null : areaId
    );
  };

  const handleSectionClick = (section) => {
    setSelectedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const handleOrderClick = (order) => {
    setSelectedOrder((prevOrder) => (prevOrder === order ? null : order));
  };

  const handleSearchBtnClick = (isFilteringOpen) => {
    let endpoint = "/photographers";
    const queryParams = [];
    if (selectedSubRegion) {
      queryParams.push(`areaId=${selectedSubRegion}`);
    }
    if (selectedSection) {
      queryParams.push(`special=${selectedSection}`);
    }
    if (selectedDate) {
      queryParams.push(`ableDate=${selectedDate}`);
    }
    if (selectedOrder && selectedOrder.length > 0) {
      queryParams.push(`sort=${selectedOrder}`);
    }

    if (queryParams.length > 0) {
      endpoint += "?" + queryParams.join("&");
    }
    navigate(endpoint);
    localStorage.setItem("currentPage", "1");
    setCurrentPage(1);
    setIsFilteringOpen(!isFilteringOpen);
  };

  return (
    <Wrapper>
      <FilterTab>
        <RegionTab>
          <Title>지역</Title>
          <List>
            {regions && regions.length > 0 && (
              <RegionList>
                {regions.map((region, index) => (
                  <Box key={index}>
                    <Region
                      onClick={() => handleRegionClick(region.name)}
                      isselected={
                        selectedRegion === region.name ? "true" : "false"
                      }
                    >
                      {region.name}
                    </Region>
                  </Box>
                ))}
              </RegionList>
            )}
            {selectedRegion && (
              <SubregionList>
                <Box>
                  {regions
                    .find((region) => region.name === selectedRegion)
                    .subregions.map((data) => (
                      <SubregionBox key={data.areaId}>
                        <Subregion
                          onClick={() => handleSubRegionClick(data.areaId)}
                          isselected={
                            selectedSubRegion === data.areaId ? "true" : "false"
                          }
                        >
                          {data.subregion}
                        </Subregion>
                      </SubregionBox>
                    ))}
                </Box>
              </SubregionList>
            )}
          </List>
        </RegionTab>
        <DateTab>
          <Title>날짜</Title>
          <CalendarBox>
            <CustomCalendar
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          </CalendarBox>
        </DateTab>
        <SectionTab>
          <Title>전문분야</Title>
          <SectionList>
            {category && (
              <Box>
                {category.map((section, index) => (
                  <Section
                    key={index}
                    onClick={() => handleSectionClick(section.key)}
                    isselected={
                      selectedSection === section.key ? "true" : "false"
                    }
                  >
                    {section.label}
                  </Section>
                ))}
              </Box>
            )}
          </SectionList>
        </SectionTab>
        <OrderTab>
          <Title>순서</Title>
          <SectionList>
            {orders && (
              <Box>
                {orders.map((order, index) => (
                  <Section
                    key={index}
                    onClick={() => handleOrderClick(order.key)}
                    isselected={selectedOrder === order.key ? "true" : "false"}
                  >
                    {order.label}
                  </Section>
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
  position: absolute;
  box-shadow: 0rem 1rem 3.188rem 0rem rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 768px) {
    /* position: relative; */
    padding-top: 0.3rem;
    height: 83vh;
    justify-content: space-between;
  }

  @media (max-width: 380px) {
    //비율 유지를 위해 height가 작은 기종일 경우 높이 별도 설정
    height: 100vh;
  }
`;

const FilterTab = styled.div`
  //조회하기 버튼을 제외한 Filter 컴포넌트
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 40rem;
    margin: 0;
  }
`;

const RegionTab = styled.div`
  width: 24%;
  height: 100%;
  @media (max-width: 768px) {
    height: 8rem;
    width: 90%;
    border-bottom: 0.063rem solid #dbdbdb;
  }
`;

const DateTab = styled.div`
  width: 20%;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    height: 17rem;
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
    height: 5rem;
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
    height: 5rem;
    padding: 0.5rem 0;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;

  width: 6rem;
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
  margin-top: 0.3rem;
  height: 82%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const RegionList = styled.div`
  width: 7rem;
  overflow: auto;
  border-right: solid 0.063rem #e6e6e6;

  @media (max-width: 768px) {
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
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

  ${(props) =>
    props.isselected === "true" &&
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
      props.isselected === "true" &&
      `
      font-weight: 700;
      color: #3C3AAC;`}
  }
`;

const SubregionList = styled.div`
  overflow: auto;
  margin-left: 1.563rem;
  width: 12rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-top: 0.3rem;
    padding-bottom: 0.6rem;
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

  ${(props) =>
    props.isselected === "true" &&
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
      props.isselected === "true" &&
      `
    border-radius: 0.5rem;
    border: 0.063rem solid #5170DE;
    background: #FFF;
    box-shadow: 0.125rem 0.125rem 0.5rem 0rem rgba(166, 185, 255, 0.60);
    color: #3C3AAC;

    font-weight: 700;
    line-height: 128.5%;
`}
  }
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
    padding-bottom: 0.7rem;
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
  margin-bottom: 0.6rem;

  ${(props) =>
    props.isselected === "true" &&
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
      props.isselected === "true" &&
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

  cursor: pointer;
`;

const BtnTab = styled.div`
  @media (max-width: 768px) {
    height: 4rem;
  }
`;
