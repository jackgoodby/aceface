import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

// async function getFixtures() {
//   axiosInstance({
//     // method: "get",
//     url: "/fixtures",
//     // headers: { "Access-Control-Allow-Origin": "*" },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }

async function getFixtures() {
  try {
    const response = await axios.get("http://127.0.0.1:3000/fixtures");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getFixtures();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
