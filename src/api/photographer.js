import client from "./client";
import getS3ImgUrl from "./s3upload";

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
  let profileImageUrl = profileImage; // 프로필 이미지 URL 초기값을 변경 전 이미지로 설정
  let paymentImageUrl = paymentImage; // 결제 이미지 URL 초기값을 변경 전 이미지로 설정
  const imagesUrl = {};

  // 프로필 이미지(`profileImage`)가 변경된 경우에만 URL을 다시 가져옴
  if (profileImage instanceof File) {
    profileImageUrl = await getS3ImgUrl(profileImage);
  }

  // 결제 이미지(`paymentImage`)가 `File` 객체인 경우에만 URL을 다시 가져옴
  if (paymentImage instanceof File) {
    paymentImageUrl = await getS3ImgUrl(paymentImage);
  }

  // 변경된 이미지(`image`)에 대해서 URL을 다시 가져옴
  for (const key in image) {
    if (image.hasOwnProperty(key)) {
      // `image[key]`가 `File` 객체인 경우에만 URL을 다시 가져옴
      if (image[key] instanceof File) {
        imagesUrl[key] = await getS3ImgUrl(image[key]);
      } else {
        // `image[key]`가 URL 형식이 아니라면 이미지 URL 변경 없음
        imagesUrl[key] = image[key];
      }
    }
  }

  const body = {
    nickname: nickname,
    profileImage: profileImageUrl,
    paymentImage: paymentImageUrl,
    lowestPay: lowestPay,
    bio: bio,
    areaId: areaId,
    sns: sns,
    specialList: special,
    tag: tag,
    unableDates: unableDates,
    image: imagesUrl,
  };

  console.log("request", body);

  try {
    const res = await client.put(`/photographers/me`, body);
    console.log("응답", res);
    alert("변경되었습니다.");
    return res.data;
  } catch (err) {
    console.log("커스텀 수정 에러", err);
  }
};
