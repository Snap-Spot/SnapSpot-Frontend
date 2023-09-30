import client from "./client";

//좋아요 모아보기
export const getMyHeartList = async () => {
  try {
    const res = await client.get("/hearts");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//좋아요 생성
export const postHeart = async (photographerId) => {
  try {
    const res = await client.post(`/hearts`, {
      photographerId: photographerId,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//좋아요 취소
export const deleteHeart = async (photographerId) => {
  try {
    const res = await client.delete(`/hearts`, {
      photographerId: photographerId,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
