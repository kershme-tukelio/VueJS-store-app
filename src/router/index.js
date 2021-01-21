
import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../views/Customers.vue'
import Products from '../views/Products.vue'
import LatestPurchases from '../views/LatestPurchases.vue'

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
    component: LatestPurchases
  }
]

const router = new VueRouter({
  routes
})

export default router
