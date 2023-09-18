import client from "./client";

// 고객 -> 작가 예약 신청
export const postReservation = async ({
  photographerId,
  planDate,
  category,
  people,
  wishPlace,
  request,
}) => {
  try {
    const res = await client.post(`/plans`, {
      photographerId: photographerId,
      planDate: planDate,
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
