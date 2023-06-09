import { createApp } from 'vue'
import './style.scss'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()
createApp(App).use(vuetify).use(pinia).mount('#app')
