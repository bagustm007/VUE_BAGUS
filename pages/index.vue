<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" xs="12" sm="12" md="5" :class="margin">
                <v-card color="transparent"   elevation="0" :class="margin">
                    <v-card-title class="text-h4 white--text" >
                        Selamat Datang Di Mamoney
                    </v-card-title>
                    <v-card-text class="white--text">
                        Aplikasi Manoney adalah aplikasi yang membantu anda untuk mengatur pengeluaran keuangan anda dan aplikasi ini dilengkapi oleh fitur catatan pengeluaran anda


                    </v-card-text>
                </v-card>
            </v-col>
             <v-col cols="12" xs="12" sm="12" md="6">
                <v-card color="transparent"   elevation="0" class="pl-16 d-flex justify-center">
                    <v-img
                    id="#animation"
                       :src="require('@/static/hero-img.png')"
                         max-height="450"
                         max-width="400"
                    >

                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'landingPage',
    data: () => ({
        margin: '',
    }),
    mounted(){
        this.responsive();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    methods: {
        responsive(){
            if(window.innerWidth < 991){
                this.margin = 'ml-2 mt-2';
            } else{
                this.margin = 'ml-5 mt-15'
            }
        }
    }
}
</script>

<style>

 
</style>