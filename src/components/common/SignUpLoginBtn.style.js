import { styled } from "styled-components";

// 1rem == 16px
const BASIC_FONT_SIZE = 1;
const INPUT_WIDTH = 80;
const TEXT_INDENT = 32;
const M_TEXT_INDENT = 18;

const S = {};

S.InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px 0;
`;

S.InputBox = styled.input`
  width: ${INPUT_WIDTH}%;
  /* width: 556px; */
  height: 3rem;
  border-radius: 30px;
  border: 1px solid #e7e7e7;

  font-family: Noto Sans KR;
  font-size: ${BASIC_FONT_SIZE}rem;
  text-indent: ${TEXT_INDENT}px;

  padding: 0;
  margin: 9px 0;

  &::placeholder {
    color: var(--darkgrey, #777);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    font-weight: 400;
    height: 2.8rem;
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

S.PasswordMatchText = styled.div`
  font-family: Noto Sans KR;
  font-size: 0.8rem;
  color: var(--lessred, #ff3d3d);

  width: ${INPUT_WIDTH}%;
  text-indent: ${TEXT_INDENT}px;

  &.isMatched {
    display: none;
  }

  @media screen and (max-width: 768px) {
    text-indent: ${M_TEXT_INDENT}px;
  }
`;

S.LoginButton = styled.button`
  width: ${INPUT_WIDTH}%;
  height: 3rem;
  border-radius: 30px;

  border: 0px;

  font-family: Noto Sans KR;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 2.8rem;
  }
`;

S.EmailLoginBtn = styled(S.LoginButton)`
  background-color: var(--main-font-color, #3c3aac);
  font-size: ${BASIC_FONT_SIZE}rem;
  font-weight: 500;
  color: var(--white, #fff);

  &.login {
    margin-bottom: 15px;
  }

  &.isFilled {
    pointer-events: none;
    background-color: var(--lightgrey2, #dbdbdb);
  }
`;

S.KakaoLoginBtn = styled(S.LoginButton)`
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 23px;
  }

  p {
    color: rgba(#000000, 0.8);
    font-size: ${BASIC_FONT_SIZE}rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }

  &.signup {
    margin-bottom: 70px;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  &.login {
    margin-bottom: 15px;
  }
`;

export { S };
