<script setup>
import { useTheme } from 'vuetify'
import { hexToRgb } from '@core/utils/colorConverter'
import { useStore } from 'vuex'
import shoppingBag from '@images/cards/credit-card.png'
import { VRow,VCol } from 'vuetify/components';
import paypalPrimary from '@images/cards/paypal.png';
import walletInfo from '@images/cards/wallet.png';
import trophy from '@images/cards/trophy.png'
import InHouseEarning from '@images/backendImg/inhouse-earning.png'
import ce from '@images/backendImg/ce.png'
import ttc from '@images/backendImg/ttc.png'
import dce from '@images/backendImg/dce.png'
import pa from '@images/backendImg/pa.png'
const vuetifyTheme = useTheme()


const store = useStore();
const data = store.state.dashboard.adminWalletData;
console.log('adminWalletData',data);

const series = [{
  name: 'Income',
  data: [
    3350,
    3350,
    4800,
    4800,
    2950,
    2950,
    1800,
    1800,
    3750,
    3750,
    5700,
    5700,
  ],
}]
const statisticsTarget = [
  {
    title: 'In-Hose Earning',
    color: 'info',
    avatarSrc: InHouseEarning,
    stats: '$1,271',
    change: 39892.00,
    subtitle: 'In-Hose Earning',
  }
]
const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const disabledTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['disabled-opacity'] })`
  const borderColor = `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`
  
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      offsetY: 10,
      offsetX: -14,
      dropShadow: {
        top: 14,
        left: 0,
        blur: 4,
        opacity: 0.15,
        enabled: true,
        color: currentTheme.primary,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight',
    },
    grid: {
      borderColor,
      padding: {
        top: 5,
        right: 6,
        bottom: 7,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.25,
        opacityFrom: 0.5,
        stops: [
          0,
          95,
          100,
        ],
        shadeIntensity: 0.6,
        colorStops: [[
          {
            offset: 0,
            opacity: 0.2,
            color: currentTheme.primary,
          },
          {
            opacity: 0,
            offset: 100,
            color: currentTheme.surface,
          },
        ]],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: currentTheme.primary,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          fontSize: '13px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: value => `${ value / 1000 }k`,
        style: {
          fontSize: '13px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
  }
})

const logisticData = ref([
  {
    avatarSrc: ce,
    color: 'primary',
    title: 'commission Earned',
    value: 12755.02,
    change: 18.2,
    isHover: true,
  },
  {
    avatarSrc: dce,
    color: 'Total stores',
    title: 'Delivery Change Earned',
    value: 1360.00,
    change: -8.7,
    isHover: false,
  },
  {
    avatarSrc: ttc,
    color: 'Total Products',
    title: 'Total Tax Colledted',
    value: 2343.00,
    change: 4.3,
    isHover: false,
  },
  {
    avatarSrc: pa,
    color: 'info',
    title: 'Pending Amount',
    value: 8153.00,
    change: -2.5,
    isHover: false,
  },
])
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
          <VCardTitle>Admin Wallet</VCardTitle>
          <template #append>
            <MoreBtn :menu-list="moreList" />
          </template>
        </VCardItem>
      </VCol>
      <VCol
        v-for="(data, index) in statisticsTarget"
        cols="12"
        md="4"
        >
        <VCard>
            <VCardText class="d-flex align-center">
              <h6 class="text-base font-weight-regular">
                {{ data.title }}
              </h6>

              <VSpacer />
            </VCardText>

            <VCardText>
              <div
                v-if="data.change"
                class="d-flex align-center flex-column"
              >
                <VAvatar
                  size="70"
                  variant="tonal"
                  :color="data.color"
                  class="mb-3"
                  :style="`box-shadow: rgb(var(--v-theme-${data.color}), 0.06) 0 0 0 4px;`"
                >
                  <img
                    :src="data.avatarSrc"
                    :height="45"
                    :width="50"
                  />
                </VAvatar>

                <p class="text-lg mb-2">
                  ${{ data.change }}
                  
                </p>
                <div class="d-flex align-center">
                  <p
                    class="text-base mb-0"
                  >
                  {{ data.subtitle }}
                  </p>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      <VCol cols="12" md="8">
      <VRow>
        <VCol
        v-for="(data, index) in logisticData"
        :key="index"
        cols="12"
        md="6"
        sm="8"
        >
        <div>
            <VCard
            class="logistics-card-statistics cursor-pointer"
            :style="data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`"
            @mouseenter="data.isHover = true"
            @mouseleave="data.isHover = false"
            >
            <VCardText>
              <div class="d-flex flex-col justify-cotent-between align-center">
                <div class="">
                  <h4 class="text-h4">
                      ${{ data.value }}
                  </h4>

                  <div class="text-body-1 mb-2">
                  {{ data.title }}
                  </div>
                </div>
                <div class="v-spacer"></div>
                <VAvatar
                      variant="tonal"
                      size="40"
                      :color="data.color"
                      rounded
                  >
                      <img
                      :src="data.avatarSrc"
                      :height="35"
                      :width="40"
                      />
                  </VAvatar>
                </div>
            </VCardText>
            </VCard>
        </div>
        </VCol>
      </VRow>
    </VCol>
    </VRow>
  </VCard>
</template>
<style lang="scss" scoped>
.trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 0;
  inset-inline-end: 2rem;
}
</style>