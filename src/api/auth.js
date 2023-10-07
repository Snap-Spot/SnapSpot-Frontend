import client from "./client";

// 카카오 회원가입
export const KakaoSignUpAPI = async (accessToken, refreshToken, role) => {
  try {
    const res = await client.post("/auth/kakao/signup", {
      accessToken: accessToken,
      refreshToken: refreshToken,
      role: role,
    });
    console.log(res, "회원가입 성공");
    alert("회원가입에 성공하였습니다! 로그인 페이지로 이동합니다.");
    window.location.replace("/login");
  } catch (err) {
    console.log(err, "회원가입 에러");
    if (err.response?.data.details === "이미 가입된 계정입니다.") {
      alert("이미 가입된 계정입니다.");
      window.location.replace("/login");
    } else {
      alert("회원가입 오류");
    }
  }
};

// 카카오 로그인
export const KakaoSignInAPI = async (accessToken, refreshToken) => {
  try {
    const res = await client.post("/auth/kakao/signin", {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    console.log(res, "로그인 성공");
    // accessToken 로컬스토리지 저장
    localStorage.setItem("accessToken", res.data.token.accessToken);
    localStorage.setItem("refreshToken", res.data.token.refreshToken);

    // main페이지로 이동
    alert("로그인에 성공하였습니다!");
    window.location.replace("/");
  } catch (err) {
    console.log(err, "로그인 에러");
    if (err.response?.data.details === "가입되지 않은 이메일입니다.") {
      alert("가입되지 않은 이메일입니다.");
      window.location.replace("/signup/member");
    } else {
      alert("로그인 오류");
    }
  }
};

// 일반 회원가입
export const EmailSignUpAPI = async (signUpInfo) => {
  try {
    const res = await client.post("/auth/signup", signUpInfo);
    console.log(res, "회원가입 성공");
    alert("회원가입에 성공하였습니다! 로그인 페이지로 이동합니다.");
    window.location.replace("/login");
  } catch (err) {
    console.log(err, "회원가입 에러");
    if (err.response?.data.details === "이미 가입된 계정입니다.") {
      alert("이미 가입된 계정입니다.");
      window.location.replace("/login");
    } else {
      alert("회원가입 오류");
    }
  }
};

// 일반 로그인
export const EmailSignInAPI = async (loginInfo) => {
  try {
    const res = await client.post("/auth/signin", loginInfo);
    console.log(res, "로그인 성공");
    // accessToken 로컬스토리지 저장
    localStorage.setItem("accessToken", res.data.token.accessToken);
    localStorage.setItem("refreshToken", res.data.token.refreshToken);

    // main페이지로 이동
    alert("로그인에 성공하였습니다!");
    window.location.replace("/");
    return "Login Success";
  } catch (err) {
    console.log(err, "로그인 에러");
    return "Login Error";
  }
};

// 로그아웃 (로컬스토리지 토큰 삭제 후 메인페이지 이동)
export const LogoutAPI = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  // reload 후 이동해야 localStorage 변경
  window.location.replace("/");
};