import axios from "axios";
import qs from "qs";
import { session } from "./util";
import router from "../router";
import store from "../store";
import { Notify } from "vant";
const baseURL = "";
const instance = axios.create({
  baseURL,
  timeout: 6000
});

instance.__proto__ = axios;

instance.interceptors.request.use(config => {
  if (config.method === "post") {
    if (typeof config.data !== "string") {
      config.data._platform = "h5";
    }
  } else {
    config.params._platform = "h5";
  }
  config.headers["token"] = session.get("token");
  return config;
});
instance.interceptors.response.use(
  response => {
    const data = response.data;
    switch (data.code) {
      case 1:
        return Promise.resolve(data);
      case -2:
        return Promise.resolve(data);
      case -1:
        store.dispatch("ClearInfo");
        router.push({ name: "Login" });
        return Promise.reject({ ...data, msg: data.msg });
      default:
        Notify({ type: "danger", message: data.msg || "网络错误" });
        return Promise.reject({ ...data, msg: data.msg });
    }
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);
/**
 * 执行并发请求
 * @param {Array} request 请求方法
 * @param {Array} cbs 请求完成后的回调方法
 * @return {Promise}
 */
const get = (url, params = {}, config = {}) => instance.get(url, { ...config, params });
const post = (url, params = {}, config = {}) => instance.post(url, params, config);
const form = (url, params = new FormData(), config = {}) =>
  instance.post(
    url,
    qs.stringify({
      ...params,
      _platform: "h5"
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      ...config
    }
  );
export default {
  get,
  post,
  form
};
