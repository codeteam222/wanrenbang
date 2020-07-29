import Vue from "vue";
import Vuex from "vuex";
import { session } from "@/utils/util";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    token: null
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
    }
  },
  actions: {
    SaveInfo({ commit }, { token = null }) {
      // console.log(token);
      commit("SET_TOKEN", token);
      session.set("token", token);
    },
    ClearInfo({ commit }) {
      // 清空缓存
      commit("SET_TOKEN", null);
      session.remove("token");
    },
    GetInfo({ commit }) {
      if (session.get("token")) {
        commit("SET_TOKEN", session.get("token"));
      }
    }
  },
  modules: {}
});
