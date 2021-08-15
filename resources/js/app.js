
require('./bootstrap');
import Vue from 'vue'
// window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'
import VueProgressBar from 'vue-progressbar'
import Snotify, { SnotifyPosition } from 'vue-snotify'

window.Form = Form

// For Notification------------
const Snotifyoptions = {
    toast: {
        Snotifyposition: SnotifyPosition.rightTop
    }
}

// For Progress Bar------------
const VueProgressBarOptions = {
    color: '#50d38a',
    failedColor: '#87111d',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
Vue.use(VueProgressBar, VueProgressBarOptions);
Vue.use(Snotify, Snotifyoptions)

Vue.component('customer-component', require('./components/CustomerComponent.vue').default);
Vue.component('pagination-component', require('./components/partial/PaginationComponent').default);

Vue.component(HasError, HasError)
Vue.component(AlertError, AlertError)

const app = new Vue({
    el: '#app'
});
