export default [
  {
    title: 'Pages',
    icon: { icon: 'bx-file' },
    children: [
      {
        title: 'User Profile',
        icon: { icon: 'bx-user-circle' },
        to: { name: '6val-adminpage-pages-user-profile-tab', params: { tab: 'profile' } },
      },
      {
        title: 'Account Settings',
        icon: { icon: 'bx-cog' },
        to: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'account' } },
      },
      { title: 'FAQ', icon: { icon: 'bx-help-circle' }, to: '6val-adminpage-pages-faq' },
      { title: 'Pricing', icon: { icon: 'bx-diamond' }, to: '6val-adminpage-pages-pricing' },
      {
        title: 'Misc',
        icon: { icon: 'bx-cube' },
        children: [
          { title: 'Coming Soon', to: '6val-adminpage-pages-misc-coming-soon' },
          { title: 'Under Maintenance', to: '6val-adminpage-pages-misc-under-maintenance', target: '_blank' },
          { title: 'Page Not Found - 404', to: { path: '/6val/adminpage/pages/misc/not-found' }, target: '_blank' },
          { title: 'Not Authorized - 401', to: { path: '/6val/adminpage/pages/misc/not-authorized' }, target: '_blank' },
        ],
      },
      {
        title: 'Authentication',
        icon: { icon: 'bx-lock' },
        children: [
          {
            title: 'Login',
            children: [
              { title: 'Login v1', to: '6val-adminpage-pages-authentication-login-v1', target: '_blank' },
              { title: 'Login v2', to: '6val-adminpage-pages-authentication-login-v2', target: '_blank' },
            ],
          },
          {
            title: 'Register',
            children: [
              { title: 'Register v1', to: '6val-adminpage-pages-authentication-register-v1', target: '_blank' },
              { title: 'Register v2', to: '6val-adminpage-pages-authentication-register-v2', target: '_blank' },
              { title: 'Register Multi-Steps', to: '6val-adminpage-pages-authentication-register-multi-steps', target: '_blank' },
            ],
          },
          {
            title: 'Verify Email',
            children: [
              { title: 'Verify Email v1', to: '6val-adminpage-pages-authentication-verify-email-v1', target: '_blank' },
              { title: 'Verify Email v2', to: '6val-adminpage-pages-authentication-verify-email-v2', target: '_blank' },
            ],
          },
          {
            title: 'Forgot Password',
            children: [
              { title: 'Forgot Password v1', to: '6val-adminpage-pages-authentication-forgot-password-v1', target: '_blank' },
              { title: 'Forgot Password v2', to: '6val-adminpage-pages-authentication-forgot-password-v2', target: '_blank' },
            ],
          },
          {
            title: 'Reset Password',
            children: [
              { title: 'Reset Password v1', to: '6val-adminpage-pages-authentication-reset-password-v1', target: '_blank' },
              { title: 'Reset Password v2', to: '6val-adminpage-pages-authentication-reset-password-v2', target: '_blank' },
            ],
          },
          {
            title: 'Two Steps',
            children: [
              { title: 'Two Steps v1', to: '6val-adminpage-pages-authentication-two-steps-v1', target: '_blank' },
              { title: 'Two Steps v2', to: '6val-adminpage-pages-authentication-two-steps-v2', target: '_blank' },
            ],
          },
        ],
      },
      {
        title: 'Wizard Pages',
        icon: { icon: 'bx-customize' },
        children: [
          { title: 'Checkout', to: { name: '6val-adminpage-wizard-examples-checkout' } },
          { title: 'Property Listing', to: { name: '6val-adminpage-wizard-examples-property-listing' } },
          { title: 'Create Deal', to: { name: '6val-adminpage-wizard-examples-create-deal' } },
        ],
      },
      { title: 'Dialog Examples', icon: { icon: 'bx-square' }, to: '6val-adminpage-pages-dialog-examples' },
      {
        title: 'Front Pages',
        icon: { icon: 'bx-collection' },
        children: [
          {
            title: 'Landing',
            to: '6val-adminpage-front-pages-landing-page',
            target: '_blank',
          },
          {
            title: 'Pricing',
            to: '6val-adminpage-front-pages-pricing',
            target: '_blank',
          },
          {
            title: 'Payment',
            to: '6val-adminpage-front-pages-payment',
            target: '_blank',
          },
          {
            title: 'Checkout',
            to: '6val-adminpage-front-pages-checkout',
            target: '_blank',
          },
          {
            title: 'Help Center',
            to: '6val-adminpage-front-pages-help-center',
            target: '_blank',
          },
        ],
      },
    ],
  },
]
