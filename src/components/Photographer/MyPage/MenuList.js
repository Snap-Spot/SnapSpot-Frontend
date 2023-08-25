import styled from "styled-components";
import arrow from "../../../assets/photograph/arrow.png";
import { useNavigate } from "react-router-dom";

const MenuList = ({ icon, text, address }) => {
  const navigate = useNavigate();

  return (
    <>
      <MenuContainer onClick={() => navigate(address)}>
        <Icon src={icon} />
        <Menu>{text}</Menu>
        <Arrow src={arrow} />
      </MenuContainer>
      <Line2 />
    </>
  );
};

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Menu = styled.p`
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Arrow = styled.img`
  width: 0.6rem;
  margin-left: auto;
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.8rem;
`;

const Line2 = styled.div`
  background: #e6e6e6;
  width: 20rem;
  height: 1px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default MenuList;
