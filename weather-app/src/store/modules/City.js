import Vue  from 'vue';

export default {
    state: {
        cities: {}
    },
    mutations: {
        'city/add': (state, data) => {
            Vue.set(state.cities, data.id, data);
            localStorage.setItem('cities', JSON.stringify(state.cities));
        },
        'city/delete': (state, data) => {
            Vue.delete(state.cities, data.id);
            localStorage.setItem('cities', JSON.stringify(state.cities));
        },
        'city/set': (state, data) => {
            state.cities = data;
        }
    },
    actions: {
        'city/fetch' : ({commit}) => {
            let cities = localStorage.getItem('cities');
            if (null !== cities) {
                console.log(JSON.parse(cities));
                commit('city/set', JSON.parse(cities));
            }
        }
    }
}
