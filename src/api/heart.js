import client from "./client";

export const getMyHeartList = async () => {
  try {
    const res = await client.get("/hearts");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
