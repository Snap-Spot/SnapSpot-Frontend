import client from "./client";
import getS3ImgUrl from "./s3upload";

//고객의 예약 내역 리스트 조회
export const getMyReservationList = async () => {
  try {
    const res = await client.get(`/plans/member`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//고객의 예약 내역 하나 조회
export const getMyReservation = async (id) => {
  try {
    const res = await client.get(`/plans/${id}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//예약취소
export const cancelReservation = async (id, reason, refundAccount) => {
  try {
    const res = await client.put(`/plans/cancel`, {
      planId: id,
      reason: reason,
      refundAccount: refundAccount,
    });

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
// 고객 -> 작가 촬영 신청
export const postReservation = async (
  photographerId,
  planDate,
  time,
  category,
  people,
  wishPlace,
  request
) => {
  try {
    const res = await client.post(`/plans`, {
      photographerId: photographerId,
      planDate: planDate,
      time: time,
      category: category,
      people: people,
      wishPlace: wishPlace,
      request: request,
    });
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 예약 내역 조회
export const getReservation = async () => {
  try {
    const res = await client.get(`/plans/photographer`);
    return res.data;
  } catch (err) {
    console.log("예약 내역 조회 에러", err);
  }
};

// 사진 작가 예약 내역 & 촬영 내역 전부 조회
export const getAllReservation = async () => {
  try {
    const res = await client.get(`/plans/photographer`);
    return res.data;
  } catch (err) {
    console.log("예약 내역 조회 에러", err);
  }
};

// 촬영 예약 거절
export const putRejectReservation = async (planId, message) => {
  try {
    const res = await client.put(`/plans/refuse`, {
      planId: planId,
      contents: message,
    });
    return res.data;
  } catch (err) {
    console.log("예약 거절 에러", err);
  }
};

// 입금 요청
export const putDeposit = async (
  planId,
  price,
  placeName,
  placeAddress,
  message
) => {
  try {
    const res = await client.put(`/plans/deposit`, {
      planId: planId,
      price: price,
      placeName: placeName,
      placeAddress: placeAddress,
      message: message,
    });
    return res.data;
  } catch (err) {
    console.log("입금 요청 에러", err);
  }
};

// 입금 확인
export const putPlansReserve = async (planId, message) => {
  try {
    const res = await client.put(`/plans/reserve`, {
      planId: planId,
      contents: message,
    });
    return res.data;
  } catch (err) {
    console.log("입금 확인 에러", err);
  }
};

// 파일 전달
export const putDelivery = async (planId, contents, file) => {
  file = await getS3ImgUrl(file);

  try {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("json", JSON.stringify({ planId, contents }));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await client.put("/plans/delivery", formData, config);

    console.log("응답 데이터:", response.data);
  } catch (error) {
    console.error("에러 발생:", error.response.data);
  }
};
