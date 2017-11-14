<template>
  <div id="app">
    <header-app></header-app>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'app',
  components: {
    'header-app': Header
  }
}
</script>
