<template>
    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container">
            <router-link id="logo-container" href="#" class="brand-logo" :to="{name:'home'}">
                Météo
            </router-link>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'header-app'
}
</script>
