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
const expenseRationChartConfig = computed(() => {
  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#32baff',
    series5: '#ffa1a1',
  }

  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(vuetifyTheme.current.value)
  
  return {
    stroke: { width: 0 },
    labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter: val => `${Number.parseInt(val, 10)}%`,
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      fontSize: '13px',
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.125rem',
            },
            value: {
              fontSize: '1.125rem',
              color: themeSecondaryTextColor,
              formatter: val => `${Number.parseInt(val, 10)}`,
            },
            total: {
              show: true,
              fontSize: '1.125rem',
              label: 'Operational',
              formatter: () => '31%',
              color: themePrimaryTextColor,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '0.9375rem',
                  },
                  value: {
                    fontSize: '0.9375rem',
                  },
                  total: {
                    fontSize: '0.9375rem',
                  },
                },
              },
            },
          },
        },
      },
    ],
  }
})

const series = [
  85,
  16,
  50,
  50,
]
</script>

<template>
  <VueApexCharts
    type="donut"
    height="410"
    :options="expenseRationChartConfig"
    :series="series"
  />
</template>
