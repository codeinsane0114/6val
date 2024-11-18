import { createApp } from 'vue'
import store from './main/store'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core-scss/template/index.scss'
import '@styles/styles.scss'

// Create vue app
const app = createApp(App)

app.use(store);

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
