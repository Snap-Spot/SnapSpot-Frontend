import client from "./client";

//전문 분야로 사진 작가 목록 조회
export const getKeywordSearch = async (keyword) => {
  try {
    const res = await client.get(`/photographers/search?keyword=${keyword}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
