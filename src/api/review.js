import client from "./client";
import getS3ImgUrl from "./s3upload";
//좋아요 생성
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
