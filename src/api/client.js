import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000"
});

export const post = (url, body) => {
  return new Promise((resolve, reject) => {
    client.post(url, body)
      .then(res => {
        alert("OK");
        resolve(res);
      })
      .catch(err => {
        alert(JSON.stringify(err));          
        reject(new Error(err));
      })
  });
};
