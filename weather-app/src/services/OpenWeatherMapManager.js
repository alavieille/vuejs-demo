import Vue     from 'vue';
import Config  from '../config';

/**
 * class OpenWeatherMapManager
 */
class OpenWeatherMapManager
{

    /**
     * @param id
     *
     * @returns {Promise}
     */
    getForecastCity(id) {
        let options = {
            params: {
                'id': id,
                'cnt': 4
            }
        };

        return this._request(options, 'forecast', this._transformResponseToListWeather);
    }

    /**
     * @param id
     *
     * @returns {Promise}
     */
    getWeatherCity(id) {
        let options = {
            params: {
                'id': id
            }
        };

        return this._request(options, 'weather', this._transformResponseToWeather);
    }

    /**
     * @param city
     *
     * @returns {Promise}
     */
    searchWeatherCity(city) {
        let options = {
            params: {
                'q': city
            }
        };

        return this._request(options, 'weather', this._transformResponseToWeather);
    }

    /**
     * @param options
     * @param method
     * @param callbackResolve
     *
     * @returns {Promise}
     * @private
     */
    _request(options, method, callbackResolve) {
        let defaultParams = {
                'lang': 'fr',
                'appid': Config.openWeatherMap.appid,
                'units': 'metric'
        };
        options.params = Object.assign(defaultParams, options.params);

        let url = Config.openWeatherMap.url + method;
        let context = this;

        return new Promise (function(resolve, reject) {
            Vue.http.get(url, options).then(function (response) {
                let weather = callbackResolve.call(context, response);
                resolve(weather)
            }, function() {
                reject()
            })
        });
    }

    /**
     * @param icon
     *
     * @returns {string}
     * @private
     */
    _getIconUrl(icon) {
        return "https://openweathermap.org/img/w/"+ icon +".png";
    }

    /**
     * @param response
     *
     * @returns Object
     * @private
     */
    _transformResponseToWeather(response) {
        return {
            id : response.data.id,
            name : response.data.name,
            temperature : response.data.main.temp,
            description : response.data.weather[0].description,
            icon : this._getIconUrl(response.data.weather[0].icon)
        }
    }

    /**
     * @param response
     *
     * @returns Object
     * @private
     */
    _transformResponseToListWeather(response) {
        let list = [];
        let manager = this;

        response.data.list.forEach(function(element) {
            list.push({
                id : response.data.city.id,
                name : element.dt_txt,
                temperature : element.main.temp,
                description : element.weather[0].description,
                icon : manager._getIconUrl(element.weather[0].icon)
            });
        });

        return {
            id : response.data.city.id,
            name : response.data.city.name,
            list: list
        }
    }
}

export default (new OpenWeatherMapManager);
