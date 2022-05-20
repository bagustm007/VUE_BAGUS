<template>
  <v-container fluid>
      <v-row >
          <v-col cols="12" xs="12" md="12" sm="12" class="d-flex justify-center">
              <v-card color="white" width="300" class="pt-5 mt-5">
                  <v-card-title class="primary--text">
                      Daftar
                  </v-card-title>
                    <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alert"
                    >
                        Akun  <strong>Telah Terdaftar</strong> 
                     </v-alert>
                    <v-alert
                        dense
                        outlined
                        type="success"
                        class="ml-4 mr-4"
                        :value="alertSuccess"
                    >
                        Berhasil  <strong>Mendaftar</strong> 
                     </v-alert>
                <v-form
                     ref="form"
                     lazy-validation
                     class="pl-4 pr-4 mt-5"
                    >
                 <v-text-field 
                    outlined 
                    label="Nama Lengkap"
                    v-model="nama"
                    :disabled="disabled"
                ></v-text-field>
                 <v-text-field 
                    outlined 
                    label="username"
                    v-model="username"
                    :disabled="disabled"

                ></v-text-field>
                 <v-text-field 
                    outlined 
                    label="Nomor Handphone"
                    v-model="phone"
                    :disabled="disabled"

                ></v-text-field>
                <v-text-field 
                     outlined label="Password" 
                     type="password"
                     v-model="password"
                    :disabled="disabled"

                ></v-text-field>
                <v-btn  
                    block color="primary" 
                 @click="addUsers()" >Daftar</v-btn>
                <p class="text-center mt-4 pb-5">Sudah Punya Akun ..? <a @click="toLogin()" >Login</a> </p>
                    </v-form>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    layout: 'aboutLayout',
    computed: {
        users(){
            return this.$store.state.users.users
        },
    },
    data: () => ({
        nama: '',
        username: '',
        phone: '',
        password: '',
        disabled: false,
        alert: false,
        alertSuccess: false,
    }),
    mounted(){
        this.fetchUser();
        this.checkAuth();
    }, 
    methods: {
        ...mapActions('users',['fetchUser','pushUsers']),
        
        toLogin(){
            this.$router.push('/login')
        },
        addUsers(){
            this.disabled = true
            if (this.users.length === 0) {
                
                const param = {
                    nama: this.nama,
                    username: this.username,
                    phone: this.phone,
                    password: this.password
                }
                this.pushUsers(param)
                this.alertSuccess = true;
            }
            else{
                const user = this.users.filter(user => user.username === this.username)
                if(user.length > 0){
                    this.alert = true;
                    this.nama = '';
                    this.username = '';
                    this.phone = '';
                    this.password = '';
                }
                else{
                const param = {
                    nama: this.nama,
                    username: this.username,
                    phone: this.phone,
                    password: this.password
                }
                this.pushUsers(param)
                this.alertSuccess = true;
                    this.nama = '';
                    this.username = '';
                    this.phone = '';
                    this.password = '';

                }
            }
            this.disabled = false
        },
        checkAuth(){
            if(localStorage.users){
                window.location = '/mamoney'
            }
        }

    }
}
</script>

<style>
    .center{
        text-align: center !important;
    }
</style>