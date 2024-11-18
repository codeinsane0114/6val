import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import { Line } from '6val-adminpage-chartjs'
import { defineComponent } from 'vue'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)
export default defineComponent({
  name: 'LineChart',
  props: {
    chartId: {
      type: String,
      default: 'line-chart',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    chartData: {
      type: Object,
      default: () => ({}),
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => h(h(Line), {
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins,
      options: props.chartOptions,
      data: props.chartData,
    })
  },
})
