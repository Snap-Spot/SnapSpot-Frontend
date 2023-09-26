import React, { useState } from "react";
import { styled } from "styled-components";
import openDropdownImg from "../../../assets/mypage/openDropdown.png";
import close from "../../../assets/mypage/modals/close.png";
const DropdownFilter = ({ filterList }) => {
  const [selected, setSelected] = useState(-1);
  var [isOpenDropdown, setIsOpenDropdown] = useState(false); //수정

  const closeModal = () => {
    setIsOpenDropdown(false);
  };
  const handleSelect = (index) => {
    setSelected(index);
    setIsOpenDropdown(false);
  };
  const openDropdown = () => {
    //수정
    setIsOpenDropdown(true);
  };
  return (
    <>
      {isOpenDropdown ? (
        <Open>
          <img className="close" src={close} alt="close" onClick={closeModal} />
          {filterList.map((el, index) => {
            return (
              <>
                <Item onClick={() => handleSelect(index)}>{el}</Item>
              </>
            );
          })}
        </Open>
      ) : (
        <Closed>
          {selected !== -1 ? (
            <Title onClick={openDropdown}>
              {filterList[selected]}
              <img src={openDropdownImg} alt="" />
            </Title>
          ) : (
            <Title onClick={openDropdown}>
              {filterList[0]}
              <img src={openDropdownImg} alt="" />
            </Title>
          )}
        </Closed>
      )}
    </>
  );
};

export default DropdownFilter;

const Open = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 180px;
  box-sizing: border-box;
  padding: 20px;
  align-items: flex-start;
  border-radius: 32px;
  background: var(--lesswhite, #f6f6f6);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
  gap: 25px;
  @media (max-width: 768px) {
    //모바일
    border-radius: 18px;
    padding: 8px 15px;
    gap: 8px;
    width: 100px;
  }

  .close {
    position: absolute;
    right: 20px;
    top: 16px;
    width: 32px;
    height: 32px;
    @media (max-width: 768px) {
      //모바일
      width: 18px;
      height: 18px;
      position: absolute;
      right: 8px;
      top: 7px; //
    }
  }
`;
const Closed = styled.div`
  box-sizing: border-box;
  width: 180px;
  padding: 10px 32px;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  display: flex;
  border-radius: 32px;
  background: var(--transparent-grey, rgba(129, 129, 129, 0.4));
  @media (max-width: 768px) {
    //모바일
    border-radius: 18px;
    padding: 8px 15px;
    align-items: center;
    gap: 8px;
    width: 100px;
  }
`;

const Item = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    //모바일
    font-size: 10px;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  img {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    //모바일
    font-size: 10px;
    img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  }
`;
