import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Loading from "../../assets/signup/loading.png";
import axios from "axios";

const KakaoLoginPage = () => {
  const location = useLocation();

  const KAKAO_A_CODE = location.search.split("=")[1]; // 인가코드

  const GRANT_TYPE = "authorization_code";
  const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = encodeURI(`${CLIENT_MAIN_URL}/auth/kakao-login`);
  const TOKEN_ADDRESS = `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_A_CODE}`; // 토큰 요청

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(TOKEN_ADDRESS, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log("요청 결과", res);

        const accessToken = res.data.access_token;

        console.log(accessToken);
        localStorage.setItem("accessToken", accessToken);

        alert("로그인 성공");
        navigate("/");

        // window.location.reload();
      })
      .catch((err) => {
        console.log("카카오 로그인 에러.", err);
      });
  }, []);

  return (
    <Div>
      <LoadingImage src={Loading} alt="로딩 스피너" />
      <div style={{ marginTop: "20px" }}>카카오 로그인 중이에요!</div>
    </Div>
  );
};

export default KakaoLoginPage;

const Div = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* PC, 모바일 모두 가운데 정렬 */
  height: 100vh;
`;

const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  width: 15%;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
