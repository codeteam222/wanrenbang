import axios from "axios";
import { session } from "./util";
const baseURL = "/api";
const instance = axios.create({
  baseURL,
  timeout: 6000
});

instance.__proto__ = axios;

instance.interceptors.request.use(config => {
  config.headers["Authorization"] = session.get("token");
  return config;
});
instance.interceptors.response.use(
  response => {
    const data = response.data;
    switch (data.code) {
      case 0:
        return Promise.resolve(data);
      default:
        return Promise.reject({ ...data, msg: data.msg });
    }
  },
  error => {
    const response = error.response;
    return Promise.reject(response.data);
  }
);
/**
 * 执行并发请求
 * @param {Array} request 请求方法
 * @param {Array} cbs 请求完成后的回调方法
 * @return {Promise}
 */
const get = (url, params, config = {}) => instance.get(url, { ...config, params });
const post = (url, params, config = {}) => instance.post(url, params, config);
export default {
  get,
  post
};
