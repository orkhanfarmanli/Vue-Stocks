import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: [
            {
                name: "BMW",
                price: 15,
            },
            {
                name: "Google",
                price: 20,
            },
            {
                name: "Twitter",
                price: 20,
            },
            {
                name: "Facebook",
                price: 20,
            }
        ],
        boughtStocks: []
    },
    mutations: {
        buyStock(state, value){
            state.funds -= value.value;
        }
    }
});