<template>
    <div id="stocks" class="columns is-multiline">
        <div class="column is-6" v-for="stock in stocks">
            <div class="card">
                <div class="card-content">
                    <p class="title">
                        {{ stock.name }} - {{ '$' + stock.price }}
                    </p>
                    <div class="content columns">
                        <div class="column is-10">
                            <input v-model="stock.quantity" type="number" placeholder="Quantity"
                                   class="input is-5 is-dark">
                        </div>
                        <div class="column is-2">
                            <button @click="buyStocks(stock)" class="button is-dark is-outlined is-fullwidth">Buy
                            </button>
                        </div>
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
                stocks: this.$store.state.stocks,
                boughtStocks: this.$store.state.boughtStocks
            }
        },
        methods: {
            buyStocks(stock){
                let boughtStock = {
                    name: stock.name,
                    price: stock.price,
                    quantity: eval(stock.quantity)
                };
                this.$store.commit('buyStock', boughtStock);
            }
        }
    }
</script>