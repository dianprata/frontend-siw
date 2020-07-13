<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="relative">

    <div class="vx-navbar-wrapper" :class="classObj">

      <vs-navbar class="vx-navbar navbar-skelton sm:collapse"
                 :color="navbarColorLocal" :class="textColor">

        <div slot="title" class="flex items-center w-full">
          <vs-navbar-title>
            <router-link to="/">
              <span class="vx-logo-text text-primary">SIP</span>
            </router-link>
          </vs-navbar-title>
          <vs-spacer />
          <search-bar class="md:hidden" />
          <vs-button type="flat" to="/login" class="md:hidden px-4" v-if="!isAuthenticated">Login</vs-button>
          <profile-drop-down v-else class="md:hidden"/>
        </div>

        <!-- SM - OPEN SIDEBAR BUTTON -->
<!--        <feather-icon class="sm:inline-flex md:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />-->

        <vs-navbar-item>
          <router-link to="/">Beranda</router-link>
        </vs-navbar-item>
        <vs-navbar-item>
          <router-link to="/berita">Berita</router-link>
        </vs-navbar-item>
        <vs-navbar-item>
          <router-link to="/tentang">Tentang</router-link>
        </vs-navbar-item>
        <vs-navbar-item>
          <router-link to="/kontak">Kontak</router-link>
        </vs-navbar-item>

        <vs-spacer />

        <search-bar class="hidden md:flex" />

        <vs-button type="flat" to="/login" class="hidden md:flex" v-if="!isAuthenticated">Login</vs-button>
        <profile-drop-down v-else class="hidden md:flex"/>
      </vs-navbar>
    </div>
  </div>
</template>


<script>
import SearchBar from "./components/SearchBar.vue"
import ProfileDropDown from "./components/ProfileDropDown";

export default {
  name: "navbar-vertical-fullpage",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    SearchBar,
    ProfileDropDown
  },
  computed: {
    activeUser() {
      return this.$store.state.AppActiveUser;
    },
    isAuthenticated() {
      if(this.activeUser.role.level === 'public' || !localStorage.getItem('userInfo') || this.activeUser.role_id === '') {
        return false
      } else {
        return true
      }
    },
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#10163a" : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {'text-white': (this.navbarColor != '#10163a' && this.$store.state.theme === 'dark') || (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default")      return "navbar-default"
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced"
      else if (this.verticalNavMenuWidth)              return "navbar-full"
    },
  },
  methods: {
    // showSidebar() {
    //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    // }
  }
}
</script>

