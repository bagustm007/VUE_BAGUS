<template>
  <v-navigation-drawer 
    absolute
    right
    app
    v-model="inputValue"
    mobile-breakpoint="911"
    persistent
    width="260"
  >
    <v-list 
    class="pl-15 mt-10"
    shaped
    >
        <v-list-item link to="/landing">
            <v-list-item-content>
                <v-list-item-title class="link--text ">
                    Beranda
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
     <v-list-item link to="/about">
            <v-list-item-content>
                <v-list-item-title class="link--text ">
                    Tentang Aplikasi
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>     
        <v-list-item link to="/register">
            <v-list-item-content>
                <v-list-item-title class="link--text ">
                    Daftar
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>     
        <v-list-item link to="/login">
            <v-list-item-content>
                <v-list-item-title class="link--text ">
                    Login
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    props: {
        opened: {
            type: Boolean,
            default: false,
        }
    },

        computed: {
        inputValue: {
            get(){
                return this.$store.state.app.draweLanding;
            },
            set(val){
                this.setDraweLanding(val);
            },
        }
    },
    
    methods: {
        ...mapMutations('app', ['setDraweLanding', 'toggleDrawerLanding']),
    }
}
</script>

<style>
    .link-pointer{
        cursor: pointer !important;
    }
</style>