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

    <div class="vx-navbar-wrapper" :class="classObj" style="height: auto">

      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">

        <router-link tag="div" to="/" class="vx-logo cursor-pointer flex items-center">
          <logo class="w-10 mr-4 fill-current text-primary" />
          <span class="vx-logo-text text-primary">SIP</span>
        </router-link>

        <!-- SM - OPEN SIDEBAR BUTTON -->
<!--        <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />-->

        <vs-spacer />

        <search-bar />

        <profile-drop-down />

      </vs-navbar>
    </div>
  </div>
</template>


<script>
import SearchBar            from "./components/SearchBar.vue"
import ProfileDropDown      from "./components/ProfileDropDown.vue"
import Logo                 from "../Logo.vue"

export default {
  name: "navbar-vertical-fullpage",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Logo,
    SearchBar,
    ProfileDropDown,
  },
  computed: {
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

