import client from "./client";
import getS3ImgUrl from "./s3upload";
import { format } from "date-fns";

//포토그래퍼 전체 이름 겟
export const getPhotographers = async () => {
  try {
    const res = await client.get(`/photographers/name`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//포토그래퍼 개별 조회
export const getPhotographer = async (photographerId) => {
  try {
    const res = await client.get(`/photographers/${photographerId}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 작가별 리뷰 조회
export const getReview = async (photographerId) => {
  try {
    const res = await client.get(`/reviews/photographer/${photographerId}`);
    return res.data;
  } catch (err) {
    console.log("리뷰 조회 에러", err);
  }
};

// 커스텀 페이지 조회
export const getCustomInfo = async () => {
  try {
    const res = await client.get(`/photographers/me`);
    return res.data;
  } catch (err) {
    console.log("커스텀 조회 에러", err);
  }
};

// 커스텀 페이지 수정
export const putCustomInfo = async (
  nickname,
  profileImage,
  paymentImage,
  lowestPay,
  bio,
  areaId,
  sns,
  special,
  tag,
  unableDates,
  image
) => {
  const profileImageUrl = await getS3ImgUrl(profileImage);
  const paymentImageUrl = await getS3ImgUrl(paymentImage);
  const imagesUrl = {};

  for (const key in image) {
    if (image.hasOwnProperty(key)) {
      imagesUrl[key] = await getS3ImgUrl(image[key]);
    }
  }
  const body = {
    nickname: nickname,
    profileImage: profileImageUrl,
    paymentImage: paymentImageUrl,
    lowestPay: lowestPay,
    bio: bio,
    areaId: areaId,
    sns: {
      instagram: "happysnap_",
      twitter: "happysnap_",
      kakaoChannel: "https://pf.kakao.com/_happySNAP",
      naverBlog: "https://blog.naver.com",
      homepage: "https://happysnap.com",
    },
    specialList: special,
    tag: tag,
    unableDates: unableDates,
    image: imagesUrl,
  };

  console.log(body);

  try {
    const res = await client.put(`/photographers/me`, body);
    console.log("응답", res);
    alert("변경되었습니다.");
    return res;
  } catch (err) {
    console.log("커스텀 수정 에러", err);
  }
};
