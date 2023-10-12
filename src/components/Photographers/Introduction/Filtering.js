import styled from "styled-components";
import btn from "../../../assets/photograph/filterbtn.png";
import { useState, useEffect } from "react";

const Filtering = ({ option, short, setSelect, select }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <FilterContainer open={toggle} select={select} short={short}>
      <BaseLine>
        <OptionContainer>
          {toggle ? (
            option.map((el, i) => (
              <P
                key={i}
                onClick={() => {
                  setSelect(el);
                  setToggle(!toggle);
                }}
                toggle={toggle}
              >
                {el}
              </P>
            ))
          ) : (
            <P toggle={toggle} select={select}>
              {select}
            </P>
          )}
        </OptionContainer>
        <Btn src={btn} open={toggle} onClick={() => setToggle(!toggle)} />
      </BaseLine>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.short ? "100px" : "140px")};
  height: 44px;
  border-radius: 22px;
  border: 1px solid black;
  background-color: #f6f6f6;
  padding-left: 0.9rem;
  font-size: 20px;
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
  height: ${(props) => (props.open ? "250px" : "37px")};

  @media (max-width: 768px) {
    font-size: 16px;
    width: ${(props) => (props.short ? "72px" : "100px")};
    height: ${(props) => (props.open ? "165px" : "30px")};
  }
`;

const BaseLine = styled.div`
  display: flex;
  align-items: baseline;
`;

const P = styled.p`
  font-weight: 500;
  cursor: pointer;
  margin-bottom: ${(props) => (props.toggle ? "0.9rem" : "1.2rem")};
  margin-top: 0.5rem;
  margin-right: ${(props) => (props.select === "기타" ? "1.6rem" : "")};
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const OptionContainer = styled.div`
  margin-right: 0.5rem;
  font-size: 16px;
`;

const Btn = styled.img`
  width: 46px;
  height: 41px;
  cursor: pointer;
  position: relative;
  top: 0.8rem;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};

  @media (max-width: 768px) {
    width: 35px;
    height: 31px;
  }
`;

export default Filtering;
