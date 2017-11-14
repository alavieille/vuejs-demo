Vue.use(VueResource);

var vm = new Vue({
    el : "#weather",
    data: {
        search: null,
        name: null,
        temperature: null,
        description: null,
        icon: null,
        showDescription: false
    },
    computed: {
        urlIcon : function() {
            return "https://openweathermap.org/img/w/"+ this.icon +".png"
        }
    },
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
        resetWeather: function() {
            this.name = null;
            this.temperature = null;
            this.description = null;
            this.icon = null;
        },
        updateWeather: function () {
            var url = "http://api.openweathermap.org/data/2.5/weather?&appid=f409c263634c095ca7d98b3a966bb43c&lang=fr&units=metric";
            var options = {
                params: {
                    'lang': 'fr',
                    'appid': 'f409c263634c095ca7d98b3a966bb43c',
                    'q': this.search,
                    'units': 'metric'
                }
            };
            this.$http.get(url, options).then(function (response) {
                this.name = response.data.name;
                this.temperature = response.data.main.temp;
                this.description = response.data.weather[0].description;
                this.icon = response.data.weather[0].icon;
            });
        }
    }
});
