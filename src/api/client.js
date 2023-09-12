import axios from "axios";
import { API_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = API_URL;
client.defaults.withCredentials = true;

const token = localStorage.getItem("accessToken");
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? token : null;

console.log(
  "현재 설정된 토큰: ",
  client.defaults.headers.common["Authorization"]
);

export default client;