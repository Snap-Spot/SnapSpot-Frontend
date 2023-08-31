import styled from "styled-components";
import btn from "../../../assets/photograph/filterbtn.png";

const Filtering = () => {
  return (
    <FilterContainer>
      <Text> 별점 높은 순</Text>
      <Btn src={btn} />
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
`;

const Text = styled.p`
  margin-right: 0.5rem;
  font-size: 16px;
`;

const Btn = styled.img`
  width: 46px;
  height: 41px;
  cursor: pointer;
`;

export default Filtering;
