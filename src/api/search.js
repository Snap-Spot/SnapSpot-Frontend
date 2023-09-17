import client from "./client";

//전문 분야로 사진 작가 목록 조회
export const getKeywordSearch = async (keyword) => {
  try {
    const res = await client.get(`/photographers/search?keyword=${keyword}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//사진 작가 목록 전체 조회
export const getAllPhotographerList = async () => {
  try {
    const res = await client.get(`/photographers`);
    return res.data;
  } catch (err) {
    console.error("에러 발생", err);
    throw err;
  }
};

//사진 작가 목록 조회
export const getPhotographerList = async (areaId, special, ableDate) => {
  try {
    let endpoint = "/photographers";
    if (areaId) {
      endpoint += `?areaId=${areaId}`;
    }
    if (special) {
      endpoint += `${areaId ? "&" : "?"}special=${special}`;
    }
    if (ableDate) {
      endpoint += `${areaId || special ? "&" : "?"}ableDate=${ableDate}`;
    }
    console.log("endpoint", endpoint);
    const res = await client.get(endpoint);
    console.log("res.data", res.data);
    return res.data;
  } catch (err) {
    console.error("에러 발생", err);
    throw err;
  }
};
