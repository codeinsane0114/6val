<script setup>
import TopProducs from '@/views/dashboards/test/TopProducts.vue'
import TopDeliveryMan from '@/views/dashboards/test/TopDeliveryMan.vue'
import SystemTabs from '@/views/dashboards/test/SystemTabs.vue'
import BusinessAlalistics from '@/views/dashboards/test/BusinessAnalistics.vue'
import UserOverview from '@/views/dashboards/test/UserOverview.vue'
import AdminWallet from '@/views/dashboards/test/AdminWallet.vue'
import EarningStatics from '@/views/dashboards/test/EarningStatics.vue'
import OrderStatistics from '@/views/dashboards/test/OrderStatistics.vue'
import { useStore } from 'vuex'
// import { dashboardConfigStore } from '@core/stores/config'


// const store = useStore();
// let dashboarddata = ref('');
// let isVisible=ref(false);
// const fetchdata = async () => {
//   try {

//     dashboarddata = await axiosapi.post('/admin/dashboard/order-status');
//     // console.log('응답 데이터:', dashboarddata.data);
//     isVisible=true;
//   } catch (err) {
//     console.error(err)
//   }
// }
// onMounted(async() => {
//     console.log("onMounted==============>")
//     fetchdata();
//     store.dispatch("dashboard/getOrderStatusData");
//     console.log("statusdata================>",store.state.dashboard.orderStatus)
// });

// const ConfigStore = dashboardConfigStore();
// ConfigStore.orderStatus = dashboarddata;
// console.log("configstore=======================>",ConfigStore.orderStatus);
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Business Aanalistics -->
    <VCol
      cols="12"
      lg="12"
    >
      <BusinessAlalistics/>
    </VCol>
    <!-- 👉 Admin Wallet -->
    <VCol
      cols="12"
      lg="12"
    >
      <AdminWallet/>
    </VCol>
    <VCol cols="12" md="12">
      <VRow>
     <!-- 👉 Order Statistics -->
      <VCol
        cols="12"
        md="8"
      >
        <OrderStatistics />
      </VCol>
      <!-- 👉 Conversion Rate -->
      <VCol
        cols="12"
        md="4"
        sm="6"
      >
        <UserOverview />
      </VCol>
    </VRow>
  </VCol>
  <VCol cols="12" md="12">
    <EarningStatics />
  </VCol>
  <VCol cols="12" md="12">
      <SystemTabs />
  </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <TopProducs />
    </VCol>

    <!-- 👉 Top Delivery Man -->
    <VCol
      cols="12"
      md="4"
    >
      <TopDeliveryMan />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
