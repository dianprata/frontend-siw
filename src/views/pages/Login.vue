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
                      name="username"
                      icon-no-border
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="Username"
                      v-model="username"
                      class="w-full"/>
                  <span class="text-danger text-sm">{{ errors.first('username') }}</span>

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
                      <router-link to="#lupa-password">Lupa Password?</router-link>
                  </div>
                  <vs-button type="border">Register</vs-button>
                  <vs-button class="float-right" :disabled="!validateForm" @click="login">Login</vs-button>
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
      username: "",
      password: "",
      checkbox_remember_me: false,
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.username !== '' && this.password !== '';
    },
  },
  methods: {
    login() {
      new Promise((resolve, reject) => {
        auth.login(this.username, this.password)
          .then((res) => {
            if(res.data) {
              resolve(res);
            } else {
              reject({message: "Wrong Email or Password"})
            }
          }).catch((err) => {
            reject(err)
        })
      })
    }
  }
}
</script>
