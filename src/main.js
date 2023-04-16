import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'



const app = createApp(App)
app.use(router)
app.mount('#app')
