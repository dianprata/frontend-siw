/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import state from './store/state.js'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('./layouts/full-page/FullPage.vue'),
        children: [
          // =============================================================================
          // PAGES
          // =============================================================================
          {
            path: '/',
            name: 'index',
            component: () => import('./views/Index.vue')
          },
          {
            path: '/berita',
            name: 'news',
            component: () => import('./views/full-page/News.vue')
          },
          {
            path: '/tentang',
            name: 'about',
            component: () => import('./views/full-page/About.vue')
          },
          {
            path: '/kontak',
            name: 'contact',
            component: () => import('./views/full-page/Contact.vue')
          },
          {
            path: '/login',
            name: 'page-login',
            component: () => import('./views/pages/Login.vue')
          },
          {
            path: '/login-admin',
            name: 'page-login-admin',
            component: () => import('./views/pages/LoginAdmin.vue')
          },
          {
            path: '/pages/error-404',
            name: 'page-error-404',
            component: () => import('./views/pages/Error404.vue')
          },
        ]
      },
        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/home',
                name: 'home',
                component: () => import('./views/Home.vue'),
                meta: {
                  authRequired: true,
                  breadcrumb: [
                    { title: 'Home', active: true },
                  ],
                  pageTitle: 'Home',
                },
              },
              {
                path: '/page2',
                name: 'page-2',
                component: () => import('./views/Page2.vue'),
                meta: {
                  authRequired: true,
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'page-2', active: true },
                  ],
                  pageTitle: 'Page 2',
                }
              },
              {
                path: '/kritik-saran',
                name: 'kritik-saran',
                component: () => import('./views/resident/CriticsSuggest.vue'),
                meta: {
                  authRequired: true,
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'Kritik & Saran', active: true },
                  ],
                  pageTitle: 'Kritik & Saran',
                }
              }
            ],
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

router.beforeEach((to, from, next) => {
  if(to.meta.authRequired) {
    if(!localStorage.getItem('userInfo') || state.AppActiveUser.role_id === '') {
      router.push({ path: '/login-admin' })
    } else {
      next()
    }
    next()
  } else {
    next()
  }
});

export default router
