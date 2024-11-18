export default [
  {
    title: 'User Interface',
    icon: { icon: 'bx-layer' },
    children: [
      {
        title: 'Icons',
        icon: { icon: 'bx-box' },
        to: '6val-adminpage-pages-icons',
      },
      {
        title: 'Typography',
        icon: { icon: 'bx-text' },
        to: '6val-adminpage-pages-typography',
      },
      {
        title: 'Cards',
        icon: { icon: 'bx-id-card' },
        children: [
          { title: 'Basic', to: '6val-adminpage-pages-cards-card-basic' },
          { title: 'Advance', to: '6val-adminpage-pages-cards-card-advance' },
          { title: 'Statistics', to: '6val-adminpage-pages-cards-card-statistics' },
          { title: 'Widgets', to: '6val-adminpage-pages-cards-card-widgets' },
          { title: 'Gamifications', to: '6val-adminpage-pages-cards-card-gamifications' },
          { title: 'Actions', to: '6val-adminpage-pages-cards-card-actions' },
        ],
      },
      {
        title: 'Components',
        icon: { icon: 'bx-toggle-left' },
        children: [
          { title: 'Alert', to: '6val-adminpage-components-alert' },
          { title: 'Avatar', to: '6val-adminpage-components-avatar' },
          { title: 'Badge', to: '6val-adminpage-components-badge' },
          { title: 'Button', to: '6val-adminpage-components-button' },
          { title: 'Chip', to: '6val-adminpage-components-chip' },
          { title: 'Dialog', to: '6val-adminpage-components-dialog' },
          { title: 'Expansion Panel', to: '6val-adminpage-components-expansion-panel' },
          { title: 'List', to: '6val-adminpage-components-list' },
          { title: 'Menu', to: '6val-adminpage-components-menu' },
          { title: 'Pagination', to: '6val-adminpage-components-pagination' },
          { title: 'Progress Circular', to: '6val-adminpage-components-progress-circular' },
          { title: 'Progress Linear', to: '6val-adminpage-components-progress-linear' },
          { title: 'Snackbar', to: '6val-adminpage-components-snackbar' },
          { title: 'Tabs', to: '6val-adminpage-components-tabs' },
          { title: 'Timeline', to: '6val-adminpage-components-timeline' },
          { title: 'Tooltip', to: '6val-adminpage-components-tooltip' },
        ],
      },
      {
        title: 'Extensions',
        icon: { icon: 'bx-cube' },
        children: [
          { title: 'Tour', to: '6val-adminpage-extensions-tour' },
          { title: 'Swiper', to: '6val-adminpage-extensions-swiper' },
        ],
      },
    ],
  },
]