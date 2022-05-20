<template>
    <v-app id="backgournd-color">

        <core-drawer />
        <core-app-bar />
        <core-view />
    </v-app>
</template>

<script>
    import View from '@/components/core/landing/views.vue';
    import Drawer from '@/components/core/landing/Drawer.vue';
    import AppBar from '@/components/core/landing/appBar.vue';
export default {
    components: {
        CoreDrawer : Drawer,
        CoreAppBar: AppBar,
        CoreView: View,
    }    
}
</script>

<style>
    #backgournd-color {
        background-color: #37517e;;
    }
</style>