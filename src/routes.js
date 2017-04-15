import Home from './components/Pages/Home.vue'
import Stock from './components/Pages/Stocks.vue'
import Portfolio from './components/Pages/Portfolio.vue'

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/stocks', component: Stock, name: 'stocks'},
    {path: '/portfolio', component: Portfolio, name: 'portfolio'}
];
