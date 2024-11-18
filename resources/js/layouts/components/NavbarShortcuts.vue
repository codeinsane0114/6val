<script setup>
const shortcuts = [
  {
    icon: 'bx-calendar',
    title: 'Calendar',
    subtitle: 'Appointments',
    to: { name: '6val-adminpage-apps-calendar' },
  },
  {
    icon: 'bx-food-menu',
    title: 'Invoice App',
    subtitle: 'Manage Accounts',
    to: { name: '6val-adminpage-apps-invoice-list' },
  },
  {
    icon: 'bx-user',
    title: 'Users',
    subtitle: 'Manage Users',
    to: { name: '6val-adminpage-apps-user-list' },
  },
  {
    icon: 'bx-group',
    title: 'Role Management',
    subtitle: 'Permission',
    to: { name: '6val-adminpage-apps-roles' },
  },
  {
    icon: 'bx-pie-chart-alt-2',
    title: 'Dashboard',
    subtitle: 'Dashboard Analytics',
    to: { name: '6val-adminpage-dashboards-analytics' },
  },
  {
    icon: 'bx-cog',
    title: 'Settings',
    subtitle: 'Account Settings',
    to: {
      name: '6val-adminpage-pages-account-settings-tab',
      params: { tab: 'account' },
    },
  },
]
</script>

<template>
  <Shortcuts :shortcuts="shortcuts" />
</template>
