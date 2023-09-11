import styled from "styled-components";
import btn from "../../../assets/photograph/filterbtn.png";
import { useState } from "react";

const ReviewFiltering = () => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  const option = ["별점 높은 순", "최신 순"];

  return (
    <FilterContainer open={toggle}>
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
          ) : select.length > 0 ? (
            <P toggle={toggle} select={select}>
              {select}
            </P>
          ) : (
            <P toggle={toggle}>{option[0]}</P>
          )}
        </OptionContainer>
        <Btn src={btn} open={toggle} onClick={() => setToggle(!toggle)} />
      </BaseLine>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  width: 140px;
  height: 30px;
  padding: 9px 32px;
  padding-right: 9px;
  align-items: center;
  border-radius: 32px;
  background: var(--transparent-grey, rgba(129, 129, 129, 0.4));
  height: ${(props) => (props.open ? "80px" : "37px")};

  @media (max-width: 768px) {
    width: 115px;
    height: ${(props) => (props.open ? "60px" : "20px")};
    padding: 9px 16px;
    padding-right: 5px;
    border-radius: 20px;
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
  margin-right: ${(props) => (props.select === "최신 순" ? "1.6rem" : "")};

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 0.9rem;
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
    width: 33px;
    height: 30px;
  }
`;

export default ReviewFiltering;
