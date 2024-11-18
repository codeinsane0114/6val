<script setup>
import { useTheme } from 'vuetify'

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
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor },
      },
      labels: {
        style: { colors: themeDisabledTextColor },
        formatter: val => Number.parseFloat(val).toFixed(1),
      },
    },
  }
})

const series = [
  {
    name: 'Inhouse',
    data: [
      100,
      120,
      90,
      170,
      130,
      160,
      140,
      240,
      220,
      180,
      270,
      280,
      375,
    ],
  },
  {
    name: 'Vendor',
    data: [
      60,
      80,
      70,
      110,
      80,
      100,
      90,
      180,
      160,
      140,
      200,
      220,
      275,
    ],
  },
  {
    name: 'Commission',
    data: [
      20,
      40,
      30,
      70,
      40,
      60,
      50,
      140,
      120,
      100,
      140,
      180,
      220,
    ],
  },
]
</script>

<template>
  <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>New Technologies Data</VCardTitle>

          <template #append>
            <VBtnToggle
              density="compact"
              color="primary"
              variant="outlined"
              divided
            >
              <VBtn>Daily</VBtn>
              <VBtn>Monthly</VBtn>
              <VBtn>Yearly</VBtn>
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
