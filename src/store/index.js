import Vue from 'vue';
import Vuex from 'vuex';
import allNum from './num'
Vue.use(Vuex);

const myStore= new Vuex.Store({
    modules: {
        allNum
    }

})
export default myStore;