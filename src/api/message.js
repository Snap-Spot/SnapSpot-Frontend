import client from "./client";

export const postMessage = async (planId, contents) => {
  try {
    const res = await client.post(`/messages`, {
      planId: planId,
      contents: contents,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getMessages = async (planId) => {
  try {
    const res = await client.get(`/messages/${planId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
