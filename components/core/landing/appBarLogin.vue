<template>
  <v-app-bar id="core-app-bar" app color="primary" class="px-6" flat height="60" dark>
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="white--text font-weight-bold align-self-center mr-10" >
            <span>Manoney</span>
          
        </v-toolbar-title>   
  
    <v-spacer></v-spacer>
          <v-btn
            v-for="link in links"
            :key="link.to"
            text
            color="link"
            v-if="!responsive"
            @click="routerPush(link.to)"
        >
            {{ link.title }}
        </v-btn>
        <v-btn
            text
            color="link"
            v-if="!responsive"
            @click="signOut"
        >
            Logout <v-icon>mdi-logout</v-icon>
        </v-btn>
    <v-btn icon dark color="link" v-if="responsive" @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
    </v-btn>
      </v-container>

  </v-app-bar>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data: () => ({
        links: [
          {title: 'Beranda' , to: '/'},
          {title: 'Tentang Aplikasi' , to: '/about'},
        ],
        responsive: false,
    }),
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    methods: {
         ...mapMutations('app', ['setDraweLanding', 'toggleDrawerLanding']),
            onClick(){
                this.setDraweLanding(!this.$store.state.app.draweLanding);
            },

           onResponsiveInverted(){
            if(window.innerWidth < 991){
                this.responsive = true;
            } else{
                this.responsive = false;
                this.setDraweLanding(false)
            }
        },
        routerPush(to){
            this.$router.push(to)
        },
        signOut(){
            this.$store.dispatch('auth/logout');
            window.location="/login"
        }
    }
}
</script>

<style>

</style>