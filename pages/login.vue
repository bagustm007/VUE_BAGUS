<template>
  <v-container fluid>
      <v-row >
          <v-col cols="12" xs="12" md="12" sm="12" class="d-flex justify-center">
              <v-card color="white" width="300" class="pt-5 mt-5">
                  <v-card-title class="primary--text">
                      Login 
                  </v-card-title>
                  <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alert"
                >
                        Email Atau Passowrd  <strong>salah</strong> 
                </v-alert>
                <v-form
                     ref="form"
                     lazy-validation
                     class="pl-4 pr-4 mt-5"
                    >
                 <v-text-field 
                    outlined 
                    label="username"
                    v-model="username"
                ></v-text-field>

                <v-text-field 
                     outlined 
                     label="Password"
                     type="password"
                     v-model="password" 
                ></v-text-field>
                <v-btn  
                    block color="primary" 
                    @click="doLogin()"
                  >login</v-btn>
                <p class="text-center mt-4 pb-5">Belum Punya Akun ..? <a >Daftar</a> </p>
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
        currentUser(){
            return this.$store.state.auth.user
         },
        users(){
            return this.$store.state.users.users
        }
    },
    data: () => ({
        username: '',
        password: '',
        alert: false,
    }),
    mounted(){
        this.fecthUser();
        this.checkAuth();

    },
    methods: {
        ...mapActions({
            fecthUser: 'users/fetchUser',
            login: 'auth/login',
        }),
                doLogin(){
            this.alert =false
            this.isLoading = true
           const user = this.users.filter(username => username.username === this.username);
           if (user.length > 0) {
                if(user[0].password === this.password){
                    const param = {
                        email: user[0].username,
                        nama: user[0].nama,
                    }
                    this.login(param)
                    this.$router.push('/mamoney')
                    
                }
                else
                {
                    this.isLoading = false
                    this.alert = true
                    this.email = ''
                    this.password = ''
                }
           }
           else{
                 this.isLoading = false
                    this.alert = true
                    this.email = ''
                    this.password = ''
           }
      

        },
           checkAuth(){
            if(localStorage.users){
                window.location = '/mamoney'
            }
        }
    },
}
</script>

<style>
    .center{
        text-align: center !important;
    }
</style>