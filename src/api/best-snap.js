import client from "./client";
import getS3ImgUrl from "./s3upload";

export const postBestSnap = async (file, inputs, photoDate, photographerId) => {
  const imageUrl = await getS3ImgUrl(file);
  const body = {
    ...inputs,
    imageUrl: imageUrl,
    photoDate: photoDate,
    photographerId: photographerId,
  };

  try {
    const res = await client.post("/photos", body);

    return res;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};

export const getBestSnaps = async () => {
  try {
    const res = await client.get("/photos");

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};
