<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-6">
                  <h4 class="mb-4">Login</h4>
                  <h6>Selamat Datang di <b>SIP</b></h6>
                </div>

                <form @keypress.enter="login">
                  <vs-input
                      data-vv-validate-on="blur"
                      v-validate="'required'"
                      name="nik"
                      icon-no-border
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="NIK"
                      v-model="nik"
                      class="w-full"/>
                  <span class="text-danger text-sm">{{ errors.first('nik') }}</span>

                  <vs-input
                      data-vv-validate-on="blur"
                      v-validate="'required'"
                      type="password"
                      name="password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Password"
                      v-model="password"
                      class="w-full mt-6" />
                  <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                  <div class="flex flex-wrap justify-between my-5">
                      <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ingat saya</vs-checkbox>
<!--                      <router-link to="#lupa-password">Lupa Password?</router-link>-->
                  </div>
                  <vs-button class="w-full" :disabled="!validateForm" @click="login">Login</vs-button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
  import auth from "../../http/auth";
export default{
  data() {
    return {
      nik: "",
      password: "",
      checkbox_remember_me: false,
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.nik !== '' && this.password !== '';
    },
  },
  methods: {
    login() {
      this.$vs.loading();
      new Promise((resolve, reject) => {
        const payload = {
          nik: this.nik,
          password: this.password
        };
        auth.login(payload)
          .then((res) => {
            if(res.data.data) {
              localStorage.setItem('userInfo', JSON.stringify(res.data.data));
              this.$store.dispatch('updateUserRole', {aclChangeRole: this.$acl.change, userRole: res.data.data.role.level})
              this.$store.commit('UPDATE_USER_INFO', res.data.data)
              this.$router.push('/home');
              this.$vs.loading.close();
              resolve(res);
            } else {
              this.$vs.loading.close();
              reject({message: "Wrong NIK or Password"})
            }
          }).catch((err) => {
          this.$vs.notify({
            title: 'Login Gagal!',
            text: err.response.data.error_message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
          this.$vs.loading.close();
          reject(err.response.data.error_message)
        })
      })
    },
  }
}
</script>
