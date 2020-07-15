<template>
  <div class="pt-32 bg-img h-screen">
    <div class="container mx-auto lg:px-6 px-5">
      <h1 class="text-center my-10 d-theme-text-inverse">Hubungi Kami</h1>
      <div class="flex w-full vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/5 xl:w-4/6 sm:m-0 m-4">
          <vx-card>
            <div slot="no-body" class="full-page-bg-color">

              <div class="vx-row no-gutter justify-center">

                <div class="vx-col sm:w-full md:w-full lg:w-2/3 d-theme-dark-bg border-right">
                  <div class="p-8 login-tabs-container">

                    <div class="vx-card__title mb-8">
                      <h4>Kirim Pesan Anda</h4>
                    </div>

                    <form @keypress.enter="send">
                      <vs-input
                          data-vv-validate-on="blur"
                          v-validate="'required'"
                          name="fullname"
                          label-placeholder="Nama Lengkap"
                          v-model="fullname"
                          class="w-full"/>
                      <span class="text-danger text-sm">{{ errors.first('fullname') }}</span>

                      <vs-textarea
                          data-vv-validate-on="blur"
                          v-validate="'required'"
                          name="messages"
                          class="mt-6 mb-0"
                          label="Isi pesan Anda"
                          v-model="messages"/>
                      <span class="text-danger text-sm">{{ errors.first('messages') }}</span>

                      <vs-button class="w-full mt-6" :disabled="!validateForm" @click="send">Kirim</vs-button>
                    </form>

                  </div>
                </div>

                <div class="vx-col hidden lg:block lg:w-1/3 d-theme-dark-bg">
                  <div class="vx-card__title mb-6 p-8">
                    <h4 class="mb-4">Kontak</h4>
                    <h6>Jl. Rengganis blok 3B</h6>
                  </div>
                </div>
              </div>
            </div>
          </vx-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contact",
    data() {
      return {
        fullname: '',
        messages: '',
      }
    },
    computed: {
      validateForm() {
        return !this.errors.any() && this.fullname !== '' && this.messages !== '';
      },
    },
    methods: {
      send() {
        //
      }
    }
  }
</script>

<style scoped>

</style>
