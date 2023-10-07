import styled from "styled-components";
import RegionInput from "./RegionInput";

const LocationInput = ({ areaId, setAreaId }) => {
  return (
    <>
      <SubTitle>활동 지역 설정</SubTitle>
      <RegionInput areaId={areaId} setAreaId={setAreaId} />
    </>
  );
};

const SubTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default LocationInput;
