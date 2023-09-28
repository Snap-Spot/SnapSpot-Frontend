import client from "./client";

// 작가 리뷰 전체 조회
export const getReviews = async () => {
  try {
    const res = await client.get(`/reviews/photographer`);
    return res.data;
  } catch (err) {
    console.log("리뷰 조회 에러", err);
  }
};
