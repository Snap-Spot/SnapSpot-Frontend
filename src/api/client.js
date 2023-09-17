import axios from "axios";

const client = axios.create();
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
client.defaults.withCredentials = true;

// const token = localStorage.getItem("accessToken");
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaXdvb2Rrd2FrQGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX01FTUJFUiIsImV4cCI6MTY5NTIwNjQ2NX0.iHwOyC9BO94tJESWKlB08QtWvQLQDzTL1g3o7_sdfYc";
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? token : null;

console.log(
  "현재 설정된 토큰: ",
  client.defaults.headers.common["Authorization"]
);

export default client;
