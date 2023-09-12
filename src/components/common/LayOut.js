import Header from "./Header";
import styled from "styled-components";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <Center>{children}</Center>
    </>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LayOut;
