/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { worker } from './mocks/browser.js'
if (process.env.NODE_ENV === 'development') {
  // worker.start()
}

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
