<template>
    <div id="stocks" class="columns is-multiline">
        <div v-if="boughtStocks.length <= 0" class="column is-12 has-text-centered">
            <h1 class="title">You haven't bought any stocks yet</h1>
        </div>
        <div class="column is-6" v-for="stock in boughtStocks">
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
                            <button @click="sellStock(stock)" class="button is-dark is-outlined is-fullwidth">Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return {
            boughtStocks: this.$store.state.boughtStocks
        }
    },
    methods: {
        sellStock(stock){
            this.$store.commit('sellStock', stock);
        }
    }
}

</script>