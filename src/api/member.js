import client from "./client";
import getS3ImgUrl from "./s3upload";
//멤버 정보 조회
export const getMyProfile = async () => {
  try {
    const res = await client.get(`/members/me`);
    // localStorage에 member role 추가
    localStorage.setItem("role", res.data.role);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};

//멤버 프로필 수정, s3업로드 및 url 얻기
export const updateMyProfile = async (isPhotographer, body, initialImage) => {
  let endPoint = "";

  if (isPhotographer) {
    endPoint = "/photographers/setting";
  } else {
    endPoint = "/members/setting";
  }
  if (body.profileImage === "") {
    //이미지 변경 안 했을시 기존 url 다시 첨부
    body.profileImage = initialImage;
  } else {
    //이미지 변경했다면 해당 파일 s3업로드
    const url = await getS3ImgUrl(body.profileImage);
    body.profileImage = url;
  }

  try {
    const res = await client.put(endPoint, body);
    console.log(res);
    return res;
  } catch (err) {
    console.log("에러 발생", err);
    throw err;
  }
};
