import axios from "axios";

const client = axios.create();
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
client.defaults.withCredentials = true;

const token = localStorage.getItem("accessToken");

client.defaults.headers.common["Authorization"] = token ? token : null;

console.log(
  "현재 설정된 토큰: ",
  client.defaults.headers.common["Authorization"]
);

export default client;

// 헤더 없는 refresh용 axios 인스턴스 생성
const refreshClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  contentType: "application/json; charset=utf-8;",
});

refreshClient.defaults.withCredentials = true;

// axios response에 대한 interceptors 토큰 만료 확인
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 기존에 수행하려고 했던 API 설정정보
    const originalConfig = error.config;
    // 기존의 refreshToken
    const refreshToken = localStorage.getItem("refreshToken");

    // 토큰 만료 에러 응답일 때
    if (error.response?.data.details === "JWT EXPIRED") {
      try {
        // 토큰 재발급 시도
        const res = await refreshClient.post("/auth/reissue", {
          token: refreshToken,
        });
        // 재발급 성공할 경우 (accessToken만 만료된 경우)
        console.log(res, "토큰 재발급 성공");
        // accessToken, refreshToken 로컬스토리지 저장
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        // 새로운 token 적용을 위한 새로고침
        window.location.reload();
        
        // 기존 API header로 새로 받은 accessToken 넣어주기
        originalConfig.headers["Authorization"] = res.data.accessToken;
        // 기존 API 실행
        refreshClient(originalConfig);
      } catch (err) {
        // 토큰 재발급 실패할 경우 (refreshToken까지 만료된 경우)
        console.log(err, "토큰 재발급 에러");
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
        // 로컬스토리지에 있는 기존 토큰 제거
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // 로그인 페이지로 이동
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);
