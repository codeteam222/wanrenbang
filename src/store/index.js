import Vue from "vue";
import Vuex from "vuex";
import { session } from "@/utils/util";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    token: null,
    userInfo: null
  },
  mutations: {
    /**
     * 更新loading状态
     */
    UPDATE_LOADING(state, params) {
      if (typeof params !== "boolean") {
        state.loading = false;
      } else {
        state.loading = params;
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info;
    }
  },
  actions: {
    SaveInfo({ commit }, { token = null, userInfo = null }) {
      // console.log(token);
      commit("SET_TOKEN", token);
      commit("SET_USERINFO", userInfo);
      session.set("token", token);
      session.set("userInfo", userInfo);
    },
    ClearInfo({ commit }) {
      // 清空缓存
      commit("SET_TOKEN", null);
      commit("SET_USERINFO", null);
      session.remove("token");
      session.remove("userInfo");
    },
    UpdateInfo({ commit, state }, { token = null, userInfo = {} }) {
      if (token) {
        commit("SET_TOKEN", token);
        session.set("token", token);
      }
      if (Object.keys(userInfo).length) {
        const newData = Object.assign({}, state.userInfo, userInfo);
        commit("SET_USERINFO", newData);
        session.set("userInfo", newData);
      }
    }
  },
  modules: {}
});
