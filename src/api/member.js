import client from "./client";

//멤버 정보 조회
export const getMyProfile = async () => {
  try {
    const res = await client.get(`/members/me`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};
