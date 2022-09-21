import mixpanel from 'mixpanel-browser'
import { createApp } from 'vue'
import './scss/main.scss'
import App from './App.vue'

createApp(App).mount('#app')

mixpanel.init('5c73b1ac4543da3cc393030a374a273c');
mixpanel.track('Sign up');
