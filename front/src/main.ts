import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faAngleRight)
library.add(faRotateRight)
library.add(faTrashCan)
library.add(faCircleNotch)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('FaIcon', FontAwesomeIcon)
app.mount('#app')
