export const db = {
  searchItems: [
    {
      title: 'Dashboards',
      category: 'dashboards',
      children: [
        {
          url: { name: '6val-adminpage-dashboards-analytics' },
          icon: 'bx-bar-chart',
          title: 'Analytics Dashboard',
        },
        {
          url: { name: '6val-adminpage-dashboards-crm' },
          icon: 'bx-doughnut-chart',
          title: 'CRM Dashboard',
        },
        {
          url: { name: '6val-adminpage-dashboards-ecommerce' },
          icon: 'bx-cart',
          title: 'ECommerce Dashboard',
        },
        {
          url: { name: '6val-adminpage-dashboards-academy' },
          icon: 'bx-book-open',
          title: 'academy Dashboard',
        },
        {
          url: { name: '6val-adminpage-dashboards-logistics' },
          icon: 'bx-car',
          title: 'Logistics Dashboard',
        },
      ],
    },
    {
      title: 'Front Pages',
      category: 'frontPages',
      children: [
        {
          url: { name: '6val-adminpage-front-pages-landing-page' },
          icon: 'bx-file',
          title: 'Landing Front',
        },
        {
          url: { name: '6val-adminpage-front-pages-pricing' },
          title: 'Pricing Front',
          icon: 'bx-file',
        },
        {
          url: { name: '6val-adminpage-front-pages-payment' },
          icon: 'bx-file',
          title: 'Payment Front',
        },
        {
          url: { name: '6val-adminpage-front-pages-checkout' },
          icon: 'bx-file',
          title: 'Checkout Front',
        },
        {
          url: { name: '6val-adminpage-front-pages-help-center' },
          icon: 'bx-file',
          title: 'Help Center Front',
        },
      ],
    },
    {
      title: 'Apps & Pages',
      category: 'appsPages',
      children: [
        {
          url: { name: '6val-adminpage-apps-email' },
          icon: 'bx-envelope',
          title: 'Email',
        },
        {
          url: { name: '6val-adminpage-apps-chat' },
          icon: 'bx-chat',
          title: 'Chat',
        },
        {
          url: { name: '6val-adminpage-apps-calendar' },
          icon: 'bx-calendar',
          title: 'Calendar',
        },
        {
          title: 'Kanban',
          icon: 'mdi-arrow-all',
          url: { name: '6val-adminpage-apps-kanban' },
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-dashboard' },
          icon: 'bx-cart',
          title: 'ECommerce Dashboard',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-product-list' },
          icon: 'bx-list-ul',
          title: 'Ecommerce - Product List',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-product-add' },
          icon: 'bx-radio-circle-marked',
          title: 'Ecommerce - Add Product',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-product-category-list' },
          icon: 'bx-list-ul',
          title: 'Ecommerce - Category List',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-order-list' },
          icon: 'bx-list-ul',
          title: 'Ecommerce - Order List',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-order-details-id', params: { id: '9042' } },
          icon: 'bx-list-check',
          title: 'Ecommerce - Order Details',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-customer-list' },
          icon: 'bx-user',
          title: 'Ecommerce - Customer List',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-customer-details-id', params: { id: '478426', tab: 'security' } },
          icon: 'bx-list-ul',
          title: 'Ecommerce - Customer Details',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-manage-review' },
          icon: 'bx-bxs-quote-alt-right',
          title: 'Ecommerce - Manage Review',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-referrals' },
          icon: 'bx-group',
          title: 'Ecommerce - Referrals',
        },
        {
          url: { name: '6val-adminpage-apps-ecommerce-settings' },
          icon: 'bx-cog',
          title: 'Ecommerce - Settings',
        },
        {
          url: { name: '6val-adminpage-apps-academy-dashboard' },
          icon: 'bx-book-open',
          title: 'academy - Dashboard',
        },
        {
          url: { name: '6val-adminpage-apps-academy-my-course' },
          icon: 'bx-list-ul',
          title: 'academy - My Courses',
        },
        {
          url: { name: '6val-adminpage-apps-academy-course-details' },
          icon: 'bx-list-ul',
          title: 'academy - Course Details',
        },
        {
          url: { name: '6val-adminpage-apps-logistics-dashboard' },
          icon: 'bx-car',
          title: 'Logistics - Dashboard',
        },
        {
          url: { name: '6val-adminpage-apps-logistics-fleet' },
          icon: 'bx-car',
          title: 'Logistics - fleet',
        },
        {
          url: { name: '6val-adminpage-apps-invoice-list' },
          icon: 'bx-list-ul',
          title: 'Invoice List',
        },
        {
          url: { name: '6val-adminpage-apps-invoice-preview-id', params: { id: '5036' } },
          icon: 'bx-file',
          title: 'Invoice Preview',
        },
        {
          url: { name: '6val-adminpage-apps-invoice-edit-id', params: { id: '5036' } },
          icon: 'bx-file',
          title: 'Invoice Edit',
        },
        {
          url: { name: '6val-adminpage-apps-invoice-add' },
          icon: 'bx-bxs-file-plus',
          title: 'Invoice Add',
        },
        {
          url: { name: '6val-adminpage-apps-user-list' },
          icon: 'bx-group',
          title: 'User List',
        },
        {
          url: { name: '6val-adminpage-apps-user-view-id', params: { id: 21 } },
          icon: 'bx-show',
          title: 'User View',
        },
        {
          url: { name: '6val-adminpage-pages-user-profile-tab', params: { tab: 'profile' } },
          icon: 'bx-user-circle',
          title: 'User Profile - Profile',
        },
        {
          url: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'account' } },
          icon: 'bx-user-circle',
          title: 'Account Settings - Account',
        },
        {
          url: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'security' } },
          icon: 'bx-lock-open',
          title: 'Account Settings - Security',
        },
        {
          url: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'billing-plans' } },
          icon: 'bx-dollar',
          title: 'Account Settings - Billing',
        },
        {
          url: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'notification' } },
          icon: 'bx-bell',
          title: 'Account Settings - Notifications',
        },
        {
          url: { name: '6val-adminpage-pages-account-settings-tab', params: { tab: 'connection' } },
          icon: 'bx-link',
          title: 'Account Settings - Connections',
        },
        {
          url: { name: '6val-adminpage-pages-pricing' },
          icon: 'bx-dollar',
          title: 'Pricing',
        },
        {
          url: { name: '6val-adminpage-pages-faq' },
          icon: 'bx-help-circle',
          title: 'FAQ',
        },
        {
          url: { name: '6val-adminpage-pages-misc-coming-soon' },
          icon: 'bx-time-five',
          title: 'Coming Soon',
        },
        {
          url: { name: '6val-adminpage-pages-misc-under-maintenance' },
          icon: 'bx-cog',
          title: 'Under Maintenance',
        },
        {
          url: { path: '/6val/adminpage/pages/misc/page-not-found' },
          icon: 'bx-error-circle',
          title: 'Page Not Found - 404',
        },
        {
          url: { path: '/6val/adminpage/pages/misc/not-authorized' },
          icon: 'bx-user-x',
          title: 'Not Authorized - 401',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-login-v1' },
          icon: 'bx-log-in',
          title: 'Login V1',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-login-v2' },
          icon: 'bx-log-in',
          title: 'Login V2',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-register-v1' },
          icon: 'bx-user-plus',
          title: 'Register V1',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-register-v2' },
          icon: 'bx-user-plus',
          title: 'Register V2',
        },
        {
          icon: 'bx-envelope',
          title: 'Verify Email V1',
          url: { name: '6val-adminpage-pages-authentication-verify-email-v1' },
        },
        {
          icon: 'bx-envelope',
          title: 'Verify Email V2',
          url: { name: '6val-adminpage-pages-authentication-verify-email-v2' },
        },
        {
          url: { name: '6val-adminpage-pages-authentication-forgot-password-v1' },
          icon: 'bx-lock',
          title: 'Forgot Password V1',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-forgot-password-v2' },
          icon: 'bx-lock',
          title: 'Forgot Password V2',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-reset-password-v1' },
          icon: 'bx-help-circle',
          title: 'Reset Password V1',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-reset-password-v2' },
          icon: 'bx-help-circle',
          title: 'Reset Password V2',
        },
        {
          icon: 'bx-devices',
          title: 'Two Steps V1',
          url: { name: '6val-adminpage-pages-authentication-two-steps-v1' },
        },
        {
          icon: 'bx-devices',
          title: 'Two Steps V2',
          url: { name: '6val-adminpage-pages-authentication-two-steps-v2' },
        },
        {
          url: { name: '6val-adminpage-pages-dialog-examples' },
          icon: 'bx-square',
          title: 'Dialog Examples',
        },
        {
          url: { name: '6val-adminpage-pages-authentication-register-multi-steps' },
          icon: 'bx-user-plus',
          title: 'Register Multi-Steps',
        },
        {
          url: { name: '6val-adminpage-wizard-examples-checkout' },
          icon: 'bx-cart',
          title: 'Wizard - Checkout',
        },
        {
          url: { name: '6val-adminpage-wizard-examples-create-deal' },
          icon: 'bx-gift',
          title: 'Wizard - create deal',
        },
        {
          url: { name: '6val-adminpage-wizard-examples-property-listing' },
          icon: 'bx-home',
          title: 'Wizard - Property Listing',
        },
        {
          url: { name: '6val-adminpage-apps-roles' },
          icon: 'bx-check-shield',
          title: 'Roles',
        },
        {
          url: { name: '6val-adminpage-apps-permissions' },
          icon: 'bx-check-shield',
          title: 'Permissions',
        },
      ],
    },
    {
      title: 'User Interface',
      category: 'userInterface',
      children: [
        {
          url: { name: '6val-adminpage-pages-typography' },
          icon: 'bx-font',
          title: 'Typography',
        },
        {
          url: { name: '6val-adminpage-pages-icons' },
          icon: 'bx-box',
          title: 'Icons',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-basic' },
          icon: 'bx-credit-card',
          title: 'Card Basic',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-advance' },
          icon: 'bx-id-card',
          title: 'Card Advance',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-statistics' },
          icon: 'bx-bar-chart',
          title: 'Card Statistics',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-widgets' },
          icon: 'bx-bar-chart',
          title: 'Card widgets',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-gamifications' },
          icon: 'bx-collection',
          title: 'Card Gamifications',
        },
        {
          url: { name: '6val-adminpage-pages-cards-card-actions' },
          icon: 'bx-mouse',
          title: 'Card Actions',
        },
        {
          url: { name: '6val-adminpage-components-alert' },
          icon: 'bx-error',
          title: 'Alerts',
        },
        {
          url: { name: '6val-adminpage-components-avatar' },
          icon: 'bx-user-circle',
          title: 'Avatars',
        },
        {
          url: { name: '6val-adminpage-components-badge' },
          icon: 'bx-badge',
          title: 'Badges',
        },
        {
          url: { name: '6val-adminpage-components-button' },
          icon: 'bx-plus-circle',
          title: 'Buttons',
        },
        {
          url: { name: '6val-adminpage-components-chip' },
          icon: 'bx-square',
          title: 'Chips',
        },
        {
          url: { name: '6val-adminpage-components-dialog' },
          icon: 'bx-square',
          title: 'Dialogs',
        },
        {
          url: { name: '6val-adminpage-components-list' },
          icon: 'bx-list-ul',
          title: 'List',
        },
        {
          url: { name: '6val-adminpage-components-menu' },
          icon: 'bx-menu',
          title: 'Menu',
        },
        {
          url: { name: '6val-adminpage-components-pagination' },
          icon: 'bx-skip-next-circle',
          title: 'Pagination',
        },
        {
          url: { name: '6val-adminpage-components-progress-circular' },
          icon: 'bx-loader-circle',
          title: 'Progress Circular',
        },
        {
          url: { name: '6val-adminpage-components-progress-linear' },
          icon: 'bx-loader-circle',
          title: 'Progress Linear',
        },
        {
          url: { name: '6val-adminpage-components-expansion-panel' },
          icon: 'bx-align-middle',
          title: 'Expansion Panel',
        },
        {
          url: { name: '6val-adminpage-components-snackbar' },
          icon: 'bx-message-dots',
          title: 'Snackbar',
        },
        {
          url: { name: '6val-adminpage-components-tabs' },
          icon: 'bx-window-alt',
          title: 'Tabs',
        },
        {
          url: { name: '6val-adminpage-components-timeline' },
          icon: 'bx-move-horizontal',
          title: 'Timeline',
        },
        {
          url: { name: '6val-adminpage-components-tooltip' },
          icon: 'bx-message',
          title: 'Tooltip',
        },
        {
          url: { name: '6val-adminpage-extensions-tour' },
          icon: 'bx-cube',
          title: 'Tour',
        },
        {
          url: { name: '6val-adminpage-extensions-swiper' },
          icon: 'bx-image',
          title: 'Swiper',
        },
      ],
    },
    {
      title: 'Forms & Tables',
      category: 'formsTables',
      children: [
        {
          url: { name: '6val-adminpage-forms-textfield' },
          icon: 'bx-text',
          title: 'TextField',
        },
        {
          url: { name: '6val-adminpage-forms-select' },
          icon: 'bx-list-check',
          title: 'Select',
        },
        {
          url: { name: '6val-adminpage-forms-checkbox' },
          icon: 'bx-check-square',
          title: 'Checkbox',
        },
        {
          url: { name: '6val-adminpage-forms-radio' },
          icon: 'bx-radio-circle-marked',
          title: 'Radio',
        },
        {
          url: { name: '6val-adminpage-forms-combobox' },
          icon: 'bx-check-square',
          title: 'Combobox',
        },
        {
          url: { name: '6val-adminpage-forms-date-time-picker' },
          icon: 'bx-calendar',
          title: 'Date Time picker',
        },
        {
          url: { name: '6val-adminpage-forms-textarea' },
          icon: 'bx-note',
          title: 'Textarea',
        },
        {
          url: { name: '6val-adminpage-forms-switch' },
          icon: 'bx-toggle-right',
          title: 'Switch',
        },
        {
          url: { name: '6val-adminpage-forms-file-input' },
          icon: 'bx-upload',
          title: 'File Input',
        },
        {
          url: { name: '6val-adminpage-forms-editors' },
          icon: 'bx-edit',
          title: 'Editors',
        },
        {
          url: { name: '6val-adminpage-forms-rating' },
          icon: 'bx-star',
          title: 'Form Rating',
        },
        {
          url: { name: '6val-adminpage-forms-slider' },
          icon: 'bx-slider',
          title: 'Slider',
        },
        {
          url: { name: '6val-adminpage-forms-range-slider' },
          icon: 'bx-slider',
          title: 'Range Slider',
        },
        {
          url: { name: '6val-adminpage-forms-form-layouts' },
          icon: 'bx-cube',
          title: 'Form Layouts',
        },
        {
          url: { name: '6val-adminpage-forms-form-validation' },
          icon: 'bx-check-circle',
          title: 'Form Validation',
        },
        {
          url: { name: '6val-adminpage-forms-custom-input' },
          icon: 'bx-detail',
          title: 'Custom Input',
        },
        {
          url: { name: '6val-adminpage-forms-autocomplete' },
          icon: 'bx-align-left',
          title: 'Autocomplete',
        },
        {
          url: { name: '6val-adminpage-tables-data-table' },
          icon: 'bx-table',
          title: 'Data Table',
        },
        {
          url: { name: '6val-adminpage-tables-simple-table' },
          icon: 'bx-table',
          title: 'Simple Table',
        },
        {
          url: { name: '6val-adminpage-forms-form-wizard-numbered' },
          icon: 'bx-align-middle',
          title: 'Form Wizard Numbered',
        },
        {
          url: { name: '6val-adminpage-forms-form-wizard-icons' },
          icon: 'bx-align-middle',
          title: 'Form Wizard Icons',
        },
      ],
    },
    {
      title: 'Chart & Misc',
      category: 'chartsMisc',
      children: [
        {
          url: { name: '6val-adminpage-charts-apex-chart' },
          icon: 'bx-line-chart',
          title: 'Apex Charts',
        },
        {
          url: { name: '6val-adminpage-charts-chartjs' },
          icon: 'bx-network-chart',
          title: 'ChartJS',
        },
        {
          url: { name: '6val-adminpage-access-control' },
          icon: 'bx-shield',
          title: 'Access Control (ACL)',
        },
      ],
    },
  ],
}
