import Vue from 'vue';
import Vuex from 'vuex';
import {
  state,
  getters,
  mutations,
  actions,
  modules
} from '../components/Store/index';
Vue.use(Vuex);
export default new Vuex.Store({
  //相当于组件中的data
  state,
  //相当于组件中的computed
  getters,
  //相当于组件中的methods，不能异步
  mutations,
  //用来处理异步请求，
  actions,
  modules
});
