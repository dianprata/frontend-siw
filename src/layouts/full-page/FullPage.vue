<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <navbar-vertical-fullpage
        :navbarColor="navbarColor"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />
    <router-view></router-view>
  </div>
</template>

<script>
  import NavbarVerticalFullpage from "../components/navbar-fullpage/NavbarVerticalFullpage";
  import themeConfig         from '@/../themeConfig.js'
  export default {
    components: {
      NavbarVerticalFullpage
    },
    data() {
      return {
        isNavbarDark      : false,
        navbarColor       : themeConfig.navbarColor || '#fff',
      }
    },
    watch: {
      isThemeDark(val) {
        const color = this.navbarColor === "#fff" && val ? "#10163a" : "#fff"
        this.updateNavbarColor(color)
      }
    },
    computed: {
      isThemeDark() { return this.$store.state.theme === 'dark' },
    },
    methods: {
      updateNavbarColor(val) {
        this.navbarColor = val
        if (val === "#fff") this.isNavbarDark = false
        else this.isNavbarDark = true
      },
    },
    created() {
      const color = this.navbarColor === "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor
      this.updateNavbarColor(color)
    }
  }
</script>
