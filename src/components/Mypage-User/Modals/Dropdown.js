import React, { useState } from "react";
import { styled } from "styled-components";
import openDropdownImg from "../../../assets/mypage/openDropdown.png";
const Dropdown = ({ options, handleTarget }) => {
  const [selected, setSelected] = useState(-1);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleSelect = (index, el) => {
    setSelected(index);
    handleTarget(el);

    setTimeout(() => {
      setIsOpenDropdown(false);
    }, 100);
  };
  const openDropdown = () => {
    //수정
    setIsOpenDropdown(true);
  };
  return (
    <Wrapper
      $width={`${options.width}px`}
      $mb_width={`${options.mb_width}px`}
      $isOpen={isOpenDropdown}
    >
      {isOpenDropdown ? (
        <Open>
          {options.list.map((el, index) => {
            var color = "";
            if (index == selected) {
              color = "blue";
            }
            return (
              <>
                {index !== 0 && <Line />}
                <Item $color={color} onClick={() => handleSelect(index, el)}>
                  {el}
                </Item>
              </>
            );
          })}
        </Open>
      ) : (
        <Closed>
          {selected !== -1 ? (
            <Title onClick={openDropdown}>
              <div
                className="text"
                $width={`${options.width}px`}
                $mb_width={`${options.mb_width}px`}
              >
                {options.list[selected]}
              </div>

              <img src={openDropdownImg} alt="" />
            </Title>
          ) : (
            <Title onClick={openDropdown}>
              <div className="text">{options.title}</div>
              <img src={openDropdownImg} alt="" />
            </Title>
          )}
        </Closed>
      )}
    </Wrapper>
  );
};

export default Dropdown;
const Wrapper = styled.div`
  z-index: ${(props) => (props.$isOpen ? 1 : 0)};
  position: absolute;
  cursor: pointer;
  width: ${(props) => props.$width};
  @media (max-width: 768px) {
    //모바일
    width: ${(props) => props.$mb_width};
  }
  max-height: 212px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  border-radius: 32px;
  @media (max-width: 768px) {
    //모바일
    border-radius: 20px;
  }
  background: var(--lesswhite, #f6f6f6);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--darkgrey, #777);
`;
const Open = styled.div`
  overflow-y: scroll;

  width: 100%;
  padding: 8px 0;
  @media (max-width: 768px) {
    //모바일
    padding: 0px 0;
  }
  font-size: 18px;
  font-weight: 500;
`;
const Closed = styled.div`
  width: 100%;
`;

const Item = styled.div`
  color: ${(props) => (props.$color === "blue" ? "#3C3AAC" : "black")};
  z-index: ${(props) => (props.$isOpen ? 1 : 0)};
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    //모바일
    margin: 12px auto;
    font-size: 12px;
  }
`;
const Line = styled.div`
  height: 1px;
  background: #dbdbdb;
`;
const Title = styled.div`
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  @media (max-width: 768px) {
    //모바일
    padding: 0 12px;
  }

  img {
    width: 28px;
    height: 28px;
    margin-left: 12px;
    @media (max-width: 768px) {
      //모바일
      width: 16px;
      height: 16px;
      margin-left: 8px;
      right: 12px;
    }
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  }

  .text {
    width: 100%;
  }
`;
