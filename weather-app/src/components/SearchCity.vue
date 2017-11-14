<template>
    <div class="search">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="search" type="search" placeholder="ville" v-model="search" autocomplete="off">
                </div>
            </div>
        </form>
        <transition name="fade">
            <div class="col s12 m12" v-if="weather!=null">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title weather-title" >
                            <img :src="weather.icon" /> {{ weather.name }} {{weather.temperature}} °c
                        </span>
                        <a v-if="!city.cities.hasOwnProperty(weather.id)" class="waves-effect waves-light btn red" @click="addCity()">
                            Ajouter
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
    import PreviewCity           from './PreviewCity.vue';
    import OpenWeatherMapManager from '../services/OpenWeatherMapManager';
    import { mapState }          from 'vuex'

    export default {
        name: 'search-city',
        data: function() {
            return {
                search: null,
                weather: null
            }
        },
        computed: mapState({
            city: 'city'
        }),
        watch: {
            search: function () {
                if (this.search == "") {
                    this.resetWeather()
                } else {
                    this.updateWeather()
                }
            }
        },
        methods: {
            addCity: function() {
                this.$store.commit('city/add', {
                    id: this.weather.id,
                    name: this.weather.name
                });
                this.resetWeather();
                this.search = null;
            },
            resetWeather: function () {
                this.weather = null;
            },
            updateWeather: function () {
                let vue = this;
                OpenWeatherMapManager.searchWeatherCity(this.search).then(function (response) {
                    vue.weather = response;
                }).catch(function() {
                    vue.resetWeather()
                });
            }
        }
    }
</script>

<style>
    .search {
        height: 200px;
    }
    .weather-title, .weather-title img {
        vertical-align: middle;
    }
    .btn {
        float: right;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>