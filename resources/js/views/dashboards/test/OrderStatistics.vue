<script setup>
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const data = store.state.dashboard.orderStatics
console.log('storeData================>',data)

const colorVariables = themeColors => {
  const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['medium-emphasis-opacity']})`
  const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['disabled-opacity']})`
  const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables['border-color']))},${themeColors.variables['border-opacity']})`
  const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['high-emphasis-opacity']})`
  
  return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor }
}

const vuetifyTheme = useTheme()
const chartConfig = computed(() =>{
  const scatterColors = {
    series1: '#ff9f43',
    series2: '#7367f0',
    series3: '#28c76f',
  }

  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(vuetifyTheme.current.value)
  
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        type: 'xy',
        enabled: true,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      markers: { offsetX: -3 },
      fontSize: '13px',
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    colors: [scatterColors.series1, scatterColors.series2, scatterColors.series3],
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      labels: {
        style: { fontSize: '0.8125rem', colors: themeDisabledTextColor },
      },
    },
    xaxis: {
      tickAmount: 10,
      axisBorder: { show: true },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor },
      },
      categories: data.label,
      labels: {
        style: { colors: themeDisabledTextColor },
        // formatter: val => Number.parseFloat(val).toFixed(1),
      },
    },
  }
})

const series = [
  {
    name: 'Inhouse',
    data: data.inHouseOrderEarningArray,
  },
  {
    name: 'Vendor',
    data: data.vendorOrderEarningArray,
  },
]

const dateType = ref('yearEarn');

      const btnclickW = () =>{
        dateType.value = 'WeekEarn';
      }

      const btnclickM = () =>{
        dateType.value = 'MonthEarn';
      }

      const btnclickY = () =>{
        dateType.value = 'yearEarn';
      }

      watch(dateType, async (newVal, oldVal) => {
          store.dispatch('dashboard/getOrderStaticsData',newVal);
      });


</script>

<template>
  <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Order Statics</VCardTitle>

          <template #append>
            <VBtnToggle
              density="compact"
              color="primary"
              variant="outlined"
              divided
            >
              <VBtn @click = btnclickW >Weekely</VBtn>
              <VBtn @click = btnclickM >Monthly</VBtn>
              <VBtn @click = btnclickY >Yearly</VBtn>
            </VBtnToggle>
          </template>
        </VCardItem>

        <VCardText>
          <VueApexCharts
            type="area"
            height="400"
            :options="chartConfig"
            :series="series"
          />
        </VCardText>
      </VCard>
</template>
