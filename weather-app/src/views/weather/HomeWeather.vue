<template>
  <div>
      <search-city></search-city>
      <list-cities></list-cities>
  </div>
</template>

<script>
import ListCities from '../../components/ListCities.vue';
import SearchCity from '../../components/SearchCity.vue';

export default {
  name: 'home-weather',
  components: {
    'list-cities': ListCities,
    'search-city': SearchCity
  },
  data () {
    return {
      msg: 'Welcome to Your Vuef.js App'
    }
  }
}
</script>
