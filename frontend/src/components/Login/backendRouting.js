const backendURL = "http://localhost:1111";
const api = {
  login: {
    url: `${backendURL}/user/login`,
    method: "post",
  },
   signup: {
    url: `${backendURL}/user/signup`,
    method: "post",
  },
  getAllUsers: {
    url: `${backendURL}/user/findAll`,
    method: "get",
  },
};

console.log(backendURL, "backendURL");
export default api
