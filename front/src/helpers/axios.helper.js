import axios from "axios";

// Config Url
const AxiosService = axios.create({
  baseURL: "http://localhost:4200/",
});

// Default config for all get and post requests
AxiosService.defaults.headers.get["Accept"] = "application/json";
AxiosService.defaults.headers.post["Accept"] = "application/json";
AxiosService.defaults.headers["Content-Type"] = "application/json";

AxiosService.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default AxiosService;
