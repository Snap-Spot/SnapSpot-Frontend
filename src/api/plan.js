import client from "./client";

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
