<template>
    <div id="stocks" class="columns">
        <div class="column is-6" v-for="stock in stocks">
            <div class="card">
                <div class="card-content">
                    <p class="title">
                        {{ stock.name }} - {{ '$' + stock.price }}
                    </p>
                    <div class="content columns">
                        <div class="column is-10">
                            <input v-model="stock.quantity" type="number" placeholder="Quantity" class="input is-5 is-dark">
                        </div>
                        <div class="column is-2">
                            <button @click="buyStocks(stock.quantity, stock.price)" class="button is-dark is-outlined is-fullwidth">Buy</button>
                        </div>
                        {{ funds }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                stocks: [
                    {
                        name: "BMW",
                        price: 15,
                        quantity: ''
                    },
                    {
                        name: "Google",
                        price: 20,
                        quantity: ''
                    }
                ],
                funds: 10000,
            }
        },
        methods: {
            buyStocks(quantity, price){
                this.quantity = '';
                return this.funds -= quantity * price;
            }
        }
    }
</script>