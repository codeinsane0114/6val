<script setup>
import TopProducs from '@/views/dashboards/test/TopProducts.vue'
import BusinessAlalistics from '@/views/dashboards/test/BusinessAnalistics.vue'
import UserOverview from '@/views/dashboards/test/UserOverview.vue'
import AdminWallet from '@/views/dashboards/test/AdminWallet.vue'
import EarningStatics from '@/views/dashboards/test/EarningStatics.vue'
import OrderStatistics from '@/views/dashboards/test/OrderStatistics.vue'
import TopCustomers from '@/views/dashboards/test/TopCustomers.vue'
import MostPopularStore from '@/views/dashboards/test/MostPopularStore.vue'
import TopSellingStore from '@/views/dashboards/test/TopSellingStore.vue'
import MostPopularProducts from '@/views/dashboards/test/MostPopularProducts.vue'
import { useStore } from 'vuex'
// import store from '@/main/store'



 const store = useStore();
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
onMounted(async() => {
    store.dispatch("dashboard/getOrderStatusData");
    store.dispatch("dashboard/getAdminWalletData");
    store.dispatch('dashboard/getOrderStaticsData','yearEarn')
    console.log(store.state.dashboard.adminWalletData)
});
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
  <VCol cols="12" md="4">
      <TopCustomers/>
  </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <MostPopularStore/>
    </VCol>

    <VCol cols="12" md="4">
      <TopSellingStore />
    </VCol>

    <VCol cols="12" md="4">
      <MostPopularProducts />
    </VCol>

    <!-- 👉 Top Delivery Man -->
    <VCol
      cols="12"
      md="4"
    >
      <TopSellingStore />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
