<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@core/utils/colorConverter'
import shoppingBag from '@images/cards/credit-card.png'
import { VRow,VCol } from 'vuetify/components';
import paypalPrimary from '@images/cards/paypal.png';
import walletInfo from '@images/cards/wallet.png';
import TotalOrder from '@images/backendImg/all-orders.png'
import TotalStore from '@images/backendImg/total-stores.png'
import TotalProduct from '@images/backendImg/total-product.png'
import TotalCustomer from '@images/backendImg/top-customer.png'
import Pending from '@images/backendImg/pending.png'
import Confirmed from '@images/backendImg/confirmed.png'
import Packaging from '@images/backendImg/packaging.png'
import Outofdelivery from '@images/backendImg/out-of-delivery.png'
import Deliverd from '@images/backendImg/delivered.png'
import Canceled from '@images/backendImg/canceled.png'
import Returned from '@images/backendImg/returned.png'
import FailedtoDelivery from '@images/backendImg/failed-to-deliver.png'
import { useStore } from 'vuex'



const store = useStore();
const data = store.state.dashboard.orderStatus;
console.log("orderstatus=====================>", data);

const reportData = [
  {
    title: 'Pending',
    avatarWidth: 20,
    stats: '$38,658',
    avatarHeight: 24,
    trendNumber: data?.customer ? data.pending : null ,
    avatarSrc: Pending,
  },
  {
    avatarWidth: 24,
    title: 'Confirmed',
    stats: '$38,658',
    avatarHeight: 17,
    trendNumber: data?.customer ? data.confirmed : null,
    avatarSrc: Confirmed,
  },
  {
    title: 'Packaging',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.processing : null,
    avatarSrc: Packaging,
  },
  {
    title: 'Out for delivery',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.out_for_delivery : null,
    avatarSrc: Outofdelivery,
  },
  {
    title: 'Delivered',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.delivered : null,
    avatarSrc: Deliverd,
  },
  {
    title: 'Canceled',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.canceled : null,
    avatarSrc: Canceled,
  },
  {
    title: 'Returned',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.returned : null,
    avatarSrc: Returned,
  },
  {
    title: 'Failed to delivery',
    avatarWidth: 24,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: data?.customer ? data.failed : null,
    avatarSrc: FailedtoDelivery,
  },
]
const logisticData = [
  {
    avatarSrc: TotalOrder,
    color: 'primary',
    title: 'Total Order',
    value: data?.customer ? data.order : null,
    change: 18.2,
    isHover: true,
  },
  {
    avatarSrc: TotalStore,
    color: 'primary',
    title: 'Total Stores',
    value: data?.customer ? data.store : null,
    change: -8.7,
    isHover: false,
  },
  {
    avatarSrc: TotalProduct,
    color: 'primary',
    title: 'Total Products',
    value: data?.customer ? data.product : null,
    change: 4.3,
    isHover: false,
  },
  {
    avatarSrc: TotalCustomer,
    color: 'info',
    title: 'Total Customers',
    value: data?.customer ? data.customer : null,
    change: -2.5,
    isHover: false,
  },
]
const moreList = [
  {
    title: 'Last Week',
    value: 'Last Week',
  },
  {
    title: 'Last Month',
    value: 'Last Month',
  },
  {
    title: 'Last Year',
    value: 'Last Year',
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="12"
      >
        <VCardItem>
          <VCardTitle>BusinessAlalistics</VCardTitle>
          <template #append>
            <MoreBtn :menu-list="moreList" />
          </template>
        </VCardItem>
      </VCol>
      <VCol 
        cols="12"
        md="12"
      >
      <VRow>
            <VCol
            v-for="(data, index) in logisticData"
            :key="index"
            cols="12"
            md="3"
            sm="6"
            >
            <div>
                <VCard
                class="logistics-card-statistics cursor-pointer"
                :style="data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`"
                @mouseenter="data.isHover = true"
                @mouseleave="data.isHover = false"
                >
                <VCardText>
                    <div class="d-flex align-center gap-x-4 mb-2">
                    <VAvatar
                        size="40"
                        color="rgb(var(--v-theme-surface))"
                        variant="elevated"
                    >
                        <img
                        :src="data.avatarSrc"
                        :height="24"
                        :width="27"
                        />
                    </VAvatar>
                    <h4 class="text-h4">
                        {{ data.value }}
                    </h4>
                    </div>
                    <div class="text-body-1 mb-2">
                    {{ data.title }}
                    </div>
                    <div class="d-flex gap-x-2 align-center">
                    <h6 class="text-h6">
                        {{ (data.change > 0) ? '+' : '' }} {{ data.change }}%
                    </h6>
                    <div class="text-disabled">
                        than last week
                    </div>
                    </div>
                </VCardText>
                </VCard>
            </div>
            </VCol>
            <VCol v-for="(report, index) in reportData"
                    :key="report.title"
                cols="12"
                md="3"
                sm="6">
                <VCardText class="pt-6">
                <div
                    class="bg-var-theme-background d-flex align-center gap-4 px-4 py-3 rounded"
                >
                    <VAvatar
                    rounded
                    size="40"
                    color="rgb(var(--v-theme-surface))"
                    variant="elevated"
                    >
                    <img
                        :src="report.avatarSrc"
                        :height="report.avatarHeight"
                        :width="report.avatarWidth"
                    >
                    </VAvatar>

                    <div class="d-flex flex-wrap align-center justify-space-between gap-2 flex-grow-1">
                    <div>
                        <span class="text-base d-inline-block text-disabled">{{ report.title }}</span>
                        <!-- <h5 class="text-h5">
                        {{ report.stats }}
                        </h5> -->
                    </div>

                    <span
                        class="text-sm"
                        :class=" report.trendNumber > 0 ? 'text-success' : 'text-error'"
                    >{{ report.trendNumber > 0 ? `+${report.trendNumber}` : report.trendNumber }}</span>
                    </div>
                </div>
                </VCardText>
                </VCol>
        </VRow>
    </VCol>
    </VRow>
  </VCard>
</template>
