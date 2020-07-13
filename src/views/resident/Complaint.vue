<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-3/4 mb-base">
      <vx-card title="Pengaduan">
        <form @keypress.enter="sendComplaint">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <label for="subject">Tipe</label>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <v-select id="subject" v-model="type" label="name" :options="types" ></v-select>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <label for="body">Isi pesan</label>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-textarea id="body" class="w-full" v-model="body"></vs-textarea>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" @click="sendComplaint">Kirim</vs-button>
            </div>
          </div>
        </form>
      </vx-card>
    </div>
  </div>
</template>

<script>
  import complaint from "../../http/complaint";
  export default {
    name: "Complaint",
    data() {
      return {
        types: [
          {key: 'tamu', name: 'Tamu'},
          {key: 'kematian', name: 'Kematian'},
          {key: 'kehilangan', name: 'Kehilangan'}
        ],
        type: null,
        body: '',
      }
    },
    computed: {
      validate() {
        if(this.type !== '' && this.body !== '') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      sendComplaint() {
        new Promise((resolve, reject) => {
          const payload = {
            type: this.type.key,
            body: this.body
          };
          complaint.store(payload)
            .then((res) => {
              if(res.data.data) {
                this.$vs.notify({
                  title: 'Berhasil!',
                  text: 'Pengaduan Anda telah terkirim',
                  iconPack: 'feather',
                  icon: 'icon-check-circle',
                  color: 'primary'
                });
                this.reset();
                resolve(res);
              } else {
                reject('Gagal!')
              }
            }).catch((err) => {
            this.$vs.notify({
              title: 'Gagal!',
              text: 'Maaf ada kesalahan, coba lagi',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
            reject(err);
          })
        });
      },
      reset() {
        this.type = null;
        this.body = '';
      }
    }
  }
</script>

<style scoped>

</style>
