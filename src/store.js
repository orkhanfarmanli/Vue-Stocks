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
        buyStock(state, stock){
            "use strict";
            state.funds -= eval(stock.quantity * stock.price);
            state.boughtStocks.push(stock);
        },
        sellStock(state, stock){
            "use strict";
            let index = state.boughtStocks.indexOf(stock);
            console.log(index);
            state.boughtStocks.splice(index, 1);
        }
    }
});