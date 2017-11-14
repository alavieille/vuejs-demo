<template>
    <div class="col s6 m6" v-if="weather != null">
        <weather
            :title="name"
            :temperature="weather.temperature"
            :description="weather.description"
            :icon="weather.icon"
        >
            <div class="card-action">
                <router-link :to="{name:'forecast', params: { id: id }}">Prévision</router-link>
                <a href="#" @click.prevent="deleteCity(id)">Supprimer</a>
            </div>
        </weather>
    </div>
</template>

<script>
    import OpenWeatherMapManager from '../services/OpenWeatherMapManager';
    import Weather               from './Weather.vue';

    export default {
        name: 'preview-city',
        props: ['id', 'name'],
        components: {
          'weather': Weather
        },
        data: function () {
            return {
                weather: null
            }
        },
        methods: {
            deleteCity: function(id) {
                this.$store.commit('city/delete', {id: id});
            }
        },
        mounted: function() {
            let vue = this;
            OpenWeatherMapManager.getWeatherCity(this.id).then(function (response) {
                vue.weather = response;
            }).catch(function() {
                vue.resetWeather()
            });
        }
    }
</script>
