<template>
    <div class="card darken-1">
        <div class="card-content">
            <span class="card-title">{{ title }}</span>
            <p class="weather-title">
                <img :src="icon" /> {{temperature}} °c
            </p>
            <p>{{ description }} </p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'weather',
        props: ['title', 'temperature', 'description', 'icon']
    }
</script>

<style>
    .weather-title, .weather-title img {
        vertical-align: middle;
    }
</style>