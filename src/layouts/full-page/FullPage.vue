<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page navbar-floating">
    <navbar-vertical-fullpage
        :navbarColor="navbarColor"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />
    <transition name="fade-bottom">
      <router-view></router-view>
    </transition>
    <the-footer />
  </div>
</template>

<script>
  import NavbarVerticalFullpage from "../components/navbar-fullpage/NavbarVerticalFullpage";
  import themeConfig         from '@/../themeConfig.js'
  import TheFooter           from '@/layouts/components/TheFooter.vue'
  export default {
    components: {
      NavbarVerticalFullpage,
      'the-footer': TheFooter
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
