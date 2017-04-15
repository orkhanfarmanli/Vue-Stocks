<template>
    <div id="stocks" class="columns">
        <div class="column is-6" v-for="stock in stocks">
            <div class="card">
                <div class="card-content">
                    <p class="title">
                        BMW
                    </p>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
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
                stocks: 2
            }
        }
    }
</script>