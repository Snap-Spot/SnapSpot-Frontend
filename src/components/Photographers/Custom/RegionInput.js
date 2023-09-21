import styled from "styled-components";
import { React, useState } from "react";
import { regions } from "../../search/FilteringList";
import arrow from "../../../assets/photograph/dropdown.png";
import deleteIcon from "../../../assets/photograph/optionDelete.png";

const RegionInput = () => {
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [selectedSubRegion, setSelectedSubRegion] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const cancelSelect = (el) => {
    setSelectedSubRegion((prevSelectedSubRegion) =>
      prevSelectedSubRegion.filter((item) => item !== el)
    );
  };

  const handleSubRegionClick = (subregion) => {
    setSelectedSubRegion((prevSelectedSubRegion) => {
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
            {selectedSubRegion.map((el, idx) => (
              <SelectedOption
                key={idx}
                isSelected={true}
                onClick={() => cancelSelect(el)}
                open={toggle}
              >
                <Row>
                  {el} <DeleteIcon src={deleteIcon} />
                </Row>
              </SelectedOption>
            ))}
          </Option>
        )}
        <BaseLine>
          {toggle && (
            <RegionTab>
              {selectedSubRegion.map((el, idx) => (
                <SelectedOption
                  key={idx}
                  isSelected={true}
                  onClick={() => cancelSelect(el)}
                  open={toggle}
                >
                  <Row>
                    {el} <DeleteIcon src={deleteIcon} />
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
                          isSelected={selectedRegion === region.name}
                        >
                          {region.name}
                        </Region>
                      </Box>
                    ))}
                  </RegionList>
                )}
                <SubregionList>
                  {selectedRegion && (
                    <Box>
                      {regions
                        .find((region) => region.name === selectedRegion)
                        .subregions.map((subregion, index) => (
                          <SubregionBox key={index}>
                            <Subregion
                              onClick={() =>
                                handleSubRegionClick(subregion.subregion)
                              }
                              isSelected={selectedSubRegion.includes(
                                subregion.subregion
                              )}
                            >
                              {subregion.subregion}
                            </Subregion>
                          </SubregionBox>
                        ))}
                    </Box>
                  )}
                </SubregionList>
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
    width: 90%;
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
  }
`;

const SelectedOption = styled(Subregion)`
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
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
    flex-direction: column;
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
      color: #3C3AAC;`}
  }
`;

const RegionTab = styled.div`
  width: 24.5rem;
  height: 22rem;
  @media (max-width: 768px) {
    /* width: 90%; */
    height: 22rem;
    border-bottom: 0.063rem solid #dbdbdb;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 82%;
  margin-top: 0.3rem;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 90%;
  }
`;

const RegionList = styled.div`
  width: 7rem;
  overflow: auto;
  border-right: solid 0.063rem #e6e6e6;

  @media (max-width: 768px) {
    width: 35%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 0.5rem;
    border: none;
  }
`;

export default RegionInput;