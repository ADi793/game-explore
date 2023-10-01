import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "31d17359a18d439692b0ca2d5f55bb41",
  },
});
