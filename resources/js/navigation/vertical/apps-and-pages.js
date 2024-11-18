export default [
  { heading: 'Apps & Pages' },
  {
    title: 'Ecommerce',
    icon: { icon: 'bx-cart-alt' },
    children: [
      {
        title: 'Dashboard',
        to: '6val-adminpage-apps-ecommerce-dashboard',
      },
      {
        title: 'Product',
        children: [
          { title: 'List', to: '6val-adminpage-apps-ecommerce-product-list' },
          { title: 'Add', to: '6val-adminpage-apps-ecommerce-product-add' },
          { title: 'Category', to: '6val-adminpage-apps-ecommerce-product-category-list' },
        ],
      },
      {
        title: 'Order',
        children: [
          { title: 'List', to: '6val-adminpage-apps-ecommerce-order-list' },
          { title: 'Details', to: { name: '6val-adminpage-apps-ecommerce-order-details-id', params: { id: '9042' } } },
        ],
      },
      {
        title: 'Customer',
        children: [
          { title: 'List', to: '6val-adminpage-apps-ecommerce-customer-list' },
          { title: 'Details', to: { name: '6val-adminpage-apps-ecommerce-customer-details-id', params: { id: 478426 } } },
        ],
      },
      {
        title: 'Manage Review',
        to: '6val-adminpage-apps-ecommerce-manage-review',
      },
      {
        title: 'Referrals',
        to: '6val-adminpage-apps-ecommerce-referrals',
      },
      {
        title: 'Settings',
        to: '6val-adminpage-apps-ecommerce-settings',
      },
    ],
  },
  {
    title: 'academy',
    icon: { icon: 'bx-book-open' },
    children: [
      { title: 'Dashboard', to: '6val-adminpage-apps-academy-dashboard' },
      { title: 'My Course', to: '6val-adminpage-apps-academy-my-course' },
      { title: 'Course Details', to: '6val-adminpage-apps-academy-course-details' },
    ],
  },
  {
    title: 'Logistics',
    icon: { icon: 'bx-car' },
    children: [
      { title: 'Dashboard', to: '6val-adminpage-apps-logistics-dashboard' },
      { title: 'Fleet', to: '6val-adminpage-apps-logistics-fleet' },
    ],
  },
  {
    title: 'Email',
    icon: { icon: 'bx-envelope' },
    to: '6val-adminpage-apps-email',
  },
  {
    title: 'Chat',
    icon: { icon: 'bx-chat' },
    to: '6val-adminpage-apps-chat',
  },
  {
    title: 'Calendar',
    icon: { icon: 'bx-calendar' },
    to: '6val-adminpage-apps-calendar',
  },
  {
    title: 'Kanban',
    icon: { icon: 'bx-grid' },
    to: '6val-adminpage-apps-kanban',
  },
  {
    title: 'Invoice',
    icon: { icon: 'bx-food-menu' },
    children: [
      { title: 'List', to: '6val-adminpage-apps-invoice-list' },
      { title: 'Preview', to: { name: '6val-adminpage-apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Edit', to: { name: '6val-adminpage-apps-invoice-edit-id', params: { id: '5036' } } },
      { title: 'Add', to: '6val-adminpage-apps-invoice-add' },
    ],
  },
  {
    title: 'User',
    icon: { icon: 'bx-user' },
    children: [
      { title: 'List', to: '6val-adminpage-apps-user-list' },
      { title: 'View', to: { name: '6val-adminpage-apps-user-view-id', params: { id: 21 } } },
    ],
  },
  {
    title: 'Roles & Permissions',
    icon: { icon: 'bx-check-shield' },
    children: [
      { title: 'Roles', to: '6val-adminpage-apps-roles' },
      { title: 'Permissions', to: '6val-adminpage-apps-permissions' },
    ],
  },
  {
    title: 'Pages',
    icon: { icon: 'bx-file' },
    children: [
      { title: 'User Profile', to: { name: '6val-adminpage-pages-user-profile-tab', params: { tab: 'profile' } } },
      { title: 'Account Settings', to: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'account' } } },
      { title: 'Pricing', to: '6val-adminpage-pages-pricing' },
      { title: 'FAQ', to: '6val-adminpage-pages-faq' },
      {
        title: 'Miscellaneous',
        children: [
          { title: 'Coming Soon', to: '6val-adminpage-pages-misc-coming-soon', target: '_blank' },
          { title: 'Under Maintenance', to: '6val-adminpage-pages-misc-under-maintenance', target: '_blank' },
          { title: 'Page Not Found - 404', to: { path: '/6val/adminpage/pages/misc/not-found' }, target: '_blank' },
          { title: 'Not Authorized - 401', to: { path: '/6val/adminpage/pages/misc/not-authorized' }, target: '_blank' },
        ],
      },
    ],
  },
  {
    title: 'Authentication',
    icon: { icon: 'bx-shield' },
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
    title: 'Wizard Examples',
    icon: { icon: 'bx-dots-horizontal' },
    children: [
      { title: 'Checkout', to: { name: '6val-adminpage-wizard-examples-checkout' } },
      { title: 'Property Listing', to: { name: '6val-adminpage-wizard-examples-property-listing' } },
      { title: 'Create Deal', to: { name: '6val-adminpage-wizard-examples-create-deal' } },
    ],
  },
  {
    title: 'Dialog Examples',
    icon: { icon: 'bx-square' },
    to: '6val-adminpage-pages-dialog-examples',
  },
]
