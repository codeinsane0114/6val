<script setup>
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import UserTabAccount from '@/views/apps/user/view/UserTabAccount.vue'
import UserTabSecurity from '@/views/apps/user/view/UserTabSecurity.vue'
import {useStore} from 'vuex'

const store = useStore();

const userData = store.state.customer.customerViewData
console.log('customerViewData=======>',userData);

const route = useRoute('6val-adminpage-apps-user-view-id')
const userTab = ref(null)

const tabs = [
  {
    icon: 'bx-user',
    title: 'Account',
  },
  {
    icon: 'bx-lock-alt',
    title: 'Security',
  },
]
onMounted(async() => {
    store.dispatch('customer/getCustomerViewData',route.params.id);
});
// const { data: userData } = await useApi(`/apps/users/${ route.params.id }`)


</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :user-data="userData" />
    </VCol>

    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            :size="18"
            :icon="tab.icon"
            class="me-1"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <UserTabAccount :user-data="userData"/>
        </VWindowItem>

        <VWindowItem>
          <UserTabSecurity />
        </VWindowItem>

        <!-- <VWindowItem>
          <UserTabBillingsPlans />
        </VWindowItem>

        <VWindowItem>
          <UserTabNotifications />
        </VWindowItem>

        <VWindowItem>
          <UserTabConnections />
        </VWindowItem> -->
      </VWindow>
    </VCol>
  </VRow>
  <div v-else>
    <VAlert
      type="error"
      variant="tonal"
    >
      Invoice with ID  {{ route.params.id }} not found!
    </VAlert>
  </div>
</template>
