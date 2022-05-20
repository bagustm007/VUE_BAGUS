<template>
  <v-container fluid>
    <v-row>
        <v-col cols="12">
<v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">

      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Tambah Gaji Bulanan </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                  label="jumlah"
                  type="number"
                  required
                  v-model.number ="inputGaji"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          color="red"
          dark
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            dark
            @click="setAddGaji()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
<v-dialog
      v-model="dialogPengeluaran"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">

      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Tambah Pengeluaran Bulanan </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                  label="Nama Pengeluaran"
                  type="text"
                  required
                  v-model ="namaPengeluaran"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Jumlah Pengeluaran"
                  type="number"
                  required
                  v-model.number ="jumlah"
                ></v-text-field>
              </v-col>
              


            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          color="red"
          dark
            @click="dialogPengeluaran = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            dark
            @click="setAddPengeluaran()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
            <material-card color="primary" text="Atur Keuangan anda" title="Mamoney" class="zindex">
                <v-card-title>Nama: {{ nama.nama }} </v-card-title>
                <v-card-text>
                    Gaji Bulanan : {{ changeRupiah(this.gajiBulanan) }}
                </v-card-text>
                <v-divider class="mb-3"></v-divider>
                <v-row justify="end">
                    <v-col cols="12" md="12" xs="12" sm="12" class="mb-5">
                        <v-btn color="primary" @click="openGaji" class="mb-5">
                            Tambah Pemasukan Bulanan  
                        </v-btn>
                         <v-btn color="primary" @click="dialogPengeluaran = true">
                            Tambah pengeluaran Bulanan  
                        </v-btn>
                    </v-col>
                    
                </v-row>
                <v-data-table 
                            :headers="headers"
                            :items="pengeluaran"
                            sort-by="namaBarang"
                            class="elevation-1"

                        >
                        <template v-slot:item.jumlah="{item}">
                                {{ changeRupiah(item.jumlah) }}
                        </template>
                        <template v-slot:item.action="{item}">
                               <v-icon class="pointer" @click="setdeletePengeluaran(item.id_pengeluaran)">mdi-delete</v-icon>
                        </template>
                       
                </v-data-table>
            </material-card>
        </v-col>
    </v-row>      
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    middleware: 'auth', 
    layout: 'loginLayout',
    computed: {
        nama(){
            return JSON.parse(localStorage.getItem("users"))
        },
        gajiBulanan(){
            return this.$store.state.mamoney.gaji
        },
        username(){
            return JSON.parse(localStorage.getItem("users"))

        },
        pengeluaran(){
            return this.$store.state.mamoney.pengeluaran
        }
        
    },
    data: () => ({
         headers: [
         
            { text: 'Nama Pengeluaran', value: 'nama'},
            { text: 'jumlah Pengeluaran', value: 'jumlah' },
            { text: 'Actions', value: 'action'},

        ],
        dialog: false,
        inputGaji: 0,
        dialogPengeluaran: false,
        namaPengeluaran: '',
        jumlah: 0,
        sisa: 0,

    }),
    mounted() {
        this.getGaji();
        this.setPengeluaran();
    },

    methods: {
        ...mapActions('mamoney',['fecthGaji','addGaji','updateGaji','addPengeluaran','fetchPengeluaran','deletePengeluaran']),
        getGaji(){
            this.fecthGaji(this.username.email)

        },
        changeRupiah(item){
            return new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(item)

        },
        openGaji(){
            this.dialog = true
        },
        setAddGaji(){
            if (this.gajiBulanan === 0) {
                const param = {
                    username: this.username.email,
                    gaji: this.inputGaji,
                }
                this.addGaji(param)
            }
            else{
                const param = {
                    username: this.username.email,
                    gaji: this.inputGaji,
                }
                this.updateGaji(param)
            }
            this.dialog = false
        },
        setPengeluaran(){
            this.fetchPengeluaran(this.username.email)
        },
        setAddPengeluaran(){
            const param = {
                    username: this.username.email,
                    nama: this.namaPengeluaran,
                    pengeluaran: this.jumlah,
            }
            this.addPengeluaran(param)
            this.dialogPengeluaran = false
        },
        setdeletePengeluaran(id){
            this.deletePengeluaran(id)
        }


    }

}
</script>

<style>
    .pointer{
        cursor: pointer !important;
    }
    .zindex{
      z-index: 0 !important;
    }
</style>