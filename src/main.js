import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_2puV84l-Q2pgHHjgNxNi_o0gFKtH-Ps",
  authDomain: "java-journey.firebaseapp.com",
  projectId: "java-journey",
  storageBucket: "java-journey.appspot.com",
  messagingSenderId: "1073445098628",
  appId: "1:1073445098628:web:bffc68c1a17e8f7eae5ed1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')