import client from "./client";
import getS3ImgUrl from "./s3upload";

//리뷰 생성
export const postReview = async (inputs) => {
  try {
    const url = await getS3ImgUrl(inputs.image);
    inputs.image = url;

    const res = await client.post(`/reviews`, inputs);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// 작가 리뷰 전체 조회
export const getReviews = async () => {
  try {
    const res = await client.get(`/reviews/photographer`);
    return res.data;
  } catch (err) {
    console.log("리뷰 조회 에러", err);
  }
};
