import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spanLeft: 4, // 左侧宽度
    spanRight: 20, // 右侧宽度
  },
  mutations: {
    changeCollapsed(state) {
      if (state.spanLeft === 4) {
        state.spanLeft = 2;
        state.spanRight = 22;
      } else {
        state.spanLeft = 4;
        state.spanRight = 20;
      }
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
  },
  modules: {
  },
});
