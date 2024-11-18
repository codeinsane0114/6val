export default [
  {
    title: 'Dashboards',
    icon: { icon: 'bx-home-smile' },
    children: [
      {
        title: 'Analytics',
        to: '6val-adminpage-dashboards-analytics',
      },
      {
        title: 'CRM',
        to: '6val-adminpage-dashboards-crm',
      },
      {
        title: 'Ecommerce',
        to: '6val-adminpage-dashboards-ecommerce',
      },
      {
        title: 'academy',
        to: '6val-adminpage-dashboards-academy',
      },
      {
        title: 'Logistics',
        to: '6val-adminpage-dashboards-logistics',
      },
      {
        title: 'Test',
        to: '6val-adminpage-dashboards-test'
      }
    ],
    badgeContent: '5',
    badgeClass: 'bg-error',
  },
  {
    title: 'Front Pages',
    icon: { icon: 'bx-file' },
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
]
