import React from "react";
import { styled } from "styled-components";
import Header from "../../components/common/Header";

import useMobileDetection from "../../components/common/mobileDetection";
import warn from "../../assets/mypage/userMypage/warn.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  // 실시간 모바일 크기 알아오기
  const isMobile = useMobileDetection();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Wrapper>
        <img src={warn} alt="warn" className="warn" />
        <div className="title">원하시는 페이지를 찾을 수 없습니다.</div>
        <div className="subtitle">
          {isMobile
            ? "입력하신 페이지의 주소가 정확한지\n다시 한번 확인해주세요."
            : "입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요."}
        </div>
        <button
          className="homebtn"
          onClick={() => {
            navigate("/");
          }}
        >
          SnapSpot 홈으로
        </button>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /* PC, 모바일 모두 가운데 정렬 (header 제외) */
  height: calc(100vh - 6.125rem);

  @media (max-width: 768px) {
    //모바일
    width: 90%;
  }

  /* 페이지 안 텍스트, 이미지, 버튼 */
  .warn {
    width: 80px;
  }

  .title {
    font-size: 1.1rem;
    font-weight: 700;

    margin-top: 20px;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;

    color: var(--darkgrey, #777);
    white-space: pre-line;

    @media (max-width: 768px) {
      //모바일
      margin-top: 5px;
    }
  }

  .homebtn {
    background: var(--sub-color-2, #a6b9ff);
    border: 0px;
    border-radius: 32px;
    margin-top: 20px;

    font-family: Noto Sans KR;
    font-size: 1rem;

    padding: 16px 30px;

    cursor: pointer;
  }
`;
