import client from "./client";

export const getFeedPosts = async () => {
  let page = Math.floor(Math.random() * 90);
  try {
    const res = await client.get(`/areas/feed?page=${page}&size=48`);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
