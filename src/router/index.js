
import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../views/Customers.vue'
import Products from '../views/Products.vue'
import LatestPurchases from '../views/Buy.vue'
import Buy from '../views/Buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/customers/:id',
    name: 'LatestPurchases',
    component: LatestPurchases,
    props: true
  },
  {
    path: '/products/:id',
    name: 'Buy',
    component: Buy,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
