import client from "./client";

//페이징 없이 포토그래퍼 전체 겟 (미완성)
export const getPhotographers = async () => {
  try {
    const res = await client.get(`/photographers`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
