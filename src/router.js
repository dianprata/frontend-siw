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
            component: () => import('./views/Index.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/berita',
            name: 'news',
            component: () => import('./views/full-page/News.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/tentang',
            name: 'about',
            component: () => import('./views/full-page/About.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/kontak',
            name: 'contact',
            component: () => import('./views/full-page/Contact.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/login',
            name: 'page-login',
            component: () => import('./views/pages/Login.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/login-admin',
            name: 'page-login-admin',
            component: () => import('./views/pages/LoginAdmin.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/pages/not-authorized',
            name: 'page-not-authorized',
            component: () => import('@/views/pages/NotAuthorized.vue'),
            meta: {
              rule: 'public'
            }
          },
          {
            path: '/pages/error-404',
            name: 'page-error-404',
            component: () => import('./views/pages/Error404.vue'),
            meta: {
              rule: 'public'
            }
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
                  rule: 'public',
                  breadcrumb: [
                    { title: 'Home', active: true },
                  ],
                  pageTitle: 'Home',
                },
              },
              {
                path: '/kritik-saran',
                name: 'kritik-saran',
                component: () => import('./views/resident/CriticsSuggest.vue'),
                meta: {
                  authRequired: true,
                  rule: 'resident',
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'Kritik & Saran', active: true },
                  ],
                  pageTitle: 'Kritik & Saran',
                }
              },
              {
                path: '/pengaduan',
                name: 'pengaduan',
                component: () => import('./views/resident/Complaint.vue'),
                meta: {
                  authRequired: true,
                  rule: 'resident',
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'Pengaduan', active: true },
                  ],
                  pageTitle: 'Pengaduan',
                }
              },
              {
                path: '/kritik-saran-warga',
                name: 'kritik-saran-warga',
                component: () => import('./views/admin/CriticsSuggestAdmin.vue'),
                meta: {
                  authRequired: true,
                  rule: 'admin',
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'Kritik & Saran Warga', active: true },
                  ],
                  pageTitle: 'Kritik & Saran Warga',
                }
              },
              {
                path: '/pengaduan-warga',
                name: 'pengaduan-warga',
                component: () => import('./views/admin/ComplaintAdmin.vue'),
                meta: {
                  authRequired: true,
                  rule: 'admin',
                  breadcrumb: [
                    { title: 'Home', url: '/home' },
                    { title: 'Pengaduan Warga', active: true },
                  ],
                  pageTitle: 'Pengaduan Warga',
                }
              },
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
  // If auth required, check login. If login fails redirect to login page
  const roleLevel = state.AppActiveUser.role.level;
  const userInfo = localStorage.getItem('userInfo');
  const roleId = state.AppActiveUser.role_id === '';
  if(to.matched.some((record) => record.meta.authRequired)) {
    if(!userInfo || roleId) {
      // if (to.matched.some((record) => record.meta.rule === 'admin')) {
      //   if (roleLevel !== 'admin') {
      //     router.push({path: '/'})
      //   }
      // } else if (to.matched.some((record) => record.meta.rule === 'resident')) {
      //   if (roleLevel !== 'resident') {
      //     router.push({path: '/home'})
      //   }
      // }
      router.push({path: '/login'})
    }
  }
  return next()
});

export default router
