import VueRouter   from 'vue-router'
import HomeWeather from '../views/weather/HomeWeather.vue'
import Forecast    from '../views/weather/Forecast.vue'

export default new VueRouter({
    routes: [
        { path: '/', name: 'home', component: HomeWeather},
        { path: '/forecast/:id', name: 'forecast', component: Forecast, props: true}
    ]
})
