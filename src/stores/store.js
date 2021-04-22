import Vue from 'vue';
import VueX from 'vuex';
import list from './list/index'

Vue.use(VueX);

const store = new VueX.Store({
    modules: {
        list
    }
});

export default store