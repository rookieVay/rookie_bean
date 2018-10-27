<template>
    <div class="wrapper">
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vHeader from './Header.vue';
    import vFooter from './Footer.vue';
    export default {
        name: 'Home',
        components: {
            vHeader,
            vFooter
        }
    }
</script>
