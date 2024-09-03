import axios from "axios";

axios.defaults.baseURL = "https://drf-api-rc-fb80a7a94541.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;