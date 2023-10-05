import { styled } from "styled-components";
import arrow from "../../../assets/photograph/dropdown.png";
import { useState } from "react";

const Dropdown = ({ specialList }) => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(specialList.keywords || []);
  const option = [
    "전문 분야를 선택해주세요.",
    "결혼스냅",
    "우정스냅",
    "커플스냅",
    "기타",
  ];

  const handleSelect = (value) => {
    if (select.includes(value)) {
      // 이미 선택된 경우 선택 취소
      setSelect(select.filter((item) => item !== value));
    } else {
      // 선택되지 않은 경우 선택 추가
      setSelect([...select, value]);
    }
  };

  return (
    <>
      <SubTitle>전문 분야 등록</SubTitle>
      <Container>
        <Status open={toggle}>
          <BaseLine>
            <OptionContainer>
              {toggle ? (
                option.map((el, i) => (
                  <P
                    key={i}
                    onClick={() => {
                      handleSelect(el); // 선택 핸들러 호출
                      setToggle(!toggle);
                    }}
                    color={select.includes(el) ? "#3c3aac" : "black"} // 선택된 경우 색상 변경
                  >
                    {el}
                  </P>
                ))
              ) : select.length > 0 ? (
                <P color={"black"}>{select.join(", ")} </P>
              ) : (
                <P color={"#A5A5A5"}>{option[0]}</P>
              )}
            </OptionContainer>
            <Arrow
              open={toggle}
              src={arrow}
              onClick={() => setToggle(!toggle)}
            />
          </BaseLine>
        </Status>
      </Container>
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

const BaseLine = styled.div`
  display: flex;
  align-items: baseline;
`;

const Arrow = styled.img`
  width: 1.6rem;
  margin-left: 1.2rem;
  cursor: pointer;
  position: relative;
  top: 0.4rem;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const OptionContainer = styled.div``;

const P = styled.p`
  padding-top: 0.8rem;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "black")};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.color === "#A5A5A5" ? props.color : "#3c3aac")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Status = styled.div`
  height: ${(props) => (props.open ? "15rem" : "2rem")};
  border-radius: 20px;
  border: none;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  margin-right: 17rem;
  font-size: 1rem;
  padding-left: 1.5rem;
  padding-bottom: 0.9rem;
  padding-right: 1rem;
  padding-top: 0.2rem;

  @media (max-width: 768px) {
    margin-right: 0rem;
  }
`;

export default Dropdown;
