export default [
  {
    title: 'Apps',
    icon: { icon: 'bx-grid-alt' },
    children: [
      {
        title: 'Ecommerce',
        icon: { icon: 'bx-cart' },
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
        to: '6val-adminpage-apps-calendar',
        icon: { icon: 'bx-calendar' },
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
        icon: { icon: 'bx-group' },
        children: [
          { title: 'List', to: '6val-adminpage-apps-user-list' },
          { title: 'View', to: { name: '6val-adminpage-apps-user-view-id', params: { id: 21 } } },
        ],
      },
      {
        title: 'Roles & Permissions',
        icon: { icon: 'bx-cog' },
        children: [
          { title: 'Roles', to: '6val-adminpage-apps-roles' },
          { title: 'Permissions', to: '6val-adminpage-apps-permissions' },
        ],
      },
    ],
  },
]
