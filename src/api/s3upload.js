import axios from "axios";

const getS3ImgUrl = async (imgMeta) => {
  let uploadURL = "";
  const endPoint = process.env.REACT_APP_S3_API_ENDPOINT;
  try {
    const res = await axios.post(endPoint, {
      fileName: "qwefdsac/" + imgMeta.name,
    });

    uploadURL = res.data;
    const headers = {
      "Content-Type": imgMeta.type,
    };
    //받은 url에 사진 업로드
    const upload = await axios.put(uploadURL, imgMeta, {
      headers,
    });
    return uploadURL.split("?")[0];
  } catch (err) {
    console.log(err);
  }
};

export default getS3ImgUrl;
