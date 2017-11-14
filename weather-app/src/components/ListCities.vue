<template>
    <div class="row">
        <preview-city
                v-for="weatherCity in city.cities"
                :key="weatherCity.id"
                :id="weatherCity.id"
                :name="weatherCity.name"
        >
        </preview-city>
    </div>
</template>

<script>
    import PreviewCity  from './PreviewCity.vue';
    import { mapState } from 'vuex'

    export default {
        name: 'list-cities',
        components: {
            'preview-city': PreviewCity
        },
        computed: mapState({
            city: 'city'
        }),
        mounted: function() {
            this.$store.dispatch('city/fetch');
        }
    }
</script>
