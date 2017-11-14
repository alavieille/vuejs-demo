import City from './modules/City'
import Vuex from 'vuex'
import Vue  from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        city  : City
    }
});
