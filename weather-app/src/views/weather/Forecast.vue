<template>
    <div v-if="forecast != null">
        <div class="col s12 m12">
            <div class="card darken-1">
                <div class="card-content" v-if="forecast != null">
                    <span class="card-title">Prévision à {{ forecast.name }} des prochaines heures</span>
                </div>
            </div>
         </div>
        <div class="row">
            <div class="col s6 m6"
                 v-for="weather in forecast.list"
            >
                <weather

                        :title="weather.name"
                        :temperature="weather.temperature"
                        :description="weather.description"
                        :icon="weather.icon"
                >
                </weather>
            </div>
        </div>
    </div>
    <div v-else class="loader">
        <loader></loader>
    </div>
</template>

<script>
    import OpenWeatherMapManager from '../../services/OpenWeatherMapManager';
    import Weather               from '../../components/Weather.vue';
    import Loader               from '../../components/Loader.vue';

    export default {
        name: 'city-preview',
        props: ['id'],
        components: {
            'weather': Weather,
            'loader': Loader
        },
        data: function () {
            return {
                forecast: null
            }
        },
        mounted: function() {
            let vue = this;
            OpenWeatherMapManager.getForecastCity(this.id).then(function (response) {
               vue.forecast = response;
            });
        }
    }
</script>

<style>
    .loader {
        margin: 50%;
        margin-top:  50px;
    }
</style>