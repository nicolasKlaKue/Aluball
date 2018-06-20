import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

//require('bootstrap');

window.Event = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
