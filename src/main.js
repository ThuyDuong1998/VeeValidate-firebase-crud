import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores/store';
import './validate'
import {ValidationProvider, ValidationObserver} from 'vee-validate'
import './firebase'

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
