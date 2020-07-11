<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-3/4 mb-base">
      <vx-card title="Kritik & Saran">
        <form @keypress.enter="sendCritics">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <label for="subject">Judul</label>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input id="subject" class="w-full" v-model="subject" />
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
              <vs-button class="mr-3 mb-2" @click="sendCritics">Kirim</vs-button>
            </div>
          </div>
        </form>
      </vx-card>
    </div>
  </div>
</template>

<script>
  import criticsSuggest from "../../http/criticsSuggest";
  export default {
    name: "CriticsSuggest",
    data() {
      return {
        subject: '',
        body: '',
      }
    },
    methods: {
      sendCritics() {
        new Promise((resolve, reject) => {
          const payload = {
            subject: this.subject,
            body: this.body
          };
          criticsSuggest.store(payload)
            .then((res) => {
              if(res.data.data) {
                this.$vs.notify({
                  title: 'Berhasil!',
                  text: 'Terima kasih atas kritik dan sarannya',
                  iconPack: 'feather',
                  icon: 'icon-alert-circle',
                  color: 'primary'
                });
                resolve(res);
              } else {
                reject('Gagal!')
              }
            }).catch((err) => {
            this.$vs.notify({
              title: 'Login Gagal!',
              text: 'Maaf ada kesalahan, coba lagi',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
            reject(err);
          })
        });
      }
    }
  }
</script>

<style scoped>

</style>
