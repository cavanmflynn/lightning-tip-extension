import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Clipboard from 'v-clipboard';
import Vue from 'vue';
import App from './components/app';
import './filters';
import router from './router';
import { store } from './store';

Vue.config.productionTip = false;

// Register plugins
Vue.use(Buefy);
Vue.use(Clipboard);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
