import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000
    },
    mutations: {
        buyStock(state, value){
            state.funds =- value;
        }
    }
});