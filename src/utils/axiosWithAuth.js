import axios from "axios";
const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: " ",
    // ------------ Make sure you actually put something here dude----------------------
  });
};

export default axiosWithAuth;
