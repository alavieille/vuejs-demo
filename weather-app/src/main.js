import Vue         from 'vue'
import VueRouter   from 'vue-router';
import VueResource from 'vue-resource';


import App    from './views/App.vue'
import router from './router';
import store  from './store'

Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  store: store,
});

