import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { regions } from "../../search/FilteringList";
import arrow from "../../../assets/photograph/dropdown.png";
import deleteIcon from "../../../assets/photograph/optionDelete.png";

const RegionInput = ({ areaId, setAreaId }) => {
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [toggle, setToggle] = useState(false);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const cancelSelect = (el) => {
    setAreaId((prevSelectedSubRegion) =>
      prevSelectedSubRegion.filter((item) => item !== el)
    );
  };

  const handleSubRegionClick = (subregion) => {
    setAreaId((prevSelectedSubRegion) => {
      if (prevSelectedSubRegion.includes(subregion)) {
        return prevSelectedSubRegion.filter((item) => item !== subregion);
      } else {
        return [...prevSelectedSubRegion, subregion];
      }
    });
  };

  return (
    <>
      <FilterTab open={toggle}>
        {!toggle && (
          <Option>
            {regions
              .reduce((result, region) => {
                // 현재 region의 subregions 배열에서 areaId가 포함되어 있는지 확인
                const subregions = region.subregions.filter((subregion) =>
                  areaId.includes(subregion.areaId)
                );

                // 만약 subregions가 비어있지 않다면 결과에 추가
                if (subregions.length > 0) {
                  result.push(...subregions);
                }

                return result;
              }, [])
              .map((data) => (
                <SelectedOption
                  key={data.areaId}
                  isselected={true}
                  onClick={() => cancelSelect(data.areaId)}
                  open={toggle}
                >
                  <Row>
                    {data.subregion}
                    <DeleteIcon src={deleteIcon} />
                  </Row>
                </SelectedOption>
              ))}
          </Option>
        )}
        <BaseLine>
          {toggle && (
            <RegionTab>
              {regions
                .reduce((result, region) => {
                  // 현재 region의 subregions 배열에서 areaId가 포함되어 있는지 확인
                  const subregions = region.subregions.filter((subregion) =>
                    areaId.includes(subregion.areaId)
                  );

                  // 만약 subregions가 비어있지 않다면 결과에 추가
                  if (subregions.length > 0) {
                    result.push(...subregions);
                  }

                  return result;
                }, [])
                .map((data) => (
                  <SelectedOption
                    key={data.areaId}
                    isselected={true}
                    onClick={() => cancelSelect(data.areaId)}
                    open={toggle}
                  >
                    <Row>
                      {data.subregion}
                      <DeleteIcon src={deleteIcon} />
                    </Row>
                  </SelectedOption>
                ))}
              <List>
                {regions && regions.length > 0 && (
                  <RegionList>
                    {regions.map((region, index) => (
                      <Box key={index}>
                        <Region
                          onClick={() => handleRegionClick(region.name)}
                          isselected={selectedRegion === region.name}
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
                              isselected={areaId === data.areaId}
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
          )}
          <Arrow open={toggle} src={arrow} onClick={() => setToggle(!toggle)} />
        </BaseLine>
      </FilterTab>
    </>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteIcon = styled.img`
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

const Option = styled.div`
  width: 85%;
`;

const BaseLine = styled.div`
  display: flex;
  align-items: baseline;
  @media (max-width: 768px) {
    /* width: 30rem; */
  }
`;

const Arrow = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const FilterTab = styled.div`
  width: 77%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding-left: 0.2rem;
  border-radius: 22px;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

const Box = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SubregionBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
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

  ${(props) =>
    props.isselected &&
    `
    color: #3C3AAC;
    font-weight: 700;
    border: 0.063rem solid #3C3AAC; 
    border-radius: 0.25rem;
  `}

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;

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
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    margin-right: 0rem;
    margin-bottom: 0.5rem;
    line-height: 128.5%;

    ${(props) =>
      props.isselected &&
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

const SelectedOption = styled(Subregion)`
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    width: 50%;
    padding: 0.5rem 0.5rem;
    margin: 0;
    border-radius: 10px;
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
    props.isselected &&
    `
    color: #3C3AAC;
    font-weight: 700;

  `}

  @media (max-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    margin-right: 0rem;

    color: #000;
    text-align: center;

    font-family: Noto Sans KR;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 128.5%;

    margin-bottom: 0.5rem;
    ${(props) =>
      props.isselected &&
      `
      font-weight: 700;
      color: #3C3AAC;`}
  }
`;

const RegionTab = styled.div`
  width: 24.5rem;
  height: 22rem;
  @media (max-width: 768px) {
    width: 18rem;
    height: 22rem;
    border-bottom: 0.063rem solid #dbdbdb;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 82%;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 75%;
  }
`;

const RegionList = styled.div`
  width: 7rem;
  overflow: auto;
  border-right: solid 0.063rem #e6e6e6;

  @media (max-width: 768px) {
    width: 50%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 0.5rem;
    border: none;
  }
`;

export default RegionInput;
