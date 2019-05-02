import axios from "axios";

export default function getBase64(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer"
    })
    .then(response => new Buffer(response.data, "binary").toString("base64"));
}
