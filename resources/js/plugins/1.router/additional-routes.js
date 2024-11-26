const emailRouteComponent = () => import('@/pages/6val/adminpage/apps/email/index.vue')

// 👉 Redirects
export const redirects = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/6val/login/admin',
    name: 'index',
    redirect: to => {
      // TODO: Get type from backend
      const userData = useCookie('userData')
      const userRole = userData.value?.role
      if (userRole === 'admin')
        return { name: '6val-adminpage-dashboards-crm' }
      if (userRole === 'client')
        return { name: '6val-adminpage-access-control' }

      return { name: '6val-adminpage-login', query: to.query }
    },
  },

  {
    path: '/pages/user-profile',
    name: '6val-adminpage-pages-user-profile',
    redirect: () => ({ name: '6val-adminpage-pages-user-profile-tab', params: { tab: 'profile' } }),
  },
  {
    path: '/pages/account-settings',
    name: '6val-adminpage-pages-account-settings',
    redirect: () => ({ name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'account' } }),
  },
]
export const routes = [
    {
        path: '',
        redirect: '/6val/adminpage/login' // 기본 경로를 '/home'으로 리다이렉트
    },
    {
        path: '/',
        redirect: '/6val/adminpage/login' // 기본 경로를 '/home'으로 리다이렉트
    },
  // Email filter
  {
    path: '/apps/email/filter/:filter',
    name: '6val-adminpage-apps-email-filter',
    component: emailRouteComponent,
    meta: {
      navActiveLink: '6val-adminpage-apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },

  // Email label
  {
    path: '/apps/email/label/:label',
    name: '6val-adminpage-apps-email-label',
    component: emailRouteComponent,
    meta: {
      // contentClass: 'email-application',
      navActiveLink: '6val-adminpage-apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },
  {
    path: '/dashboards/logistics',
    name: '6val-adminpage-dashboards-logistics',
    component: () => import('@/pages/6val/adminpage/apps/logistics/dashboard.vue'),
  },
  {
    path: '/dashboards/academy',
    name: '6val-adminpage-dashboards-academy',
    component: () => import('@/pages/6val/adminpage/apps/academy/dashboard.vue'),
  },
  {
    path: '/6val/adminpage/dashboards/test',
    name: '6val-adminpage-dashboards-test',
    component: () => import('@/pages/6val/adminpage/dashboards/test.vue'),
  },
  {
    path: '/apps/ecommerce/dashboard',
    name: '6val-adminpage-apps-ecommerce-dashboard',
    component: () => import('@/pages/6val/adminpage/dashboards/ecommerce.vue'),
  },

  //User Account list
  // {
  //   path: '/6val/adminpage/apps/user/view',
  //   name: '6val-adminpage-apps-user-view-id',
  //   component: () => import(`@/pages/6val/adminpage/apps/user/view/`)
  // }
]
