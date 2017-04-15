<template>
    <div id="header">
        <section class="hero is-dark is-medium">
            <div class="hero-head">
                <header class="nav">
                    <div class="container">
                        <div class="nav-left">
                            <a class="nav-item">
                                <img src="src/assets/logo.png" alt="Logo">
                            </a>
                        </div>
                        <span class="nav-toggle">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                        <div class="nav-right nav-menu">
                            <router-link tag="a" class="nav-item" to="/" exact activeClass="is-active">
                                Home
                            </router-link>
                            <router-link tag="a" class="nav-item" to="/stocks" activeClass="is-active">
                                Stocks
                            </router-link>
                            <router-link tag="a" class="nav-item" to="/portfolio" activeClass="is-active">
                                Portfolio
                            </router-link>
                            <!--<a class="nav-item">-->
                            <!--Portfolio-->
                            <!--</a>-->
                            <!--<a class="nav-item">-->
                            <!--Stocks-->
                            <!--</a>-->
                        </div>
                    </div>
                </header>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Stock Trader
                    </h1>
                    <h2 class="subtitle">
                        Trade or view your portfolio
                    </h2>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container has-text-centered">
                        <ul class="is-pulled-right">
                            <li><a>End Day</a></li>
                            <li><a>Save</a></li>
                            <li><a>Load</a></li>
                            <li><a>Funds: $10000</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
    #header{
        margin-bottom: 30px;
    }
</style>