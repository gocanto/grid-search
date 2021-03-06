import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Layout from './layout/Layout';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    components: { Layout }
}).$mount('#app')