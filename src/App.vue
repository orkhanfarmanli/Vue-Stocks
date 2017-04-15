<template>
    <div id="app">
        <stock-header></stock-header>
        <section>
            <div class="container">
                <router-view></router-view>
            </div>
        </section>

    </div>
</template>

<script>
    import Header from './components/Partials/Header.vue'

    export default {
        name: 'app',
        components: {
            'stock-header': Header,
        }
    }
</script>

