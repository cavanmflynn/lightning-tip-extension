import Vue from 'vue';
import Vuex from 'vuex';
import { UserModule } from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user: UserModule,
  },
});
