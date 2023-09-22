import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

// export default {
//   getFixture: () =>
//     instance({
//       method: "GET",
//       url: "/fixture",
//       params: {
//         search: "parameter",
//       },
//       // transformResponse: [
//       //   function (data) {
//       //     // Do whatever you want to transform the data
//       //     console.log("Transforming data...");
//       //     const json = JSON.parse(data);
//       //     // list of nested object keys
//       //     const dates = Object.keys(json["nested object"]);
//       //     data = {
//       //       dates,
//       //     };
//       //     return data;
//       //   },
//       // ],
//     }),
//   // postData: () =>
//   //   instance({
//   //     method: "POST",
//   //     url: "/api",
//   //     data: {
//   //       item1: "data1",
//   //       item2: "item2",
//   //     },
//   //     headers: {
//   //       "content-type": "application/json", // override instance defaults
//   //     },
//   //   }),
// };

export default {
  getLiveFixtures: () =>
    instance({
      url: "/fixtures",
      // params: {
      //   type: "live",
      // },
      headers: { "Access-Control-Allow-Origin": "*" },
    }),
  // anotherGetter: () =>
  //   instance({
  //     url: import.meta.env.VITE_API_URL + "/fixtures",
  //     params: {
  //       limit: 5,
  //     },
  //     // headers: { "Access-Control-Allow-Origin": "*" },
  //   }),
};

// export function postFixture() {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios
//     .post(
//       import.meta.env.VITE_API_URL + "/fixture",
//       {
//         key: "value",
//         somethingElse: "some other value",
//       },
//       config,
//     )
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }
